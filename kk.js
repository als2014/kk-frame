let kk = {
    
    /**
     * 为给定下标子节点的active置true,注意下标从0开始.
     * 下标数组留空即为全部置true.
     * @param {cc.Node} parent 
     * @param {number[]} indexArray 
     */
    showChildren: function (parent, indexArray) {
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
     * 为给定下标子节点的active置false,注意下标从0开始.
     * 下标数组留空即为全部置false.
     * @param {cc.Node} parent 
     * @param {number[]} indexArray 
     */
    hideChildren: function (parent, indexArray) {
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
     * 修改节点上Sprite组件的图片,如果没有Sprite组件则添加
     * @param {cc.Node} node 
     * @param {cc.SpriteFrame} spriteFrame 
     */
    setNodeImg: function (node, spriteFrame) {
        let sp = node.getComponent(cc.Sprite);
        if (!sp) {
            sp = node.addComponent(cc.Sprite);
        }
        sp.spriteFrame = spriteFrame;
    },

    /**
     * 修改节点上Label组件的文字,如果没有Label组件则添加
     * @param {cc.Node} node 
     * @param {string} string 
     */
    setNodeLab: function (node, string) {
        let lab = node.getComponent(cc.Label);
        if (!lab) {
            lab = node.addComponent(cc.Label);
        }
        lab.string = string;
    },

    /**
     * 随机整数，包括 min 与 max
     * @param {number} min 
     * @param {number} max 
     */
    randomInt: function (min, max) {
        return Math.floor(min + Math.random() * (max - min + 1));
    },

    /**
     * 在 min 与 max 之间随机小数
     * @param {number} min 
     * @param {number} max 
     */
    randomNumber: function (min, max) {
        return min + Math.random() * (max - min);
    } 

}
