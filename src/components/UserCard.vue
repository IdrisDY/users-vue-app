<template>
    <div class="user-card">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <router-link class="link-btn" :to="'/user/' + user.id" >View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['user']
  };
  </script>
  
  <style scoped>
  .user-card {
    border: 1px solid #ddd;
    padding:20px 10px;
    border-radius: 5px;
    text-align: center;
  }
  .user-card:hover{
    scale: 1.1;
  }
  .link-btn{
    background: lightblue;
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 12px;
  }
  .link-btn:hover,.link-btn:focus{
background: lightslategrey;
  }
  </style>
  