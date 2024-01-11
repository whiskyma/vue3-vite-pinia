# vue3-prettier-eslint

[vue3项目搭建原文链接](https://www.jianshu.com/p/c9b130c0ba6a)、推荐使用 npm init vue@latest 方式构建。

perttier-eslint 项目构建时、选项集成prettier+eslint、无需手动安装依赖项.

1. Prettier用于统一代码格式，它主要关注代码外观，例如缩进、换行、引号等.
2. ESLint用于代码质量和规范，它主要可以检查代码错误，不良习惯和潜在问题.

## 配置vscode插件

1. 在vscode中安装Eslint、Prettier - Code formatter 插件
2. 在vscode中将默认格式化插件设置成 Prettier - Code formatter

## 配置如下图所示

<!-- ![Pandao editor.md](https://raw.githubusercontent.com/whiskyma/vue3-elementui/master/src/assets/images/1.png "Pandao editor.md") -->

![Pandao editor.md](https://img-blog.csdnimg.cn/8345b7c47fcc424890e1d600f91b8f7f.png 'Pandao editor.md')

在setttings.json文件中添加一些配置：

```sh
{
  // vscode默认启用了根据文件类型自动设置tabsize的选项
  "editor.detectIndentation": false,
  // 重新设定tabsize
  "editor.tabSize": 2,
  // 每次保存的时候自动格式化
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    // 使用eslint来fix，包括格式化会自动fix和代码质量检查会给出错误提示
    "source.fixAll.eslint": true
  },
  // 把prettier设置为vscode默认的代码格式化工具
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // vue文件的默认格式化工具选择prettier
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

配置到这里当我们在vscode编辑器中保存代码时，就可以自动格式化代码了。(如果不配置，vscode保存代码则无效)

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
