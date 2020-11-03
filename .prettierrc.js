module.exports = {
  '[html]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[css]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[scss]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[javascript]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[vue]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  '[json]': {
    'editor.defaultFormatter': 'esbenp.prettier-vscode'
  },
  /*  prettier的配置 */
  "printWidth": 120, // 超过最大值换行
  "tabWidth": 2, // 缩进字节数
  "useTabs": true, // 缩进使用tab
  "semi": false, // 句尾添加分号
  "singleQuote": true, // 使用单引号代替双引号
  "proseWrap": "preserve", // 默认值。因为使用了一些折行敏感型的渲染器（如GitHub comment）而按照markdown文本样式进行折行
  "arrowParens": "avoid", // (x) => {} 箭头函数参数只有一个时是否要有小括号。avoid：省略括号
  "bracketSpacing": true, // 在对象，数组括号与文字之间加空格 "{ foo: bar }"
  "endOfLine": "auto", // 结尾是 \n \r \n\r auto
  "htmlWhitespaceSensitivity": "ignore",
  "ignorePath": ".prettierignore", // 不使用prettier格式化的文件填写在项目的.prettierignore文件中
  "requireConfig": false, // Require a "prettierconfig" to format prettier
  "trailingComma": "none", // 在对象或数组最后一个元素后面是否加逗号
}
