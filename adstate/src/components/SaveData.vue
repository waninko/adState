<template>
  <div id="wrapper">
    <div id="menu">
      <button id="goPage" @click="goPage1()">Page 1</button>
      <button id="goPage" @click="goPage2()">Page 2</button>
      <button id="goPage" @click="goPage3()">Page 3</button>
    </div>
    <div id="main">
      <p>First Name:</p>
      {{personprop.firstname}}
      <!-- <input id="firstName" type="text" v-model="personprop.firstname"> -->

      <p>Last Name:</p>
      {{personprop.lastname}}
      <!-- <input id="lastName" type="text" v-model="personprop.lastname"> -->

      <p>Email:</p>
      {{personprop.email}}
      <!-- <input id="email" type="text" v-model="personprop.email"> -->
      <hr>
     <p>Address:</p>
      <input
        id="address"
        type="text"
        v-model="person.address"
        maxlength="50"
        placeholder=" Max 50 characters"
      >
      <p>Gender:</p>
      <input type="radio" name="gender" value="Male" v-model="person.gender"> Male
      <input type="radio" name="gender" value="Female" v-model="person.gender"> Female
      
      <p>Purpose:</p>
      <select v-model="person.purpose">
        <option value="Business">Business</option>
        <option value="Pleasure">Pleasure</option>
        <option value="Both">Both</option>
      </select>

      <p> Choose one or two activites.</p>
      <input
        type="checkbox"
        name="activites"
        value="Football"
        :disabled="person.activities.length >= 2 && !person.activities.includes('football')"
        v-model="person.activities"
      >
      <label for="football">Football</label>
      <input
        type="checkbox"
        name="activites"
        value="Basketball"
        :disabled="person.activities.length >= 2 && !person.activities.includes('basketball')"
        v-model="person.activities"
      >
      <label for="basketball">Basketball</label>
      <input
        type="checkbox"
        name="activites"
        value="Tennis"
        :disabled="person.activities.length >= 2 && !person.activities.includes('tennis')"
        v-model="person.activities"
      >
      <label for="tennis">Tennis</label>
      <input
        type="checkbox"
        name="activites"
        value="E-sports"
        :disabled="person.activities.length >= 2 && !person.activities.includes('e-sports')"
        v-model="person.activities"
      >
      <label for="e-sports">E-sports</label>
      <br>
      <button id="saveButton" @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "LoadData",
  props: ["personprop"],

  data() {
    return {
      person:{
      firstname: this.personprop.firstname,
      lastname: this.personprop.lastname,
      email: this.personprop.email,
      address: null,
      gender: null,
      purpose: null,
      activities: []
      }
      
    };
  },

  methods: {
    async goPage1() {
     this.$emit("save", this.person);
     this.$router.push('/');
    },

    async goPage2() {
      this.$emit("save", this.person);
     this.$router.push('SaveData');    
     },

    async goPage3() {
     this.$emit("save", this.person);
     this.$router.push('ShowData');
    },
    
    save(error) {
      this.$emit("save", this.person);
      
      if (this.person.activities.length == 0) {
        alert("You have to select atleast one activity.");
      } 
      console.log("dette ligger i data: ", this.person.activities);
    }
  }
};
</script>