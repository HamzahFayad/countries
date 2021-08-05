<template>
  <div id="filterByRegion">
    <select v-model="selected">
      <option value="">Filter by Region</option>
      <option>Africa</option>
      <option>America</option>
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
  props: {
    selectedRegion: {
      type: String,
    },
  },
  data() {
    return {
      selected: "",
    };
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
}
</style>