<template>
<div id="wrapper">
    <div id="menu"></div>
    <div id="main">
    <p> First Name: {{firstName}} </p>  
    <p> Last Name: {{lastName}} </p>
    <p> Email: {{email}} </p> 
    <hr>
    <p> Address: {{address}} </p>
    <p> Gender: {{gender}} </p>
    <p> Purpose: {{purpose}} </p>
    <p> Activities: {{activities}} </p>
    <button> Go to Page 1 </button> 
    <button> Go to Page 2 </button>
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
    async goPage2(){
      this.$router.push({ name: 'SaveData', params: {firstName: this.firstName, lastName: this.lastName, email: this.email} } );
 
    },
     async goPage3(){
      this.$router.push({ name: 'ShowData', params: {firstName: this.firstName, lastName: this.lastName, email: this.email} } );
 
    }


  }
}
</script>