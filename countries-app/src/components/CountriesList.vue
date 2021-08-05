<template>
  <div id="countrieslist">
    <div class="list" v-for="(country, index) in list" :key="index">
      <div class="imageFlag">
        <img class="flag" :src="country.flag" alt="" />
      </div>
      <div class="countryInfos">
        <h2 class="countryName">{{ country.name }}</h2>
        <div class="facts">
          <p>Population: {{ country.population }}</p>
          <p>Region: {{ country.region }}</p>
          <p>Capital: {{ country.capital }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CountriesList",
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
#countrieslist {
  display: flex;
  flex-flow: row wrap;
  gap: 60px;
  margin: 0 5%;
}
.list {
  background: hsl(209, 23%, 22%);
  max-width: 280px;
  margin: 2% auto;
  border-radius: 8px;
}
.countryName {
  color: #fff;
  font-size: 18px;
}
.countryInfos {
  padding: 20px 16px;
}
.facts > p {
  padding: 2px 0;
  margin: 0;
}
.imageFlag {
  width: 250px;
  height: 150px;
}
.flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
@media only screen and (max-width: 600px) {
  #countrieslist {
    gap: 30px;
    margin: 0 2%;
  }
  .list {
    max-width: 350px;
  }
  .imageFlag {
    width: 300px;
    height: 200px;
  }
}
</style>