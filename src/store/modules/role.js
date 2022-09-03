import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


export const role ={
    namespaced: true,
    state: {
        roles:[],
        signedin:localStorage.getItem('access_token')?true:false
      },

      getters: {
        allroles: state => state.roles 
      },

    mutations: {
          indexrole : (state, roles) => state.roles = roles ,
          
          show: (state, role) => state.roles = state.roles.get(t => role.id == t.id),

          store : (state, role) => state.roles.push(role),
          grant: (state, role) => {
            const index =state.role ;
            state.user.splice(index, 1, role);  
          },
          revoke: (state, role) => {
            const index =state.role ;
            state.user.splice(index, 1, role);  
          },
          update: (state, role) => {
              const index = state.roles.findIndex(t => t.id === role.id);
              if(index !== -1) {
                  state.roles.splice(index, 1, role);
              }        
          },
          delete: (state, role) => state.roles = state.roles.filter(t => role.id !== t.id),
      },


    actions:{
          async indexrole(context) {
             axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/roles');
              //console.log(response)
              // console.log(response.data.data.data);
              context.commit('indexrole', response.data.data);
          },
          async show(context, role) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
             const response = await axios.get('/roles'+role.id, role);
             //console.log(response)
             // console.log(response.data.data.data);
             context.commit('show', response.data.data);
         },
          async store( context, role) {
              const response = await axios.post('/roles', role);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async update( context, role) {
              const response = await axios.put('/roles'+role.id, role);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async grant(context, data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/roles/grant',{
                user_id: data.user_id,
                role: data.role,
              })
              .then(response => {
              console.log(response);
              context.commit('grant', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
          },
          async revoke( context, data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/roles/revoke',{
                user_id: data.user_id,
                role: data.role,
              })
              .then(response => {
              console.log(response);
              context.commit('revoke', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
          },
          async delete( context, role) {
            console.log(role)
            const response = await axios.delete('/roles/'+role);
            context.commit('delete', role);
            console.log(response.data.data);
        }
    },

}
