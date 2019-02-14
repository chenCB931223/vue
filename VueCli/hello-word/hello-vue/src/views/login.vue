<template>
  <div>
    <form v-if="!isReg">
      <h3 class="title">登录界面</h3>
      <div class="userName">
        用户名：
        <input type="text" id="name" v-model="name">
      </div>
      <div class="password">
        密码 :
        <input type="password" id="password" v-model="passWord">
      </div>
      <div class="btn_box">
        <a type="button" @click="login()">登录</a>
        <a type="button" @click="rege()">注册</a>
      </div>
    </form>

    <form v-else>
      <h3 class="title">注册界面</h3>
      <div class="userName">
        用户名：
        <input type="text" v-model="name">
      </div>
      <div class="password">
        密码 :
        <input type="password" id="password" v-model="passWord">
      </div>
      <div class="repeat">
        再次输入密码:
        <input type="password" id="repeat" v-model="repeat">
      </div>
      <div class="btn_box">
        <a type="button" @click="addUser()">确定</a>
        <a type="button" @click="cache()">取消</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isReg: false,
      name: "",
      passWord: "",
      repeat: ""
    };
  },
  methods: {
    login() {
      if (
        localStorage.getItem("name") === this.name &&
        localStorage.getItem("password") === this.passWord
      ) {
        this.$router.push("/home/list");
      } else {
        alert("密码不正确");
      }
    },
    rege() {
      this.isReg = true;
    },
    cache() {
      this.isReg = false;
    },
    addUser() {
      if (this.passWord === this.repeat) {
        localStorage.setItem("name", this.name);
        localStorage.setItem("password", this.passWord);
        (this.name = ""), (this.passWord = ""), (this.repeat = "");
        this.isReg = false;
      } else {
        alert("两次密码输入不一致");
      }
    }
  }
};
</script>
<style scoped lang="scss">
.title {
  padding: 10px;
}
.userName {
  margin-top: 10px;
  margin-left: 36px;
}
.password {
  margin-top: 5px;
  margin-left: 50px;
  input[type="password"] {
    margin-left: 10px;
  }
}
.btn_box {
  margin-top: 30px;
  a {
    display: inline-block;
    width: 100px;
    height: 20px;
    border: 1px solid #428113;
    margin-left: 10px;
    text-align: center;
  }
}
.repeat {
}
</style>