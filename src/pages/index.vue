<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <h1 class="text-4xl">Home Page</h1>
   <h2
      v-if="!isAuthenticated"
      class="text-4xl tracking-tighter font-extralight"
    >
      Welcome
    </h2>
    <h2 v-else class="text-4xl tracking-tighter font-extralight">
      Welcome {{ user }}
    </h2>
<p class="text-xl"> Your one stop shop for all of your character's needs!</p> 
 <div
    class="flex flex-col items-center justify-center space-y-12  min-h-screen-nonav"
  >
   
 </div>
</template>