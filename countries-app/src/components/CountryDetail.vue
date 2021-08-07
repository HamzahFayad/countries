<template>
  <div>
    <div class="navbar">
      <Navbar />
    </div>
    <h2 style="cursor: pointer" @click="back">BACK</h2>
    {{ $route.params.country.name }}
    <p>Native Name: {{ $route.params.country.nativeName }}</p>
    <p>Population: {{ $route.params.country.population }}</p>
    <p>Region: {{ $route.params.country.region }}</p>
    <p>Sub Region: {{ $route.params.country.subregion }}</p>
    <p>Capital: {{ $route.params.country.capital }}</p>

    <p>
      Top Level Domain: {{ $route.params.country.topLevelDomain.toString() }}
    </p>
    <p>Currencies: {{ $route.params.country.currencies[0].name }}</p>

    <span>Languages:</span>
    <p v-for="(l, i) in $route.params.country.languages" :key="i">
      {{ l.name }}
    </p>

    <span>Borders:</span>
    <p v-for="(b, i) in $route.params.country.borders" :key="i">{{ b }}</p>

    <img class="flag" :src="$route.params.country.flag" alt="" />
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "CountryDetail",
  props: {
    country: {},
  },
  components: {
    Navbar,
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
.navbar {
  width: 100vw;
  position: fixed;
  top: 0;
  background: hsl(209, 23%, 22%);
  z-index: 11;
}
img {
  max-width: 300px;
}
</style>