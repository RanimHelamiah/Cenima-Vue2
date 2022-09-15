<template>
  <AdminLayout >
      <div class="overflow-x-auto">
        <div v-if="successMessage" class="success-message text-purple-900 dark:text-purple-100" >{{ successMessage }}</div>
          <div class="flex justify-between bg-gray-100 dark:bg-purple-900 m-4 lg:flex  md:flex ">
            <div class="flex justify-between ml-4 mt-4">
              <div class="mr-40">
                <p @click="isHidden1 = !isHidden1 " class="mr-20 text-purple-900 dark:text-purple-200">Grant Permission</p>
                <div v-if="!isHidden1 && isHidden && isHidden2" class="ml-8">
                    <form @submit.prevent="gr" class="mb-2 mt-4">
                        <input type="number" name="role_id"  style="width:250px;border-radius:6px;
                        border-width:2px;border-color:#340b56;margin-left:10px;" v-model="role_id"/>
                        <select name="permissions" id="permissions"  style="width:250px;height:40px;border-radius:6px;
                        border-width:2px;border-color:#340b56;margin-left:10px;" v-model="permission">
                            <option disabled>Select Permission</option>
                            <option   v-for="permission in allpermissions" :key="permission.id" :value="permission.name">
                            {{ permission.name}}
                            </option>
                    </select>
                    <button type="submit" class="ml-4 text-white bg-violet-700 hover:bg-violet-800 
                    focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                    text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800
                    border-2 border-purple-900 dark:border-purple-200"
                    style="width:90px; height:40px;">Grant</button>
                    </form>
                </div>
              </div>
                <div>
                  <p @click="isHidden2 = !isHidden2 " class="text-purple-900 dark:text-purple-200">Revoke Permission</p>
                  <div v-if="!isHidden2 && isHidden && isHidden1">
                      <form @submit.prevent="re" class="mb-2 mt-4">
                          <input type="number" name="role_id"  style="width:250px;border-radius:6px;
                          border-width:2px;border-color:#340b56;margin-left:10px;" v-model="role_id"/>
                          <select name="permission" id="permission"  style="width:250px;height:40px;border-radius:6px;
                          border-width:2px;border-color:#340b56;margin-left:10px;" v-model="permission">
                              <option disabled>Select Permission</option>
                              <option   v-for="permission in allpermissions" :key="permission.id" :value="permission.name">
                              {{ permission.name}}
                              </option>
                      </select>
                      <button type="submit" class="ml-4 text-white bg-violet-700 hover:bg-violet-800 
                      focus:ring-4 focus:ring-violet-300 font-medium rounded-lg text-md  sm:w-auto  
                      text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800
                      border-2 border-purple-900 dark:border-purple-200"
                      style="width:90px; height:40px;">Revoke</button>
                      </form>
                  </div>
                </div>
            </div>
            <div>
              <button name="new" v-if="isHidden" @click="isHidden = !isHidden" class="bg-purple-200 dark:bg-violet-900 m-4 mr-8 text-3xl text-purple-900 dark:text-purple-200  
                  font-semibold px-3 py-1 border-2 border-purple-900 dark:border-purple-200 rounded-lg 
                  hover:text-purple-400 outline-none exact ">
                  Add New Role
              </button>
              <div v-if="!isHidden" class="ml-20">
                <form @submit.prevent="add" class="mb-2 mt-4">
                    <input type="text"  placeholder="write the role name"  
                      style="width:250px;border-radius:6px;
                      border-width:2px;border-color:#340b56;"     
                      v-model="name" >
                    <button type="submit" class="text-white bg-violet-400 hover:bg-violet-200"
                    style="width:250px;height:40px; color:#340b56;border-radius:6px;
                      border-width:2px; border-color:#340b56;font-size:20px;padding-left:4px;
                      padding-right:4px; margin-left:20px;">Create</button>
                </form>
              </div>
            </div>
          </div>
          <div class="min-w-screen min-h-screen bg-purple-100 flex m-4 justify-center bg-purple-100 dark:bg-purple-900 overflow-hidden">
            <div class="w-full lg:w-5/6">
              <div class="bg-purple-300  dark:bg-purple-800 shadow-md rounded my-6" :key="role.id" v-for="role in allroles">
                <menu-accordion class="w-full">
                  <template v-slot:icon>
                    <Icon class="dark:text-purple-100 mt-2" icon="bi:person" />
                  </template>
                  <template v-slot:title><p class="text-purple-800 dark:text-purple-100 ">
                      {{role.name}}</p> 
                  </template>
                  <template v-slot:content>
                    <div class="ml-8 text-purple-800 dark:text-purple-100" :key="permission.id" v-for="permission in role.permissions">
                        {{permission.name}}
                    </div>
                    <button @click="destroy(role.id)"
                      class="w-full text-left block rounded-md p-3 hover:bg-purple-200 
                      dark:hover:bg-violet-500 text-purple-700 dark:text-purple-200">
                        delete
                    </button>
                  </template>
                </menu-accordion>
              </div>
            </div>
          </div>
      </div>
  </AdminLayout>
</template>

<script>
  import AdminLayout from '@/Layouts/AdminLayout'
  import { Icon } from "@iconify/vue"
  import { mapGetters,mapActions } from 'vuex'
  import MenuAccordion from '@/components/MenuAccordion.vue'
  export default {
    name: "rolemanager",
    data() {
      return {
        isOpen: false,
        isHidden: true,
        isHidden1: true,
        isHidden2: true,
      };
    },
    components: {
    AdminLayout,
    MenuAccordion,
    Icon
  },
  methods:{
    ...mapActions('role', ['indexrole','store','delete']),
    ...mapActions('permission', ['indexpermission','grant','revoke']),
      add(){
            const role = {
                'name': this.name,
            }
            this.store(role)
            this.name=""
            this.successMessage = 'Role Created Successfully!'
            this.isHidden = true
      },
      destroy(id) {
        this.delete(id)
      },
      toggleAccordion() {
          this.isOpen = !this.isOpen;
      },
      // gr(){
      //   const ga= {
      //         'role_id': this.role_id,
      //         'permission': this.permission,
      //     }
      //     this.grant(ga)
      //     .then(response => {
      //     this.role_id=""
      //     this.permission=""
      //     this.$router.push({ name: 'rolemanager' })
      //     this.successMessage="permission Granted Successfully!"
      //     this.isHidden1 = true
      //     })
      //     .catch(error => {
      //         console.log(error)

      //     })
      // },
      // re(){
      //     const ra= {
      //         'role_id': this.role_id,
      //         'permission': this.permission,
      //     }
      //     this.revoke(ra)
      //     .then(response => {
      //     this.role_id=""
      //     this.permission=""
      //     this.$router.push({ name: 'rolemanager' })
      //     this.successMessage="permission Revoked Successfully!"
      //     this.isHidden2 = true
      //     })
      //     .catch(error => {
      //         console.log(error)
      //     })
      // },
   },
   created() {
          this.indexrole()
          this.indexpermission()
      },
      computed:{
        ...mapGetters('role',{allroles: "allroles"}),
        ...mapGetters('permission',{allpermissions: "allpermissions"}),
      },
  }
</script>