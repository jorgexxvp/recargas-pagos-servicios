<script lang="ts" setup>
const props = defineProps<{
  text: string
  img: string
}>()


</script>

<template>
  <button
    class="flex text-[15px] border-[1px] p-[5px] px-[12px] rounded-[20px] border-gray-300 hover:border-orange-500 items-center gap-[5px]	">
    <img :src=props.img alt="imageButton" class="w-[15px] h-[15px]" />
    {{ props.text }}
  </button>
</template>

