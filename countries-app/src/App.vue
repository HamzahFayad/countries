<template>
  <div id="app">
    <div class="navbar">
      <Navbar />
    </div>
    <CountriesList :list="allCountries" />
  </div>
</template>

<script>
import axios from "axios";
import Navbar from "./components/Navbar.vue";
import CountriesList from "./components/CountriesList.vue";

export default {
  name: "App",
  components: {
    Navbar,
    CountriesList,
  },
  data() {
    return {
      apiUrl: "https://restcountries.eu/rest/v2",
      allCountries: [],
    };
  },
  async created() {
    await axios.get(this.apiUrl + "/all").then((res) => {
      console.log(res.data[4]);
      this.allCountries = res.data;
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;600;800&display=swap");

body {
  background: hsl(207, 26%, 17%);
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Nunito Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 150px;
}
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  background: hsl(209, 23%, 22%);
}
p,
h1 {
  color: #fff;
}
</style>
