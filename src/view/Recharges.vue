<script setup lang="ts">
import Button from '../components/Button.vue';
import Tab from '../components/Tab.vue';
import ErrorMessage from '../components/ErrorMessage.vue';
import { onMounted } from 'vue';
import StartIcon from '../assets/svg/star.svg'
import PhoneIcon from '../assets/svg/phone.svg'
import HeartIcon from '../assets/svg/heart.svg'
import Card from '../components/Card.vue';
import { useProvidersStore } from '../stores/providersStore';
import { useAuthStore } from '../stores/authStore';

const title = "Recargas";
const mocksButton = [
  { name: "Todas", image: HeartIcon },
  { name: "Favoritas", image: StartIcon },
  { name: "Telefonía", image: PhoneIcon }
];
const providerData = useProvidersStore();
const { loading } = useAuthStore();

console.log(providerData) // este si me trae data
console.log(providerData.companies) // este no me trae

onMounted(async () => {
  await providerData.dispatchGetProviders();
  console.log((providerData.companies), "mounted")
});
console.log((providerData.companies),)

</script>

<template>
  <div>
    <div v-if="!loading">
      <ErrorMessage />
    </div>
    <div v-else>
      <Tab :name="title" />
      <div class="p-[15px]">
        <p class="text-[11px] font-[700]">Buscar Empresa</p>
        <div class="pb-[15px] relative">
          <input class="flex relative  p-[3px] font-[500] px-[15px] w-[100%] h-[60px] items-center gap-[5px] bg-gray-100"
            placeholder="ej. Culqui" />
          <img src="../assets/svg/magnifyingGlass.svg" class="w-[25px] h-[25px] absolute top-[18px] right-[20px]"
            alt="MGlass">
        </div>

        <div class="flex flex-row justify-between mb-2">
          <Button v-for="data in mocksButton" :text="data.name" :key="data.name" :img="data.image" />
        </div>
        <div v-if="providerData.companies.length > 0">
          <Card v-for="data in providerData.companies" :name="data.company" :key="data._id" :logo="data.image" />
        </div>
      </div>
    </div>

  </div>
</template>