<template>
  <div class="ccui-docs-footer">
    <div>
      <div class="ccui-docs-footer-title">找到我们</div>
      <div class="ccui-docs-footer-content">
        <div class="content-foot">
          <a rel="noopener noreferrer" href="https://github.com/DevCloudFE/ng-ccui" target="_blank" class="ccui-docs-footer-link">
            <img src="./img/github.svg" />
            <span>Github</span>
          </a>
        </div>

        <div class="content-foot">
          <a rel="noopener noreferrer" href="https://juejin.cn/user/712139267650141" target="_blank" class="ccui-docs-footer-link">
            <img src="./img/juejin.svg" />
            <span>DevUI团队</span>
          </a>
        </div>

        <div class="content-foot">
          <a rel="noopener noreferrer" href="https://zhuanlan.zhihu.com/ccui" target="_blank" class="ccui-docs-footer-link">
            <img src="./img/zhihu.svg" />
            <span>DevUI Design</span></a
          >
        </div>

        <div class="content-foot" style="position: relative">
          <a class="wechat-info">
            <img src="./img/wechat.svg" />
            <span>官方交流群</span>
            <img class="wechat-img" src="./img/wechat.jpg" />
          </a>
        </div>
      </div>
    </div>

    <div class="ccui-docs-footer-desc">
      <img src="./img/logo.svg" alt="" />
      <span>粤A2-20044005号</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.ccui-docs-footer {
  height: 162px;
  max-width: 1024px;
  margin: 0 auto;
  padding: 32px 32px 0 32px;
  background-color: var(--ccui-global-bg);
  border-radius: 20px 20px 0 0;

  &-title {
    font-size: var(--ccui-font-size);
    color: var(--ccui-text);
    font-weight: bold;
    margin-bottom: 20px;
  }

  &-content {
    display: flex;
    height: 52px;

    .content-foot {
      margin-right: 80px;

      a {
        display: flex;
        align-items: center;
      }

      span {
        font-size: var(--ccui-font-size-sm);
        line-height: 16px;
        margin-left: 8px;
      }
    }
  }

  &-desc {
    border-top: 1px solid var(--ccui-dividing-line);
    height: 40px;
    display: flex;
    align-items: center;

    img {
      width: 16px;
      height: 16px;
      margin-right: 8px;
    }

    span {
      font-size: var(--ccui-font-size-sm);
      color: var(--ccui-aide-text);
      line-height: 40px;
    }
  }
}

.ccui-docs-footer-link {
  color: var(--ccui-text);

  &:hover {
    color: var(--ccui-link-active);
    cursor: pointer;
  }
}

.wechat-info {
  color: var(--ccui-text);

  &:hover {
    cursor: pointer;
    color: var(--ccui-link-active);

    .wechat-img {
      display: block !important;
    }
  }

  .wechat-img {
    position: absolute;
    display: none;
    width: 160px;
    max-width: fit-content;
    bottom: 60px;
    left: 0;
  }
}

@media (max-width: 720px) {
  .ccui-docs-footer-content {
    justify-content: space-between;

    .content-foot {
      margin-right: 0;
    }
  }
}
</style>
