<template>
  <div id="home">
    <div class="navbar">
      <Navbar />
    </div>
    <CountriesList :list="allCountries" />
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

<style scoped>
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  background: hsl(209, 23%, 22%);
  z-index: 11;
}
p {
  color: #fff;
}
</style>