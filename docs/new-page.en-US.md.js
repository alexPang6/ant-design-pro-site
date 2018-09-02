webpackJsonp([60],{

/***/ 2474:
/***/ (function(module, exports) {

module.exports = {
  "content": [
    "article",
    {

    },
    [
      "h2",
      "First, add js,less files"
    ],
    [
      "p",
      "Create new js,less files under src/pages. If there are multiple related pages, you can create a new folder to place related files."
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "config\nsrc\n  models\n  pages\n<span class=\"token inserted\">+   NewPage.js</span>\n<span class=\"token inserted\">+   NewPage.less</span>\n  ...\n...\npackage.json"
      },
      [
        "code",
        "config\nsrc\n  models\n  pages\n+   NewPage.js\n+   NewPage.less\n  ...\n...\npackage.json"
      ]
    ],
    [
      "p",
      "For better Demonstration, we initialize the contents of ",
      [
        "code",
        "NewPage.js"
      ],
      " as follows:"
    ],
    [
      "pre",
      {
        "lang": "jsx",
        "highlighted": "<span class=\"token keyword\">export</span> <span class=\"token keyword\">default</span> <span class=\"token punctuation\">(</span><span class=\"token punctuation\">)</span> <span class=\"token operator\">=</span><span class=\"token operator\">></span> <span class=\"token punctuation\">{</span>\n  <span class=\"token keyword\">return</span> <span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>div</span><span class=\"token punctuation\">></span></span>New <span class=\"token class-name\">Page</span><span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>div</span><span class=\"token punctuation\">></span></span>\n<span class=\"token punctuation\">}</span><span class=\"token punctuation\">;</span>"
      },
      [
        "code",
        "export default () => {\n  return <div>New Page</div>\n};"
      ]
    ],
    [
      "p",
      "Temporarily do not add content to the style files in this document, you can also try to add them yourself."
    ],
    [
      "p",
      "Style files are used by default ",
      [
        "a",
        {
          "title": null,
          "href": "http://www.ruanyifeng.com/blog/2016/06/css_modules.html"
        },
        "CSS Modules"
      ],
      ", If needed, you can import ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less"
        },
        "antd style variable file"
      ],
      " in the head of the file:"
    ],
    [
      "pre",
      {
        "lang": "css",
        "highlighted": "<span class=\"token atrule\"><span class=\"token rule\">@import</span> <span class=\"token string\">\"~antd/lib/style/themes/default.less\"</span><span class=\"token punctuation\">;</span></span>"
      },
      [
        "code",
        "@import \"~antd/lib/style/themes/default.less\";"
      ]
    ],
    [
      "p",
      "This makes it easy to get antd style variables and use them in your files, which helps to maintain the consistency of the page, and facilitate the implementation of custom themes."
    ],
    [
      "h2",
      "Second, add the files into menus,routes"
    ],
    [
      "p",
      "Because Ant Design Pro uses the configuration route of umi, you need to add the corresponding routing information in the configuration file ",
      [
        "code",
        "config/router.config.js"
      ],
      ":"
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "...\n  {\n    path: '/',\n    component: '../layouts/BasicLayout',\n    Routes: ['src/pages/Authorized'],\n    routes: [\n<span class=\"token inserted\">+     // new page</span>\n<span class=\"token inserted\">+     {</span>\n<span class=\"token inserted\">+       path: 'new',</span>\n<span class=\"token inserted\">+       name: 'new',</span>\n<span class=\"token inserted\">+       icon: 'plus-square',</span>\n<span class=\"token inserted\">+       component: 'NewPage',</span>\n<span class=\"token inserted\">+     },</span>\n..."
      },
      [
        "code",
        "...\n  {\n    path: '/',\n    component: '../layouts/BasicLayout',\n    Routes: ['src/pages/Authorized'],\n    routes: [\n+     // new page\n+     {\n+       path: 'new',\n+       name: 'new',\n+       icon: 'plus-square',\n+       component: 'NewPage',\n+     },\n..."
      ]
    ],
    [
      "p",
      "Where ",
      [
        "code",
        "icon"
      ],
      " and ",
      [
        "code",
        "name"
      ],
      " are the required configuration in the menu component, and ",
      [
        "code",
        "config/router.config.js"
      ],
      " is also read in the menu component to add the relevant logic."
    ],
    [
      "p",
      "We implemented internationalization in Ant Design Pro 2.0, so you also need to add the relevant copy in ",
      [
        "code",
        "src/locales/zh-CN.js"
      ],
      " and ",
      [
        "code",
        "src/locales/en-US"
      ],
      ":"
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "// zh-CN.js\nexport default {\n  'navbar.lang': 'English',\n<span class=\"token inserted\">+ 'menu.new': '新页面',</span>\n  'menu.home': '首页',\n  ..."
      },
      [
        "code",
        "// zh-CN.js\nexport default {\n  'navbar.lang': 'English',\n+ 'menu.new': '新页面',\n  'menu.home': '首页',\n  ..."
      ]
    ],
    [
      "pre",
      {
        "lang": "diff",
        "highlighted": "// en-US.js\nexport default {\n  'navbar.lang': '中文',\n<span class=\"token inserted\">+ 'menu.new': 'New Page',</span>\n  'menu.home': 'Home',\n  ..."
      },
      [
        "code",
        "// en-US.js\nexport default {\n  'navbar.lang': '中文',\n+ 'menu.new': 'New Page',\n  'menu.home': 'Home',\n  ..."
      ]
    ],
    [
      "p",
      "Then visit ",
      [
        "code",
        "http://localhost:8000/new"
      ],
      " to see the new page."
    ],
    [
      "p",
      [
        "img",
        {
          "alt": "New Page",
          "src": "https://gw.alipayobjects.com/zos/rmsportal/PNyWCgzHEynHvMSXxSQe.png"
        }
      ]
    ],
    [
      "p",
      "See the introduction in ",
      [
        "a",
        {
          "title": null,
          "href": "/docs/router-and-nav"
        },
        "Router and Nav"
      ],
      " for more details on routing."
    ],
    [
      "h2",
      "Third, add model,service"
    ],
    [
      "p",
      "After the layout and routes are configured, go back to the newly created ",
      [
        "code",
        "NewPage.js"
      ],
      " and start writing business codes! If you need to use the data flow in ",
      [
        "a",
        {
          "title": null,
          "href": "https://github.com/dvajs/dva/"
        },
        "dva"
      ],
      ", you also need to set the corresponding model and service in ",
      [
        "code",
        "src/models"
      ],
      " and ",
      [
        "code",
        "src/services"
      ],
      ". Refer to the writing of the built-in page of the scaffold for details."
    ]
  ],
  "meta": {
    "order": 4,
    "title": "New Page",
    "type": "Introduction",
    "filename": "docs/new-page.en-US.md"
  },
  "description": [
    "section",
    [
      "p",
      "This \"page\" refers to a module that is configured with a route and can be directly accessed through a link. To create a new page, usually only a simple configuration is required on the scaffold."
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
          "href": "#First,-add-js,less-files",
          "title": "First, add js,less files"
        },
        "First, add js,less files"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Second,-add-the-files-into-menus,routes",
          "title": "Second, add the files into menus,routes"
        },
        "Second, add the files into menus,routes"
      ]
    ],
    [
      "li",
      [
        "a",
        {
          "className": "bisheng-toc-h2",
          "href": "#Third,-add-model,service",
          "title": "Third, add model,service"
        },
        "Third, add model,service"
      ]
    ]
  ]
};

/***/ })

});