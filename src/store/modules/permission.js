import axios from 'axios'

axios.defaults.baseURL = 'http://127.0.0.1:8000/api'


export const permission ={
    namespaced: true,
    state: {
        permissions:[],
        permission:Object,
        signedin:localStorage.getItem('access_token')?true:false
      },

      getters: {
        allpermissions: state => state.permissions 
      },

    mutations: {
          indexpermission : (state, permissions) => state.permissions = permissions ,
          
          show: (state, permission) => state.permissions = state.permissions.get(t => permission.id == t.id),

          store : (state, permission) => state.permissions.push(permission),
          grant: (state, permission) =>{
            const index =state.permission ;
            state.user.splice(index, 1, permission);  
          },
          revoke: (state, permission) =>{
            const index =state.permission ;
            state.user.splice(index, 1, permission);  
          },
          update: (state, permission) => {
              const index = state.permissions.findIndex(t => t.id === permission.id);
              if(index !== -1) {
                  state.permissions.splice(index, 1, permission);
              }        
          },
          delete: (state, permission) => state.permissions = state.permissions.filter(t => permission.id !== t.id),
      },


    actions:{
          async indexpermission(context) {
             axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/permissions');
              //console.log(response)
              // console.log(response.data.data.data);
              context.commit('indexpermission', response.data.data);
          },
          async show(context, permission) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
             const response = await axios.get('/permissions'+permission.id, permission);
             //console.log(response)
             // console.log(response.data.data.data);
             context.commit('show', response.data.data);
         },
          async store( context, permission) {
              const response = await axios.post('/permissions', permission);
              // console.log(response.data.data);
              context.commit('store', response.data.data);
          },
          async update( context, permission) {
              const response = await axios.put('/permissions'+permission.id, permission);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async grant(context, data) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/permissions/grant',{
                role_id: data.role_id,
                permission: data.permission,
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
              const response = await axios.post('/permissions/revoke',{
                role_id: data.role_id,
                permission: data.permission,
              })
              .then(response => {
              console.log(response);
              context.commit('revoke', response.data.data);
              })
              .catch(error => {
                console.log(error.response.data)
              });
          },
          async delete( context, permission) {
            console.log(permission)
            const response = await axios.delete('/permissions/'+permission);
            context.commit('delete', permission);
            console.log(response.data.data);
        }
    },

}
