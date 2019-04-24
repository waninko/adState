<template>
  <div id="app">
    <router-view :personprop="person" @save="save"/>
  </div>
</template>

<script>
import LoadData from "@/components/LoadData";
import SaveData from "@/components/SaveData";
import ShowData from "@/components/ShowData";

export default {
  name: "App",
  data: function() {
    return {
      person: {
        firstname: "Kari",
        lastname: "Nordmann",
        email: "Kari.Nordman@norge.no",
        address: "",
        gender: "",
        purpose: "",
        activities: []
      }
    };
  },
  methods: {
    save: function(fromComponent) {
      this.person.firstname = fromComponent.firstname;
      this.person.lastname = fromComponent.lastname;
      this.person.email = fromComponent.email;
      this.person.address = fromComponent.address;
      this.person.gender = fromComponent.gender;
      this.person.purpose = fromComponent.purpose;
      this.person.activities = fromComponent.activities;
    }
  }
};
</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  color: #2c3e50;
  margin-top: 60px;
}

#menu {
  width: 100px;

  padding-top: 15px;
  padding-right: 15px;
  border-right: 1px solid #2c3e50;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
}

#main {
  width: 75%;
  padding-right: 10px;
  float: right;
  padding: 15px;
  height: 100%;
  top: 0;
}

#goPage {
  cursor: pointer;
  position: static;
  left: 0;
  width: 113px;
  max-width: 150px;
  border: none;
  background: white;
  border-bottom: 1px solid #2c3e50;
  padding-top: 20%;
  color: #2c3e50;
  font-size: 15px;
}
</style>
