<script>
    export default {
        data() {
            return { 
                isImageVisible:{
                    title: '',
                    visibility: false,
                },
            }
        },
        methods: {
            showImg(title){
                this.isImageVisible.title = title;
                this.isImageVisible.visibility = true;
            },

            hiddenImg(){
                this.isImageVisible.title = '';
                this.isImageVisible.visibility = false;
            }
        },
        props: {
            project: Object,
        }
    }
    </script>

<template>
    <div  class="col-12 col-xs-6 col-sm-4 col-md-3 ">
        <div class="my-card">
            <div class="my-card-body d-flex flex-column justify-content-between h-100">
                <h3 class="text-center">
                    {{ project.title }}
                </h3>

                <p>
                    {{ project.content }}
                </p>

                
                <a v-if="project.type != null">
                    {{ project.type.name }}
                </a>
                
                <span v-else>
                    -
                </span>

                <div>
                    
                    <span v-if="project.tags != null">
                        <a
                            v-for="(singleTag, i) in project.tags"
                         class="tag">
                            {{ singleTag.name }}
                        </a>
                    </span>
                    
                    <span v-else>
                        -
                    </span>
                </div>    

                <router-link
                :to="{ name: 'single-project', params: { slug: project.slug } }"
                @mouseenter="showImg(project.title)"
                @mouseleave="hiddenImg()"
                class="show-button align-self-baseline">
                    Mostra
                </router-link>

                <div class="img-frame" :class="{
                    'show' : isImageVisible.title == project.title && isImageVisible.visibility == true,
                }">
                    <img :src="'http://127.0.0.1:8000/storage/' + project.cover_img">
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .my-card {
        background-color: rgba(255, 255, 255, 0.351);
        backdrop-filter: blur(6px);
        padding: 20px; 
        height: 450px;
        border: 2px solid black;
        margin-bottom: 24px;
        position: relative;
        .my-card-body {


            h3{
                font-size: 1.3rem;
                font-weight: 600;
                color: black;
                margin-bottom: 8px;
            }

            p{
                padding: 10px;
                overflow-y: auto;
                font-size: 0.8em;
                height: 60%;
            }

            a{
                padding: 8px 10px;
                color: #001f3f;
                font-weight: 400;
                margin-bottom: 10px;
            }

            span{

                .tag{
                    padding: 8px 10px;
                    color: white;
                    display: inline-block;
                    font-size: 0.7rem;
                    background-color: black;
                    margin-bottom: 40px;
                    margin-right: 5px;

                }
            }
            
            .show-button {
                background-color: transparent;
                border: 2px solid black;
                color: black;
                text-decoration: none;
                padding: 5px 12px;
                cursor: pointer;
            }
    
            .show-button:hover {
                background-color: black;
                color: white;
                transition: background-color 0.5s ;
            }
            
            .img-frame{
                width: 250px;
                object-fit: cover;
                object-position: center;
                position: absolute;
                left: 20px;
                bottom: -100px;
                z-index: 1000;
                display: none;
                &.show{
                    display: block;
                }
                img{
                    width: 100%;
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
