import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const price ={
    namespaced: true,
    state: {
        prices:[],
        price:Object,
        signedin:localStorage.getItem('access_token')?true:false,
    },
      getters: {
        allprices: state => state.prices,
      },
    mutations: {
          index : (state, prices) => state.prices = prices,
          update: (state, price) => {
              const index = [state.prices.id];
              if(index !== -1) {
                  index.splice(index, 1, price);
              }        
          },
      },
    actions:{
          async index(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Price')
              .then((response) => {
                context.commit('index', response.data.data);
              })
              .catch((error) => {
                console.log(error);
              });
           },
          async update( context, allprices) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Price/'+allprices.id, allprices);
              context.commit('update',response.data.data);
          },
    },

}
