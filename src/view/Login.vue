<script setup lang="ts">
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';
import { useProvidersStore } from '../stores/providersStore';
import { useRouter } from 'vue-router';
import { useBalanceStore } from '../stores/balanceStore';

const auth = useAuthStore();
const token = ref(auth.token);
const router = useRouter();

const providerData = useProvidersStore();
const balanceData = useBalanceStore();

const handleAccess = async () => {
  auth.setToken(token.value);
  const { status } = await providerData.dispatchGetProviders();
  await balanceData.dispatchGetBalance();

  if (String(status) === "200") {
    router.push('/rechargesPayments');
  }
};


</script>

<template>
  <div class="flex justify-center items-center h-screen">
    <div class="flex flex-col w-96 h-96 bg-slate-500 justify-center items-center gap-10 p-8">
      <input v-model="token"
        class="flex relative p-[3px] font-[500] px-[15px] w-[100%] h-[60px] items-center gap-[5px] bg-gray-100"
        placeholder="Ingresar Token" />
      <button @click="handleAccess" class="bg-gray-50 p-3 px-9 rounded-xl border-2 hover:border-orange-500">
        Acceder
      </button>
    </div>
  </div>
</template>