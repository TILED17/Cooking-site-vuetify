<template>
      <v-card
            class="d-flex align-center justify-center ma-2"
            elevation="2"
            height="400"
            >
  
        
              <v-img gradient="to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, .0)"
              class="bg-grey-lighten-2"
              :src="getImageUrl(recipes[0].img)"
              cover
              >
                <div style="display: grid;justify-content: center;align-items: end;text-align: center;color: white; width: 100%; height: 100%;">
                  <h1 class="text-h2" style="padding-bottom: 20px;">
                    {{item.title}}
                      <p class="text-h5 font-weight-thin">
                      {{ item.itemFood.name }}
                    </p>
                  </h1>
                </div>
              </v-img>
            </v-card>
</template>
<script>
import allRecipes from '@/AllRecipes.json'
export default{
    data(){
        return{
            recipes: allRecipes.recipes
        }
    },
    methods:{
        getImageUrl(name){
        return new URL(name, import.meta.url).href
    }
    }
}
</script>