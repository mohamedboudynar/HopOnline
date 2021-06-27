<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Autres</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div id="container">Autres</div></ion-content>

  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

export default defineComponent({
  components: { IonContent, IonHeader, IonPage, IonTitle, IonToolbar }
});
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

ion-toolbar{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  
}
</style>