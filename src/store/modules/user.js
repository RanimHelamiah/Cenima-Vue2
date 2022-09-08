import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const user ={
    namespaced: true,
    state: {
        users:[],
        user:Object,
      },

      getters: {
        allusers: state => state.users,
      },

    mutations: {
          index : (state, users) => {
            state.users = users;
          },
          deactivate:(state, user) => {
            const index = state.users.findIndex(t => t.id === user.id);
            if(index !== -1) {
                state.users.splice(index, 1, user);
            } 
          },
          activate:(state, user) => {
            const index = state.users.findIndex(t => t.id === user.id);
            if(index !== -1) {
                state.users.splice(index, 1, user);
            } 
          }
      },


    actions:{
          async index(context) {
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/User');
                // console.log(response.data.data);
              context.commit('index', response.data.data);
          },
          async activate( context, user) {
            const response = await axios.get('/User/activate/'+user.id);
            context.commit('activate', response.data.data);
            // console.log(response.data.data);
         },
          async deactivate( context, user) {
            const response = await axios.get('/User/deactivate/'+user.id);
            context.commit('deactivate', response.data.data);
            // console.log(response.data.data);
         },
         
    },

}
