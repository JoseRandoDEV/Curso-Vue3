<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title> GRID Example</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-row>
        <ion-col size="12" class="full">Hello World FULL width</ion-col>
      </ion-row>
      <ion-row>
        <ion-col
          size="6"
          size-xs="12"
          size-sm="12"
          size-md="12"
          size-lg="6"
          size-xl="6"
          class="mid"
          >50%</ion-col
        >
        <ion-col
          size="6"
          size-xs="12"
          size-sm="12"
          size-md="12"
          size-lg="6"
          size-xl="6"
          class="mid2"
          >Another</ion-col
        >
      </ion-row>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/vue";
</script>

<style scoped>
.full {
  background-color: blue;
}
.mid {
  background-color: coral;
}
.mid2 {
  background-color: lightgreen;
}
</style>
