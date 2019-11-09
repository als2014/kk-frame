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
将root节点的下标为0，2，5的子节点显示。
留空第二个参数，将root节点的子节点全部显示
```
kk.showChildren(this.root, [0, 2, 5]);
kk.showChildren(this.root);
```
- 隐藏子节点
将root节点的下标为0，2，5的子节点隐藏。
留空第二个参数，将root节点的子节点全部隐藏
```
kk.hideChildren(this.root, [0, 2, 5]);
kk.hideChildren(this.root);
```

## 组件相关
- 图片设置
为this.node上的精灵组件设置图片
```
kk.setNodeImg(this.node, img);
```
- 网络加载图片
根据远程图片地址url为this.node上的精灵组件设置图片
```
let url = 'http://cdn.kuokuo666.com/wx-kuokuo.jpg';
kk.setNodeImgByUrl(this.node, url);
```
- 文本设置
为this.node上的文本组件设置文本
```
kk.setNodeLab(this.node, 'kuokuo');
```

## 网络请求
- http的get与post封装，示例：
```
let url = 'http://api.help.bj.cn/apis/youjia';
kk.request({
    url: url,
    type: 'GET',
    async: true,
    data: {},
    success: (data) => {
        console.log(data);
        console.log(JSON.parse(data));
    }
})

let url = 'https://api.apiopen.top/EmailSearch';
kk.request({
    url: url,
    type: 'POST',
    async: true,
    data: {
        number: 100
    },
    success: (data) => {
        console.log(data);
        console.log(JSON.parse(data));
    }
})
```
- 网页链接中参数获取
本地测试，用http://localhost:7456/?key=kuokuo打开预览，value为'kuokuo'
```
let value = kk.getQuery('key');
```

## 工具相关
- 随机整数，包括最小值与最大值
示例：随机 1 2 3 4 5
```
let n = kk.randomNumber(1, 5);
```
- 在给定范围内随机小数
示例：在1-5的范围内随机小数
```
let n = randomNumber(1, 5);
```
