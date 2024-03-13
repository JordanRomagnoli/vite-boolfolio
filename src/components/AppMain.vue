
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
    <section id="index-guest">
        <div class="container">
            <div class="row">

                <SingleProject
                v-for="(project, i) in store.projects"
                :project = "project"
                />
                
            </div>
            <div class="frame-navigator">
                <button class="first-page" :disabled="store.currentPage <= 1"  @click="$emit('nextPage', --store.currentPage)">
                    <<
                </button>

               <span>{{ store.currentPage }}</span>

                <button class="last-page" :disabled="store.currentPage >= store.lastPage" @click="$emit('nextPage', ++store.currentPage)">
                    >>
                </button >
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../assets/scss/main.scss' as *;
</style>
