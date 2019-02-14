<template>
  <div>
    <p>
      标题：
      <input v-model="title">
    </p>
    <p>
      内容：
      <input v-model="content">
    </p>
    <button type="button" @click="add()">提交</button>
    <button type="button" @click="back()">返回</button>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    add() {
      if (this.title === "" || this.content === "") {
        alert("不能为空");
      } else {
        store.commit("addItem", {
          title: this.title,
          content: this.content,
          date: new Date().toLocaleString()
        });
        this.title = "";
        this.content = "";
        this.$router.push("/home/list");
      }
    },
    back() {
      this.$router.push("/home/user");
    }
  }
};
</script>
<style scoped>
</style>