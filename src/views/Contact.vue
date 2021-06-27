<template>
  <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar class="bottom" mode="md">
    <div id="b">   <ion-buttons mode="md" slot="start" @click="$router.replace({ name: 'ListContacts2' })" class="back">
      <ion-button style="width:110px">
        <ion-icon slot="icon-only"  style="font-size:16px;position: relative; top:0px;"  :icon="chevronBackOutline"></ion-icon><span style="text-transform: capitalize"> Contacts</span>
      </ion-button>
    </ion-buttons>
    <ion-buttons mode="md" slot="end">
      <ion-button router-link="#" style="text-transform: capitalize;">Modifier</ion-button>
    </ion-buttons>
    </div> 
    <div id="a"> 

           <ion-thumbnail  slot="start">
              <ion-img src="assets/photo_male_6.jpg" ></ion-img>
          </ion-thumbnail>
        <ion-title>
      {{contact.prenom}} {{contact.nom}}
           <p>{{entreprise.nom}}</p>
           <p>{{contact.e_mail}}</p>
           <p>{{contact.telephone_mobile}}</p>

       </ion-title>

           <ion-buttons slot="end">
                 <ion-button @click="mail">
        <ion-icon class="mail" color="white" slot="icon-only" :icon="mailOutline"></ion-icon>
      </ion-button>
      <ion-button @click="callNow">
        <ion-icon slot="icon-only" color="white" :icon="call"></ion-icon>
      </ion-button>
    </ion-buttons>
    </div>
  </ion-toolbar>
    </ion-header>
    
<ion-content :fullscreen="false">

<form id="form"  @submit.prevent="Login">
   <ion-label color="medium ">Nom</ion-label>
 <ion-item class="ion-margin-bottom">
    <ion-input v-model="contact.nom" type="text"/>
 </ion-item>
  
   <ion-label color="medium">Prenom</ion-label>

 <ion-item class="ion-margin-bottom">
    <ion-input v-model="contact.prenom" type="text" />
 </ion-item>
  <ion-grid>
     <ion-row>
     <ion-col size="9">
   <ion-label color="medium">Adresse email</ion-label>

 <ion-item class="ion-margin-bottom">
    <ion-input v-model="contact.e_mail" style="position:absolute" type="email" />
    <ion-icon class="mail" slot="end" :icon="mailOutline"></ion-icon>
 </ion-item>
     </ion-col>
 <ion-col class="mail-call">
   <ion-label style="backgound:transparent" color="medium">Optin Mail</ion-label>

 <!--<ion-item  class="ion-margin-bottom mail" lines="none">-->
   <ion-toggle style="backgound:red" mode="ios" color="secondary" :checked="contact.mail_optin" v-model="contact.mail_optin"></ion-toggle>
 <!--</ion-item>-->
     </ion-col>
 </ion-row>

<ion-row>
     <ion-col size="9">
   <ion-label color="medium">Telephone mobile</ion-label>

 <ion-item class="ion-margin-bottom">
    <ion-input v-model="contact.telephone_mobile" type="tel" />
    <ion-icon class="tel" slot="end" :icon="call"></ion-icon>
 </ion-item>
     </ion-col>
 <ion-col class="mail-call">
   <ion-label style="backgound:transparent" color="medium">Optin sms</ion-label>

 <!--<ion-item  class="ion-margin-bottom mail" lines="none">-->
   <ion-toggle mode="ios" color="secondary" :checked="contact.sms_optin" v-model="contact.sms_optin"></ion-toggle>
 <!--</ion-item>-->
     </ion-col>
 </ion-row>

<ion-row>
     <ion-col size="9">
   <ion-label color="medium">Telephone fixe</ion-label>

 <ion-item class="ion-margin-bottom">
    <ion-input v-model="contact.telephone_fixe" type="tel" />
    <ion-icon class="tel" slot="end" :icon="call"></ion-icon>

 </ion-item>
     </ion-col>
 </ion-row>

  </ion-grid>

  </form>

    </ion-content>
  </ion-page>
