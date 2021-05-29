<template>
    <div>
        <h1>screenlog.js</h1>
        <div>
            <a href="https://github.com/chinchang/screenlog.js">https://github.com/chinchang/screenlog.js</a>
        </div>
        <div>
            <button @click="onClick">console.log</button>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import "screenlog"

export default Vue.extend({
    mounted(){
        // console.log(window)
        // console.log(screenLog)
        // console.log(screenLog.init)
        screenLog.init();
    },
    methods:{
        onClick(){
            console.log("clicked")
            console.log("message");
        }
    }
})
</script>