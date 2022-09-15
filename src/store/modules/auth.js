import axios from 'axios'

export const auth ={
    namespaced: true,
    state: {
      userauth:localStorage.getItem('user_info'),
      token: localStorage.getItem('access_token') || null,
      isAdmin: localStorage.getItem('isAdmin')=="true"? true : false,
      isVendor: localStorage.getItem('isVendor')=="true"? true : false,
      isReception: localStorage.getItem('isReception')=="true"? true : false,
      isDistributer: localStorage.getItem('isDistributer')=="true"? true : false,
      isUser: localStorage.getItem('isUser')=="true"? true : false,
      signedin:localStorage.getItem('access_token')?true:false,
    },
    getters: {
      loggedIn(state) {
        return state.token  !== null;
      },
      isAdmin: state=>state.isAdmin,
      isVendor: state=>state.isVendor,
      isReception: state=>state.isReception,
      isDistributer: state=>state.isDistributer,
      isUser: state=>state.isUser,
      gettoken: state => state.token,
    },
    mutations: {
      retrieveToken(state, userdata) {
        state.signedin=true;
        let userroles = userdata.user.original.data.roles;
        let roles = userroles.map(role => role.name);

        let is_Admin = roles.find(role => role == 'Admin'); 
        let is_Vendor = roles.find(role => role == 'Vendor'); 
        let is_Reception = roles.find(role => role == 'Reception'); 
        let is_Distributer = roles.find(role => role == 'Distributor'); 
        let is_User = roles.find(role => role == 'User'); 
        if(is_Admin === 'Admin'){
          localStorage.setItem('isAdmin', true)
        }else{
          localStorage.setItem('isAdmin', false)
        }
        if(is_Vendor === 'Vendor'){
          localStorage.setItem('isVendor', true)
        }else{
          localStorage.setItem('isVendor', false)
        }
        if(is_Reception === 'Reception'){
          localStorage.setItem('isReception', true)
        }else{
          localStorage.setItem('isReception', false)
        }
        if(is_Distributer === 'Distributor'){
          localStorage.setItem('isDistributer', true)
        }else{
          localStorage.setItem('isDistributer', false)
        }
        if(is_User === 'User'){
          localStorage.setItem('isUser', true)
        }else{
          localStorage.setItem('isUser', false)
        }
        state.token = userdata.token.token;
      },

      destroyToken(state) {
        state.token = null
        state.signedin=false
      },
    },
    actions: {
      retrieveToken(context, credentials) {
        return new Promise((resolve, reject) => {
          axios.post('http://127.0.0.1:8000/api/login', {
            email: credentials.email,
            password: credentials.password,
          })
            .then(response => {
              const token = response.data.data.token.token
              localStorage.setItem('access_token', token)
              context.commit('retrieveToken', response.data.data)
              resolve(response.data.data)
            })
            .catch(error => {
              reject(error)
            })
          })
      },
          
      register(context, data) {
        return new Promise((resolve, reject) => {
          axios.post('http://127.0.0.1:8000/api/register', {
            name: data.name,
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            phone: data.phone,
            id_img:data.id_img,
          },
          {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
            .then(response => {
              resolve(response)
            })
          
            .catch(error => {
              reject(error)
            })

        })
      },
      destroyToken(context) {
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
        if (context.getters.loggedIn) {
            return new Promise((resolve, reject) => {
                axios.get('http://127.0.0.1:8000/api/User/logout')
                .then(response => {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
                    resolve(response)
                })
                .catch(error => {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
                    reject(error)
                })
            })
        }
      },
    }
  }
