<template>
<!-- <div> -->
<header>
    <div class="container">
    <img class="logo" alt="Students logo" src="../assets/student.png">
    <ul class="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/AllPosts">All Posts</router-link> 

        <!-- <li><a href="/" target="_blank">Home</a></li> |
        <li><a href="/" target="_blank">All posts</a></li> -->
    </ul>
    <div class="button-container" > 
        <button 
            class="plus-btn"
            v-on:click="plusClicker"
            >➕</button>

            <button
                class="user-btn"
                v-on:click="clicker"
                >👨</button>
            <Dropdown :options="options" v-if="dropdownState"/>
        </div>
    </div>
    </header>
    <!-- </div> -->
</template>

<script>
import Dropdown from './Dropdown.vue'

    export default {
        name: 'Header',
        props: {},
        data () {
            return {
                options: [
                    {
                        title: "My Posts", 
                        url: "my-posts"
                    },
                    {
                        title: "Log in",
                        url: "login"
                    }
                ],
                dropdownState: false
            }
        },
        components: {
            Dropdown
        },
        methods: {
            clicker () {
                return this.dropdownState = !this.dropdownState
            },
            plusClicker () {
                console.log('PlusCliker')
            }
        }
    }

</script>

<style>

.container {
  width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}
/* 
 header {
        display: flex;
        width: 100%;
        justify-content: space-between;
        border: 1px solid #430fff;
    }
.nav {
        display: flex;
        flex: 1;
        justify-content: start;
        list-style: none;
    }
.nav > li {
        margin-left: 0.5rem;
    } */
.logo {
        width: 65px;
        height: 65px;
    }
/* .button-container {
        display: flex;
    }
.plus-btn, .user-btn {
        position: relative;
        border: none;
        background: lightblue;
        margin-left: 0.5rem;
    }  */
</style>