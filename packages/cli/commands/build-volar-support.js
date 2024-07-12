const path = require('path');
const {
  buildComponentItem,
  buildGlobalDTSEnd,
  buildGlobalDTSStart,
  buildComponents,
  buildDirectiveItem,
  buildDirective,
  buildServiceItem,
  buildService
} = require('../templates/dts');
const { writeFileSync } = require('fs');
const { useRelationTree } = require('../composables/use-relation-tree');
const { bigCamelCase } = require('../shared/utils');

/**
 * @param {Record<string,any>} replaceIdentifier
 * @param {string[]} readyToReleaseComponentName
 */
exports.volarSupport = (replaceIdentifier, readyToReleaseComponentName) => {
  const componentDTSItem = [];
  const directiveDTSItem = [];
  const serviceDTSItem = [];
  const componentPath = readyToReleaseComponentName.map((name) =>
    path.resolve('../ccui/ui', name, 'index.ts')
  );
  debugger;
  const tree = useRelationTree(componentPath);
  tree.forEachChild((foldNode) => {
    foldNode.forEachChild((node) => {
      let nodeName = node.name.replace(/\$/gim, '').replace(/directive/gim, '');
      let reference = nodeName;
      const needToTransform =
        replaceIdentifier?.[foldNode.name]?.[node.name] !== undefined;
      if (!node.isComponet) {
        const hasType = new RegExp(node.type, 'gim');
        if (!hasType.test(reference)) {
          reference += `-${node.type}`;
        }
        reference = bigCamelCase(reference);
      }
      if (needToTransform) {
        reference = replaceIdentifier[foldNode.name][node.name]?.['reference'];
        nodeName = replaceIdentifier[foldNode.name][node.name]?.['exportKey'];
      }
      if (node.type === 'component') {
        componentDTSItem.push(
          buildComponentItem(bigCamelCase(nodeName), reference)
        );
      }
      if (node.type === 'directive') {
        directiveDTSItem.push(buildDirectiveItem(nodeName, reference));
      }
      if (node.type === 'service') {
        serviceDTSItem.push(buildServiceItem(nodeName, reference));
      }
    });
  });

  console.log(componentDTSItem,'componentDTSItem=================');
  const template = `
${buildGlobalDTSStart()}
${buildComponents(componentDTSItem.join('\n'))}
${buildDirective(directiveDTSItem.join('\n'))}
${buildService(serviceDTSItem.join('\n'))}
${buildGlobalDTSEnd()}
`;
  try {
    writeFileSync('../ccui/build/global.d.ts', template);
  } catch (e) {
    console.log(e.message);
    return false;
  }
  return true;
};
