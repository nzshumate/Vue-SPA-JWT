<template>
  <div  id="movies">
    <vs-row
      vs-align="flex-start"
      vs-type="flex" vs-justify="center" vs-w="12" class="search">
      <vs-col vs-type="flex" vs-justify="center" vs-align="center" vs-w="8">
        <vs-input placeholder="Search Movies" v-model="search" size="large" @keyup.enter.native="searchMovies"/>
        <vs-button @click="searchMovies" color="primary" type="border" icon="search"></vs-button>
      </vs-col>
    </vs-row>
    <vs-row>
      <vs-col
        v-for="(movie, idx) in movies"
        :key="idx"
        vs-lg="2"
        vs-sm="6"
        vs-xs="12">
        <vs-card class="cardx">
          <div slot="header">
            <h3>
              {{ movie.original_title }}
            </h3>
          </div>
          <div slot="media">
            <img :src="imageUrl + movie.poster_path" alt="">
          </div>
          <div>
            <span></span>
          </div>
          <div slot="footer">
            <vs-row vs-justify="flex-end">
              <vs-button type="gradient" color="danger" icon="favorite"></vs-button>
              <vs-button color="primary" icon="turned_in_not"></vs-button>
              <vs-button color="rgb(230,230,230)" color-text="rgb(50,50,50)" icon="settings"></vs-button>
            </vs-row>
          </div>
        </vs-card>
      </vs-col>
    </vs-row>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Movies',
  data() {
    return {
      search: '',
      movies: [],
      imageUrl: 'https://image.tmdb.org/t/p/w342',
      apiKey: ''
    };
  },
  methods: {
    searchMovies() {
      const search = encodeURI(this.search);
      const path = `https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&language=en-US&query=${search}`;
      axios.get(path).then((response) => {
        this.movies = response.data.results;
      });
    },
  },
};
</script>

<style scoped>
.search {
  margin: 30px 0;
}
.cardx {
  margin-bottom: 35px;
  margin-left: 7px;
  margin-right: 7px;
  padding: 10px 10px 30px 10px;
  height: 550px;
}


</style>
