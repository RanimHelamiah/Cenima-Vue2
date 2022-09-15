import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const account ={
    namespaced: true,
    state: {
        account:[],
       // user:Object,
       // account:Object,
      },

      getters: {
        accountshow: state => state.account,
      },

    mutations: {
          show : (state, account) => {
            state.account = account;
          },
          Update: (state, account) => { 
            const index = state.snacks.findIndex(t => t.code === account.code);
            if(index !== -1) {
                state.snacks.splice(index, 1, account);
            }  
          },
          adminUpdate: (state, account) => {
            const index = state.snacks.findIndex(t => t.code === account.code);
            if(index !== -1) {
                state.snacks.splice(index, 1, account);
            }      
          },
      },


    actions:{
          async show(context) {
               axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Account/');
                //console.log(response);
              context.commit('show', response.data.data);
          }, 
          async Update( context ,data ) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Account/dis/update', {
                code: data.code,
                points: data.points,
              })
              .then(response => {
              console.log(response);
              context.commit('Update', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
           },
           async adminUpdate( context ,data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Account/ad/update', {
                code: data.code,
                points: data.points,
              })
              .then(response => {
              console.log(response);
              context.commit('adminUpdate', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
           },
         
    },

}
