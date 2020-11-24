<template>
  <div class="full-container">
    <div class="input-container">
      <Input v-on:getNewTask="createNewTask" />
    </div>
    <hr />
    <Edit v-if="isEditting" v-on:editTask="editTask" />
    <div class="toDoList-container">
      <ToDoItem
        v-for="item in todoItems"
        v-on:getToggleInfo="toggleEdit"
        v-on:deleteTask="deleteTask"
        :key="item.id"
        :task="item.task"
        :itemID="item.id"
        :isDone="item.isDone"
        :isEditting="isEditting"
      />
    </div>
  </div>
</template>

<script>
import Input from "./Input.vue";
import ToDoItem from "./ToDoItem.vue";
import Edit from "./Edit.vue";

export default {
  components: { Input, ToDoItem, Edit },
  data() {
    return {
      name: "ToDoList",
      todoItems: [],
      isEditting: false,
      currentIdForEditting: "",
    };
  },

  methods: {
    log(msg) {
      console.log(msg);
    },
    getRandomID() {
      let ID = "";
      // eslint-disable-next-line operator-linebreak
      const keysToUse =
        "abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let count = 1;
      while (count <= 10) {
        ID += keysToUse[Math.floor(Math.random() * keysToUse.length)];
        count += 1;
      }
      return ID;
    },
    createNewTask(task) {
      this.todoItems.push({ task, isDone: false, id: this.getRandomID() });
    },
    toggleEdit(toggle) {
      this.isEditting = toggle.toggle;
      this.currentIdForEditting = toggle.id;
    },
    editTask(newTask) {
      const that = this;
      this.todoItems.forEach((eachTask, index) => {
        if (eachTask.id === that.currentIdForEditting) {
          that.todoItems[index].task = newTask;
        }
      });
      this.isEditting = false;
      this.currentIdForEditting = "";
    },
    deleteTask(taskId) {
      const that = this;
      this.todoItems.forEach((eachTask, index) => {
        if (eachTask.id === taskId) {
          that.todoItems.splice(index, 1);
        }
      });
    },
  },
};
</script>
