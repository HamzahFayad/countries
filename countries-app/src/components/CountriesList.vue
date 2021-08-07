<template>
  <div id="allCountries">
    <div class="search-filter">
      <Search @searchByCountry="onCountrySearch" />
      <div class="filtering">
        <FilterCountries @filterByRegion="onRegionSelect" />
      </div>
    </div>

    <div id="countrieslist">
      <div
        class="list"
        v-for="(country, index) in regions.length > 0 ? regions : list"
        :key="index"
      >
        <div class="imageFlag">
          <img class="flag" :src="country.flag" alt="" />
        </div>
        <div class="countryInfos">
          <h2 class="countryName">{{ country.name }}</h2>
          <div class="facts">
            <p>Population: {{ country.population }}</p>
            <p>Region: {{ country.region }}</p>
            <p>Capital: {{ country.capital }}</p>
            <p>
              <router-link
                :to="{
                  name: 'CountryDetail',
                  params: { country },
                }"
                >Go</router-link
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FilterCountries from "./FilterCountries.vue";
import Search from "./Search.vue";

export default {
  name: "CountriesList",
  components: {
    FilterCountries,
    Search,
  },
  props: {
    list: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      regionsURL: "https://restcountries.eu/rest/v2/region/europe",
      regions: [],
      selected: "",
      searched: "",
    };
  },
  methods: {
    onRegionSelect(select) {
      if (select.value !== "") {
        this.selected = select;
        console.log(this.selected);
        let filtered = this.list.filter((c) => {
          return c.region === this.selected;
        });
        console.log(filtered, "fil");

        this.regions = filtered;
        // this.list = this.regions;
      }
      //return this.list;
    },
    onCountrySearch(search) {
      this.searched = search;
      let searchedC = this.list.filter((c) => {
        return c.name.toLowerCase().includes(this.searched.toLowerCase());
      });
      this.regions = searchedC;
    },
  },
};
</script>

<style scoped>
#countrieslist {
  display: flex;
  flex-flow: row wrap;
  gap: 60px;
  margin: 0 5%;
  color: #fff;
}
.list {
  background: hsl(209, 23%, 22%);
  max-width: 260px;
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
  width: 260px;
  height: 150px;
  overflow: hidden;
}
.flag {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.search-filter {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.filtering {
  margin: 0.5% 5.6%;
  /*padding: 10px 0;*/
}

@media only screen and (max-width: 600px) {
  #countrieslist {
    gap: 30px;
    margin: 0 2%;
  }
  .list {
    max-width: 350px;
    margin: 2% auto;
  }
  .imageFlag {
    width: 300px;
    height: 200px;
  }
  .search-filter {
    flex-flow: column nowrap;
    align-content: center;
    margin: 2% 0;
  }
  .filtering {
    margin: 2% 6%;
  }
}
</style>