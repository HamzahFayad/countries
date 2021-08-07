<template>
  <div>
    {{ $route.params.country }}
    <img class="flag" :src="$route.params.country.flag" alt="" />
  </div>
</template>

<script>
export default {
  name: "CountryDetail",
  props: {
    country: {
      required: true,
    },
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
</style>