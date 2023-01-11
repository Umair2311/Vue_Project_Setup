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

    handlePosts().then((res) => (this.postsData = res));
  },
};
</script>
<template>
  <div>
    <div class="p-24 flex flex-wrap justify-center">
      <div
        v-for="item in postsData"
        :key="item.id"
        class="border-2 p-2 w-96 m-3 text-emerald-500 text-xl border-emerald-500"
      >
        <p><span class="text-white font-bold">Id:</span> {{ item.id }}</p>
        <h3>
          <span class="text-white font-bold">Title: </span> {{ item.title }}
        </h3>
        <h4><span class="text-white font-bold">Body: </span>{{ item.body }}</h4>
      </div>
    </div>
  </div>
</template>
