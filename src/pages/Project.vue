<script>

import Axios from 'axios';
import { store } from '../store';


    export default {
        data() {
            return {
                project: null,
                store
            }
        },
        methods: {
            formatDate(dateString) {
                let date = new Date(dateString);

                let day = date.getDate();
                let month = date.getMonth() + 1;
                let year = date.getFullYear();

                day = day < 10 ? '0' + day : day;
                month = month < 10 ? '0' + month : month;

                return day + '/' + month + '/' + year;
            },

            formatTime(dateString) {
                let date = new Date(dateString);

                let hours = date.getHours();
                let minutes = date.getMinutes();

                hours = hours < 10 ? '0' + hours : hours;
                minutes = minutes < 10 ? '0' + minutes : minutes;

                return hours + ':' + minutes;
            },
        },
        created(){
            Axios.get(`http://127.0.0.1:8000/api/project/${this.$route.params.slug}`)
            .then((res) => {
                this.project = res.data.results;
            })
        }
    }
</script>

<template>
    <section id="show-guest">

        <div class="row g-0">
            <div class="col d-flex justify-content-center">
                <div class="my-card">
                    <div class="my-card-body">
                        <h1 class="text-center mb-5">
                            {{ project.title }}
                        </h1>

                        <p class="mb-3">
                            {{ project.content }}
                        </p>

                        <div class="img-frame">
                            <img :src="'http://127.0.0.1:8000/storage/' + project.cover_img">
                        </div>

                        <div class="info">
                        Creato il: 
                        <span>
                            {{ formatDate(project.created_at) }}
                        </span>
                        <br>
                        Alle: 
                        <span>
                            {{ formatTime(project.created_at)  }}
                        </span>
                    </div>

                    <div v-if="project.updated_at != project.created_at">
                        Modificato il: 
                        <span>
                            {{ formatDate(project.updated_at) }}
                        </span>
                        <br>
                        Alle: 
                        <span>
                            {{ formatTime(project.updated_at) }}
                        </span>
                    </div>
                    
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
   #show-admin, #show-guest{
    height: 100vh;
    padding-top: 40px;
    .my-card {
        margin-top: 40px;
        max-width: 1200px;
        width: 1200px;
        min-height: 500px;
        background-color: rgba(255, 255, 255, 0.351);
        backdrop-filter: blur(6px);
        padding: 15px 20px;
        border: 2px solid black;
            .my-card-body {

                display: flex;
                flex-direction: column;
                height: 100%;
                h1{
                    font-weight: 500;
                    margin-bottom: 20px;
                }

                p{
                    height: 100%;
                    margin-bottom: 40px;
                }

                
                .img-frame{

                    width: 100%;
                    object-fit: cover;
                    object-position: center;
                    margin-bottom: 40px;
                    img{
                        width: 100%;
                    }
                }
                

                .info{

                    width: 25%;
                    span {
                        margin-left: 5px;
                        font-weight: 700;
                    }
                }
            }
    }
}


</style>
