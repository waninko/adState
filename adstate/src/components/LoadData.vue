<template>
<div id="wrapper">  
  <div id="menu"></div>
  
  
  <div id="main">
    <button id="loadDataButton">Load Data</button>
    <p> First Name: </p>
    <input type="text">

    <p> Last Name: </p>
    <input type="text">

    <p> Email: </p>
    <input type="text">
    <button id="saveButton"> Save </button> 

    </div>


</div>
</template>

<script>
export default {
  name: 'LoadData',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
