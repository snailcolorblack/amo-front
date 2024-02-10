<script setup lang="ts">
import {ref} from 'vue';
import {useTestAmoStore} from '../store/strore';


const store = useTestAmoStore();
const amoResponse = ref(store.amoResponse);
const dropdownItem = ref(store.dropdownItem);
</script>

<template>
  <div class="view">
    <div class="view__heading">
      <h2 v-if="dropdownItem.value === ''">Ничего не выбрано</h2>
      <h2 v-else>После нажатия на кнопку я обновлю список на {{ dropdownItem.label }}</h2>
    </div>
    <table class="view__table" v-if="amoResponse.length">
      <thead>
        <tr v-for="(entity, index) in amoResponse" :key="index">
          <td>{{ Object.keys(entity) }}</td>
        </tr>
      </thead>
      <tbody>
      <tr v-for="(entity, index) in amoResponse" :key="index">
        <td>{{ Object.values(entity) }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.view {
  margin: 42px 0;
}

.view__table {
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #f8f8f8;

  thead {
    background: #f8f8f8;
  }

  tbody {
    td:first-child {
      border-right: 2px solid #f8f8f8;
    }
  }

  tr {
    display: flex;
    align-items: center;
  }

  td {
    display: block;
    padding: 12px;
    flex: 1 auto;

    &:first-child {
      flex: 0 120px;
    }
  }
}
</style>