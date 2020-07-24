<template>
  <div id="page-home">
    <div class="row p-2 my-2">
      <div class="col-sm-12 col-md-2 hidden-sm-down sort-by">Trier par:</div>
      <div class="col-sm-12 col-md-2">
        <select  name="LeaveType" @change="onChange()" class="form-control">
          <option value>{{ $t("Option") }}</option>
          <option value="price">price</option>
        </select>
      </div>
    </div>

    <div class="row p-2 my-2">
      <product class="mb-3" v-for="product in products" v-bind:key="product.id" :product="product"></product>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapAction } from "vuex";

export default {
  middleware: "auth",
  layout: "catalog",

  metaInfo() {
    return { title: this.$t("home") };
  },

  data() {
    return {
      //products: [],
      index: 1
    };
  },

  mounted() {
    this.$store.dispatch("products/fetchProducts");
  },

  computed: mapGetters({
    products: "products/products"
  })
};
</script>

<style scoped>
#page-home .row {
  background-color: white;
}
</style>