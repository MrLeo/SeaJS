## 目录结构

---

```
`\SeaJS
| -- web：页面文件，如：index.html
| -- static：静态文件
	|-- css：样式文件
	|-- img：图片文件
	|-- js：业务相关的JS模块文件 
    |	|-- commen：业务相关的共通JS模块文件
    |	|-- data： 业务相关的data模块
	|	|-- pageController： 与web文件夹中的页面文件同名的模块，如：index.js
	|-- libs: 插件包
		|-- jquery： JQuery插件包
		|-- seajs： seaJS原始插件包
		|-- sweetalert： sweetalert提示、操作弹出层
		|-- tools： 与业务无关的工具包
		|-- wx：微信模块包
		|-- main.js： 页面调用seaJS入口
```