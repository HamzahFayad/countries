<template>
  <div id="home">
    <div class="navbar">
      <Navbar />
    </div>
    <div class="hidden-loader" v-if="loading">
      <img class="loader" src="../assets/spinner-solid.svg" alt="loader" />
    </div>
    <div v-else>
      <CountriesList :list="allCountries" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./Navbar.vue";
import CountriesList from "./CountriesList.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    CountriesList,
  },
  data() {
    return {
      apiUrl: "https://restcountries.eu/rest/v2",
      allCountries: [],
      loading: true,
      //themes: ["dark", "light"],
      //selected: "",
    };
  },
  async created() {
    await axios
      .get(this.apiUrl + "/all")
      .then((res) => {
        this.loading = false;
        this.allCountries = res.data;
        //this.selected = this.themes[0];
      })
      .catch((error) => console.log(error));
  },
  methods: {
    /*darkLight() {
      if (this.selected === this.themes[0]) {
        this.selected = this.themes[1];
      } else {
        this.selected = this.themes[0];
      }
    },*/
  },
};
</script>

<style scoped>
.navbar {
  width: 100vw;
  height: 75px;
  position: fixed;
  top: 0;
  background: hsl(209, 23%, 22%);
  z-index: 11;
}
p {
  color: #fff;
}
.hidden-loader {
  display: grid;
  place-items: center;
  margin-top: 15%;
}
.loader {
  max-width: 80px;
  animation: load 2000ms infinite;
}
@keyframes load {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>