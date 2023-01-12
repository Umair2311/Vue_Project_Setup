<script lang="ts">
interface Posts {
  id: number;
  title: string;
  body: string;
}
export default {
  data() {
    return {
      postsData: [] as Posts[],
      searchPost: "",
      filterPosts: [] as Posts[],
    };
  },
  mounted() {
    async function handlePosts() {
      const postsResponse = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const posts = await postsResponse.json();
      return posts;
    }

    handlePosts().then((res) => {
      this.postsData = res;
      this.filterPosts = res;
    });
  },
  methods: {
    handleChangePosts() {
      if (!this.searchPost) {
        this.filterPosts = this.postsData;
      }
      let tempPosts = this.postsData;
      this.filterPosts = tempPosts.filter((post) => {
        return (
          post.title.toLowerCase().includes(this.searchPost.toLowerCase()) ||
          post.body.toLowerCase().includes(this.searchPost.toLowerCase())
        );
      });
    },
  },
};
</script>
<template>
  <div class="p-24">
    <div class="text-center my-4">
      <h2 class="text-5xl">Posts</h2>
      <div class="mt-4">
        <span class="mr-4 text-2xl">Search From:</span>
        <input
          class="text-black"
          v-model="searchPost"
          @input="handleChangePosts"
          placeholder="Search Title"
        />
      </div>
    </div>
    <div class="flex flex-wrap justify-center">
      <div
        v-for="item in filterPosts"
        :key="item.id"
        class="border-2 p-2 lg:w-96 w-full m-3 text-emerald-500 text-xl border-emerald-500"
      >
        <p>
          <span class="text-white font-bold mr-3">Id:</span>
          <span class="text-yellow-500">{{ item.id }}</span>
        </p>
        <h3>
          <span class="text-white font-bold">Title: </span> {{ item.title }}
        </h3>
        <h4><span class="text-white font-bold">Body: </span>{{ item.body }}</h4>
      </div>
    </div>
  </div>
</template>
