<template>
<div id="wrapper">  
  <div id="menu">
    <button id="goPage1">Page 1</button>
    <button id="goPage2" @click=goPage2()>Page 2</button>
    <button id="goPage3" @click=goPage3()>Page 3</button>
  </div>
  
  
  <div id="main">
    <button id="loadDataButton" @click=showData()>Load Data</button>
    <p> First Name: </p>
    <input id="firstName" type="text" v-model="personArray.firstName"> 

    <p> Last Name: </p>
    <input id="lastName" type="text" v-model="personArray.lastName">

    <p> Email: </p>
    <input id="email" type="text" v-model="personArray.email">
    <button id="saveButton"> Save </button> 

    </div>


</div>
</template>

<script>
import Axios from "axios"; 
export default {
  name: 'LoadData',
  props: ['firstName' , 'lastName' , 'email'],
  data () {
    return {
      personArray: [],
    }
  },
  methods: {
     async showData() {
      const url = "https://api.myjson.com/bins/1dvx2c";
      
      
      const response = await Axios.get(url);
      this.personArray = response.data;
      console.log("responsedata: ", response.data);
    
    },
    async goPage2(){
      this.$router.push({ name: 'SaveData', params: {firstName: this.firstName, lastName: this.lastName, email: this.email} } );
 
    },
     async goPage3(){
      this.$router.push({ name: 'ShowData', params: {firstName: this.firstName, lastName: this.lastName, email: this.email} } );
 
    }


  }
}
</script>
