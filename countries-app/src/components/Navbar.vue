<template>
  <div id="nav">
    <h1>Where in the world?</h1>
    <div @click="darkLight" class="dark-light">
      <img src="../assets/moon-solid.svg" alt="" />
      <p>Dark Mode</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    darkLight() {
      this.$emit("darklight");
    },
  },
};
</script>

<style>
#nav {
  margin: 0 6%;
}
h1 {
  float: left;
  font-size: 22px;
  line-height: 44px;
  color: #fff;
}
.dark-light {
  float: right;
  display: flex;
  flex-flow: row nowrap;
  gap: 8px;
  cursor: pointer;
}
.dark-light > img {
  width: 20px;
}
.dark-light > p {
  line-height: 44px;
  font-weight: 600;
}
p {
  color: #fff;
}
</style>