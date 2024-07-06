<template>
  
  <v-app id="inspire">
    <v-app-bar>
      <v-spacer>  <v-card
    class="mx-auto"
    color="surface"
    max-width="600"
  >
    <v-card-text>
      <v-text-field
        :loading="loading"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Поиск по названию"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick"
        v-model="searchField"
      ></v-text-field>
    </v-card-text>
  </v-card></v-spacer>
    </v-app-bar>
    <v-main style="margin-left: auto; margin-right: auto; width: 1000px;">
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script>;
import './assets/styles/style.css'
import allRecipes from '@/AllRecipes.json'
  export default{
    data(){
    return{
      searchField: "",
      length: 3,
      slideBoard: [],
      onboarding: 0,
      recipes: allRecipes.recipes
    }
  },
  computed:{
    find(){
      if(this.searchField !== ""){
        return this.recipes.filter(w => w.name.toLowerCase().includes(this.searchField.toLowerCase()));
      }
      return this.recipes
    },
    sliderBoardList(){
      this.slideBoard = []
      this.slideBoard.push(this.featuredFood)
      this.slideBoard.push(this.daylyFood)
      return this.slideBoard
    },
    featuredFood(){
      function maxLikes(max, obj){
      return obj.likes > max.likes? obj: max;
      }
      return {title: "Самое популярное блюдо!",itemFood: this.recipes.reduce(maxLikes)}
    },
    daylyFood(){
      const today = new Date();
      const randFoodId = (31 + today.getDate())% 9 + 1;
      return {title: "Блюдо дня!", itemFood: this.recipes.find(x => x.id == randFoodId)}
    },
    checkNotNullField(){
      return this.searchField === ""? "Другие блюда:" : `Вот что найдено по запросу «${this.searchField}»`;
    }
  },
  methods:{
      getImageUrl(name){
        return new URL(name, import.meta.url).href
    },
    badFood(value){
      return value < 0
    }
  }
}
</script>
