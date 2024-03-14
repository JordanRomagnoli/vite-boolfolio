<script>

import { store } from '../store';
import SingleProject from '../components/SingleProject.vue';

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
            <div class="row justify-content-center ">
                <div class="frame-navigator">
                    <button class="first-page" :disabled="store.currentPage <= 1"  @click="$emit('nextPage', --store.currentPage)">
                        <<
                    </button>

                    <button 
                    v-for="(singlePage, i=1) in store.lastPage"
                    @click="$emit('nextPage', i+1)"
                    >
                        {{ i+1 }}
                    </button>
    
    
                    <button class="last-page" :disabled="store.currentPage >= store.lastPage" @click="$emit('nextPage', ++store.currentPage)">
                        >>
                    </button >
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>

    #index-admin, #index-guest{

        padding-top: 80px;
        height: 100vh;
        .row{

            justify-content: center;
            
        }

        .frame-navigator{
            max-width: 450px;
            border: 2px solid black;
            height: 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            & > *{
                padding: 0 8px;
                color: black;
                border: 0;
                background-color: transparent;
                height: 100%;
                cursor: pointer;
                width: calc(100% / 5);
                &:hover{
                    background-color: black;
                    color: white;
                }

            }
        }
        }

        ::-webkit-scrollbar {
        width: 5px;
        }

        ::-webkit-scrollbar-track {
        background-color: #cccccc;
        }

        ::-webkit-scrollbar-thumb {
        background-color: #a8a8a8;
    }
</style>
