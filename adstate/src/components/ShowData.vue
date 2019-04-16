<template>
<div id="wrapper">
    <div id="menu">
        <button id="goPage1" @click=goPage1()>Page 1</button>
        <button id="goPage2" @click=goPage2()>Page 2</button>
        <button id="goPage3" @click=goPage3()>Page 3</button>
    </div>
    <div id="main">
    <p> First Name: {{firstName}} </p>  
    <p> Last Name: {{lastName}} </p>
    <p> Email: {{email}} </p> 
    <hr>
    <p> Address: {{address}} </p>
    <p> Gender: {{gender}} </p>
    <p> Purpose: {{purpose}} </p>
    <p> Activities: {{activities}} </p>
    
    <button @click="console()"> console.log </button>
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
      //personArray: [],
    }
  },
  methods: {
    async goPage1(){
      this.$router.push({ name: 'LoadData', 
      params: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        gender: this.gender,
        purpose: this.purpose,
        activities: this.activities
        }});
 
    },

    async goPage2(){
      this.$router.push({ name: 'SaveData', 
      params: {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        gender: this.gender,
        purpose: this.purpose,
        activities: this.activities
        }});
 
    },
     async goPage3(){
     //sett inn en pagerefresh
 
    },
    async console(){
      console.log("address i showdata: " + this.address);
    }


  }
}
</script>