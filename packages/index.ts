import DButton from "./button";
import DMap from "./DMap";
import type { Component, App } from "vue";

const components: {
  [propName: string]: Component;
} = {
  DButton,
  DMap
};

const installComponents = (app: App) => {
  for (const key in components) {
    console.log(key, 'kkk')
    app.component(key, components[key]);
  }
};

const install: any = (app: any, router?: any) => {
  installComponents(app);
};

// @ts-ignore
if (typeof window !== "undefined" && window.Vue) {
  // @ts-ignore
  install(window.Vue);
}

// 按需引入
export { DButton };

export default {
  // 为了被Vue.use()方法安装
  install,
};
