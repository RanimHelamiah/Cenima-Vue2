import axios from 'axios'


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const movie ={
    namespaced: true,
    state: {
        movies:[],
        movie:Object,
        genres:Object,
        halls:Object,
        times:Object,
        movie_times: [],
        movie_genres: [],
        movie_hall:Object,
        signedin:localStorage.getItem('access_token')?true:false,
    },
      getters: {
        allmovies: state => state.movies,
        allgenres:state =>state.movies.genres,
        alltimes:state=>state.movies.times,
        allhalls:state=>state.movies.halls,
        editmovie: state => state.movie,
        edithall: state => state.movie.hall,
        editgenres: state => state.movie.genres,
        edittimes: state => state.movie.times,
      },

    mutations: {
          index : (state, movies) => state.movies = movies,
          create : (state,movies) => state.movies = movies,
          store : (state, movie) => state.movies.push(movie),
          show: (state, movie) => {
            state.movie = movie;
          },
          edit: (state, movie) => {
            state.movie = movie;
            //console.log(state.movie)
          },
          update: (state, movie) => {
              const index = state.movies.findIndex(t => t.id === movie.id);
              if(index !== -1) {
                  state.movies.splice(index, 1, movie);
              }        
          },
          delete: (state, movie) => state.movies = state.movies.filter(t => movie.id !== t.id),
      },
    actions:{
          async index(context) {
            this.loading = true;
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Movie')
              .then((response) => {
                context.commit('index', response.data.data.data);
                this.loading = false;
              })
              .catch((error) => {
                console.log(error);
              });
               //console.log(response.data.data.data);
          },
          async create(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Movie/create');
             //  console.log(response.data.data);
              context.commit('create', response.data.data);
          },
          async store( context, movie) {
            // console.log(movie);
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Movie', movie,
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
          async show( context, movie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Movie/'+movieid);
            // console.log(response.data.data);
            context.commit('show', response.data.data);
          },
          async edit( context, movieid) {
           // console.log(movieid)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Movie/'+movieid+'/edit',{
              headers: {
                'Content-Type': 'multipart/form-data'
            }
            })
            //console.log(response)

            .then(response => {
              context.commit('edit', response.data.data);
             })
             .catch(error => {
               console.log(error.response)
             });
           //console.log(response.data.data);
            // console.log(response.data.data);
        },
          async update( context, editmovie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.put('/Movie/'+editmovie.movie.id, editmovie);
              // console.log(response.data.data);
              context.commit('update', response.data.data);
          },
          async delete( context, movie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              console.log(movie)
              const response = await axios.delete('/Movie/'+movie)
              .then(response => {
                 context.commit('delete', response.data.data);
               })
               .catch(error => {
                 console.log(error.response)
               });

              //console.log(response.data.data);
          }
    },

}
