# kk-frame框架
KUOKUO维护的一款微型CocosCreator开发框架。对API的扩充与封装。  

**目标**：要让兄弟们撸代码更爽更快！让多行代码缩为一行。  

文件夹显示版本只是KUOKUO验证框架使用版本，其他版本也能使用。  

**使用方法**


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

## 事件相关
