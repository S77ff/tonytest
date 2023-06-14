<template>
    <v-container>
      <v-text-field
        v-model="search"
        label="Search"
        outlined
        dense
        clearable
      ></v-text-field>

      <v-data-table
        :headers="headers"
        :items="filteredItems"
        :search="search"
        :items-per-page="10"
        class="elevation-1"
      ></v-data-table>
    </v-container>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const search = ref('');
    const items = [
      { name: 'John Doe', date: '2023-05-20', location: 'New York' },
      { name: 'Jane Smith', date: '2023-06-05', location: 'London' },
      { name: 'Bob Johnson', date: '2023-06-10', location: 'Paris' },
      // Add more data objects as needed
    ];

    const headers = [
      { text: 'Name', value: 'name' },
      { text: 'Date', value: 'date' },
      { text: 'Location', value: 'location' },
    ];

    const filteredItems = computed(() => {
      if (!search.value) {
        return items;
      }

      const query = search.value.toLowerCase();
      return items.filter((item) =>
        item.name.toLowerCase().includes(query) ||
        item.location.toLowerCase().includes(query)
      );
    });

    return {
      search,
      headers,
      filteredItems,
    };
  },
};
</script>

<style>
  .elevation-1 {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.2),
      0 2px 10px 0 rgba(0, 0, 0, 0.15);
  }
</style>
