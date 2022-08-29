import { createStore } from "vuex";
const axios = require('axios').default;



//export default store;

import Vuex from 'vuex'
import { project } from "./modules/project"
import { auth } from "./modules/auth"
import { time } from "./modules/time"
import { movie } from "./modules/movie"
import { role } from "./modules/role"
import { hall } from "./modules/hall"
import { price } from "./modules/price"
import { snack } from "./modules/snack"
import {user} from "./modules/user"
//Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    project,
    auth,
    role,
    hall,
    time,
    movie,
    price,
    snack,
    user,
  },
})

