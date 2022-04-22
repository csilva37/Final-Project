<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <h1 class="text-4xl">Home Page</h1> <br /> 
   <h2
      v-if="!isAuthenticated"
      class="text-4xl tracking-tighter"
    >
      Welcome
    </h2>
    <h2 v-else class="text-4xl tracking-tighter ">
      Welcome {{ user }}
    </h2>
<p class="text-2xl"> To your one stop shop for all of your character's needs!</p> 
 <div
    class="flex flex-col items-center justify-center space-y-12  min-h-screen-nonav"
  >
   <br />  <h1 class="text-2xl"> Login as an existing user, or sign up today to get access to your own personal character creator!</h1>
   <img src="../assets/dndlogo.jpg">
 </div>
</template>