import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const snack ={
    namespaced: true,
    state: {
        snacks:[],
        snacks1:[],
        snack:Object,
    },
      getters: {
        allsnacks: state => state.snacks,
        snackuser: state => state.snacks1,
        showsnack: state => state.snack,
      },

    mutations: {
          index : (state, snacks) => state.snacks = snacks,
          indexuser : (state, snacks1) => {
            state.snacks1 = snacks1;
           // console.log(snacks1)
         },
          store : (state, snack) => state.snacks.push(snack),
          show: (state, snack) => {
            state.snack = snack;
          },
          update: (state, snack) => {
              const index = state.snacks.findIndex(t => t.id === snack.id);
              if(index !== -1) {
                  state.snacks.splice(index, 1, snack);
              }        
          },
          deactivate:(state, snack) => {
            const index = state.snacks.findIndex(t => t.id === snack.id);
            if(index !== -1) {
                state.snacks.splice(index, 1, snack);
            } 
          },
          activate:(state, snack) => {
            const index = state.snacks.findIndex(t => t.id === snack.id);
            if(index !== -1) {
                state.snacks.splice(index, 1, snack);
            } 
          }
      },
    actions:{
          async index(context) {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Snack')
              .then((response) => {
                context.commit('index', response.data.data);
                this.loading = false;
              })
              .catch((error) => {
                console.log(error);
              });
               //console.log(response.data.data.data);
          },
          async indexuser(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            this.loading = true;
              const response = await axios.get('/Snack/indexuser')
              // console.log(response)
              .then((response) => {
                context.commit('indexuser', response.data.data);
                this.loading = false;
              })
              .catch((error) => {
                console.log(error);
              });
          },
          async store( context, createsnack) {
            // console.log(snack);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Snack', createsnack,
                {
                  headers: {
                      'Content-Type': 'multipart/form-data'
                  }
                })
                .then(response => {
                 context.commit('store', response.data.data);
                    
                })
                .catch(error => {
                  
                  console.log(error.response)
                });
              //console.log(response.data.data);
              
          },
          async show( context, snackid) {
           // console.log(snackid)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Snack/'+snackid,
            {
              headers: {
                'Content-Type': 'multipart/form-data'
                       }
            })
            // console.log(response.data.data)

            .then(response => {
              context.commit('show', response.data.data);
             })
             .catch(error => {
               console.log(error.response)
             });
           //console.log(response.data.data);
            // console.log(response.data.data);
        },
          async update( context, showsnack) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Snack/'+showsnack.id, showsnack,
              {
              headers: {
                'Content-Type': 'multipart/form-data'
                      }
              })
              .then(response => {
              console.log(response.data.data);
              context.commit('update', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
          },
          async activate( context, snack) {
            const response = await axios.get('/Snack/activate/'+snack.id);
            context.commit('activate', response.data.data);
            console.log(response.data.data);
          },
          async deactivate( context, snack) {
            const response = await axios.get('/Snack/deactivate/'+snack.id);
            context.commit('deactivate', response.data.data);
            console.log(response.data.data);
         },
    },

}
