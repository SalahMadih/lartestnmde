<template>
    <div class="container">
            <block-category-filter />
    </div>
</template>

<script>

import BlockCategoryFilter from './catalog/BlockCategoryFilter'

export default {
  name: 'Sidebar',
    components: {
    BlockCategoryFilter
  },
}

</script>

<style scoped>
</style>