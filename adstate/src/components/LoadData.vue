<template>
<div id="wrapper">  
  <div id="menu"></div>
  
  
  <div id="main">
    <button id="loadDataButton" @click=showData()>Load Data</button>
    <p> First Name: </p>
    <input id="firstName" type="text"> 

    <p> Last Name: </p>
    <input id="lastName" type="text">

    <p> Email: </p>
    <input id="email" type="text">
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

  }
}
</script>
