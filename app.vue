<template>
  <div>
    Users:
    {{ data }}
  </div>
</template>

<script setup lang="ts">
  const { data } = await useFetch('/data');
</script>