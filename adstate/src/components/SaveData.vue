<template>
  <div id="wrapper">
    <div id="menu">
   <button id="goPage3" @click=goPage3()>Page 3</button>

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
      <input id="address" type="text" v-model="address">
      <p>Gender:</p>
      <input type="radio" name="gender" value="male" v-model="gender"> Male
      <input type="radio" name="gender" value="female" v-model="gender"> Female
      <p>Purpose:</p>
      <select v-model="purpose">
        <option value="business">Business</option>
        <option value="pleasure">Pleasure</option>
        <option value="both">Both</option>
      </select>
      <p>Activities:</p>
      <input type="checkbox" name="activites" value="football" v-model="activities"> Football
      <input type="checkbox" name="activites" value="basketball" v-model="activities"> Basketball
      <input type="checkbox" name="activites" value="tennis" v-model="activities"> Tennis
      <input type="checkbox" name="activites" value="e-sports" v-model="activities"> E-Sports
      <button id="saveButton" @click="save()">Save</button>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "LoadData",
  props: ["firstName", "lastName", "email"],
  mounted: function() {
    this.showData();
  },
  data() {
    return {
      editFirstName: 'jhkh',
      firstName:"",
      lastName: "",
      email:"",
      address: "",
      gender: "",
      purpose: "business",
      activities: ""
    };
  },
  methods: {
    async showData() {
      //const url = "https://api.myjson.com/bins/1dvx2c";

      //const response = await Axios.get(url);
      //this.personArray = response.data;
     
    },
    async goPage2() {
      this.$router.push({
        name: "SaveData",
        params: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        }
      });
    },
    async goPage3() {
      this.$router.push({
        name: "ShowData",
        params: {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
        addresse: this.address,
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
      console.log("Her er data'n: " + data.address);
    //   this.$router.app.$emit("newdata", { name: "Terje" });
      this.$emit("newdata", { testObj: data });
    }
  }
};
</script>