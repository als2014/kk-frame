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

}
