<template>
    <div>
        <h1>performant-array-to-tree</h1>
        <div>
            <a href="https://www.npmjs.com/package/performant-array-to-tree">https://www.npmjs.com/package/performant-array-to-tree</a>
        </div>
        <div>*表示にvue-json-viewer使用</div>
        <div style="display:flex;flex-direction:row;margin-top:40px;margin-left:40px;">
            <div>
                元データ:
                <div>
                    <VueJsonViewer :value="array"   :expand-depth="5"/>
                </div>
            </div>

            <div style="margin-left:80px;">
                加工データ:
                <div>
                    <VueJsonViewer :value="arrayToTree(array)"  :expand-depth="5" />

                </div>
            </div>
        </div>

    </div>
</template>

<script>
import Vue from 'vue'
import {arrayToTree} from "performant-array-to-tree"
import VueJsonViewer from "vue-json-viewer"

export default Vue.extend({
    components:{
        VueJsonViewer
    },
    data(){
        const array=[
        { id: "4", parentId: null, custom: "abc" },
        { id: "31", parentId: "4", custom: "12" },
        { id: "1941", parentId: "418", custom: "de" },
        { id: "1", parentId: "418", custom: "ZZZz" },
        { id: "418", parentId: null, custom: "ü" },
        ];

        return {
            array,
        }
        
    },
    methods:{
        arrayToTree,
        format(obj){
            return JSON.stringify(obj, null, 4);
        }
    }
})
</script>