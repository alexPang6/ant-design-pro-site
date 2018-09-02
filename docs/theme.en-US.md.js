webpackJsonp([50],{

/***/ 2484:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    [
      "p",
      "We built Ant Design Pro based on the Ant Design visual style, which was carefully adapted by the designer to suit most mid- and back-office projects. If you have additional requirements for visual style, it is recommended to customize it in the following ways."
    ],
    [
      "h2",
      "Customize Theme"
    ],
    [
      "p",
      "We developed based on Ant Design React and fully support the official less variable customization feature:"
    ],
    [
      "p",
      "Find ",
      [
        "code",
        "config/config.js"
      ],
      " in the scaffolding directory as follows:"
    ],
    [
      "pre",
      {
        "lang": "js",
        "highlighted": "<span class=\"token operator\">...</span>\ntheme<span class=\"token punctuation\">:</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token string\">'font-size-base'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'14px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'badge-font-size'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'12px'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'btn-font-size-lg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'@font-size-base'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'menu-dark-submenu-bg'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#000B14'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-sider-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#00182E'</span><span class=\"token punctuation\">,</span>\n  <span class=\"token string\">'layout-body-background'</span><span class=\"token punctuation\">:</span> <span class=\"token string\">'#f0f2f5'</span><span class=\"token punctuation\">,</span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>\n<span class=\"token operator\">...</span>"
      },
      [
        "code",
        "...\ntheme: {\n  'font-size-base': '14px',\n  'badge-font-size': '12px',\n  'btn-font-size-lg': '@font-size-base',\n  'menu-dark-bg': '#00182E',\n  'menu-dark-submenu-bg': '#000B14',\n  'layout-sider-background': '#00182E',\n  'layout-body-background': '#f0f2f5',\n};\n..."
      ]
    ],
    [
      "p",
      "Find the variables that need to be modified in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "All Variables Table"
      ],
      ", and start ",
      [
        "code",
        "npm start"
      ],
      " after modification. , you can see the effect in your app interface."
    ],
    [
      "p",
      "More ways can refer to the official documentation:",
      [
        "a",
        {
          "title": null,
          "href": "http://ant.design/docs/react/customize-theme-cn"
        },
        "Customize Theme"
      ],
      "。"
    ],
    [
      "h2",
      "Style Coverage"
    ],
    [
      "p",
      "Ant Design's generic style variables may not meet all of the customization requirements, and you need to override the default component styles globally. We can override the style by referring to the ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/style"
        },
        "Style"
      ],
      " section."
    ],
    [
      "h3",
      "Global Overlay Component"
    ],
    [
      "p",
      "For example, modify the font size of all Tag in ",
      [
        "code",
        "src/global.less"
      ],
      "."
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// src/index.less</span>\n<span class=\"token selector\">:global</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token selector\">.ant-tag</span> <span class=\"token punctuation\">{</span>\n    <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">12</span>px<span class=\"token punctuation\">;</span>\n  <span class=\"token punctuation\">}</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// src/index.less\n:global {\n  .ant-tag {\n    font-size: 12px;\n  }\n}"
      ]
    ],
    [
      "h3",
      "Overwrite Specified Component"
    ],
    [
      "pre",
      {
        "lang": "less",
        "highlighted": "<span class=\"token comment\" spellcheck=\"true\">// sample.less</span>\n<span class=\"token selector\">.customTag</span> <span class=\"token punctuation\">{</span>\n  <span class=\"token property\">font-size</span><span class=\"token punctuation\">:</span> <span class=\"token number\">18</span>px<span class=\"token punctuation\">;</span>\n<span class=\"token punctuation\">}</span>"
      },
      [
        "code",
        "// sample.less\n.customTag {\n  font-size: 18px;\n}"
      ]
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">import</span> styles <span class=\"token keyword\">from</span> <span class=\"token string\">'./sample.less'</span><span class=\"token punctuation\">;</span>\n\n<span class=\"token operator\">...</span>\n\n<span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>Tag</span> <span class=\"token attr-name\">className</span><span class=\"token script language-javascript\"><span class=\"token punctuation\">=</span><span class=\"token punctuation\">{</span>styles<span class=\"token punctuation\">.</span>customTag<span class=\"token punctuation\">}</span></span><span class=\"token punctuation\">></span></span>定制标签<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>Tag</span><span class=\"token punctuation\">></span></span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "import styles from './sample.less';\n\n...\n\nreturn <Tag className={styles.customTag}>定制标签</Tag>;"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "We do not recommend style coverage. First, the default theme and components are carefully adjusted by the designer. Forcing coverage may affect the overall effect. Second, the overlay code may fail due to component library version upgrade."
      ]
    ],
    [
      "h2",
      "Switch Theme Online"
    ],
    [
      "p",
      "Pro provides a setup drawer that can be used to switch themes and layouts online. This drawer makes it easy to see the effects of changing the theme without having to restart the scaffolding."
    ],
    [
      "p",
      "In order to facilitate preview, the configuration items in the settings will be saved in the address bar, you can copy them to others and share the effects."
    ],
    [
      "blockquote",
      [
        "p",
        "Due to the nature of the react-router, the parameters of the address bar may be cleared."
      ]
    ],
    [
      "p",
      "Once you have determined this configuration, you can copy it by clicking the Copy Code button and override the default setting in ",
      [
        "code",
        "src/defaultSetting.js"
      ],
      ". This way you can publish and deploy on this theme."
    ],
    [
      "p",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design-pro/blob/master/src/defaultSettings.js"
        },
        [
          "code",
          "src/defaultSetting.js"
        ]
      ],
      " The content is as follows:"
    ],
    [
      "pre",
      {
        "lang": null,
        "highlighted": "module<span class=\"token punctuation\">.</span>exports <span class=\"token operator\">=</span> {\n  navTheme<span class=\"token punctuation\">:</span> <span class=\"token string\">'dark'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> theme <span class=\"token keyword\">for</span> nav menu\n  primaryColor<span class=\"token punctuation\">:</span> <span class=\"token string\">'#1890FF'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> primary color of Ant Design\n  layout<span class=\"token punctuation\">:</span> <span class=\"token string\">'sidemenu'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> nav menu position<span class=\"token punctuation\">:</span> sidemenu <span class=\"token operator\">or</span> topmenu\n  contentWidth<span class=\"token punctuation\">:</span> <span class=\"token string\">'Fluid'</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> layout of content<span class=\"token punctuation\">:</span> Fluid <span class=\"token operator\">or</span> Fixed<span class=\"token punctuation\">,</span> only works when layout is topmenu\n  fixedHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> sticky header\n  autoHideHeader<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> auto hide header\n  fixSiderbar<span class=\"token punctuation\">:</span> <span class=\"token boolean\">false</span><span class=\"token punctuation\">,</span> <span class=\"token operator\">/</span><span class=\"token operator\">/</span> sticky siderbar\n}<span class=\"token comment\" spellcheck=\"true\">;</span>"
      },
      [
        "code",
        "module.exports = {\n  navTheme: 'dark', // theme for nav menu\n  primaryColor: '#1890FF', // primary color of Ant Design\n  layout: 'sidemenu', // nav menu position: sidemenu or topmenu\n  contentWidth: 'Fluid', // layout of content: Fluid or Fixed, only works when layout is topmenu\n  fixedHeader: false, // sticky header\n  autoHideHeader: false, // auto hide header\n  fixSiderbar: false, // sticky siderbar\n};"
      ]
    ],
    [
      "blockquote",
      [
        "p",
        "Modifying the color online is using less online compilation, it is recommended to configure in ",
        [
          "a",
          {
            "title": null,
            "href": "https://github.com/ant-design/ant-design-pro/blob/master/config/config.js"
          },
          [
            "code",
            "config/config.js"
          ]
        ],
        " to improve the user experience. Compiling online less takes time and can cause stuttering."
      ]
    ]
  ],
  "meta": {
    "order": 14,
    "title": {
      "en-US": "Theme",
      "zh-CN": "更换主题"
    },
    "type": "Advanced",
    "filename": "docs/theme.en-US.md"
  },
  "toc": [
    "ul",
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Customize-Theme",
          "title": "Customize Theme"
        },
        "Customize Theme"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Style-Coverage",
          "title": "Style Coverage"
        },
        "Style Coverage"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Switch-Theme-Online",
          "title": "Switch Theme Online"
        },
        "Switch Theme Online"
      ]
    ]
  ]
};

/***/ })

});