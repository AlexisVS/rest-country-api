<template>
  <div class="min-h-screen">
    <div class="px-20 pt-12 w-full flex items-center justify-between">
      <input
        type="text"
        class="dark:bg-gray-800"
        v-model="input"
        @input="filteredCountries"
        placeholder="Search for a country"
      />
      <select class="dark:bg-gray-800" v-model="selectContinent" @click="filteredCountries" name id>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class="grid grid-cols-4 gap-14 px-14 mt-14">
      <router-link
        :to="'/' + country.name.common"
        v-for="country in countries"
        :key="country.name.common"
        class
      >
        <img :src="country.flags.svg" alt class="w-full rounded-t-sm object-cover h-1/2" />
        <div class="flex flex-col px-3 dark:bg-gray-700 pb-8 rounded-b-sm h-1/2">
          <h2 class="py-3">{{ country.name.common }}</h2>
          <span class="text-xs">
            <b>Population:</b>
            {{ country.population }}
          </span>
          <span class="text-xs">
            <b>Region:</b>
            {{ country.region }}
          </span>
          <span class="text-xs">
            <b>Capital:</b>
            {{ [...country.capital].shift() }}
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  data () {
    return {
      selectContinent: null,
      countries: null,
      input: null
    }
  },
  name: 'Home',
  components: {
  },
  computed: {
    getFetchUrl () {
      if (this.input) {
        return `https://restcountries.com/v3.1/name/${this.input}`
      }
      else if (this.selectContinent) {
        return `https://restcountries.com/v3.1/region/${this.selectContinent.toLowerCase()}`
      }
      return 'https://restcountries.com/v3.1/all'
    }
  },
  methods: {
    filteredCountries () {
      if (this.input) {
        setTimeout(() => {}, 1200);
      }
      axios
        .get(this.getFetchUrl)
        .then(res => {
          this.countries = res.data;
        })
    }
  },
  mounted () {
    axios
      .get(this.getFetchUrl)
      .then(res => {
        this.countries = res.data;
      })
  }
}
</script>
