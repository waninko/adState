<template>
  <div id="app">
<header>
  <meta name="viewport" content="width=device-width, initial-scale=1">
 <div>
  <b-nav tabs align="center">
      <b-nav-item  @click="goPage1()"><div class="navItem">Load Data</div></b-nav-item>
      <b-nav-item  @click="goPage2()"><div  class="navItem">Add Info</div></b-nav-item>
       <b-nav-item @click="goPage3()"><div  class="navItem">See Order</div></b-nav-item>
    </b-nav>
</div>
</header>



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
    },
    async goPage1() {
      this.$emit("save", this.person);
      this.$router.push("/");
    },

    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("SaveData");
    },

    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("ShowData");
    }
  }
};
</script>

<style>
body{
  background-color: #FFFFE5;
  color: #669999;
}
.nav{
  background: linear-gradient(#e5ffff, #FFFFE5);
}

.navItem{
  color:#669999;
}

.navItem:hover{
  border-bottom: 0px;
  box-shadow: 0px 1px 0px rgba(33,33,33,.2);
}
input{
  border: none;
  border-bottom: solid #669999 1px;
  background-color: #FFFFE5;
}
</style>
