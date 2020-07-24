<template>
  <div class="category-item col-md-4">
    <article>
      <div class="block-image">
        <img src="/img/peche.jpg" />
      </div>
      <div class="block-description p-3">
        <div class="title">
          <h3 itemprop="name">
            <a href="#" class="category-name one_line" title="category.name">{{ category.name}}</a>
          </h3>
        </div>
        <div class="category-price">
          <span class="sr-only">{{ category.price }}</span>
         
        </div>
        <v-text class="description">{{ category.description }}</v-text>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "CardCategory",
  middleware: "auth",
  props: ["category"],

  metaInfo() {
    return { title: "category" };
  }
};
</script>


<style scoped>
  
</style>
