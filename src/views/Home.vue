<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar mode="md">
          <ion-thumbnail  slot="start">
              <ion-img src="assets/photo_male_6.jpg" ></ion-img>
          </ion-thumbnail>
          <ion-title>Bonjour {{user.user.prenom}}
            <p>{{user.client.nom}}</p>
          </ion-title>

        <ion-buttons  slot="end">
          <ion-button style="position:relative;left:15px">
           <ion-icon slot="icon-only" color="white" :icon="notificationsOutline"></ion-icon>
          </ion-button>
        <ion-button>
          <ion-icon slot="icon-only" color="white" :icon="menuOutline"></ion-icon>
        </ion-button>
      </ion-buttons>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
            <ion-col v-for="(value, key) in items" :key="key" @click="key==`contact`?$router.push({ name: 'ListContacts2' }):null" size-md="6" size-sm="12" size-lg="4">
             
              <div>
              <div class="num">{{value}}</div>
              <div class="name">{{key}}</div>
 
        <ion-icon v-if="key==`organisation`" class="icon" slot="icon-only" :icon="briefcase"></ion-icon>
        <ion-icon v-if="key==`action`" class="icon" slot="icon-only" :icon="medkitOutline"></ion-icon>
        <ion-icon v-if="key==`note`" class="icon" slot="icon-only" :icon="pencil"></ion-icon>
        <ion-icon v-if="key==`ligne`" class="icon" slot="icon-only" :icon="reorderFourOutline"></ion-icon>
        <ion-icon v-if="key==`reglement`" class="icon" slot="icon-only" :icon="checkmarkDoneCircleOutline"></ion-icon>
        <ion-icon v-if="key==`piece`" class="icon" slot="icon-only" :icon="extensionPuzzle"></ion-icon>
        <ion-icon v-if="key==`document`" class="icon" slot="icon-only" :icon="document"></ion-icon>
        <ion-icon v-if="key==`contact`" class="icon" slot="icon-only" :icon="person"></ion-icon>
        <ion-icon v-if="key==`produit`" class="icon" slot="icon-only" :icon="cartOutline"></ion-icon>
        <ion-icon v-if="key==`ticket`" class="icon" slot="icon-only" :icon="ticket"></ion-icon>
        <ion-icon v-if="key==`affaire`" class="icon" slot="icon-only" :icon="discOutline"></ion-icon>
              </div>
            </ion-col>
          </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script>
import {menuOutline,notificationsOutline,person,document,checkmarkDoneCircleOutline,briefcase,cartOutline,calendarClear,ticket,discOutline,pencil,medkitOutline,reorderFourOutline,extensionPuzzle} from 'ionicons/icons';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon} from '@ionic/vue';
import { defineComponent } from 'vue';
import axios  from "axios";

export default defineComponent({
  name: 'Home',
 
     ionViewDidEnter() {
      
         axios.get('https://api-v2.hopcrm.com/api/mobile/infos/volumetrie')
            .then((response) =>{ this.items = response.data;
         console.log(response.data);

            })
            .catch(error => {console.log(error);});


        axios.get('https://api-v2.hopcrm.com/api/mobile/sessions/infos')
                    .then((response) =>{ this.user = response.data;
        console.log(response.data);
                    })
                    .catch(error => {console.log(error);});
    },components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon
  },data(){
        return{
			menuOutline,
      notificationsOutline,
      person,
      document,
      briefcase,
      calendarClear,
      ticket,
      cartOutline,
      discOutline,pencil,medkitOutline,reorderFourOutline,
      checkmarkDoneCircleOutline,
      extensionPuzzle,
      items:{},
      user:{
        client:{
          nom:''
        },
        user:{
          person:''
        }
      }

        }}
});
</script>

<style scoped>
ion-title{
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:50;
  font-size:16px;
  margin-left: -9px;
}
ion-title p{
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8px;
  margin-top:3px;

}
ion-toolbar{
 
display:flex;
 
}

#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-col > div {
  background-color: #99a7b2;
  border: solid 0px #ddd;
  height: 120px;
  border-radius: 10px;
 position: relative;

}
ion-col > div > .num{
   position: absolute;
  font-size: 24px;
  margin: 6px;
  right: 0;
  color: white;
  z-index: 100;
}
ion-col > div > .name{

  color: white;
    position: absolute;
 z-index: 1;
 top: 100px;
 margin-left: 10px;
}
ion-col{
  padding:30px 30px 10px 20px;
}
ion-icon{
  font-size:110px;
  color:#b1bcc2;
  position: static;
  bottom: 0px;
  left: 0px;
}
</style>