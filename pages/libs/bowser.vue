<template>
    <div>
        <h1>bower</h1>
        <a href="https://www.npmjs.com/package/bowser">https://www.npmjs.com/package/bowser</a>


        <div v-if="browser">
            <div class="p-2 border">
                <div>
                    結果
                </div>
                <div>
                    {{browser}}
                </div>
            </div>

            <div class="p-2 border mt-4">
                <div>
                    個別
                </div>
                <ul>
                    <li>ブラウザ名: {{browser.browser.name}}</li>
                    <li>バージョン: {{browser.browser.version}}</li>
                    <li>OS名: {{browser.os.name}}</li>
                    <li>OSバージョン: {{browser.os.version}}</li>
                    <li>OSバージョン名: {{browser.os.versionName}}</li>
                    <li>プラットフォーム: {{browser.platform.type}}</li>
                    <li>エンジン？: {{browser.engine.name}}</li>
                    
                </ul>
            </div>

        </div>

    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Bowser from "bowser"

export default Vue.extend({
    data(){
        return {
            browser:null as Bowser.Parser.ParsedResult|null,
        }
    },
    mounted(){
        this.browser=Bowser.parse(window.navigator.userAgent);

    }
})
</script>