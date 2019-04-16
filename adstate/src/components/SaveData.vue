<template>
  <div id="wrapper">
    <div id="menu">
   <button id="goPage" @click=goPage1()>Page 1</button>
   <button id="goPage" @click=goPage2()>Page 2</button>
   <button id="goPage" @click=goPage3()>Page 3</button>




    </div>
    <div id="main">
      <p>First Name:</p>
      <input id="firstName" type="text" v-model="this.firstName">

      <p>Last Name:</p>
      <input id="lastName" type="text" v-model="this.lastName">

      <p>Email:</p>
      <input id="email" type="text" v-model="this.email">
      <hr>
      <p>Address:</p>
      <!-- <textarea id="address" v-model="address" maxlength="50" placeholder="Max 50 characters"></textarea> -->
      <input id="address" type="text" v-model="address"  maxlength="50" placeholder="    Max 50 characters"> 
      <p>Gender:</p>
      <input type="radio" name="gender" value="Male" v-model="gender"> Male
      <input type="radio" name="gender" value="Female" v-model="gender"> Female
      <p>Purpose:</p>
      <select v-model="purpose">
        <option value="Business">Business</option>
        <option value="Pleasure">Pleasure</option>
        <option value="Both">Both</option>
      </select>
      <p>Activities:</p>
      <input type="checkbox" name="activites" value="Football" :disabled="activities.length >= 2 && !activities.includes('football')"  v-model="activities"> 
      <label for="football">Football</label>
      <input type="checkbox" name="activites" value="Basketball" :disabled="activities.length >= 2 && !activities.includes('basketball')" v-model="activities">
      <label for="basketball">Basketball</label>
      <input type="checkbox" name="activites" value="Tennis" :disabled="activities.length >= 2 && !activities.includes('tennis')" v-model="activities"> 
      <label for="tennis">Tennis</label>
      <input type="checkbox" name="activites" value="E-sports" :disabled="activities.length >= 2 && !activities.includes('e-sports')" v-model="activities">
      <label for="e-sports">E-sports</label>
      <button id="saveButton" @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "LoadData",
  props: ["FirstName", "LastName", "Email" ],
 
  data() {
    return {
      firstName: this.FirstName,
      lastName: this.LastName,
      email:this.Email,
      address: " ",
      gender: " ",
      purpose: "",
      activities: []
    };
  },

  methods: {
    async goPage1(){
      this.$router.push({
        name: "LoadData",
        params: {
         firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          address: this.address,
          gender: this.gender,
          purpose: this.purpose,
          activities: this.activities
        }
      });
    },

    async goPage2() {
     //sett inn en pagerefresh
    },
    async goPage3() {
      
        this.$router.push({
        name: "ShowData",
        params: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          address: this.address,
          gender: this.gender,
          purpose: this.purpose,
          activities: this.activities
        
        }
      });
      
     
    },
    async save() {
      var data = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        address: this.address,
        gender: this.gender,
        prupose: this.purpose,
        activities: this.activities
      };
      console.log("Her er data'n i address: " + data.address);
    if(this.activities.length > 2 ) {
      alert("You have to select less than 3 activities because of time-related issues.")

    }
    else if( this.activities.length == 0){
      alert("You have to select atleast one activity.")
    }
    else {
       this.$emit("newdata", { testObj: data });

    }
     
    }
  }
};
</script>