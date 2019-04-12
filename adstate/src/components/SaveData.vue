<template>
<div id="wrapper">
    <div id="menu"></div>
    <div id="main">
    <button id="loadDataButton" @click=showData()>Load Data</button>
    <p> First Name: </p>
    <input id="firstName" type="text"> 

    <p> Last Name: </p>
    <input id="lastName" type="text">

    <p> Email: </p>
    <input id="email" type="text">
    <hr>
    <p>Address:</p>
    <input id="address" type="text">
    <p> Gender: </p>
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <p> Purpose: </p>
    <select>
        <option value="business"> Business </option>
        <option value="pleasure"> Pleasure </option>
        <option value="both"> Both </option>
    </select>
    <p> Activities: </p>
    <input type="checkbox" name="activites" value="football"> Football 
    <input type="checkbox" name="activites" value="basketball"> Basketball
    <input type="checkbox" name="activites" value="tennis"> Tennis
    <input type="checkbox" name="activites" value="e-sports"> E-Sports  
    <button id="saveButton"> Save </button> 

    </div>
</div>
</template>