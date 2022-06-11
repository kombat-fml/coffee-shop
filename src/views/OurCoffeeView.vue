<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <Navbar />
          </div>
        </div>
        <PageTitle className="title-big" text="Our Coffee" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold feel<br />
              met spot shy want. Children me laughing we prospect answered followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-5 offset-1">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                ref="search"
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
                @input="onSearch($event)"
              />
            </form>
          </div>
          <div class="col-lg-5">
            <div class="shop__filter">
              <div class="shop__filter-label">Filters:</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">Kenya</button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
                <button class="shop__filter-btn shop__filter-reset" @click="onReset">Reset</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <ProductCard
                v-for="card in coffee"
                :key="card.id"
                classItem="shop__item"
                :card="card"
                @onNavigate="navigate"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { debounce } from 'debounce';

import Navbar from '@/components/Navbar.vue';
import ProductCard from '@/components/ProductCard.vue';
import PageTitle from '@/components/PageTitle.vue';

import { navigate } from '../mixins/navigate';

export default {
  components: {
    Navbar,
    ProductCard,
    PageTitle,
  },
  computed: {
    coffee() {
      return this.$store.getters['getCoffee'];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch('setSearchValue', value);
      },
      get() {
        return this.$store.getters['getSearchValue'];
      },
    },
  },
  data() {
    return {
      name: 'coffee',
    };
  },
  mixins: [navigate],
  mounted() {
    fetch('http://localhost:3000/coffee')
      .then((res) => res.json())
      .then((data) => {
        this.$store.dispatch('setCoffeeData', data);
      });
  },
  methods: {
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),
    onSort(value) {
      // this.$store.dispatch('setSortValue', value);
      fetch(`http://localhost:3000/coffee?q=${value}`)
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch('setCoffeeData', data);
        });
    },
    onReset() {
      this.$refs.search.value = '';
      fetch(`http://localhost:3000/coffee`)
        .then((res) => res.json())
        .then((data) => {
          this.$store.dispatch('setCoffeeData', data);
        });
    },
  },
};
</script>
