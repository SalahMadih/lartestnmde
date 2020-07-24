<template>
  <div class="co-12">
    <h4>Category Filter</h4>

    <ul>
      <li class="py-2" v-for="category in categories" v-bind:key="category.id">
                   <input type="checkbox" :value="category.id" id="category.id" v-model="selectedCategory" @change="onCheckedCategory($event)"> {{category.name}}
        <ul v-if="category.children">
          <li v-for="category in category.children" v-bind:key="category.id">
           <input type="checkbox" :value="category.id" id="category.id" v-model="selectedCategory" @change="onCheckedCategory($event)"> {{category.name}}
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapAction } from "vuex";

export default {
  name: "BlockCategoryFilter",
  middleware: "auth",

  data() {
    return {
      choices: [],
      selectedCategory: []
    };
  },

  metaInfo() {
    return { title: "Block category" };
  },

  mounted() {
    this.$store.dispatch("categories/fetchCategories");
  },

  computed: mapGetters({
    categories: "categories/categories"
  }),

  methods: {
    onCheckedCategory(event) {
      this.$store.dispatch(
        "products/fetchCategoryProducts",
        this.selectedCategory
      );
    }
  }
};
</script>

<style scoped>
</style>
