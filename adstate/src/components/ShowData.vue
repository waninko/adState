<template>
<div id="wrapper">
    <div id="menu">
        <button id="goPage" @click=goPage1()>Page 1</button>
        <button id="goPage" @click=goPage2()>Page 2</button>
        <button id="goPage" @click=goPage3()>Page 3</button>
    </div>
    <div id="main">
    <p> First Name: {{personprop.firstname}} </p>  
    <p> Last Name: {{personprop.lastname}} </p>
    <p> Email: {{personprop.email}} </p> 
    <hr>
    <p> Address: {{personprop.address}} </p>
    <p> Gender: {{personprop.gender}} </p>
    <p> Purpose: {{personprop.purpose}} </p>
    <p> Activities: {{personprop.activities.toString()}} </p>
    </div>
</div>
</template>


<script>
import Axios from "axios"; 
export default {
  name: 'LoadData',
  props: ["personprop"],

  methods: {
    async goPage1(){
      this.$emit("save", this.person);
     this.$router.push('/');
    },

    async goPage2(){
       this.$emit("save", this.person);
      this.$router.push('SaveData'); 
    },
    
     async goPage3(){
      this.$emit("save", this.person);
      this.$router.push('ShowData'); 
    },
  


  }
}
</script>