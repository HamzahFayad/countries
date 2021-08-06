<template>
  <div id="search">
    <input
      class="search"
      type="text"
      placeholder="Search for a country..."
      v-model="searchedCountry"
      @input="searchCountry"
    />
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchedCountry: "",
    };
  },
  methods: {
    searchCountry() {
      this.$emit("searchByCountry", this.searchedCountry);
    },
  },
};
</script>

<style scoped>
#search {
  margin: 0 5%;
}

.search {
  background: hsl(210, 2%, 82%);
  outline: none;
  border: none;
  border-radius: 6px;
  width: 400px;
  padding: 20px 20px;
  font-weight: 600;
  margin: 0.5% 3%;
}
.search::placeholder {
  color: #1c1c1cbb;
}

@media only screen and (max-width: 600px) {
  .search {
    width: 80%;
    padding: 18px 20px;
    margin: 2% 1%;
  }
}
</style>