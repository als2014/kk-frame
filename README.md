# kk-frame框架
KUOKUO独立维护的一款微型CocosCreator开发框架。对API的扩充与封装。  

**目标**：让开发更加便捷，让多行代码缩为一行！  

**使用方法**
- 复制脚本到项目
- 勾选导入为插件
- 在脚本中使用kk

# 使用文档
## 节点相关
- 显示子节点
```
// 下标装入数组
kk.showChildren(this.root, [0, 2, 5]);
// 数组部分留空为全部显示
kk.showChildren(this.root);
```
- 隐藏子节点
```
// 下标装入数组
kk.hideChildren(this.root, [0, 2, 5]);
// 数组部分留空为全部隐藏
kk.hideChildren(this.root);
```

## 组件相关
- 图片设置
```
// 传入带有精灵组件的 cc.Node 以及图片 cc.SpriteFrame
kk.setNodeImg(this.node, img);
```
- 网络加载图片
```
// 传入带有精灵组件的 cc.Node 以及图片地址 url
let url = 'http://cdn.kuokuo666.com/wx-kuokuo.jpg';
kk.setNodeImgByUrl(this.node, url);
```
- 文本设置
```
// 传入带有文本组件的 cc.Node 以及文本 string
kk.setNodeLab(this.node, 'kuokuo');
```

## 工具相关
- 随机整数，包括最小值与最大值
```
let n = kk.randomNumber(1, 5);
```
- 在给定范围内随机小数
```
let n = randomNumber(1, 5);
```
