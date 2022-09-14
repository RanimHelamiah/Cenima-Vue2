import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const order ={
    namespaced: true,
    state: {
        orders:[],
        order:Object
      },

      getters: {
        allorders: state => state.orders,
        apporders: state => state.orders
      },

    mutations: {
          ordered : (state, orders) => state.orders = orders,
          approved : (state, orders) => state.orders = orders,
          store : (state, order) => state.orders.push(order),
          show: (state, order) => {
            state.order = order;
          },
          approve:(state, order) => {
            const index = state.orders.findIndex(t => t.id === order.id);
            if(index !== -1) {
                state.orders.splice(index, 1, order);
            } 
          },
          received:(state, order) => {
            const index = state.orders.findIndex(t => t.id === order.id);
            if(index !== -1) {
                state.orders.splice(index, 1, order);
            } 
          },
      },


    actions:{
          async ordered(context) {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Order/ordered')
              .catch(error => {
                console.log(error.response)
              });
            //   console.log(response.data.data.data);
              context.commit('ordered', response.data.data.data);
          },
          async approved(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('/Order/approved');
            // console.log(response.data.data.data);
            context.commit('approved', response.data.data.data);
        },
          async store( context, data) {
              const response = await axios.post('/Order', {
                order_items: data.order_items,
                total_price: data.total_price,
              });
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async show( context, orderid) {
           // console.log(orderid)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Order/'+orderid)
            // console.log(response.data.data)

            .then(response => {
              context.commit('show', response.data.data);
             })
             .catch(error => {
               console.log(error.response)
             });
            },
          async approve( context, order) {
            const response = await axios.put('/Order/approve/'+order.id);
            context.commit('approve', response.data.data);
            console.log(response.data.data);
          },
          async received( context, order) {
            const response = await axios.put('/Order/received/'+order.id);
            context.commit('received', response.data.data);
            console.log(response.data.data);
          },
    },

}
