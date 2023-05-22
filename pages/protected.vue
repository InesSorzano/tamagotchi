<template>
    <div>
        <h1> Protected </h1>
    </div>
</template>

<script setup>
    definePageMeta({
        middleware: "authenticated",
    })
</script>