<template>
  <div class="home">
    <router-view/>
    <ul class="footer">
      <li class="list">
        <router-link :to="{name:'list'}">新闻列表</router-link>
      </li>
      <li class="list">
        <router-link :to="{name:'user'}">个人中心</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped lang="scss">
.footer {
  width: 100%;
  height: 60px;
  line-height: 60px;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
}
.list {
  font-size: 16px;
  flex: 1;
  text-align: center;
  a {
    text-decoration: none;
    display: block;
    &.active {
      color: #fff;
      background: #428113;
    }
  }
}
</style>


