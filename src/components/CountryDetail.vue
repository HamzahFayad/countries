<template>
  <div id="countrydetail">
    <div class="navbar">
      <Navbar />
    </div>

    <div class="content__wrapper">
      <div class="back">
        <button style="cursor: pointer" @click="back">Back</button>
      </div>
      <div class="detail__content">
        <div class="img__flag">
          <img class="flag" :src="$route.params.country.flag" alt="" />
        </div>
        <div class="infos">
          <h2>{{ $route.params.country.name }}</h2>

          <div class="content">
            <div class="content__left">
              <p>
                <span>Native Name: </span>
                {{ $route.params.country.nativeName }}
              </p>
              <p>
                <span>Population: </span> {{ $route.params.country.population }}
              </p>
              <p><span>Region: </span> {{ $route.params.country.region }}</p>
              <p>
                <span>Sub Region: </span> {{ $route.params.country.subregion }}
              </p>
              <p><span>Capital: </span> {{ $route.params.country.capital }}</p>
            </div>

            <div class="content__right">
              <p>
                <span>Top Level Domain:</span>
                {{ $route.params.country.topLevelDomain.toString() }}
              </p>
              <p>
                <span>Currencies:</span>
                {{ $route.params.country.currencies[0].name }}
              </p>

              <span>Languages: </span>
              <p
                class="langs"
                v-for="l in $route.params.country.languages"
                :key="l.index"
              >
                {{ l.name }}
              </p>
            </div>
          </div>

          <div v-show="$route.params.country.borders.length > 0">
            <span>Borders:</span>
            <p
              class="bords"
              v-for="b in $route.params.country.borders"
              :key="b.index"
            >
              {{ b }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./Navbar.vue";

export default {
  name: "CountryDetail",
  props: {
    country: {},
  },
  components: {
    Navbar,
  },
  methods: {
    back() {
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
* {
  color: #fff;
}
.content__wrapper {
  margin: 0 6%;
}

.navbar {
  width: 100vw;
  height: 75px;

  position: fixed;
  top: 0;
  background: hsl(209, 23%, 22%);
  z-index: 11;
}
button {
  background: hsl(209, 23%, 22%);
  border-radius: 6px;
  outline: none;
  border: none;
  padding: 14px 20px;
  margin: 2% 0;
  width: 10rem;
}
.detail__content {
  display: flex;
  flex-flow: row wrap;
  gap: 180px;
  margin: 4% 0;
}
.infos {
  margin-left: 2%;
}
.content {
  display: flex;
  flex-flow: row wrap;
  gap: 60px;
}

.img__flag {
  width: 500px;
  height: 350px;
  overflow: hidden;
}
img {
  width: 100%;
  object-fit: cover;
}
span {
  display: inline-block;
  font-weight: 600;
}
p {
  padding: 0;
}
.langs,
.bords {
  display: inline-block;
  text-align: center;
  padding: 0 4px;
}
@media only screen and (max-width: 600px) {
  .img__flag {
    margin-top: 10%;
  }
  .detail__content {
    gap: 0px;
  }
  .content {
    gap: 0px;
    flex-flow: column wrap;
    float: left;
  }
  button {
    display: block;
    max-width: 0 auto;
  }
  .infos {
    display: flex;
    flex-flow: column wrap;
    align-items: flex-start;
  }
}
</style>