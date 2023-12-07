<script lang="ts" setup>


//Props
const props = defineProps<{
  name: string
  logo: string
}>()


</script>

<template>
  <div class="flex flex-row items-center p-4 relative top-0 justify-between border-b-[2px]">
    <div class="flex flex-row items-center gap-[10px]">
      <img :src=props.logo alt="BackIcon" class="w-[32px] h-[32px]" />
      <p class="mx-auto">{{ props.name }} </p>
    </div>
    <img src="../assets/svg/star.svg" class="w-[32px] h-[32px]" />
  </div>
</template>

