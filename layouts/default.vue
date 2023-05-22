<template>
    <ul>
      <li><NuxtLink to="/">inicio</NuxtLink></li>
      
      <li v-if="!user"><NuxtLink to="/login">login</NuxtLink></li>

      <li v-else><NuxtLink to="/protected">protect</NuxtLink></li>
    </ul>
    <slot/>

</template>

<script setup>
  const user = useSupabaseUser()
</script>