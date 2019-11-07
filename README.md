# kk-frame框架
KUOKUO独立维护的一款微型CocosCreator开发框架。对API的扩充与封装。  

**目标**：让开发更加便捷，让多行代码缩为一行！  

**使用方法**
- 复制脚本到项目
- 勾选导入为插件
- 在脚本中使用kk

## 节点相关
- 显示子节点
```
// 原版
this.root.children[0].active = true;
this.root.children[2].active = true;
this.root.children[5].active = true;

// kk框架
kk.showChildren(this.root, [0, 2, 5]);
// 数组留空为全部显示
kk.showChildren(this.root);
```
- 隐藏子节点
```
// 原版
this.root.children[0].active = false;
this.root.children[2].active = false;
this.root.children[5].active = false;

// kk框架
kk.hideChildren(this.root, [0, 2, 5]);
// 数组留空为全部隐藏
kk.hideChildren(this.root);
```

## 组件相关
- 设置Sprite组件图片
```
// 原版
let sprite = this.node.getComponent(cc.Sprite);
sprite.spriteFrame = img;

// kk框架,如果节点上没有Sprite组件则自动添加
kk.setNodeImg(this.node, img);
```
- 设置Label组件文本
```
// 原版
let lab = node.getComponent(cc.Label);
lab.string = 'kuokuo';

// kk框架,如果节点上没有Label组件则自动添加
kk.setNodeLab(this.node, 'kuokuo');
```

## 工具相关
- 随机整数，包括最小值与最大值
```
let n = kk.randomNumber(1, 5);
```
- 随机小数
```
let n = randomNumber(1, 5);
```
