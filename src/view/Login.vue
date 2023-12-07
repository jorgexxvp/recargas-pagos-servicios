<script lang="ts" setup>
  import {useApi} from "../stores/places/actions"
  const {getBalance}=useApi()
  
  console.log(getBalance().then((data) => data.data))
</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col w-96 h-96 bg-slate-500 justify-center items-center gap-10 p-8">
      <input class="flex relative  p-[3px] font-[500] px-[15px] w-[100%] h-[60px] items-center gap-[5px] bg-gray-100" placeholder="Ingresar Token"/>
      <button class="bg-gray-50 p-3 px-9 rounded-xl border-2 hover:border-orange-500 ">Acceder</button>
    </div>
  </div>
  
</template>