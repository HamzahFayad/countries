<template>
  <div id="search">
    <div class="input">
      <img class="svg" src="../assets/search-solid.svg" alt="" />
      <input
        class="search"
        type="text"
        placeholder="Search for a country..."
        v-model="searchedCountry"
        @input="searchCountry"
      />
    </div>
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
  background: hsl(209, 23%, 22%);
  outline: none;
  border: none;
  border-radius: 6px;
  width: 400px;
  padding: 20px 20px;
  font-weight: 600;
  margin: 0.5% 3%;
}
input {
  color: #fff;
}
.search::placeholder {
  color: #fff;
  font-weight: 300;
}
.input {
  position: relative;
}

.svg {
  max-width: 20px;
  position: absolute;
  right: 0rem;
  transform: translate(-50%, 100%);
}
@media only screen and (max-width: 600px) {
  .search {
    width: 80%;
    padding: 18px 20px;
    margin: 2% 1%;
  }
  .svg {
    right: 3.5rem;
    transform: translate(-50%, 125%);
  }
}
</style>