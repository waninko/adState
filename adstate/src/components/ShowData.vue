<template>
<div id="wrapper">
    <div id="menu"></div>
    <div id="main">
    <p> First Name: {{}} </p>  
    <p> Last Name: {{}} </p>
    <p> Email: {{}} </p> 
    <hr>
    <p> Address: {{}} </p>
    <p> Gender: {{}} </p>
    <p> Purpose: {{}} </p>
    <p> Activities: {{}} </p>
    <button> Go to Page 1 </button> 
    <button> Go to Page 2 </button>
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