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
    } 

}
