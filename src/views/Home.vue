<template>
  <div class="min-h-screen">
    <div class="px-20 pt-12 w-full flex items-center justify-between">
      <input type="text" class="dark:bg-gray-800" placeholder="Search for a country" />
      <select class="dark:bg-gray-800" v-model="selectContinent" name id>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
    <div class="grid grid-cols-4 gap-14 px-14 mt-14 ">
      <router-link :to="'/' + country.name" v-for="country in countries" :key="country.name" class="">
        <img :src="country.flag" alt class="w-full rounded-t-sm object-cover h-1/2" />
        <div class="flex flex-col px-3 dark:bg-gray-700 pb-8 rounded-b-sm h-1/2">
          <h2 class="py-3">{{ country.name }}</h2>
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
            {{ country.capital }}
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
    }
  },
  name: 'Home',
  components: {
  },
  mounted () {
    axios
      .get('https://restcountries.com/v2/all')
      .then(res => {
        this.countries = res.data;
      })
  }
}
</script>
