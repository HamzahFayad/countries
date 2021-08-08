<template>
  <div id="filterByRegion">
    <div class="filter">
      <select v-model="selected" @change="filterCountries">
        <option>Filter by Region</option>
        <option>Africa</option>
        <option>Americas</option>
        <option>Asia</option>
        <option>Europe</option>
        <option>Oceania</option>
      </select>
    </div>
    <!--<p>{{ selected }}</p>-->
  </div>
</template>

<script>
export default {
  name: "FilterByRegion",
  /*props: {
    selectedRegion: {
      type: String,
    },
  },*/
  data() {
    return {
      selected: "Filter by Region",
    };
  },
  methods: {
    filterCountries() {
      this.$emit("filterByRegion", this.selected);
    },
  },
};
</script>

<style>
select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  border: none;
  padding: 18px 20px;
  width: 180px;
  background: hsl(209, 23%, 22%);
  border-radius: 6px;
  color: #fff;
  outline: none;
  font-weight: 400;
}
.filter {
  position: relative;
}
</style>