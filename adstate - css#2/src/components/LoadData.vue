<template>
  <div id="wrapper">
    <b-button  v-responsive="['hidden-all','lg','xl']" variant="outline-transparent" class="loadDataButton_large" id="loadDataButton" @click="showData()">Load</b-button>

    <div v-responsive="['hidden-all','lg','xl']" class="main_large">
      <div class="firstname">
      First Name:
      <input id="firstName" type="text" v-model="person.firstname">
      </div>

      <div class="lastname">
      Last Name:
      <input id="lastName" type="text" v-model="person.lastname">
      </div>

      <div class="email">
      Email:
      <input id="email" type="text" size="25" v-model="person.email">
      </div>
      <br>
      <b-button variant="outline-info" class="saveButton_large" id="saveButton" @click="save()">Save</b-button>
    </div>

<!----------------            MOBILE SIZE                      ----------------->

    <b-button v-responsive="['hidden-all','xs']" variant="outline-info" class="loadDataButton" id="loadDataButton" @click="showData()">Load</b-button>

    <div v-responsive="['hidden-all','xs']" class="main">
      <div class="firstname">
      First Name:
      <input id="firstName" type="text" v-model="person.firstname">
      </div>

      <div class="lastname">
      Last Name:
      <input id="lastName" type="text" v-model="person.lastname">
      </div>

      <div>
      Email:
      <input id="email" type="text" size="25" v-model="person.email">
      </div>
      <br>
      <b-button variant="outline-info" class="saveButton" id="saveButton" @click="save()">Save</b-button>
    </div>
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
        firstname: null,
        lastname: null,
        email: null
      }
    };
  },
  created: function() {
    this.person.firstname = this.personprop.firstname;
    this.person.lastname = this.personprop.lastname;
    this.person.email = this.personprop.email;
  },
  methods: {
    async showData() {
      const url = "https://api.myjson.com/bins/rhfcg";
      const response = await Axios.get(url);
      this.person = response.data;
    },

    async goPage2() {
      this.$emit("save", this.person);
      this.$router.push("SaveData");
    },
    async goPage3() {
      this.$emit("save", this.person);
      this.$router.push("ShowData");
    },

    save(error) {
      alert("Your information has been saved!");
      this.$emit("save", this.person);
    }
  }
};
</script>
<style scoped>
button:hover{
  border-radius: 75px;
  box-shadow: 0 0 11px rgba(33,33,33,.2);
  border: 2px dashed;
}

.loadDataButton_large{
   padding: 0px;
   font-size: 20px;
   color: #476b6b;
   width: 70px;
   height: 70px;
   position: relative;
   left: 150px;
   top:90px;
}
.loadDataButton{
   position: relative;
   left:35px;
   top:40px;
   height: 50px;
   width:300px;
}

.main_large{
font-size: 20px;
position: relative;
left:110px;
top: 75px;
}
.main{
  font-size:17px;
  position: relative;
  left:35px;
  top: 50px;
}

.firstname{
padding-bottom: 20px;
padding-top: 20px;

}

.lastname{
padding-bottom: 20px;
}

.saveButton_large{
font-size: 20px;
position: relative;
left:35px;
color: #476b6b;
}

.saveButton{
height: 50px;
width:300px;
color: #476b6b;
}
input {
text-align: center;
color: #476b6b
}



</style>

