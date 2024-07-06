<template>
        <v-window
        v-if="searchField === ''"
        v-model="onboarding"
        show-arrows="hover">
        <v-window-item
          v-for="item in sliderBoardList"
          :key="item.id"
          >
            <v-card
            class="d-flex align-center justify-center ma-2"
            elevation="2"
            height="400"
            >
  
        
              <v-img gradient="to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, .0)"
              class="bg-grey-lighten-2"
              :src="getImageUrl(item.itemFood.img)"
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
        </v-window-item>
        </v-window>
        <v-label>{{checkNotNullField}}</v-label>
        <v-container>
          <v-row>
            <v-col             
            v-for="item in find"
              :key="item.id"
              cols="12" md="4"
              >
                <v-card >
                  <v-img
                  class="bg-grey-lighten-2"
                  height="300"
                  :src="getImageUrl(item.img)"
                  cover
                  ></v-img>
                <v-card-title class="text-h6" style="text-wrap: wrap;" :title="item.name">
                  {{ item.name }}
                </v-card-title>
                <div style="display: flex; justify-content: center; flex-direction: row; align-items: center; text-align: center;">
                  <v-btn
                    class="ma-2"
                    color="blue-lighten-2"
                    icon="mdi-thumb-up"
                    variant="text"
                    @click="item.likes++"
                  ></v-btn>
                  <v-card-text class="text-subtitle-1" :class="{redLikes: badFood(item.likes)}">
                    {{ item.likes }}
                  </v-card-text>
                  <v-btn
                    class="ma-2"
                    color="red-lighten-2"
                    icon="mdi-thumb-down"
                    variant="text"
                    @click="item.likes--"
                  ></v-btn>
                </div>
                </v-card>
                
            </v-col>
          </v-row>
          <h1 class="text-h5" style="padding-top: 20px;" v-if="find.length === 0">Блюдо с таким названием не найдено :(</h1>
        </v-container>
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