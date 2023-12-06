<script lang="ts" setup>
import Button from '../components/Button.vue';
import Tab from '../components/Tab.vue';
import StartIcon from '../assets/svg/star.svg'
import PhoneIcon from '../assets/svg/phone.svg'
import HeartIcon from '../assets/svg/heart.svg'
import Card from '../components/Card.vue';
import NetflixIcon from '../assets/svg/netflix.svg'
import PaysafecardIcon from '../assets/svg/paysafecard.svg'
import BitelIcon from '../assets/svg/bitel.svg'
import ClaroIcon from '../assets/svg/claro.svg'

const title = "Recargas"
const mocksButton = [{  name: "Todas", image: HeartIcon  },
 { name: "Favoritas" ,image: StartIcon}, { name: "Telefonía", image: PhoneIcon }];

const mocksCard = [{ name: "Netflix", image: NetflixIcon }, { name: "Paysafecard" ,image: PaysafecardIcon}, { name: "Bitel", image: BitelIcon },{ name: "Claro", image: ClaroIcon}];
</script>

<template>
  <div>
    <Tab :name="title" />
    <div class="p-[15px]">
      <p class="text-[11px] font-[700]">Buscar Empresa</p>
      <div class="pb-[15px] relative">
        <input class="flex relative  p-[3px] font-[500] px-[15px] w-[100%] h-[60px] items-center gap-[5px] bg-gray-100" placeholder="ej. Culqui"/>
        <img src="../assets/svg/magnifyingGlass.svg" class="w-[25px] h-[25px] absolute top-[18px] right-[20px]" alt="MGlass">
      </div>
      
      <div class="flex flex-row justify-between mb-2">
        <Button v-for="data in mocksButton" :text="data.name" :key="data.name" :img="data.image" />
      </div>
      <div>
        <Card v-for="data in mocksCard" :name="data.name" :key="data.name" :logo="data.image" />
      </div>
    </div>
  </div>
</template>