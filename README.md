## 问题
编译失败, 报错 TypeError: Cannot read property 'content' of null

## 复现步骤
- 配置webpack的cache.type为filesystem, 开启缓存
- 初始化一个Vue3+Typescript的项目, 建立一个根单文件组件并使用ts版setup语法糖, 建立一个子单文件组件并使用ts版setup语法糖, 在根组件中导入子组件
- 第一次编译, 正常通过能运行
- 后续编译, 编译失败, 报下述错误
```
TypeError: Cannot read property 'content' of null
    at Object.selectBlock (D:\Temp\vue3\1\node_modules\vue-loader\dist\select.js:25:45)
    at Object.loader (D:\Temp\vue3\1\node_modules\vue-loader\dist\index.js:60:25)
```

经过跟踪排查, 发现在前行插入下述代码, 多次编译都能正常通过, 但我感觉这不是解决之道
``` js
        if (incomingQuery.type === 'script' && !descriptor.scriptCompiled && descriptor.scriptSetup) {
            descriptor.scriptCompiled = compiler_sfc_1.compileScript(descriptor, {
                babelParserPlugins: options.babelParserPlugins,
            })
        }
```

## 期望
编译通过

## 实际
编译失败

