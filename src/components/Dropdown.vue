<script setup lang="ts">
import {onMounted, ref} from 'vue';
import { useTestAmoStore } from '../store/strore';
import type {DropdownType} from "../types/types";

const store = useTestAmoStore();

const entities = ref([
  { label: 'Не выбрано', value: '' },
  { label: 'Сделка', value: 'deal' },
  { label: 'Контакт', value: 'contact' },
  { label: 'Компания', value: 'company' }
]);

const openedList = ref(false)
const selectedDropdownItem = ref(store.dropdownItem);


const updateSelectedDropdownItem = (item: DropdownType) => {
  store.updateDropdownValue(item);
};

onMounted(() => {
  updateSelectedDropdownItem(selectedDropdownItem.value);
});

</script>

<template>
  <div class="dropdown">
    <div class="dropdown__active" @click="openedList = true" >
      <span>{{ selectedDropdownItem.label }}</span>
    </div>
    <ul class="dropdown__select" :class="{ 'open': openedList }" @mouseleave="openedList = false">
      <li v-for="(entity, index) in entities" :key="index">
        <input type="radio" :value="entity.value" :id="String(index)" name="select" @change="updateSelectedDropdownItem(entity)" :checked="index === 0">
        <label :for="String(index)" @click="openedList = false">{{ entity.label }}</label>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.dropdown {
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 300px;
  width: 300px;
}

.dropdown__active {
  padding: 8px 12px;
  border-radius: 12px;
  border: 1px solid #c9c9c9;
  cursor: pointer;

  span {
    font-size: 16px;
    font-weight: 500;
  }
}

.dropdown__select {
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  background: white;
  z-index: 1;
  left: 0;
  top: 0;
  opacity: 0;
  visibility: hidden;
  user-select: none;
  transform: translateY(30px);
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 12px;
  overflow: hidden;
  transition: .3s;
  border: 1px solid #c9c9c9;

  input[type='radio'] {
    display: none;
  }

  label {
    display: block;
    width: 100%;
    padding: 12px 8px;
    cursor: pointer;
  }

  li {
    display: block;

    &:hover {
      background: #efefef;
    }
  }

  li:has(input:checked) {
    background: #e9e9e9;

    &:hover {
      background: #e9e9e9;
    }
  }

  &.open {
    opacity: 1;
    visibility: visible;
    user-select: auto;
    transform: translateY(26%);
  }
}

</style>