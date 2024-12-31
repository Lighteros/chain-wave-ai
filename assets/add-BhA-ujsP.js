import {
  as as e,
  bh as n,
  c as i,
  r as o,
  au as a,
  bo as l,
  ax as t,
  bl as s,
  bm as r,
  a as u,
  aw as d,
  bY as c,
  co as p,
  bE as m,
  bO as f,
  aA as v,
  d0 as _,
  bM as b,
  aB as h,
  cp as P,
  bp as y,
} from "./index-DPRREYlk.js";
import { _ as g } from "./BasicTitle-CY4FQusD.js";
import { _ as T } from "./CodeBlock.vue_vue_type_style_index_0_lang-BAHlxJi4.js";
import { m as E } from "./utils-CWmEVrfF.js";
import { P as A } from "./index-Dgmkw5o7.js";
import { D as x, a as w } from "./index-8scesHh7.js";
import "./tsxHelper-DjrCDYtL.js";
import "./PageWrapper-BPMfS97v.js";
import "./propTypes-BC7VambV.js";
import "./DownOutlined-BDMVSGUf.js";
import "./useBreakpoint-vSrZKufz.js";
import "./responsiveObserve-Bqv5_Yab.js";
import "./useFlexGapSupport-CUSf0znk.js";
const I = { class: "app-content px-4" },
  U = s("span", null, " Environment Setup before Binding ", -1),
  L = s(
    "div",
    { span: "", class: "mb-2" },
    " Verify nvidia driver is installed by running nvidia-smi. ",
    -1
  ),
  k = s(
    "p",
    null,
    " It should display list of GPUs. If it doesn't, that means nvidia driver is not installed and you can install it as follows: ",
    -1
  ),
  G = {
    href: "https://docs.nvidia.com/cuda/cuda-installation-guide-linux/index.html",
    target: "_blank",
  },
  j = s(
    "div",
    { span: "", class: "mb-2" },
    " Execute the following binding script on your GPU server: ",
    -1
  ),
  C = s(
    "div",
    { span: "", class: "mb-2" },
    " Verify the installation of fedml library on your GPU server: ",
    -1
  ),
  O = s("p", null, "The output should look like below:", -1),
  S = ["href"],
  $ = e({
    __name: "add",
    setup(e) {
      const $ = n(),
        B = i(() => $.getUserInfo?.apiKey),
        D = o(!0),
        F = i(() => ""),
        M = i(
          () =>
            `fedml login -p ${
              B.value || "$PASTE_YOUR_FEDML_APIKEY"
            } -lp open.chainopera.ai -lpp 443 ${F.value}`
        ),
        K = i(
          () =>
            `# Please connect your GPU device with CLI:\nfedml login -p ${
              B.value
                ? D.value
                  ? E(B.value)
                  : B.value
                : "$PASTE_YOUR_FEDML_APIKEY"
            } -lp open.chainopera.ai -lpp 443 ${F.value}`
        ),
        R = o(),
        V = o(!1);
      return (e, n) => {
        const i = y,
          o = x,
          E = w,
          $ = g;
        return (
          a(),
          l(
            u(A),
            { "auto-title": "", "content-full-height": "", "fixed-height": "" },
            {
              default: t(() => [
                s("section", I, [
                  s(
                    "button",
                    {
                      class: r([
                        "w-full py-2 text-lg mb-2 bg-inherit shadow select-none flex items-center justify-center cursor-pointer hover:bg-primary/500 hover:text-white sticky top-0 left-0 right-0 z100",
                        [u(V) ? "flex-col-reverse" : "flex-col"],
                      ]),
                      onClick: n[0] || (n[0] = (e) => (V.value = !u(V))),
                    },
                    [
                      d(
                        i,
                        {
                          icon: u(V)
                            ? "i-ion:chevron-down-sharp"
                            : "i-ion:chevron-up-sharp",
                        },
                        null,
                        8,
                        ["icon"]
                      ),
                      U,
                    ],
                    2
                  ),
                  d(
                    P,
                    {
                      name: u(V) ? "fade-bottom" : "fade-top",
                      duration: 500,
                      mode: "in-out",
                      class: "mb-4 rounded-b-lg",
                    },
                    {
                      default: t(() => [
                        c(
                          d(
                            E,
                            m(
                              {
                                "active-key": u(R),
                                "onUpdate:activeKey":
                                  n[1] ||
                                  (n[1] = (e) => (f(R) ? (R.value = e) : null)),
                              },
                              {
                                title: "Environment Setup before Binding",
                                column: 1,
                                bordered: !0,
                                layout: "vertical",
                              }
                            ),
                            {
                              default: t(() => [
                                d(
                                  o,
                                  { label: "Verify nvidia driver" },
                                  {
                                    default: t(() => [
                                      L,
                                      s("p", null, [
                                        d(T, {
                                          lang: "shell",
                                          copy: "",
                                          code: "nvidia-smi",
                                        }),
                                      ]),
                                      k,
                                      s("p", null, [
                                        d(T, {
                                          lang: "shell",
                                          copy: "",
                                          code: "sudo ubuntu-drivers autoinstall\nsudo apt install nvidia-cuda-toolkit\nsudo reboot\nnvidia-smi",
                                        }),
                                      ]),
                                      s("p", null, [
                                        v(
                                          " If the above commands don't work, you can follow the instructions on NVIDIA's official website "
                                        ),
                                        s("a", G, [
                                          v(" here "),
                                          d(i, {
                                            icon: "i-tabler:external-link",
                                          }),
                                        ]),
                                        v(". "),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                d(
                                  o,
                                  { label: "Bind GPU" },
                                  {
                                    default: t(() => [
                                      j,
                                      s("p", null, [
                                        d(
                                          T,
                                          {
                                            code: `sudo curl -sSf ${
                                              "APP_DOC_BASE_URL" in e
                                                ? e.APP_DOC_BASE_URL
                                                : u(_)
                                            }shell/bind_gpu.sh | sh`,
                                            copy: "",
                                          },
                                          null,
                                          8,
                                          ["code"]
                                        ),
                                      ]),
                                    ]),
                                    _: 1,
                                  }
                                ),
                                d(
                                  o,
                                  { label: "Verify fedml library" },
                                  {
                                    default: t(() => [
                                      C,
                                      s("p", null, [
                                        d(T, { code: "fedml env", copy: "" }),
                                      ]),
                                      O,
                                      s("p", null, [
                                        d(
                                          T,
                                          {
                                            lang: "bat",
                                            code: `(fedml) ubuntu@fedml-a100-deploy:~$ fedml env\n\n======== FedML (https://${
                                              "APP_TITLE" in e
                                                ? e.APP_TITLE
                                                : u(b)
                                            }.ai) ========\nFedML version: 0.8.26\nFedML ENV version: release\nExecution path:/home/ubuntu/miniconda3/envs/fedml/lib/python3.10/site-packages/fedml/__init__.py\n\n======== Running Environment ========\nOS: Linux-5.15.0-94-generic-x86_64-with-glibc2.35\nHardware: x86_64\nPython version: 3.10.13 (main, Sep 11 2023, 13:44:35) [GCC 11.2.0]\nPyTorch version: 2.2.1+cu121\nMPI4py is NOT installed\n\n======== CPU Configuration ========\nThe CPU usage is : 0%\nAvailable CPU Memory: 467.3 G / 472.1867256164551G\n\n======== GPU Configuration ========\nNVIDIA GPU Info:\nAvailable GPU memory: 0.0 G / 0.0G\ntorch_is_available = False\ndevice_count = 0\nNo GPU devices\n\n======== Network Connection Checking ========\nThe connection to https://open.${
                                              "APP_TITLE" in e
                                                ? e.APP_TITLE
                                                : u(b)
                                            }.ai is OK.\n\nThe connection to S3 Object Storage is OK.\n\nThe connection to mqtt.${
                                              "APP_TITLE" in e
                                                ? e.APP_TITLE
                                                : u(b)
                                            }.ai (port:1883) is OK.`,
                                          },
                                          null,
                                          8,
                                          ["code"]
                                        ),
                                      ]),
                                      s(
                                        "p",
                                        null,
                                        " Final step is to login the server and bind GPU to " +
                                          h(
                                            "APP_TITLE" in e
                                              ? e.APP_TITLE
                                              : u(b)
                                          ) +
                                          " platform with following command: ",
                                        1
                                      ),
                                    ]),
                                    _: 1,
                                  }
                                ),
                              ]),
                              _: 1,
                            },
                            16,
                            ["active-key"]
                          ),
                          [[p, u(V)]]
                        ),
                      ]),
                      _: 1,
                    },
                    8,
                    ["name"]
                  ),
                  d(
                    $,
                    { span: "", class: "mb-2" },
                    {
                      default: t(() => [
                        v(
                          " Please bind your GPU to " +
                            h("APP_TITLE" in e ? e.APP_TITLE : u(b)) +
                            " and we will include it as a candidate for future jobs. ",
                          1
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                  s("p", null, [
                    d(
                      T,
                      { lang: "shell", code: u(K), copy: u(M) },
                      {
                        actions: t(() => [
                          d(
                            i,
                            {
                              icon: u(D) ? "i-ion:eye-disabled" : "i-ion:eye",
                              class: "cursor-pointer !text-gray-500",
                              onClick:
                                n[2] || (n[2] = (e) => (D.value = !u(D))),
                            },
                            null,
                            8,
                            ["icon"]
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["code", "copy"]
                    ),
                  ]),
                  s("p", null, [
                    v(
                      " Your GPUs will now be included as candidate for all future jobs. You can visit the "
                    ),
                    s(
                      "a",
                      {
                        href: `${
                          "APP_DOC_BASE_URL" in e ? e.APP_DOC_BASE_URL : u(_)
                        }share-and-earn#1-supplier-setup`,
                        target: "_blank",
                      },
                      [
                        v(" documentation "),
                        d(i, { icon: "i-tabler:external-link" }),
                      ],
                      8,
                      S
                    ),
                    v(" for more details. "),
                  ]),
                ]),
              ]),
              _: 1,
            }
          )
        );
      };
    },
  });
export { $ as default };
