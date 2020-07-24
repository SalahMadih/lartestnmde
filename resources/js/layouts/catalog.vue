<template>
  <div class="catalog-layout">
    <navbar />

    <div class="container mt-4">
      <div class="row">
        <div class="col-md-3">
           <Sidebar />
        </div>

        <div class="col-md-9">
          <child />
        </div>
      </div>
    </div>
    <footer class="text-white bg-dark text-center p-4">you are in the footer</footer>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar";
import Sidebar from "~/components/Sidebar";

export default {
  name: "CatalogLayout",

  components: {
    Navbar,
    Sidebar
  }
};
</script>
