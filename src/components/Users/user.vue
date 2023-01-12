<script lang="ts">
interface Users {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
}

export default {
  data() {
    return {
      userData: [] as Users[],
      searchData: "",
    };
  },
  mounted() {
    async function handleApi() {
      const response = await fetch("https://reqres.in/api/users?page=1");
      const data = await response.json();
      return data;
    }
    handleApi().then((res) => (this.userData = res.data));
  },
  computed: {
    handleSearch(): Users[] {
      if (!this.searchData) {
        return this.userData;
      }
      return this.userData.filter((user) => {
        return (
          user.first_name
            .toLowerCase()
            .includes(this.searchData.toLowerCase()) ||
          user.last_name.toLowerCase().includes(this.searchData.toLowerCase())
        );
      });
    },
  },
};
</script>

<template>
  <div class="p-24">
    <div class="text-center my-4">
      <h2 class="text-5xl">Users</h2>
      <div class="mt-4">
        <span class="mr-4 text-2xl">Search From:</span>
        <input
          class="text-black"
          v-model="searchData"
          placeholder="Search Name"
        />
      </div>
    </div>
    <div>
      <div class="flex flex-wrap justify-center">
        <div
          v-for="item in handleSearch"
          :key="item.id"
          class="border-2 p-2 w-96 m-3 text-green-500 font-bold text-xl border-green-500"
        >
          <p class="text-white">{{ item.id }}</p>
          <h3>{{ item.first_name }}</h3>
          <h4>{{ item.last_name }}</h4>
          <h5>{{ item.email }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
