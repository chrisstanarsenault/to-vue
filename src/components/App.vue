<template>
  <div id="app">
    <h1 class="text-center">To-Vue</h1>
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./ToDoList.vue";

export default {
  name: "App",
  components: {
    ToDoList,
  },
  methods: {
    log(msg) {
      return console.log(msg);
    },
  },
};
</script>

<style lang="scss">
@import "../assets/styles/Main.scss";
</style>
