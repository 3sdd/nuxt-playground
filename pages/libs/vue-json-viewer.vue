<template>
    <div>
        <h1>view-json-viewer</h1>
        <a href="https://github.com/chenfengjw163/vue-json-viewer">https://github.com/chenfengjw163/vue-json-viewer</a>

        <div>
            {{jsonData}}
        </div>
        <div class="my-4">
            view json data
        </div>
        <div class="bg-red-200 p-2">
            <json-viewer
                :value="jsonData"
                :expand-depth=5
                copyable
                boxed
                sort
            >
            </json-viewer>
        </div>



    </div>
</template>

<script>
import Vue from 'vue'
import JsonViewer from 'vue-json-viewer'
// // Import JsonViewer as a Vue.js plugin
// Vue.use(JsonViewer)
// // or 
// // components: {JsonViewer}


export default Vue.extend({
    components:{
        JsonViewer,
    },
    data(){
        const jsonData={
            user:{
                name:"username",
                age:20,
            },
            array:[
                'item1',
                'item2'
            ],
            d:null
        }
        return {
            jsonData
        }
    }
})
</script>