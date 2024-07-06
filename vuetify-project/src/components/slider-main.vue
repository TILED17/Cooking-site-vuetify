<template>
    <v-window
      v-model="onboarding"
      show-arrows="hover"
    >
      <v-window-item
        v-for="n in sliderItems"
        :key="`card-${n}`"
      >
      
        <v-card
          class="d-flex align-center justify-center ma-2"
          elevation="2"
          height="400"
        ><v-img src="./assets/img/borsh1.jpg">
          <h1
            class="text-h2"
          >
            {{ n }}
          </h1>
        </v-img>
        </v-card>
      </v-window-item>
    </v-window>
  </template>
  <script>
    export default {
      data: () => ({
        sliderItems: [
          "Блюдо дня!",
          "Самое популярное блюдо",
          "Возможно вам понраится"
      ],
        onboarding: 0,
      }),
    }
  </script>