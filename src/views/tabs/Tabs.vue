<template>
  <ion-page>
    
 <!-- Tab bar -->
    <ion-tabs  @ionTabsWillChange="beforeTabChange">
      <ion-router-outlet></ion-router-outlet>
    <ion-tab-bar slot="bottom">
      <ion-tab-button selected tab="infos" href="/tabs/contact/:id">
        <ion-icon :icon="informationCircleOutline"></ion-icon>
        <ion-label>infos</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="Notes" href="/tabs/notes">
        <ion-icon :icon="pencil"></ion-icon>
        <ion-label>Notes</ion-label>
      </ion-tab-button>

     <ion-tab-button tab="Taches" href="/tabs/taches">
        <ion-icon :icon="bagAddOutline"></ion-icon>
        <ion-label>Taches</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="Affaires" href="/tabs/affaires">
        <ion-icon :icon="discOutline"></ion-icon>
        <ion-label>Affaires</ion-label>
      </ion-tab-button>

        <ion-tab-button tab="Autres" href="/tabs/autres">
        <ion-icon :icon="reorderFourOutline"></ion-icon>
        <ion-label>Autres</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-tabs>

  
  </ion-page>
</template>

<script>
import {menuOutline,notificationsOutline,chevronBackOutline,call,mailOutline,pencil,discOutline,reorderFourOutline,informationCircleOutline,bagAddOutline} from 'ionicons/icons';

import { /*IonContent, IonHeader, , IonTitle, IonToolbar,*/IonIcon,IonPage,IonLabel, IonTabBar, IonTabButton,IonTabs,IonRouterOutlet} from '@ionic/vue';
import { defineComponent } from 'vue';
//import axios  from "axios";

export default defineComponent({
  name: 'Home',
 
 
 
 
  components: {
    //IonContent,
    //IonHeader,
    IonPage,
    IonLabel, 
    IonTabBar, 
    IonTabButton, 
    IonTabs,
    IonRouterOutlet,
   // IonTitle,
    //IonToolbar,
    IonIcon
  },data(){
        return{
			menuOutline,
      notificationsOutline,
      chevronBackOutline,
      call,mailOutline,pencil,discOutline,reorderFourOutline,
      informationCircleOutline,bagAddOutline,
      id:"",


        }},mounted(){
            //this.id=localStorage.getItem('id');
        },
        methods:{
          beforeTabChange(){
         //  this.id=this.$route.params.id;
         //  alert(this.id);

         //localStorage.setItem('id',this.id);
          }
        }
});
</script>

<style scoped>

ion-tab-bar {
  --background:hsl(210, 14%, 65%);
  --color:white;
  --color-selected:hsl(210, 14%, 35%);

}


/*
ion-content {
  /*--padding-bottom: 10px;*/
/*  --padding-end: 14px;
  --padding-start: 14px;
  --padding-top: 17px;
}*/

</style>