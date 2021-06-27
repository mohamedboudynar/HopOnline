<template>
 <ion-page>
    <ion-header :translucent="true" class="ion-no-border">
      <ion-toolbar>
        <div class="search">
         <ion-input class="search" v-model="query" type="text" placeholder="Rechercher" @keyup="handleInput" ></ion-input>
          <ion-icon class="iconn" slot="end" :icon="searchOutline"></ion-icon>
        </div>
        <ion-buttons slot="end">
          <ion-button style="position:relative;left:15px">
              <ion-icon slot="icon-only" color="white" :icon="notificationsOutline"></ion-icon>
          </ion-button>
          <ion-button>
              <ion-icon slot="icon-only" color="white" :icon="menuOutline"></ion-icon>
              </ion-button>
          </ion-buttons>
      </ion-toolbar>
       
  <ion-toolbar class="tool">
    <ion-buttons slot="start">
       <ion-icon slot="icon-only" color="medium" @click="$router.push({ name: 'Home' })" :icon="chevronBackOutline"></ion-icon>
    </ion-buttons>
    <ion-title color="medium" style="text-align:center">Contacts</ion-title>
  </ion-toolbar>

    </ion-header>
     
      
    <ion-content>
        <ion-fab horizontal="end" vertical="bottom" slot="fixed">
          <ion-fab-button color="colorionfab">
            <ion-icon :icon="personAdd"></ion-icon>
          </ion-fab-button>
        </ion-fab>

        <ion-searchbar @keyup="handleInput" clear-icon="false" style="display:none"></ion-searchbar>

        <div id="list">   
           <ion-list  v-for="(cont,index) in sort" v-bind:key="index">
                <ion-item-divider v-if="index ==0">{{cont.nom[0]}}</ion-item-divider>

                <ion-item-divider v-if="index > 0 && cont.nom[0] !== sort[index - 1].nom[0]">{{cont.nom[0]}}</ion-item-divider>

              <ion-item lines="full" inset="true" button detail="false" @click="$router.replace('/tabs/contact/'+cont.cle)">
                    <ion-avatar  slot="start">
                        <ion-img src="https://projet.lesecologistes.fr/assets/decidim/default-avatar-43686fd5db4beed0141662a012321bbccd154ee1d9188b0d1f41e37b710af3cb.svg"></ion-img>
                    </ion-avatar>
                    <ion-label>
                      <h3>{{cont.nom}} {{cont.prenom}}</h3>
                      <p>{{cont.entreprise}}</p>
                    </ion-label>
                     <ion-badge mode="ios" :color="cont.statut_couleur">{{cont.statut_label}}</ion-badge>
              </ion-item>
            </ion-list>
          
          </div>
      </ion-content>
 </ion-page>   
</template>

<script>
import {IonHeader,IonToolbar,IonTitle,IonButtons,IonContent,IonPage,IonSearchbar,IonItem,IonList,IonLabel,IonAvatar,IonImg } from '@ionic/vue';
import{add, createOutline,menuOutline,notificationsOutline,searchOutline,chevronBackOutline,personAdd} from 'ionicons/icons'
import axios  from "axios";
import * as _ from 'lodash';

export default {
    ionViewDidEnter() {
      
         axios.get("https://api-v2.hopcrm.com/api/mobile/contacts")
            .then((response) =>{ this.contacts =        

            response.data.data;
 
            })
            .catch(error => {console.log(error);});    
    }, components:{
        IonHeader,IonToolbar,IonTitle,IonButtons,IonContent,IonPage,IonSearchbar,IonItem,IonList,IonLabel,IonAvatar,IonImg
    },data(){
      return{
      contacts:{},
      keyword:'',
      add,
      createOutline,
      menuOutline,
      personAdd,
      notificationsOutline,
      chevronBackOutline,
      searchOutline,
      searchbar:'',
      }
    },created(){

    },
     computed:
  {
  sort: function(){

  return _.orderBy(this.contacts,'nom', 'asc');

  }},mounted(){

        
   
        
      
},methods:{

handleInput(event) {

    const searchbar = document.querySelector('ion-searchbar');
    const items = Array.from(document.querySelector('div#list').children);
    searchbar.addEventListener('ionInput', handleInpute(event));
    function handleInpute(event) {
      const query = event.target.value.toUpperCase();
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toUpperCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }
    }
}
}

</script>
<style scoped>

ion-toolbar{
display:flex;
}

div.search{
position: relative;
}

ion-input{
  background: white;
  border-radius: 60px;
  height: 35px;
  padding-left: 15px;
}

ion-icon.iconn{
background: hsl(185, 44%, 72%);
padding: 10px;
border-radius: 50px;
position: absolute;
right:0;
top:-1px;
color:white;
z-index: 1000;
}

.tool{
 
 align-items: center;
 justify-content: start;
 --background:hsl(210, 14%, 96%);
 font-size: 10px;
    height: 40px;
}

ion-title{
    font-size: 16px;
      position: relative;
      left: -10px;
}

ion-list{
padding:0px !important; 
}

ion-item-divider{
  --background:hsl(210, 14%, 96%);
}

ion-fab ion-fab-button ion-icon{
  color:#1d4648;
}
</style>