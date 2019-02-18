<template>
  <div class="box">
    <div class="image">
      <img src="../assets/logo.png" alt>
    </div>
    <button type="button" @click="addUrl()" class="btn">添加</button>
    <button type="button" @click="addLogin()" class="btn">退出</button>
  </div>
</template>

<script>
export default {
  name: "uers",
  methods: {
    addUrl() {
      this.$router.push('/add')
    },
    addLogin() {
      this.$router.push('/')
    }
  }
};
</script>
<style scoped lang="scss">
.box {
  text-align: center;
}
.btn {
  width: 50px;
  height: 30px;
  margin-top: 10px;
  margin-right: 10px;
  border: 1px solid #e2e2e2;
  color: #fff;
  background: #428123;
}
</style>