import axios from 'axios'
import { object } from 'yup';


axios.defaults.baseURL = 'http://127.0.0.1:8000/api'

export const ticket ={
    namespaced: true,
    state: {
        tickets:[],
        movie:[],
        availableseates:Object,
        times:Object,
        starttime:Object,
        hall:Object,
        date:Object,
        movie_id:object,
    },
      getters: {
        movie:state=>state.movie,
        times:state=>state.times,
        starttime:state=>state.starttime,
        hall:state=>state.hall,
        date:state=>state.date,
        movie_id:state=>state.movie_id,
        availableseates:state=>state.availableseates
    },
    mutations: {
          stepone : (state,movie) => {
            state.movie = movie;
            state.starttime = movie.starttime;
            state.hall = movie.hall;
          },
          steptwo : (state, movie) => {
            state.movie=movie;
            state.movie_id = movie.movie_id;
            state.starttime = movie.starttime;
            state.hall = movie.hall;
            state.date = movie.date;
            state.availableseates = movie.availableseates;
          },
          store : (state, ticket) => {
            console.log(ticket)
            state.tickets.push(ticket)
        },
    },
    actions:{
          async stepone(context ,movieid) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.get('/Ticket/stepOne/'+ movieid);
              //console.log(response.data.data)
              context.commit('stepone', response.data.data);
          },
          async steptwo( context, data) {
            // axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
            console.log(data)
              const response = await axios.post('/Ticket/stepTwo/'+data.movieid,{
                date: data.date,
                starttime: data.starttime,
              })
            //   console.log(response.data.data)
                .then(response => {
                    context.commit('steptwo', response.data.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
          },
          async store( context, ticket) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token')
              const response = await axios.post('/Ticket/store/'+ticket.movie_id, ticket)
                .then(response => {
                    console.log(response)
                    context.commit('store', response.data.data);
                })
                .catch(error => {
                    console.log(error.response)
                });
          },
    },

}
