<template>
  <div id="home">
    <div class="navbar" :class="selected">
      <Navbar :theme="selected" @darklight="darkLight" />
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
      themes: ["dark", "light"],
      selected: "",
    };
  },
  async created() {
    await axios.get(this.apiUrl + "/all").then((res) => {
      console.log(res.data[4]);
      this.allCountries = res.data;
      this.selected = this.themes[0];
    });
  },
  methods: {
    darkLight() {
      if (this.selected === this.themes[0]) {
        this.selected = this.themes[1];
      } else {
        this.selected = this.themes[0];
      }
    },
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