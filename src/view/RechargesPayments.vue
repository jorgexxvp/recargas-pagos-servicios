<script lang="ts" setup>
import Button from '../components/Button.vue';
import Tab from '../components/Tab.vue';
import HeartIcon from '../assets/svg/heart.svg'
import ButtonOption from '../components/ButtonOption.vue';
import SmartphoneIcon from '../assets/svg/smartphone.svg'
import LightbulbIcon from '../assets/svg/lightbulb.svg'
import ScheduleIcon from '../assets/svg/schedule.svg'

const mocksCard = [{ name: "Recargas", image: SmartphoneIcon, url: '/recharges' },
{ name: "Pago de servicios", image: LightbulbIcon, url: '' },
{ name: "Historial de ganancias y operaciones", image: ScheduleIcon, url: '' }];

const title = "Recargas y pagos"
</script>

<template>
  <div>
    <Tab :name="title" />
    <div class="pt-[10px] px-[18px] relative">
      <div class="p-3 gap-3 flex flex-col">
        <div class="flex flex-row items-center gap-3">
          <p>Saldo virtual</p>
          <img src="../assets/svg/alert.svg" class="w-5 h-5" />
        </div>
        <div>
          <div class="flex flex-row items-center gap-3 mb-1">
            <p class="text-3xl font-bold">S/150.00</p>
            <img src="../assets/svg/reload.svg" class="w-5 h-5" />
          </div>
          <Button text="¿Como cargar mi salgo virtual?" :img=HeartIcon />
        </div>
        <p class="text-sm">Codigo para cargar tu saldo: </p>

      </div>
      <div class="bg-gray-200 w-[100%] h-[1px] mb-5 mt-3"></div>

      <div class="flex flex-col gap-5">
        <ButtonOption v-for="data in mocksCard" :text="data.name" :key="data.name" :logo="data.image" :url="data.url" />
      </div>

    </div>

  </div>
</template>