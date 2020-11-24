<template>
  <form v-on:submit.prevent="getNewTask">
    <div class="form-group">
      <label for="input-task">Enter a task:</label>
      <input
        v-model.lazy="inputVal"
        type="text"
        class="form-control"
        id="input-task"
        placeholder="What do you want to add"
      />
    </div>

    <button type="submit" class="btn btn-info">Add Item</button>
  </form>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      inputVal: "",
    };
  },
  methods: {
    log(msg) {
      return console.log(msg);
    },
    getNewTask() {
      this.$emit("getNewTask", this.inputVal);
      this.inputVal = "";
    },
  },
};
</script>
