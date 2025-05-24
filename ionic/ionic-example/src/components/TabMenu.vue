<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon :icon="playCircle"></ion-icon>
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="librery" href="/librery">
          <ion-icon :icon="library"></ion-icon>
          <ion-label>Librery</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="search" href="/search">
          <ion-icon :icon="search"></ion-icon>
          <ion-label>Search</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="radio" href="/radio">
          <ion-icon :icon="radio"></ion-icon>
          <ion-label>Radio</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script lang="ts" setup>
import {
  IonPage,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonRouterOutlet,
  IonIcon,
  IonLabel,
} from "@ionic/vue";
import { playCircle, library, search, radio } from "ionicons/icons";
</script>
