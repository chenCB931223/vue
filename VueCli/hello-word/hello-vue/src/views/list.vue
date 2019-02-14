<template>
  <div>
    <ul class="list">
      <li class="listItem" v-for="(item,index) in itemList" :key="index">
        <!-- {{item.title}}-{{item.content}} -->
        <h4 class="listTile">{{item.title}}</h4>
        <p class="listContent">{{item.content}}</p>
        <p class="listContent">{{item.date}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store";
export default {
  store,
  computed: {
    itemList() {
      return store.state.lists;
    }
  }
};
</script>
<style scoped lang="scss">
.list {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  font-size: 16px;
}
.listItem {
  height: 100px;
  border: 1px solid #e2e2e2;
  box-sizing: border-box;
  border-radius: 5px;
  margin-bottom: 8px;
  h4 {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    border-bottom: 1px solid #e2e2e2;
    box-sizing: border-box;
  }
  p {
    margin: 5px 0 0 8px;
  }
}
</style>