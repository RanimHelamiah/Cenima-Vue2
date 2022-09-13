import axios from 'axios'

export const auth ={
    namespaced: true,
    state: {
      userauth:localStorage.getItem('user_info'),
      token: localStorage.getItem('access_token') || null,
      signedin:localStorage.getItem('access_token')?true:false
    },
    getters: {
      loggedIn(state) {
        return state.token  !== null;
      },
      getuser: state=>state.userauth,
      gettoken: state => state.token,
    },
    mutations: {
      retrieveToken(state, userdata) {
         state.signedin=true;
         state.token = userdata.token.token;
         state.userauth = userdata.user.original.data;
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
              // console.log(response)
                const token = response.data.data.token.token
                localStorage.setItem('access_token', token)
                const userauth = response.data.data.user.original.data
                // console.log(user)
                localStorage.setItem('user_info', userauth)
               context.commit('retrieveToken', response.data.data)
               resolve(response.data.data)
              //  context.commit('retrieveToken', response)
            })
            .catch(error => {
              //console.log(error)
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
                  // console.log(response)
              resolve(response)
            })
          
            .catch(error => {
                  // console.log(error)
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
                    //console.log(response);
                })
                .catch(error => {
                    localStorage.removeItem('access_token')
                    context.commit('destroyToken')
                    //console.log(error.response)
                    reject(error)
                })
            })
        }
      },
    }
  }
