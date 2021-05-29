<template>
    <div>
        <h1>country-code-emoji</h1>

        <div>
            <div>
                <a href="https://github.com/thekelvinliu/country-code-emoji">https://github.com/thekelvinliu/country-code-emoji</a>
            </div>
            <div>
                emoji:<span>{{countryCodeEmoji('JP')}}</span> <br>
                country code:<span>{{emojiCountryCode('🇯🇵')}}</span>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { countryCodeEmoji, emojiCountryCode } from 'country-code-emoji';

export default Vue.extend({
    data(){
        return {

        }
    },
    methods:{
        countryCodeEmoji,
        emojiCountryCode,
    }
})
</script>