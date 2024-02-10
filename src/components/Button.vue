<script setup lang="ts">
import {useTestAmoStore} from '../store/strore';
import {ref} from "vue";
import Loader from "../components/Loader.vue";
import {createEntity} from "../services/services"

const store = useTestAmoStore();

const selectedDropdownItem = ref(store.dropdownItem);
const accessToken = ref(store.accesToken)
const amoResponse = ref(store.amoResponse);
const loading = ref(false);



const handleClickAction = async (type: string) => { 
  try {
    loading.value = true;  
    const res = await createEntity(String(selectedDropdownItem.value.value), String(accessToken.value), String(localStorage.getItem('domain')))
    store.updateAmoResponse([res]);
  }
  catch (error) {
    console.log(`Get ${type} error:`, error)
  }
  finally {
    loading.value = false;
  }
};

</script>

<template>
  <button class="button"
          @click="handleClickAction(selectedDropdownItem.value as string)"
          :class="{active:selectedDropdownItem.value !==''}"
          :disabled="selectedDropdownItem.value ==''">
    <Loader v-if="loading"/>
    <span v-else>
      Создать
    </span>
  </button>
</template>

<style scoped>

button {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  border-radius: 12px;
  cursor: pointer;
  border: 1px solid #007bff;
  background: #007bff;
  color: #fff;

  &:disabled {
    border-color: #c9c9c9;
    color: #c9c9c9;
    background: none;
    cursor: not-allowed;
  }
}
</style>