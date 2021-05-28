<template>
    <div>
        <h1>is-svg</h1>
        <div>
            <p>
                <a href=">https://www.npmjs.com/package/is-svg">https://www.npmjs.com/package/is-svg</a>
            </p>
            <table class="table-auto">
                <tr>
                    <th>テキスト</th>
                    <th>SVGか？</th>
                </tr>
                <tr v-for="(item,i) in items" :key="i">
                    <td>{{item}}</td>
                    <td>{{isSvg(item)}}</td>
                </tr>
            </table>

        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import isSvg from "is-svg"

export default Vue.extend({
    data(){
        const items=[
            '<svg xmlns="http://www.w3.org/2000/svg"><path fill="#00CD9F"/></svg>',
            '<svg xmlns="http://www.w3.org/2000/svg"></svg>',
            '<span>text</span>'
        ]
        return {
            items
        }
    },
    mounted(){
        
    },
    methods:{
        isSvg(str){
            return isSvg(str);
        }
    }
})
</script>