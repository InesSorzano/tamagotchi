<template>
  <div>
    Vida = {{ testStore.currentLife }}
    Comida =  <p id="food" >{{ testStore.currentFood }}</p>
    Felicidad = {{ testStore.currentHappiness }}
    Descanso = {{ testStore.currentSleep }}
    {{ testStore.upper }}
    <button @click="testStore.setMessage('holiwis')">New message</button>

  </div>
<NuxtLayout :name="default">A</NuxtLayout>
</template>

<script setup>
  
  import { useTestStore } from '../stores/TestStore';
  const testStore = useTestStore();

  const client = useSupabaseClient()
  const {data}= await useAsyncData('status', async () => {
    const {data} = await client.from('status').select('food')
    console.log(data)
  })
  setTimeout(()=>{
    testStore.setFood(testStore.currentFood - 1);
  },1000)

  console.log("holiii");
</script>

<style>
</style>
