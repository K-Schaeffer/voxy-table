<template>
  <main class="container mx-auto p-10 shadow-sm rounded-md bg-white">
    <TheSearchBar v-model="currentFilter" />
    <TheTable :rows="currentRows" @sort="toggleSort" />
  </main>
</template>

<script setup>
import { reactive, ref, computed, watch } from "vue";

import TheTable from "../components/TheTable.vue";
import TheSearchBar from "../components/TheSearchBar.vue";

import mockData from "../data/mockData.json";

let rows = reactive(mockData);
const currentFilter = ref("");
const currentSort = ref(null);

const currentRows = computed(() => {
  if (currentFilter.value.length === "") {
    return rows;
  }

  return rows.filter((row) => {
    return (
      row.email.toLowerCase().includes(currentFilter.value.toLowerCase()) ||
      row.primaryGroup.toLowerCase().includes(currentFilter.value.toLowerCase())
    );
  });
});

watch(currentSort, (oldSort, newSort) => {
  if (!oldSort && newSort) {
    rows = rows.sort((a, b) => a.hoursStudied - b.hoursStudied);

    return;
  }

  rows = rows.sort((a, b) => b.hoursStudied - a.hoursStudied);
});

const toggleSort = () => {
  currentSort.value = !currentSort.value;
};
</script>
