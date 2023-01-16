<script lang="ts">
interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: number;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
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
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      console.log(data, "data");

      return data;
    }
    handleApi().then((res) => (this.userData = res));
  },
  computed: {
    handleSearch(): Users[] {
      if (!this.searchData) {
        return this.userData;
      }
      return this.userData.filter((user) => {
        return (
          user.name.toLowerCase().includes(this.searchData.toLowerCase()) ||
          user.username.toLowerCase().includes(this.searchData.toLowerCase())
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
          <h3>{{ item.name }}</h3>
          <h4>{{ item.username }}</h4>
          <h5>{{ item.email }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
