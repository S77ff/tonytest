<template>
  <div>
    <h4 class="title">{{ pageTitle }}</h4>
    <v-text-field
      v-model="search"
      label="Search"
      outlined
    ></v-text-field>
    <v-data-table
      :headers="headers"
      :items="filteredUsers"
      :search="search"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pageTitle: 'Platforms',
      search: '',
      headers: [
        { text: 'Title', value: 'title' },
        { text: 'Name', value: 'name' },
        { text: 'Username', value: 'username' },
        { text: 'Display Name', value: 'display' },
        { text: 'Status', value: 'status' }
      ],
      users: [
        {
          title: "Miss",
          name: "Ava Green",
          username: "agre@test2.com",
          display: "Ava Green",
          status: "Active"
        },
        {
          title: "Dr",
          name: "Jennie Henderson",
          username: "jhen@test2.com",
          display: "Jennie Henderson",
          status: "Active"
        }
      ]
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user => {
        return Object.values(user).some(value =>
          String(value).toLowerCase().includes(this.search.toLowerCase())
        );
      });
    }
  }
};
</script>
