<template>
  <div class="item-container">
    <div class="item-text" :class="{ completed: done }">{{ task }}</div>
    <div class="item-buttons">
      <button class="btn btn-info" v-on:click="this.toggleEdit">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-pencil-square"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
          />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
          />
        </svg>
        Edit
      </button>

      <button class="btn btn-info" @click="toggleDone">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-check2-circle"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M15.354 2.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L8 9.293l6.646-6.647a.5.5 0 0 1 .708 0z"
          />
          <path
            fill-rule="evenodd"
            d="M8 2.5A5.5 5.5 0 1 0 13.5 8a.5.5 0 0 1 1 0 6.5 6.5 0 1 1-3.25-5.63.5.5 0 1 1-.5.865A5.472 5.472 0 0 0 8 2.5z"
          />
        </svg>
        Done
      </button>
      <button class="btn btn-info" v-on:click="deleteTask">
        <svg
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="bi bi-trash"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          />
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          />
        </svg>
        Delete
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDoItem",
  props: ["task", "itemID", "isDone", "isEditting"],
  data() {
    return {
      done: this.isDone,
      editting: this.isEditting,
    };
  },
  methods: {
    toggleDone() {
      this.done = !this.done;
    },
    toggleEdit() {
      this.editting = !this.editting;
      this.$emit("getToggleInfo", { toggle: this.editting, id: this.itemID });
    },
    deleteTask() {
      this.$emit("deleteTask", this.itemID);
    },
  },
};
</script>
