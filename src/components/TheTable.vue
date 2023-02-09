<template>
  <table class="table-auto bg-transparent w-full border-collapse select-none">
    <thead class="sticky top-0 bg-white">
      <tr>
        <th
          v-for="(cell, index) in headCells"
          :key="index"
          class="px-6 py-3 border-t border-zinc-200 whitespace-nowrap font-semibold text-xs text-zinc-400 text-left"
          :class="{
            'hover:bg-slate-50 hover:cursor-pointer': cell.isSortable,
          }"
          @click="() => cell.isSortable && handleSort()"
        >
          {{ cell.text }}
        </th>
      </tr>
    </thead>

    <tbody class="border-t-2">
      <tr
        v-for="(row, rowIndex) in rows"
        :key="rowIndex"
        class="hover:bg-slate-50 hover:cursor-pointer"
      >
        <th
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="px-6 py-4 border-y border-zinc-200 whitespace-nowrap text-xs font-semibold text-zinc-600 text-left"
        >
          <div
            class="inline rounded px-2 py-1"
            :style="{ 'background-color': cell.color }"
          >
            {{ cell }}
          </div>
        </th>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  rows: {
    type: Array,
    required: true,
  },
});

const emit = defineEmits(['sort']);

const headCells = [
  { text: 'Email' },
  { text: 'First Name' },
  { text: 'Last Name' },
  { text: 'Primary Group' },
  { text: 'Phone Number' },
  { text: 'Hours Studied', isSortable: true },
];

const handleSort = () => emit('sort');
</script>
