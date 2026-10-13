import { products } from "../services/API";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductStore = defineStore('product', ()=> {
    const items = ref([]);
    const loading = ref(true);
    const error = ref('');

    function load() 
    {
        // setTimeout(()=>{
            items.value = [...products]
        // }, 2000)
    }
    
    const category = ref([]);
    const categoryError = ref('');

    const active = computed(()=>{
       return items.value.filter((item) => item.active === true);
    })

    function upsert(product){
        const index = items.value.findIndex((item) => item.id === product.id)
        if (index < O){
            items.value.push(product)      
        }
        else{
            items.value[index] = product
        }
    }

    function loadCategory(){
        return[];
    }

    function init(){
        loadCategory();
        load();
    }

    return {
        load,
        items,
        loading,
        error,
        category,
        categoryError,
        active,
        upsert,
        loadCategory,
        init,
    }

});
