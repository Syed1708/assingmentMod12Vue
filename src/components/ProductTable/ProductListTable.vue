<template>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div>
                <input placeholder="Search..." class="form-control mb-2 w-auto form-control-sm" type="text" v-model="searchValue">
                <EasyDataTable buttons-pagination alternating :headers="Header" :items="Item" :rows-per-page="10" :search-field="searchField"  :search-value="searchValue">
                  <template #item-id="{ id}">
                    

                    <button class="btn btn-success btn-sm" @click="itemClick(id)">View Details</button>
                  </template>
                 
                  
                </EasyDataTable>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>

import {ref} from "vue";
import { product} from './product.js';
import { useRoute, useRouter } from 'vue-router'; // Import Vue Router
  const route = useRoute();
  const router = useRouter();

const searchField = ["title","Unitprice"];
const searchValue = ref();


const Header = [
  { text: "TITLE", value: "title",sortable: true },
  { text: "UNIT PRICE", value: "Unitprice" },
  { text: "NO OF ITEMS", value: "no_items" },
  { text: "ACTION", value: "id",width: 200},

];


const Item = ref([
  {id: 1, title: "Product 1", Unitprice: 5, no_items: 30, },
  {id: 2, title: "Product 2", Unitprice: 55, no_items: 20, },
  {id: 3, title: "Product 3", Unitprice: 56, no_items: 130, },
  {id: 4,title: "Product 4", Unitprice: 58, no_items: 230, },

])


const itemClick = (id) => {
  // alert(`Product id ${id} , Title is=${title} & Unit Price is=${Unitprice}`)
  router.push({ name: 'productDetails', params: { id } });
  
}

// const itemClick = (product) => {
//     // Navigate to the product details page and pass the product data as props
//     router.push({ name: 'productDetails', params: { id} });
//     router.push({ name: 'productDetails', params: { id: product.id }, props: { product } });

//   };




</script>
