
<script>

import { store } from '../store';
import SingleProject from './SingleProject.vue';


    export default {
        data() {
            return { 

                store 
            }
        },
        components: {
            SingleProject,
        }
    }
    </script>

<template>
    <router-view></router-view>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>
