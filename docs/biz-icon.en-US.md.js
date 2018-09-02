webpackJsonp([86],{

/***/ 2448:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "Generate the code from the icon library"
    ],
    [
      "p",
      "First, search icons what you need, and add these icons into your shop bag. You can add these icons which you have selected to your project(if you don't have, just create one). All of resources and code are project-based in future."
    ],
    [
      "blockquote",
      [
        "p",
        "If you get a design spec, and just want to generate the code, you can do these steps above after uploading this icons to ",
        [
          "a",
          {
            "title": null,
            "href": "http://iconfont.cn/"
          },
          "iconfont.cn"
        ],
        "."
      ]
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "alt": "layout-on-account",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/jJQYzRyqVFBBamUOppXH.png"
        }
      ]
    ],
    [
      "p",
      [
        "br"
      ]
    ],
    [
      "p",
      "In your project page, click the link『Click to generating Code, and it will automatically generate differect codes."
    ],
    [
      "p",
      [
        "img",
        {
          "width": "600",
          "alt": "layout-on-account",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/DbDSgiRukSANKWyhULir.png"
        }
      ]
    ],
    [
      "h2",
      "Quote icons"
    ],
    [
      "p",
      "There're three differect ways to Quote icons: SVG Symbol(Recommended), Unicode and Font class."
    ],
    [
      "h3",
      "SVG Symbol"
    ],
    [
      "p",
      "It’s a new way of usage we recommend and will be the main trend in future. This usage is a collection of SVG and its characteristics as following:"
    ],
    [
      "ul",
      [
        "li",
        [
          "p",
          "It supports multi-color and get rid of the limitation of monochrome."
        ]
      ],
      [
        "li",
        [
          "p",
          "It could adjust the style by some technique just like font."
        ]
      ],
      [
        "li",
        [
          "p",
          "It supports IE 9+ and modern browsers only."
        ]
      ]
    ],
    [
      "p",
      "General steps are as follows:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "Switch to the page \"Symbol\", click to generating code and copy it："
        ],
        [
          "pre",
          {
            "lang": null,
            "highlighted": "<span class=\"token operator\">/</span><span class=\"token operator\">/</span>at<span class=\"token punctuation\">.</span>alicdn<span class=\"token punctuation\">.</span>com<span class=\"token operator\">/</span>t<span class=\"token operator\">/</span>font_405362_lyhvoky9rc7ynwmi<span class=\"token punctuation\">.</span>js"
          },
          [
            "code",
            "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Add a common CSS code"
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token selector\"><span class=\"token class\">.icon</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token property\">width</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>em<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">height</span><span class=\"token punctuation\">:</span> <span class=\"token number\">1</span>em<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">fill</span><span class=\"token punctuation\">:</span> currentColor<span class=\"token punctuation\">;</span>\n  <span class=\"token property\">vertical-align</span><span class=\"token punctuation\">:</span> -<span class=\"token number\">.125</span>em<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            ".icon {\n  width: 1em;\n  height: 1em;\n  fill: currentColor;\n  vertical-align: -.125em;\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Copy the individual code of icons into pages."
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>svg</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">aria-hidden</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>true<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n    <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>use</span> <span class=\"token attr-name\"><span class=\"token namespace\">xlink:</span>href</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>#icon-ali-pay<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>use</span><span class=\"token punctuation\">></span></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>svg</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<svg class=\"icon\" aria-hidden=\"true\">\n    <use xlink:href=\"#icon-ali-pay\"></use>\n</svg>"
          ]
        ]
      ]
    ],
    [
      "p",
      "You can also use the method ",
      [
        "code",
        "Icon.createFromIconfontCN({...})"
      ],
      " to use icons more conveniently. The usage is as follows:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "Set ",
          [
            "code",
            "scriptUrl"
          ],
          " field and create icon component. See ",
          [
            "a",
            {
              "title": null,
              "href": "https://ant.design/components/icon/#API"
            },
            "usage"
          ],
          " for more detail."
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token keyword\">import</span> <span class=\"token punctuation\">{</span> Icon <span class=\"token punctuation\">}</span> <span class=\"token keyword\">from</span> <span class=\"token string\">'antd'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> IconFont <span class=\"token operator\">=</span> Icon<span class=\"token punctuation\">.</span><span class=\"token function\">createFromIconfontCN</span><span class=\"token punctuation\">(</span><span class=\"token punctuation\">{</span>\n  scriptUrl<span class=\"token punctuation\">:</span> <span class=\"token string\">'//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js'</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> IconFont<span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "import { Icon } from 'antd';\n\nconst IconFont = Icon.createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.js'\n});\n\nexport default IconFont;"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "It's easy to use like ",
          [
            "code",
            "<Icon />"
          ],
          " component, and support inline style."
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>IconFont</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>icon-ali-pay<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'lightblue'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
          },
          [
            "code",
            "<IconFont type=\"icon-ali-pay\" style={{ fontSize: '16px', color: 'lightblue' }} />"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Unicode"
    ],
    [
      "p",
      "Unicode is the most primitive way of font’s application. Its application steps as follows:"
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "Copy the code generated by the icon project. You can create a new stylesheet file. The content is as follows:"
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@font-face</span></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'iconfont'</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot')</span><span class=\"token punctuation\">;</span>\n  <span class=\"token property\">src</span><span class=\"token punctuation\">:</span> <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'embedded-opentype'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'woff'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'truetype'</span><span class=\"token punctuation\">)</span>,\n  <span class=\"token url\">url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont')</span> <span class=\"token function\">format</span><span class=\"token punctuation\">(</span><span class=\"token string\">'svg'</span><span class=\"token punctuation\">)</span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            "@font-face {\n  font-family: 'iconfont';\n  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot');\n  src: url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.eot?#iefix') format('embedded-opentype'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.woff') format('woff'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.ttf') format('truetype'),\n  url('//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.svg#iconfont') format('svg');\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Define the style of iconfont usage."
        ],
        [
          "pre",
          {
            "lang": "css",
            "highlighted": "<span class=\"token selector\"><span class=\"token class\">.iconfont</span> </span><span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  &amp;<span class=\"token pseudo-element\">:before</span> </span><span class=\"token punctuation\">{</span>\n    <span class=\"token property\">display</span><span class=\"token punctuation\">:</span> block<span class=\"token punctuation\">;</span>\n    <span class=\"token property\">font-family</span><span class=\"token punctuation\">:</span> <span class=\"token string\">\"iconfont\"</span> <span class=\"token important\">!important</span><span class=\"token punctuation\">;</span>  <span class=\"token comment\" spellcheck=\"true\">/* 注意与 font-face 中的匹配 */</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
          },
          [
            "code",
            ".iconfont {\n  display: inline-block;\n  font-style: normal;\n  vertical-align: baseline;\n  text-align: center;\n  text-transform: none;\n  line-height: 1;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  &:before {\n    display: block;\n    font-family: \"iconfont\" !important;  /* 注意与 font-face 中的匹配 */\n  }\n}"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Copy the individual code of icon into pages."
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>i</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>iconfont<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token entity\" title=\"&#xe66b;\">&amp;#xe66b;</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>i</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<i class=\"iconfont\">&#xe66b;</i>"
          ]
        ]
      ]
    ],
    [
      "h3",
      "Font Class"
    ],
    [
      "p",
      "Font-class is one kind of derived usage of Unicode, which solved the problems of intuitive writing and semantic ambiguity."
    ],
    [
      "ol",
      [
        "li",
        [
          "p",
          "Switch to the page \"Font class\". Click to generating code and copy it."
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css"
          },
          [
            "code",
            "//at.alicdn.com/t/font_405362_lyhvoky9rc7ynwmi.css"
          ]
        ],
        [
          "blockquote",
          [
            "p",
            "You can copy the content of the file in the link above to your own stylesheet file. You can also rewrite the class names if you don't like the default class names."
          ]
        ],
        [
          "pre",
          {
            "lang": "diff",
            "highlighted": "<span class=\"token deleted\">- .icon-ali-pay:before { content: \"\\e66b\"; }              // Before</span>\n<span class=\"token inserted\">+ .monitor-icon-alipay:before { content: \"\\e66b\"; }       // After</span>"
          },
          [
            "code",
            "- .icon-ali-pay:before { content: \"\\e66b\"; }              // Before\n+ .monitor-icon-alipay:before { content: \"\\e66b\"; }       // After"
          ]
        ]
      ],
      [
        "li",
        [
          "p",
          "Copy the individual code of icon into pages."
        ],
        [
          "pre",
          {
            "lang": "html",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>i</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>iconfont icon-ali-pay<span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>i</span><span class=\"token punctuation\">></span></span>"
          },
          [
            "code",
            "<i class=\"iconfont icon-ali-pay\"></i>"
          ]
        ],
        [
          "p",
          "We recommend to package it as a component："
        ],
        [
          "pre",
          {
            "lang": "js",
            "highlighted": "<span class=\"token keyword\">import</span> React <span class=\"token keyword\">from</span> <span class=\"token string\">'react'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token keyword\">const</span> BizIcon <span class=\"token operator\">=</span> <span class=\"token punctuation\">(</span>props<span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">const</span> <span class=\"token punctuation\">{</span> type <span class=\"token punctuation\">}</span> <span class=\"token operator\">=</span> props<span class=\"token punctuation\">;</span>\n  <span class=\"token keyword\">return</span> <span class=\"token operator\">&lt;</span>i className<span class=\"token operator\">=</span><span class=\"token punctuation\">{</span><span class=\"token template-string\"><span class=\"token string\">`iconfont icon-</span><span class=\"token interpolation\"><span class=\"token interpolation-punctuation punctuation\">${</span>type<span class=\"token interpolation-punctuation punctuation\">}</span></span><span class=\"token string\">`</span></span><span class=\"token punctuation\">}</span> <span class=\"token operator\">/</span><span class=\"token operator\">></span><span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> BizIcon<span class=\"token punctuation\">;</span>"
          },
          [
            "code",
            "import React from 'react';\n\nconst BizIcon = (props) => {\n  const { type } = props;\n  return <i className={`iconfont icon-${type}`} />;\n};\nexport default BizIcon;"
          ]
        ],
        [
          "p",
          "It's easy to use:"
        ],
        [
          "pre",
          {
            "lang": "jsx",
            "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>BizIcon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>ali-pay<span class=\"token punctuation\">\"</span></span> <span class=\"token punctuation\">/></span></span>"
          },
          [
            "code",
            "<BizIcon type=\"ali-pay\" />"
          ]
        ]
      ]
    ],
    [
      "p",
      "Unicode and Font Class are font in essence. It's easy to adjust the style, and has good compatibility, but not support multi-color."
    ],
    [
      "blockquote",
      [
        "p",
        "More references:"
      ],
      [
        "ul",
        [
          "li",
          [
            "p",
            [
              "a",
              {
                "title": null,
                "href": "http://iconfont.cn/help/detail?spm=a313x.7781069.1998910419.d8d11a391&helptype=code"
              },
              "iconfont.cn Guide"
            ]
          ]
        ],
        [
          "li",
          [
            "p",
            [
              "a",
              {
                "title": null,
                "href": "https://io-meter.com/2014/07/20/replace-icon-fonts-with-svg/"
              },
              "New Web trend: use SVG instead of Web Icon Font"
            ]
          ]
        ]
      ]
    ]
  ],
  "meta": {
    "order": 12,
    "title": "BIZ Icon",
    "type": "Advanced",
    "filename": "docs/biz-icon.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "You can use ",
      [
        "a",
        {
          "title": null,
          "href": "https://ant.design/components/icon/"
        },
        "Ant Design official icons"
      ],
      " with the ",
      [
        "code",
        "<Icon />"
      ],
      " component. The basic usage is as follows."
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Icon</span> <span class=\"token attr-name\">type</span><span class=\"token attr-value\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">\"</span>heart<span class=\"token punctuation\">\"</span></span> <span class=\"token attr-name\">style</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span><span class=\"token punctuation\">{</span> fontSize<span class=\"token punctuation\">:</span> <span class=\"token string\">'16px'</span><span class=\"token punctuation\">,</span> color<span class=\"token punctuation\">:</span> <span class=\"token string\">'hotpink'</span> <span class=\"token punctuation\">}</span><span class=\"token punctuation\">}</span></span> <span class=\"token punctuation\">/></span></span>"
      },
      [
        "code",
        "<Icon type=\"heart\" style={{ fontSize: '16px', color: 'hotpink' }} />"
      ]
    ],
    [
      "p",
      "If there is no icon you need in the Ant Design official icons, you can collect and generate your own icon library in the ",
      [
        "a",
        {
          "title": null,
          "href": "http://iconfont.cn/"
        },
        "iconfont.cn"
      ],
      "."
    ]
  ],
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Generate-the-code-from-the-icon-library",
          "title": "Generate the code from the icon library"
        },
        "Generate the code from the icon library"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Quote-icons",
          "title": "Quote icons"
        },
        "Quote icons"
      ]
    ]
  ]
};

/***/ })

});