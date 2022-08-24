<!--
 * @Author: 刘凌晨 liulingchen1109@163.com
 * @Date: 2022-08-24 14:54:56
 * @LastEditTime: 2022-08-24 21:09:42
 * @FilePath: \next-react-ts\README.md
-->

### prettierrc配置
{
  "printWidth": 80, //单行长度
  "tabWidth": 2, //缩进长度
  "useTabs": false, //使用空格代替tab缩进
  "semi": true, //句末使用分号
  "singleQuote": true, //使用单引号
  "quoteProps": 'as-needed', //仅在必需时为对象的key添加引号
  "jsxSingleQuote": true, // jsx中使用单引号
  "trailingComma": "all", //多行时尽可能打印尾随逗号
  "bracketSpacing": true, //在对象前后添加空格-eg: { foo: bar }
  "jsxBracketSameLine": true, //多属性html标签的‘>’折行放置
  "arrowParens": "always", //单参数箭头函数参数周围使用圆括号-eg: (x) => x
  "requirePragma": false, //无需顶部注释即可格式化
  "insertPragma": false, //在已被preitter格式化的文件顶部加上标注
  "proseWrap": "preserve", //不知道怎么翻译
  "htmlWhitespaceSensitivity": "ignore", //对HTML全局空白不敏感
  "vueIndentScriptAndStyle": false, //不对vue中的script及style标签缩进
  "endOfLine": "lf", //结束行形式
  "embeddedLanguageFormatting": 'auto', //对引用代码进行格式化
}

### mock.js
    使用mock.js造出假数据 数据插件：google插件
    FeHelper(前端助手)：JSON自动格式化、手动格式化，支持排序、解码、下载等

### 路由
    在pages目录下的文件便会自动生成路由

### 路径引用
    alias: 可以快速的引入不通路径的代码文件，避免反复的写相对路径，提高开发效率
    在tsconfig.json中进行配置 "baseUrl": "."

### 404
    若没有info文件夹或路由配置则是404 页面
    {
        label: '咨询',
        value: '/info'
    },

### stylelint 常见问题
    类名驼峰问题...
    http://stylelint.docschina.org/user-guide/faq/ 

### react 父子通信
    父穿子： prop
    子穿父： 通过回调函数 场景：点击登录弹出登录窗口，是否展示窗口的值isShowVerify，在父组件NavBAr定义，且有handleClose来控制关闭弹窗的值，在子组件Login中，点击X进行关闭，修改isShowVerify的值方法是获取父组件传递的onClose方法，并调用，最终修改了父组件中的值。
    在实现组件之间的联动场景时也可使用该方法。
    