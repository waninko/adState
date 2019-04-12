<template>
<div id="wrapper">
    <div id="menu"></div>
    <div id="main">
    
    <p> First Name: </p>
    <input id="firstName" type="text"  v-model="personArray.firstName"> 

    <p> Last Name: </p>
    <input id="lastName" type="text"  v-model="personArray.lastName">

    <p> Email: </p>
    <input id="email" type="text"  v-model="personArray.email">
    <hr>
    <p>Address:</p>
    <input id="address" type="text">
    <p> Gender: </p>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <p> Purpose: </p>
    <select>
        <option value="business"> Business </option>
        <option value="pleasure"> Pleasure </option>
        <option value="both"> Both </option>
    </select>
    <p> Activities: </p>
    <input type="checkbox" name="activites" value="football"> Football 
    <input type="checkbox" name="activites" value="basketball"> Basketball
    <input type="checkbox" name="activites" value="tennis"> Tennis
    <input type="checkbox" name="activites" value="e-sports"> E-Sports  
    <button id="saveButton"> Save </button> 

    </div>
</div>
</template>

<script>
import Axios from "axios"; 
export default {
  name: 'LoadData',
  props: ['firstName' , 'lastName' , 'email'],
  mounted: function() {
    this.showData();
  },
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