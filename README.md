## 初始化项目配置文件
```sh
npm init -y
```

## 安装开发依赖
```sh
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react css-loader file-loader html-webpack-plugin  style-loader url-loader webpack webpack-dev-server babel-preset-stage-2 --save-dev
```

## 生产依赖
```sh
npm install jquery react react-dom bootstrap --save
```

## 组件的分类 
### 容器类组件
会有自己的状态和事件处理等逻辑

### 展示类组件
木偶组件
只是用来展示数据，没有自己的状态和逻辑

