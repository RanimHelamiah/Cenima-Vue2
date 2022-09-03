import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const profile ={
    namespaced: true,
    state: {
        user:[],
        // user:Object,
      },

      getters: {
        userinfo: state => state.user,
      },

    mutations: {
          info : (state, user) => {
            state.user = user;
          },
          myOrders : (state, user) => {
            state.user = user;
          },
          mytickets : (state, user) => {
            state.user = user;
          },
          editprofile: (state, movie) => {
          },
          changepassword: (state, user) => {
              const index = state.user.findIndex(t => t.id === user.id);
              if(index !== -1) {
                  state.user.splice(index, 1, user);
              }        
          },
      },


    actions:{
          async info(context) {
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Profile/info');
                //console.log(response);
              context.commit('info', response.data.data);
          },
          async activate( context, user) {
            const response = await axios.get('/User/activate/'+user.id);
            context.commit('activate', response.data.data);
            console.log(response.data.data);
         },
          async deactivate( context, user) {
            const response = await axios.get('/User/deactivate/'+user.id);
            context.commit('deactivate', response.data.data);
            console.log(response.data.data);
         },
         
    },

}
