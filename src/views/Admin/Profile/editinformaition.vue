<template>
     <div class="container px-6 mx-auto">
      <div
        class="flex flex-col text-center md:text-left md:flex-row h-screen justify-evenly md:items-center"
      >
        <div class="flex flex-col w-full">
          <div>
            <svg
              class="w-20 h-20 mx-auto md:float-left fill-stroke text-purple-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              ></path>
            </svg>
          </div>
          <h1 class="text-5xl text-purple-800 font-bold">Edit Information</h1>
        </div>
        <div class="w-full md:w-full lg:w-9/12 mx-auto md:mx-0">
          <div class="bg-purple-200
           p-10 flex flex-col w-full shadow-xl rounded-xl">
            <h2 class="text-2xl font-bold text-purple-800 text-left mb-5">
              New Information
            </h2>
            <form @submit.prevent="edit(userinfo)" class="w-full">
              <div id="input" class="flex flex-col w-full my-5">
                <label for="name" class="text-purple-500 mb-2"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  name="name"
                  v-model="userinfo.name"
                  placeholder="Please insert your username"
                  class="appearance-none border-2 border-purple-100 rounded-lg px-4 py-3 
                  placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-600 
                  focus:shadow-lg"
                />
              </div>
              <div id="input" class="flex flex-col w-full my-5">
                <label for="password" class="text-purple-500 mb-2"
                  >Phone</label
                >
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  v-model="userinfo.phone"
                  placeholder="Please insert your phone"
                  class="appearance-none border-2 border-purple-100 rounded-lg px-4 py-3 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:shadow-lg"
                />
              </div>
              <div id="button" class="flex flex-col w-full my-5">
                  <button
                    type="submit"
                    class="w-full py-4 bg-violet-600 rounded-lg text-green-100"
                  >
                    <div class="flex flex-row items-center justify-center">
                      <div class="font-bold">Edit Information</div>
                    </div>
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapGetters,mapActions } from 'vuex'

export default ({
    name: "editinformation",
    methods:{
      ...mapActions('profile',['info','editprofile']),
      edit(userinfo){
            const user={
              name: userinfo.name,
              phone: userinfo.phone,
            }
          this.editprofile(user)
            this.$router.push({ name: 'myprofile'})
            this.name=""
            this.phone=""
        },
     },
    created() {
          this.info()
    },
    computed:{
        ...mapGetters('profile', {userinfo: "userinfo"}),     
    },
})
</script>
