<script setup lang="ts">
import Dropdown from './components/Dropdown.vue';
import Button from './components/Button.vue';
import ResultArea from './components/View.vue';
import {onMounted} from "vue";
import {useTestAmoStore} from "./store/strore";
import { getAccessToken } from './services/services';

const store = useTestAmoStore();

onMounted(async () => {
  try {
    const res = await getAccessToken('31550986');
    localStorage.setItem('domain', res.data.base_domain);
    store.updateToken(res.data.access_token);
  } catch (error) {
    console.error('Error fetching access token:', error);
  }
});

</script>

<template>
  <main>
    <section>
      <Dropdown />
      <Button />
    </section>
    <ResultArea/>
  </main>
</template>


<style>
main {
  max-width: 960px;
  margin-inline: auto;
  padding-inline: 16px;
  margin-block: 40px;

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
}

section {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
