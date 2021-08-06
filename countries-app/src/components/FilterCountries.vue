<template>
  <div id="filterByRegion">
    <select v-model="selected" @change="filterCountries">
      <option>Filter by Region</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>
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
  background: hsl(210, 2%, 82%);
  border-radius: 6px;
  color: #1c1c1c;
  outline: none;
  font-weight: 600;
}
</style>