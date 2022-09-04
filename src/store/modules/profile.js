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
          editprofile: (state, user) => { 
            const index =state.user ;
            state.user.splice(index, 1, user);  
          },
          changepassword: (state, user) => {
            const index =state.user ;
            state.user.splice(index, 1, user);      
          },
      },


    actions:{
          async info(context) {
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Profile/info');
                //console.log(response);
              context.commit('info', response.data.data);
          },  
          async myOrders(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
           const response = await axios.get('/Profile/myorders');
             //console.log(response);
           context.commit('myOrders', response.data.data);
          },  
          async mytickets(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
          const response = await axios.get('/Profile/mytickets');
            //console.log(response);
          context.commit('mytickets', response.data.data);
          },  
          async editprofile( context ,data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Profile/editprofile', {
                name: data.name,
                phone: data.phone,
              })
              .then(response => {
              //console.log(response);
              context.commit('editprofile', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
            },
           async changepassword( context, data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Profile/changepassword', {
                oldpassword: data.oldpassword,
                newpassword: data.newpassword,
                newpassword_confirmation: data.newpassword_confirmation,
              })
              .then(response => {
              console.log(response);
              context.commit('changepassword', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
            },
         
    },

}
