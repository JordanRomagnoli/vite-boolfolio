<script>

import axios from 'axios';
import { store } from '../store';


export default {
    data() {
        return {
            store,
            name: '',
            email: '',
            message: '',
            success: false,
        }
    },
    methods:{
        sendMessage(){
            if(
                this.name != null && this.name != '' && this.name.length <= 64
                &&
                this.email != null && this.email != '' && this.name.length <= 255
                &&
                this.message.length <= 2048
            ){
                axios.post('http://127.0.0.1:8000/api/contacts',{
                    name: this.name,
                    email: this.email,
                    message: this.message
                })
                .then((res) => {
                    console.log(res.data);
                    this.success = res.data.success;
                })
                .catch((err) => {
                    allert('ERRORE : dati non validi');
                });
            }
            else{
                alert('INSERISCI I DATI');
            }
        }
    }
    
}
</script>

<template>
    <section id="contact">
        <div class="container">
            <form v-if="success != true" method="POST" @submit.prevent="sendMessage()">                

                <!-- Name -->
                <div>
                    <label for="name">
                        Nome
                    </label>
                    <input type="text" id="name" v-model="name" name="name" placeholder="Inserisci il tuo nome" maxlength="64" required>
                </div>

                <!-- Email Address -->
                <div>
                    <label for="email">
                        Email
                    </label>
                    <input type="email" id="email" v-model="email" name="email" placeholder="Inserisci la tua email" maxlength="255" required>
                </div>

                <!-- Email Address -->
                <div>
                    <label for="message">
                        Messaggio
                    </label>
                    <textarea name="message" id="message" v-model="message" cols="80" maxlength="2048" rows="8"></textarea>
                </div>

                <div class="mt-4">
                    <button type="submit">
                        Invia
                    </button>
                </div>

            </form>

            <div v-else class="d-flex justify-content-center align-items-center pt-5">
                <div class="success">
                    <span>
                        Messaggio inviato correttamente 
                    </span>
                </div>
            </div>

        </div>
    </section>
</template>

<style lang="scss" scoped>
    #contact{
    padding-top: 40px;
    height: 100vh;
    .container{

        form{
            
            div{
                display: flex;
                justify-content: start;
                border: 1px solid rgba(205, 205, 205, 0.508);
                padding: 20px;
                flex-direction: column;

                label{
                    margin-bottom: 20px;
                    display: block;
                    font-weight: bolder;
                    font-size: 1.3rem;
                }
    
                input{
                    width: 100%;
                    background-color: transparent;
                    border: 2px solid black;
                    padding: 7px 20px;
                    margin-bottom: 10px;
                }

                textarea{
                    background-color: transparent;
                    padding: 20px;
                    border: 2px solid black;
                }
            }

            .terms{
                border: none;
                    label{
                        width: 15%;
                        display: inline;
                        span{
                            font-size: 0.9rem;
                            text-transform: none;
                            font-weight: lighter;
                            color: black;
                            margin-right: 8px;
                        }
                    }
                    input{ 
                        display: inline;
                        width: 20px;
                    }
            }
    
    
            div{
                a{
                    margin-bottom: 8px;
                    color: #001f3f;
                }
    
                button{
                    background-color: black;
                    color: white;
                    font-weight: 600;
                    font-size: 0.9rem;
                    padding: 10px 20px;
                    border: none;
                }
            }
    
        }

        .success{
            width: 350px;
            height: 170px;
            line-height: 170px;
            text-align: center;
            border: 2px solid greenyellow;
            background-color: rgba(172, 255, 47, 0.428);
            color: green;
        }
    }
}
    
</style>
