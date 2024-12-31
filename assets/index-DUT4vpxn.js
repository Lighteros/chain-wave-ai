import {
  aJ as t,
  as as e,
  dy as o,
  r as a,
  b1 as l,
  cl as n,
  aw as s,
  ch as u,
  aT as i,
  c8 as r,
} from "./index-DPRREYlk.js";
import { S as p, s as d } from "./index-BPauqaGF.js";
const c = () => null;
(c.isSelectOption = !0), (c.displayName = "AAutoCompleteOption");
const v = () => null;
(v.isSelectOptGroup = !0), (v.displayName = "AAutoCompleteOptGroup");
const m = e({
    compatConfig: { MODE: 3 },
    name: "AAutoComplete",
    inheritAttrs: !1,
    props: t(
      t({}, u(d(), ["loading", "mode", "optionLabelProp", "labelInValue"])),
      {
        dataSource: Array,
        dropdownMenuStyle: { type: Object, default: void 0 },
        dropdownMatchSelectWidth: { type: [Number, Boolean], default: !0 },
        prefixCls: String,
        showSearch: { type: Boolean, default: void 0 },
        transitionName: String,
        choiceTransitionName: { type: String, default: "zoom" },
        autofocus: { type: Boolean, default: void 0 },
        backfill: { type: Boolean, default: void 0 },
        filterOption: { type: [Boolean, Function], default: !1 },
        defaultActiveFirstOption: { type: Boolean, default: !0 },
        status: String,
      }
    ),
    slots: Object,
    setup(e, d) {
      let { slots: v, attrs: m, expose: f } = d;
      o(!e.dropdownClassName);
      const y = a(),
        O = () => {
          var t;
          const e = r(
            null === (t = v.default) || void 0 === t ? void 0 : t.call(v)
          );
          return e.length ? e[0] : void 0;
        };
      f({
        focus: () => {
          var t;
          null === (t = y.value) || void 0 === t || t.focus();
        },
        blur: () => {
          var t;
          null === (t = y.value) || void 0 === t || t.blur();
        },
      });
      const { prefixCls: S } = l("select", e);
      return () => {
        var o, a, l;
        const {
          size: r,
          dataSource: d,
          notFoundContent: f = null === (o = v.notFoundContent) || void 0 === o
            ? void 0
            : o.call(v),
        } = e;
        let C;
        const { class: g } = m,
          h = {
            [g]: !!g,
            [`${S.value}-lg`]: "large" === r,
            [`${S.value}-sm`]: "small" === r,
            [`${S.value}-show-search`]: !0,
            [`${S.value}-auto-complete`]: !0,
          };
        if (void 0 === e.options) {
          const t =
            (null === (a = v.dataSource) || void 0 === a
              ? void 0
              : a.call(v)) ||
            (null === (l = v.options) || void 0 === l ? void 0 : l.call(v)) ||
            [];
          C =
            t.length &&
            (function (t) {
              var e, o;
              return (
                (null === (e = null == t ? void 0 : t.type) || void 0 === e
                  ? void 0
                  : e.isSelectOption) ||
                (null === (o = null == t ? void 0 : t.type) || void 0 === o
                  ? void 0
                  : o.isSelectOptGroup)
              );
            })(t[0])
              ? t
              : d
              ? d.map((t) => {
                  if (n(t)) return t;
                  switch (typeof t) {
                    case "string":
                      return s(c, { key: t, value: t }, { default: () => [t] });
                    case "object":
                      return s(
                        c,
                        { key: t.value, value: t.value },
                        { default: () => [t.text] }
                      );
                    default:
                      throw new Error(
                        "AutoComplete[dataSource] only supports type `string[] | Object[]`."
                      );
                  }
                })
              : [];
        }
        const N = u(
          t(t(t({}, e), m), {
            mode: p.SECRET_COMBOBOX_MODE_DO_NOT_USE,
            getInputElement: O,
            notFoundContent: f,
            class: h,
            popupClassName: e.popupClassName || e.dropdownClassName,
            ref: y,
          }),
          ["dataSource", "loading"]
        );
        return s(
          p,
          N,
          i({ default: () => [C] }, u(v, ["default", "dataSource", "options"]))
        );
      };
    },
  }),
  f = t(m, {
    Option: c,
    OptGroup: v,
    install: (t) => (
      t.component(m.name, m),
      t.component(c.displayName, c),
      t.component(v.displayName, v),
      t
    ),
  });
export { f as _ };
