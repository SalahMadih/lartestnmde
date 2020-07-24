<template>
  <div class="product-item col-md-4">
    <article>
      <div class="block-image">
        <img :src="product.image" />
      </div>
      <div class="block-description p-3">
        <div class="title">
          <h3 itemprop="name">
            <a href="#" class="product-name one_line" :title="product.name">{{ product.name | truncate(20) }}</a>
          </h3>
        </div>
        <div class="product-price">
          <span class="sr-only">Prix</span>
          <span itemprop="price" class="price">{{ product.price | toUSD }}</span>
        </div>
        
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Product",
  middleware: "auth",
  props: ["product"],

  metaInfo() {
    return { title: "product" };
  }
};
</script>


<style scoped>
article {
  border: 1px solid #ebebeb;
  border-radius: 5px;
}

article:hover {
  border-color: #4fb68d;
}
img {
  width: 100%;
 
}

.product-price .price {
  color: #555555;
  font-size: 15px;
}

.block-description .product-name {
  color: #253237;
  font-size: 14px;
  text-transform: capitalize;
}

.block-description .product-name:hover {
  color: #4fb68d;
}
</style>
