<script lang="ts">
interface Users{
    id:number
    firstName: string
    lastName: string
    email: string
}

export default{
    data(){
        return {
            listData: []
        }
    },
     mounted(){
        async function handleApi(){
              const response =  await fetch("https://reqres.in/api/users?page=1")
              const data = await response.json()
              return data;

          }
    handleApi().then(res => this.listData = res.data)
    }
}
</script>

<template>
    <div>
        <div class="p-24 flex flex-wrap justify-center">
            <div v-for="item in listData" :key="item.id" class="border-2 p-2 w-96 m-3">
                <p>{{ item.id }}</p>
                <h3>{{ item.first_name }}</h3>
                <h4>{{ item.last_name }}</h4>
                <h5>{{ item.email }}</h5>
            </div>
        </div>
    </div>
</template>