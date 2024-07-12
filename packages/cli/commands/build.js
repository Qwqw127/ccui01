const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');
const fsExtra = require('fs-extra');
const { defineConfig, build } = require('vite');
const vue = require('@vitejs/plugin-vue');
const vueJsx = require('@vitejs/plugin-vue-jsx');
const nuxtBuild = require('./build-nuxt-auto-import');
const { isReadyToRelease } = require('../shared/utils');
const { volarSupport } = require('./build-volar-support');
const logger = require('../shared/logger');
const replaceIdentifierPath = path.resolve(
  __dirname,
  '../replaceIdentifer.json'
);
const replaceIdentifier = JSON.parse(
  fs.readFileSync(replaceIdentifierPath).toString()
);

const entryDir = path.resolve(__dirname, '../../ccui/ui');
const outputDir = path.resolve(__dirname, '../../ccui/build');

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
});

const rollupOptions = {
  external: ['vue', 'vue-router', '@vueuse/core', '@floating-ui/dom'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
};

const buildSingle = async (name) => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        emptyOutDir: true,
        lib: {
          entry: path.resolve(entryDir, name),
          name: 'index',
          fileName: (type) => `index.${type}.js`,
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  );
};

const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        emptyOutDir: true,
        lib: {
          entry: path.resolve(entryDir, 'vue-ccui.ts'),
          name: 'VueCcui',
          fileName: (type) => `vue-ccui.${type}.js`,
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  );
};

const createPackageJson = (name) => {
  const fileStr = `{
  "name": "${name}",
  "version": "0.0.0",
  "main": "index.umd.js",
  "module": "index.es.js",
  "style": "style.css",
  "types": "../types/${name}/index.d.ts"
}`;

  fsExtra.outputFile(
    path.resolve(outputDir, `${name}/package.json`),
    fileStr,
    'utf-8'
  );
};

exports.build = async () => {
  await buildAll();

  const components = fs.readdirSync(entryDir).filter((name) => {
    const componentDir = path.resolve(entryDir, name);
    console.log(componentDir,name,'==========1=====');
    const isDir = fs.lstatSync(componentDir).isDirectory();
    return isDir && fs.readdirSync(componentDir).includes('index.ts');
  });

  console.log(components,'=======components=========');
  for (const name of components) {
    if (!isReadyToRelease(name)) {
      continue;
    }
    await buildSingle(name);
    createPackageJson(name);
    nuxtBuild.createAutoImportedComponent(name);
  }

  const readyToReleaseComponentName = [];
  for (const name of components) {
    if (!isReadyToRelease(name)) {
      continue;
    }
    readyToReleaseComponentName.push(name);
    await buildSingle(name);
    createPackageJson(name);
    nuxtBuild.createAutoImportedComponent(name);
  }

  // 生成global.d.ts
  try {
    // 生成  types文件
    execSync(`pnpm run build:components:dts`);
  } catch {
    console.log('error');
  }
  // 支持nuxt
  nuxtBuild.createNuxtPlugin();
  logger.success('准备生成global.d.ts');
  // 生成global.d.ts
  const volarSupportbuildState = volarSupport(
    replaceIdentifier,
    readyToReleaseComponentName
  );
  fs.writeFileSync(
    '../ccui/build/index.d.ts',
    `
  export * from './types/vue-ccui';
  import _default from './types/vue-ccui';
  export default _default;
  `
  );
  if (volarSupportbuildState) {
    logger.success('global.d.ts生成成功');
  } else {
    logger.error('global.d.ts生成失败, 因为发生错误');
  }
};
