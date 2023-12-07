<script lang="ts" setup> 

  //Props
  const props = defineProps<{
    name:string
  }>()

  const emits = defineEmits<{
    (event: 'onChangedSize', value: string): void
  }>()

</script>

<template>
  <div class="flex flex-row items-center p-4 bg-gray-191919 rounded-b-2xl relative top-0">
    <router-link to="/">
      <img src="../assets/svg/back.svg" alt="BackIcon" class="w-6 h-6" />
    </router-link>
    <p class="mx-auto text-white">{{ props.name }} </p>
  </div>
</template>

