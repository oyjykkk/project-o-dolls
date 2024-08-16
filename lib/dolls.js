import { defineComponent as l, ref as p, resolveComponent as f, openBlock as r, createBlock as d, withCtx as a, createTextVNode as _ } from "vue";
const k = l({
  name: "DButton"
}), w = /* @__PURE__ */ l({
  ...k,
  props: {
    time: {
      type: Number,
      default: 1e3
    },
    debounce: {
      type: Boolean,
      default: !0
    }
  },
  emits: ["click"],
  setup(o, { emit: e }) {
    const n = o, t = p(0), i = () => {
      if (!n.debounce)
        return e("click");
      const c = new Date();
      c.getTime() - t.value > n.time && e("click"), t.value = c.getTime();
    };
    return (c, h) => {
      const m = f("el-button");
      return r(), d(m, { onClick: i }, {
        default: a(() => [
          _("\u9ED8\u8BA4\u6309\u94AE")
        ]),
        _: 1
      });
    };
  }
}), b = (o, e) => {
  if (o.install = (n) => {
    for (const t of [o, ...Object.values(e != null ? e : {})])
      n.component(t.name, t);
  }, e)
    for (const [n, t] of Object.entries(e))
      o[n] = t;
  return o;
}, B = b(w), s = {
  DButton: B
}, C = (o) => {
  for (const e in s)
    console.log(e, "kkk"), o.component(e, s[e]);
}, u = (o, e) => {
  C(o);
};
typeof window < "u" && window.Vue && u(window.Vue);
const y = {
  install: u
};
export {
  B as DButton,
  y as default
};
