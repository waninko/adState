<template>
<div id="wrapper"> 
  <div id="menu">
    <button id="goPage">Page 1</button>
    <button id="goPage" @click=goPage2()>Page 2</button>
    <button id="goPage" @click=goPage3()>Page 3</button>
    
  </div>
  
  
  <div id="main">
    <button id="loadDataButton" @click=showData()>Load Data</button>
    <p> First Name: </p>
    <input id="firstName" type="text" v-model="personArray.firstName"> 

    <p> Last Name: </p>
    <input id="lastName" type="text" v-model="personArray.lastName">

    <p> Email: </p>
    <input id="email" type="text" v-model="personArray.email">
    <br>
    <button id="saveButton" @click="save()"> Save </button> 

    </div>


</div>
</template>

<script>
import Axios from "axios"; 
export default {
  name: 'LoadData',
  props: ['firstName' , 'lastName' , 'email', 'address', 'gender', 'purpose', 'activities'],
  data () {
    return {
      personArray: [],
    }
  },
  methods: {
     async showData() {
      const url = "https://api.myjson.com/bins/t1cb4";
      const response = await Axios.get(url);
      this.personArray = response.data;
      console.log("responsedata: ", response.data);
    },
     
    async goPage2(){
      this.$router.push({ name: 'SaveData', 
      params: {FirstName: this.personArray.firstName, LastName: this.personArray.lastName, Email: this.personArray.email} } );
 
    },
     async goPage3(){
      this.$router.push({ name: 'ShowData', params: {
        firstName: this.firstName, lastName: this.lastName, email: this.email,} } );
 
    },
     async save() {
      var data = {
        firstName: this.personArray.firstName,
        lastName:  this.personArray.lastName,
        email: this.personArray.email,
     
      };
      console.log(data);
  
   this.$emit("newdata", { testObj: data });
    }


  }
}
</script>
<style>
#loadDataButton{
  cursor: pointer;
  border: none;
  background: white;
  border-bottom: 1px solid;
float: right;
margin-right: 50%;
color: #2c3e50;
font-size: 20px;
}

#saveButton{
  cursor: pointer;
  border: none;
  background: white;
  border-bottom: 1px solid;
margin-top: 5%;
margin-right: 40%;
color: #2c3e50;
font-size: 20px;
}
</style>

