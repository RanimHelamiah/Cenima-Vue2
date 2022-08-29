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
    },
      getters: {
        allmovies: state => state.movies,
        editmovie: state => state.movie,
        showmovie: state => state.movie,
        allgenres:state =>state.genres,
        alltimes:state=>state.times,
        allhalls:state=>state.halls,
    },
    mutations: {
          index : (state, movies) => state.movies = movies,
          create : (state,movies) => {
            state.movies = movies;
            state.halls = movies.halls;
            state.genres = movies.genres;
            state.times = movies.times;
          },
          store : (state, movie) => state.movies.push(movie),
          show: (state, movie) => {
            state.movie = movie;
            state.halls = movie.halls;
            state.genres = movie.genres;
            state.times = movie.times;
          },
          edit: (state, movie) => {
            state.movie = movie.movie;
            state.halls = movie.halls;
            state.genres = movie.genres;
            state.times = movie.times;
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
          },
          async create(context) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Movie/create');
              context.commit('create', response.data.data);
          },
          async store( context, movie) {
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
          },
          async show( context, movieid) {
           // console.log(movieid)
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Movie/'+movieid,
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
            },
          async edit( context, movieid) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            const response = await axios.get('Movie/'+movieid+'/edit',
            {
              headers: {
                'Content-Type': 'multipart/form-data'
                       }
             })
            .then(response => {
              context.commit('edit', response.data.data);
             })
             .catch(error => {
               console.log(error.response)
             });
          },
          async update( context, editmovie) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Movie/'+editmovie.id, editmovie,
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
          },
    },

}
