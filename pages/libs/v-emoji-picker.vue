<template>
    <div>
        <h1>v-emoji-picker</h1>
        <div class="margin-top:40px;">
            選択された絵文字のデータ:  <span v-if="selectedEmoji!==null">{{selectedEmoji}}</span>
        </div>
        <div style="margin-top:20px;">
            <VEmojiPicker @select="selectEmoji" />
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { VEmojiPicker } from 'v-emoji-picker'

export default Vue.extend({
    components:{
        VEmojiPicker
    },
    data(){
        return {
            selectedEmoji:null,
        }
    },
    methods: {
        selectEmoji(emoji:any) {
            console.log(emoji)
            this.selectedEmoji=emoji;
        }
    }
})
</script>