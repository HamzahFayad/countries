<template>
  <div id="app">
    <h1>Where in the world?</h1>
    <div class="div" v-for="(country, index) in allCountryNames" :key="index">
      <p>{{ country.name }}</p>
      <img class="flag" :src="country.flag" alt="" />
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  components: {},
  data() {
    return {
      apiUrl: "https://restcountries.eu/rest/v2",
      allCountryNames: [],
    };
  },
  async created() {
    await axios.get(this.apiUrl + "/all").then((res) => {
      console.log(res.data[4]);
      this.allCountryNames = res.data;
    });
  },
};
</script>

<style>
body {
  background: hsl(209, 23%, 22%);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p,
h1 {
  color: #fff;
}
.flag {
  max-width: 250px;
}
.div {
  background: hsl(207, 26%, 17%);
  max-width: 350px;
  padding: 20px;
  margin: 2% auto;
}
</style>
