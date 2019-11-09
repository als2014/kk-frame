let kk = {
    
    /**
     * 为给定下标子节点的 active 置 true,注意下标从 0 开始.
     * 下标数组留空即为全部置 true.
     * @param {cc.Node} parent 
     * @param {number[]} indexArray 
     */
    showChildren (parent, indexArray) {
        if (!indexArray) {
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].active = true;
            }
        } else {
            for (let i = 0; i < indexArray.length; i++) {
                parent.children[indexArray[i]].active = true;
            }
        }
    },

    /**
     * 为给定下标子节点的 active 置 false,注意下标从 0 开始.
     * 下标数组留空即为全部置 false.
     * @param {cc.Node} parent 
     * @param {number[]} indexArray 
     */
    hideChildren (parent, indexArray) {
        if (!indexArray) {
            for (let i = 0; i < parent.children.length; i++) {
                parent.children[i].active = false;
            }
        } else {
            for (let i = 0; i < indexArray.length; i++) {
                parent.children[indexArray[i]].active = false;
            }
        }
    },

    /**
     * 修改节点上 Sprite 组件的图片
     * @param {cc.Node} node 
     * @param {cc.SpriteFrame} spriteFrame 
     */
    setNodeImg (node, spriteFrame) {
        node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    },

    /**
     * 修改节点上 Sprite 组件的图片，图片为网络加载
     * @param {cc.Node} node 
     * @param {string} url 
     */
    setNodeImgByUrl (node, url) {
        cc.loader.load({
            url: url,
            type: 'png'
        }, (err, tex) => {
            node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(tex);
        })
    },

    /**
     * 修改节点上 Label 组件的文字
     * @param {cc.Node} node 
     * @param {string} string 
     */
    setNodeLab (node, string) {
        node.getComponent(cc.Label).string = string;
    },

    /**
     * 随机整数，包括 min 与 max
     * @param {number} min 
     * @param {number} max 
     */
    randomInt (min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    },

    /**
     * 在 min 与 max 之间随机小数
     * @param {number} min 
     * @param {number} max 
     */
    randomNumber (min, max) {
        return min + Math.random() * (max - min);
    },

    /**
     * 获取网址传入指定 id 的内容
     * @param {string} id 
     */
    getQuery (id) {
        let reg = new RegExp("(^|&)"+ id +"=([^&]*)(&|$)");
        let r = window.location.search.substr(1).match(reg);
        if(r != null) {
            return unescape(r[2]); 
        }
        return null;
    },

    /**
     * 发送 http 请求
     * options 包括 url，type，async，data，success 参数，详见 GitHub 文档
     * @param {object} options 
     */
    request (options) {
        let xhr = null;
        let params = formsParams(options.data);
        if(window.XMLHttpRequest){
            xhr = new XMLHttpRequest()
        } else {
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if(options.type == "GET"){
            xhr.open(options.type, options.url + "?" + params, options.async);
            xhr.send(null)
        } else if(options.type == "POST"){
            xhr.open(options.type, options.url, options.async);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(params);
        }
        xhr.onreadystatechange = () => {
            if(xhr.readyState == 4 && xhr.status == 200){
                options.success(xhr.responseText);
            }
        }
        function formsParams (data) {
            let arr = [];
            for (let prop in data) {
                arr.push(prop + "=" + data[prop]);
            }
            return arr.join("&");
        }
    },

}
