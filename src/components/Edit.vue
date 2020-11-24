<template>
  <form v-on:submit.prevent="editTask">
    <div class="form-group">
      <label for="edit-task">Edit your task:</label>
      <input
        v-model.lazy="editVal"
        type="text"
        class="form-control"
        id="edit-task"
        placeholder="Edit your task"
      />
    </div>

    <button type="submit" class="btn btn-info">Edit</button>
  </form>
</template>

<script>
export default {
  name: "Edit",
  data() {
    return {
      editVal: "",
    };
  },
  methods: {
    log(msg) {
      return console.log(msg);
    },
    editTask() {
      this.$emit("editTask", this.editVal);
      this.editVal = "";
    },
  },
};
</script>
