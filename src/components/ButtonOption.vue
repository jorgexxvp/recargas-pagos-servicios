<script lang="ts" setup>
const props = defineProps<{
  text: string
  logo: string
  url: string
}>()


</script>

<template>
  <router-link to="/recharges">
    <button
      class="flex text-[17px] p-[5px] px-[12px] rounded-[5px] bg-gray-100 items-center gap-[20px] w-[100%] h-16 relative ">
      <figure
        class="flex flex-row content-center items-center justify-center bg-orange-500 h-8 w-[11%] raduis rounded-[5px]">
        <img :src=props.logo alt="imageButton" class="w-5 h-5" />
      </figure>
      <p class="w-[89%] text-start font-semibold">{{ props.text }}</p>
    </button>
  </router-link>
</template>

