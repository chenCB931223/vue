<template>
  <div>
    <div class="title">
      <p>{{itemList[0].title}}</p>
    </div>
    <div class="content">
      <p>{{itemList[0].content}}</p>
    </div>
    <div class="back">
      <button class="btn" @click="back()">返回</button>
    </div>
  </div>
</template>

<script>
import store from '@/store'
export default {
  store,
  computed: {
    itemList () {
      return store.state.lists
    }
  },
  methods: {
    back () {
      this.$router.push('/home/list')
    }
  }
}
</script>
<style scoped lang="scss">
  .title{
    width: 100%;
    height: 100px;
    line-height: 100px;
    text-align: center;
    color: #f00000;
    box-sizing: border-box;
  }
  .content{
    width: 100%;
    text-align: center;
    color: #f00000;
    p{
      word-wrap: break-word
    }
  }
  .back{
    margin: 50px auto;
    text-align: center;
    .btn{
      width: 50px;;
      height: 30px;
      line-height: 30px;
      background: #428412;
      color: #fff;
    }
  }
</style>