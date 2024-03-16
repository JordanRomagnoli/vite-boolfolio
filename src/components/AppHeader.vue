<script>
    export default {
        data() {
            return { 
                 
            }
        },
    }
    </script>

<template>
    <div class="container">
        <nav>
            <ul class="p-0">
                <li>
                    <router-link :to="{ name: 'home' }">
                        Home
                    </router-link>
                </li>
                
                <li>
                    <router-link :to="{ name: 'contact-us' }">
                        Contattaci
                    </router-link>
                </li>
            </ul>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/header.scss' as *;
</style>
