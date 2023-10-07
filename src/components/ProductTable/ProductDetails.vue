<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div v-if="productId">
               <h2>Product Details</h2>
               <h3>Product ID: {{ productId }}</h3>
               <h2>Product Title : {{ selectedProduct.title }}</h2>
               <p>Product description: {{ selectedProduct.description }}</p>
               <p>PRICE : {{ selectedProduct.price }} $</p>
               <img :src="selectedProduct.image" :alt="selectedProduct.title">


              </div>
              <template v-else>
              <h3>Product id is not defined</h3>
            </template>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

import { ref, onMounted, onBeforeMount, computed } from "vue";
  import { useRoute, useRouter } from 'vue-router';

  import { product } from "./product";

  const router = useRouter();
  const route = useRoute();
  const productId = route.params.id; // Get the 'id' parameter from the route
  
//   onBeforeMount(() => {
//     if (productId == undefined) {
//         return
//     }
//     // fetch(`https://dummyjson.com/posts/${route.params.id}`)
//     //     .then(response => response.json())
//     //     .then(json => {
//     //         post.title = json.title
//     //     })

//     const selectedProduct = function() {
//         return product.find((product) => product.id === Number(productId));
//     };

// })

  const selectedProduct = computed(() => {
        return product.find((product) => product.id === Number(productId));
    });



  // const props = defineProps({
  //   product: Object, // Assuming your product is an object with properties like title, image, description, etc.
  // });




</script>
