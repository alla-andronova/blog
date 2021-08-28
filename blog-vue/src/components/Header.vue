<template>
<header>
    <div class="container">
    <img id="logo" alt="Students logo" src="../assets/student.png">
    <ul id="route"> 
    <router-link to="/">Home</router-link> |
    <router-link to="/AllPosts">All Posts</router-link> 
    </ul>
    <div class="button-container">
        <div>
        <!-- <router-link to="AddPost"></router-link> -->
        <!-- <v-btn to="/newpage">Next Page</v-btn> -->
        <!-- v-btn this.$router.push to="/addPost" -->
        <button 
            id="plus-btn"
            @click="openAddPage()"
            >➕</button>
            <!-- v-on:click="plusClicker" -->
        </div>
        <AddPost v-if="addPage" />

            <button
                id="user-btn"
                @click="clicker"
                >👨</button>
                
        </div>
        <Dropdown :options="options" v-if="dropdownState"/>
    </div>
    </header>
</template>

<script>
import Dropdown from './Dropdown.vue';
import AddPost from './AddPost.vue';

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
                dropdownState: false,
            }
        },
        components: {
            Dropdown,
            AddPost,
        },
        methods: {
            clicker () {
                return this.dropdownState = !this.dropdownState
            },
            // plusClicker () {
            //     // console.log('PlusCliker')
            // },
            openAddPage() {
                this.$router.push('./AddPost')
            }
        }
    }

</script>

<style>

header {
    display: flex;
    width: 100%;
    /* background: rgb(20, 20, 20); */
    text-align: center;
    justify-content: space-between;
    /* justify-content: center; */
    border: 3px solid #000000;
}

.container {
    display: flex;
    flex-direction: row;
  width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
}

#route {
    display: flex;
    flex: 1;
    justify-content: start;
    list-style: none;
}


/* #route > li {
    margin-left: 8px;
} */

#logo {
    width: 55px;
    height: 55px;
}

 .button-container {
    display: flex;
}

#plus-btn{
    width: 40px;
    height: 40px;
}
#user-btn {
    width: 40px;
    height: 40px;
}

#plus-btn, #user-btn {
    position: relative;
    border: none;
    background: rgb(208, 252, 127);
    margin-left: 8px;
    }


</style>