<template>
<div class="intro">
    <body>
    <form class="box" action="register" method="post"> 
        <h1>Sign Up</h1>
        <input type="text" v-model="email" placeholder="Username">
        <input type="text" v-model="nickname" placeholder="Email">
        <input type="password" v-model="password" placeholder="Password">
        <input type="submit" name="" value="Register" @click="register">
    </form>
    </body>
</div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
data () {
    return {
    email: '',
    password: '',
    nickname:'',
    error: null
    }
},
methods: {
    async register () {
        try {
            const response = await AuthenticationService.register({
            email: this.email,
            password: this.password
            })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
        this.$router.push({
        name: 'home'
        })
        } catch (error) {
        this.error = error.response.data.error
        }
    }
}
}
</script>

<style scoped>

    body{
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        background: #34495e;   
    }

    .box{
        font-family: 'New Rocker', cursive;
        width: 400px;
        padding: 40px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0,0,0,.7);
        text-align: center; 
    }
    
    .box h1{
        color: white;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 30px;
    }

    .box input[type = "text"],.box input[type = "password"]
    {
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #3498db;
        padding: 14px 10px;
        width: 300px;
        outline: none;
        color: white;
        border-radius:24px;
        transition: 0.25px;
    }

    .box input[type = "text"]:focus,.box input[type = "password"]:focus
    {
        width: 280px;
        border: #2ecc71;
        text-align: center;
    }

    .box input[type = "submit"]
        {
        border: 0;
        background: none;
        display: block;
        margin: 20px auto;
        text-align: center;
        border: 2px solid #2ecc71;
        padding: 14px 40px;
        outline: none;
        color: white;
        border-radius:24px;
        transition: 0.25px;
        cursor: pointer;
    }

    .box input[type = "submit"]:hover{
        background: #2ecc71;
    }



</style>