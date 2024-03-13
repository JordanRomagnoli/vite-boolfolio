<script>

/*
    Importazione componente
*/
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import Axios from 'axios';
import { store } from './store';

export default {
    data() {
        return { 

            store,

        }
    },
    /*
        Dichiarazione dei componenti all'interno dell'oggetto
    */
    components: {

        AppHeader,
        AppMain,
        AppFooter
    },
    methods: {
        getResponse(page) {
            Axios.get('http://127.0.0.1:8000/api/project',{
                params: {
                    page: page,
                }
            })
            .then((res) => {

                this.store.projects = res.data.results.data;
                this.store.lastPage = res.data.results.last_page; // Ultima Pagina


                if(this.store.currentPage < 1){

                    this.store.currentPage = 1;

                }
                
                if(this.store.currentPage > this.store.lastPage){

                    this.store.currentPage = this.store.lastPage;
                }else{

                    this.store.currentPage = res.data.results.current_page;
                }
                
                

            })            
        },

    },
    created(){
        this.getResponse();
    }
}
</script>

<template>
    <div>
        
        <header>
            <AppHeader/>
        </header>
        <main>
            <AppMain @nextPage="getResponse" />
        </main>
        <footer>
            <AppFooter/>
        </footer>
        
    </div>
</template>

<style lang="scss">
    @import "bootstrap/scss/bootstrap";

    *{
    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;
    }

    body{
        background: linear-gradient(135deg, hsla(0, 0%, 100%, 1) 0%, hsla(293, 39%, 84%, 1) 100%);
    }

</style>
