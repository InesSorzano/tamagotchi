<template>
    <div>
     <h1> Inicio de sesión </h1> 
     <form @submit.prevent="login">
        <input v-model="credentials.email" type="email" placeholder="Email" />
        <input v-model="credentials.password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
     </form>
    </div>
  
  </template>
  
  <script setup>
    definePageMeta({
        middleware: "unauthenticated",
    })

    const supaAuth = useSupabaseAuthClient().auth

    const credentials = reactive({
        email:"",
        password:""
    })
    const login = async () => {
        const { error } = await supaAuth.signInWithPassword(credentials)
        if (error){
            alert(error.message);
        }else{
            return navigateTo("/");
        }
    }
  </script>
  
  <style>
  </style>
  