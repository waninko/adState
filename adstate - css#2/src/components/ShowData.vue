<template>
  <div id="wrapper">
    <section>
      <div id="main_large"  v-responsive="['hidden-all','lg','xl']">
        <div class="names_large">
        <p>First Name: {{personprop.firstname}}</p>
        <p>Last Name: {{personprop.lastname}}</p>
        <p>Email: {{personprop.email}}</p>
        <hr>
        </div>

        <div class="additions_large">
        <p>Address: {{personprop.address}}</p>
        <p>Gender: {{personprop.gender}}</p>
        <p>Purpose: {{personprop.purpose}}</p>
        <p>Activities: {{personprop.activities.toString()}} (Go back to page 2 to alter choices)</p>
        </div>
      </div>

      <!---------- MOBILE SIZE --------->
      <div id="main"  v-responsive="['hidden-all','xs']">
        <div class="names">
        <p>First Name: {{personprop.firstname}}</p>
        <p>Last Name: {{personprop.lastname}}</p>
        <p>Email: {{personprop.email}}</p>
        </div>
        <hr>
        <div class="additions">
        <p>Address: {{personprop.address}}</p>
        <p>Gender: {{personprop.gender}}</p>
        <p>Purpose: {{personprop.purpose}}</p>
        <p>Activities: {{personprop.activities.toString()}} (Go back to page 2 to alter choices)</p>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Axios from "axios";
import vueResponsive from 'vue-responsive'
export default {
  name: "LoadData",
  props: ["personprop"],
  data() {
    return {
      person: {
        firstname: this.personprop.firstname,
        lastname: this.personprop.lastname,
        email: this.personprop.email,
        address: this.personprop.address,
        gender: this.personprop.gender,
        purpose: this.personprop.purpose,
        activities: this.personprop.activities
      }
    };
  },

  created: function() {
    this.person.firstname = this.personprop.firstname;
    this.person.lastname = this.personprop.lastname;
    this.person.email = this.personprop.email;
    this.person.address = this.personprop.address;
    this.person.gender = this.personprop.gender;
    this.person.purpose = this.personprop.purpose;
    this.person.activities = this.personprop.activities;
  },

  methods: {
    async goPage1() {
      this.$emit("save", this.person);
      this.$router.push("/");
    },

    async goPage2() {
      this.$emit("save", this.personprop);
      this.$router.push("SaveData");
    },

    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("ShowData");
    }
  }
};
</script>
<style scoped>
.names, .additions {
position: relative;
left:45px;
top: 10px;
}

.names_large, .additions_large{
font-size: 20px;
position: relative;
left:500px;
top: 30px;
}
hr{
  width:150%;
  position: relative;
  left: -650px;
}
</style>
