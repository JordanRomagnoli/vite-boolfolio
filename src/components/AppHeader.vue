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
                <li class="nav-item">
                    <a class="nav-link" href="">Dashboard</a>
                </li>
                <li>
                    <a href="">I nostri progetti</a>
                </li>
            </ul>

        </nav>
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/header.scss' as *;
</style>
