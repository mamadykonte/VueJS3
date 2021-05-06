import { createStore } from "vuex";

import { SET_NOTE } from "@/store/mutation-types";

// Create a new store instance.
const store = createStore({
  state: {
    currentMovie: {},
    movies: [
      {
        id: 1,
        title: "Forrest Gump",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/pictures/15/10/13/15/12/514297.jpg",
        note: 2,
      },
      {
        id: 2,
        title: "La Ligne verte",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/66/15/78/19254683.jpg",
        note: 5,
      },
      {
        id: 3,
        title: "La Liste de Schindler",
        image:
          "https://fr.web.img4.acsta.net/c_310_420/pictures/19/03/14/10/37/5927961.jpg",
        note: 3,
      },
      {
        id: 4,
        title: "Le Parrain",
        image:
          "https://fr.web.img2.acsta.net/c_310_420/medias/nmedia/18/35/57/73/18660716.jpg",
        note: 4,
      },
      {
        id: 5,
        title: "12 hommes en colère",
        image:
          "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/24/09/18784292.jpg",
        note: 1,
      },
    ],
  },

  getters: {
    getMovies(state) {
      return state.movies;
    },
    getCurrentMovie(state) {
      return state.currentMovie;
    },
  },
  mutations: {
    setCurrentMovie(state, movie) {
      state.currentMovie = movie;
    },
    
    [SET_NOTE](state, note) {
      state.currentMovie.note = note;
    },
  },
  actions: {
    setCurrentMovie({ commit, state }, movieId) {
      let movieFound = {};
      state.movies.forEach((movie) => {
        if (movieId == movie.id) {
          movieFound = movie;
        }
      });
      commit("setCurrentMovie", movieFound);
    },
  },
});

export default store;
