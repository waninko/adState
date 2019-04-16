<template>
  <div id="app">
   
    <router-view v-on:newdata="handleNewData" testproperty=testObj />
  </div>
</template>

<script>
export default {
  name: 'App', 
  props:['firstName' , 'lastName' , 'email', 'address', 'gender', 'purpose', 'activities'],
  data () {
    return {
      testusername: 'testUserfraApp',
      name: '',
      
      testObj: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      gender: '',
      purpose:'',
      activities: ''
        
      }
      
    }
  },
  methods: {
    handleNewData: function (event){
      console.log(event);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
