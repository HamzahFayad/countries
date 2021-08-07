<template>
  <div id="nav">
    <h1>Where in the world?</h1>
    <div class="dark-light">
      <img src="../assets/moon-solid.svg" alt="" />
      <p>Dark Mode</p>
    </div>
  </div>
</template>

<script>
export default {};
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
</style>