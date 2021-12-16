<template>
  <div class="min-h-screen w-full px-14">
    <button @click="$router.go(-1)" class="cursor-pointer mt-10 flex items-center space-x-5">
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style="enable-background:new 0 0 512 512;"
        xml:space="preserve"
        class="w-14 fill-current dark:text-white"
      >
        <g>
          <polygon
            points="183.652,194.783 183.652,72.348 0,256 183.652,439.652 183.652,317.217 512,317.217 512,194.783 		"
          />
        </g>
      </svg>
      <span>Go back</span>
    </button>
    <div class="w-full flex items-center mt-14">
      <img :src="land.flags.svg" alt class="w-1/2" />
      <div class="flex flex-col w-1/2">
        <h1 class="text-3xl pl-12 mb-8">{{ land.name.common }}</h1>
        <div class="flex pl-12">
          <div class="w-1/2">
            <p>
              <b>Native name:</b>
              {{ land.name.common }}
            </p>
            <p>
              <b>Population:</b>
              {{ land.population }}
            </p>
            <p>
              <b>Region:</b>
              {{ land.region }}
            </p>
            <p>
              <b>Sub region:</b>
              {{ land.subregion }}
            </p>
            <p>
              <b>Capital:</b>
              {{ land.capital[0] }}
            </p>
          </div>
          <div class="w-1/2">
            <p>
              <b>Top level domain:</b>
              {{ land.tld[0] }}
            </p>
            <p>
              <b>Currencies:</b>
              {{ land.currencies[Object.keys(land.currencies)[0]].name }}
            </p>
            <p>
              <b>Languages:</b>
              <span
                v-for="language in land.languages"
                :key="language[Object.keys(language)]"
              >{{ language }},</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      land: null,
    }
  },
  computed: {
    fetchUrlLand () {
      return `https://restcountries.com/v3.1/name/${this.$route.params.pays}?fullText=true`
    }
  },
  mounted () {
    axios
      .get(this.fetchUrlLand)
      .then(res => {
        this.land = res.data[0];
      })
  }
}

</script>

<style>
</style>