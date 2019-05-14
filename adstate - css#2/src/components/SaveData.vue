<template>
  <div id="wrapper">

    <section>

      <div id="main">
        <div class="names">
          First Name:
          {{personprop.firstname}}

        <p>
          Last Name:
          {{personprop.lastname}}
        </p>
        <p>
          Email:
          {{personprop.email}}
        </p>
        </div>
        <hr>
        <div class="newAdditions">
        <div class="address">
        Address:
        <input
          id="address"
          type="text"
          v-model="person.address"
          maxlength="50"
          placeholder="   Max 50 characters"
        >
        </div>
        <div class="gender">
        Gender:
        <input type="radio" name="gender" value="Male" v-model="person.gender"> Male
        <input type="radio" name="gender" value="Female" v-model="person.gender">
        Female
        </div>
        <div class="purpose">
        Purpose:
        <select v-model="person.purpose">
          <option value="Business">Business</option>
          <option value="Pleasure">Pleasure</option>
          <option value="Both">Both</option>
        </select>
        </div>
        <div class="activities">
        <p class="act_txt">Choose one or two activites.</p>
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
        </div>
        </div>
        <br>
        <b-button variant="outline-info" class="saveButton" id="saveButton" @click="save()">Save</b-button>
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
        address: null,
        gender: null,
        purpose: null,
        activities: []
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
  },

  methods: {
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
    },

    save(error) {
      this.$emit("save", this.person);

      if (this.person.activities.length == 0) {
        alert("You have to select atleast one activity.");
      } else {
        alert("Your information has been saved!");
      }
    }
  }
};
</script>

<style scoped>
#main{
  position: relative;
left:30px;
top: 10px;
  font-size: 18px;
}
.names{
position: relative;
left:25px;
top: 10px;
}
.newAdditions{
position: relative;
left:25px;
top: 10px;
}
.address{
margin-bottom: 40px;
 position: relative;
  left: -30px;
}

.gender{
  margin-bottom: 25px;
}

.purpose{
  margin-bottom: 60px;
}
.activities{
  position: relative;
  left: -40px;
}
.act_txt{
  position: relative;
  left: 30px;
}

#saveButton{
  position: relative;
  left:100px;
}
button:hover{
  border-radius: 75px;
  box-shadow: 0 0 11px rgba(33,33,33,.2);
}
</style>