</template>

<script>
import {menuOutline,notificationsOutline,chevronBackOutline,call,mailOutline} from 'ionicons/icons';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon,IonInput,IonRow,IonCol,IonToggle} from '@ionic/vue';
import { defineComponent } from 'vue';
import { CallNumber } from '@ionic-native/call-number';
import { isPlatform } from '@ionic/vue';
import axios  from "axios";

export default defineComponent({
  name: 'Home',
 
 
 
 
     ionViewDidEnter() {

 axios.get('https://api-v2.hopcrm.com/api/mobile/contacts/'+this.userId)
            .then((response) =>{ this.contact = response.data.contact;
             this.entreprise = response.data.entreprise;
    console.log(this.contact.mail_optin);

     
            })
            .catch(error => {console.log(error);});

    },components: {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonIcon,
    IonInput,IonRow,IonCol,IonToggle
  },data(){
        return{
			menuOutline,
      notificationsOutline,
      chevronBackOutline,
      call,mailOutline,

     entreprise:{
       entreprise:''
     },
      userId:this.$route.params.id,
        contact:{
          nom:'',
          prenom:'',
          e_mail:'',
          telephone_mobile:'',
          mail_optin:null,
          sms_optin:null

  
      }

        }},
    methods:{

        callNow() {
    CallNumber.callNumber(this.contact.telephone_mobile, true)
      .then(() => console.log('Dialer Launched!'))
      .catch(() => console.log('Error launching dialer'));
  },
  mail(){
      if (isPlatform('ios'))
      {
      window.open('googlegmail:///co?to='+this.contact.e_mail);

      }
        if (isPlatform('android'))
      {
            window.open('mailto:'+this.contact.e_mail);

      }
  }
    }    
});
</script>

<style scoped>
ion-content {
  --padding-bottom: 110px;
  --padding-end: 14px;
  --padding-start: 14px;
  --padding-top: 17px;
}
ion-toggle{
 height: 30px;

}

ion-item{
  margin-top: 2px;
}
ion-item.mail{
  --background: transparent;
}

ion-item ion-icon{
  position: relative;
  right: -19px;
  z-index: 1000;
  border: 1px solid #58b84a;
  background: #58b84a;
  color: white; 
  height: 100%;
  padding: 10px;
}
div#a{
display:flex;
color:white;
}
div#b{
display:flex;
justify-content: space-between;
color:white;
}
ion-title{
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight:50;
  font-size:18px;
  margin-left: -9px;
  display: inline-grid;
}
ion-title p{
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 9px;
  letter-spacing: 1px;
  line-height: -15px;  
  margin: 3px 0;
  color:hsl(185, 44%, 96%);
}


ion-toolbar.top{
  --border-color:transparent;
  height: 50px;
  display: flex;
  align-items: center;
  justify-items: center;
  color:white;
  
}
ion-buttons ion-button{

  font-size: 12px!important;
}
ion-buttons.back{

 position: relative;
 left: -26px;
}
ion-header {
  --border-style: none;
}
ion-thumbnail {
  --size:68px;
  --border-radius:100px;
  margin-top: 8px;
}
ion-toolbar{
  height:140px;
  /*display:flex;
  flex-direction: column;*/
  padding-left:10px;
 

}
ion-toolbar.bottom ion-buttons ion-button ion-icon{
  position:absolute;font-size:35px;

}
ion-toolbar.bottom ion-buttons .mail{
margin-right:0px;
}
ion-toolbar.bottom ion-buttons{
margin-right:10px;
}

ion-col.mail-call{
display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    top: -9px;
}


ion-item.statut{
  --background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  left: -11px;
  position: absolute;
}

ion-badge{
 --padding-start:8px;
 --padding-end:8px;
 --padding-top:8px;
 --padding-bottom:8px;
--background:white;

}
</style>