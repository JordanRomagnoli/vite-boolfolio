<script>

import Axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            project: null,
            store,
            counter: 0,
        }
    },
    methods: {
        nextButton(){
            console.log(this.store.projects.length - 1);

            console.log(this.counter);

            if(this.counter < this.store.projects.length - 1){
                this.counter ++;
            }else{
                this.counter = 0;
            }
        },

        prevButton(){
            console.log(this.store.projects.length - 1);

            console.log(this.counter);

            if(this.counter > 0 ){
                this.counter --;
            }else{
                this.counter = this.store.projects.length - 1;

            }
        },
    },
    created(){
        
    },
    
}
</script>

<template>
    <div class="frame">
        <div class="left">
            <button class="button-left" @click="prevButton()">
                <
            </button>
            <transition name="fade" mode="out-in">
                <img
                v-if="store.projects[counter]"
                :src="'http://127.0.0.1:8000/storage/' + store.projects[counter].cover_img"
                :key="counter"
                alt="">
            </transition>
            <button class="button-right" @click="nextButton()">
                >
            </button>
        </div>
        <div class="right">
            <div v-for="(singleProject, i) in store.projects" class="preview" :class="{
                'selected' : i == counter,
            }">
                <img :src="'http://127.0.0.1:8000/storage/' + singleProject.cover_img">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .4s ease-in-out;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }


    .frame{
        display: flex;
        justify-content: space-between;
        height: 450px;
        margin-bottom: 80px;
        .left{
            width: 75%;
            border: 2px solid black;
            object-fit: cover;
            object-position: center;
            position: relative;
            &:hover .button-left, &:hover .button-right{
                opacity: 1;
                backdrop-filter: blur(2.5px);
                width: 50px;
            }
            img{
                width: 100%;
                height: 100%;
            }
            .button-left, .button-right{
                background-color: rgba(255, 255, 255, 0.216);
                height: 100%;
                position: absolute;
                border: none;
                width: 20px;
                font-size: 1.5rem;
                backdrop-filter: blur(0);
                opacity: 0;
                transition: backdrop-filter .8s ease-in-out,
                    opacity .2s ease-in-out,
                    background-color .3s ease-in-out,
                    width .4s ease-in-out;
                &:hover{
                    background-color: rgba(255, 255, 255, 0.778);
                }
            }
            .button-left{
                left: 0;
                top: 0;
                bottom: 0;
            }
            .button-right{
                right: 0;
                top: 0;
                bottom: 0;
            }
        }
        .right{
            width: 20%;
            border: 2px solid black;
            display: flex;
            flex-direction: column;
            .preview{
                height: calc(100% / 3);
                width: 100%;
                object-fit: cover;
                object-position: center;
                padding: 0px;
                filter: brightness(0.5);
                transition: all .3s ease-in-out;
                &.selected{
                    padding: 5px;
                    filter: brightness(1);
                }
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>
