<template>
  <div>
    <ul class="list">
      <li class="listItem"  v-for="(item,index) in lists" :key="index" @click="skip(index)">
        <h4 class="listTile">{{item.title}}</h4>
        <p class="listContent">{{item.content}}</p>
        <p class="listContent">{{item.date}}</p>
      </li>
    </ul>
    <div class="info">
      <button  @click="prev()">上一页</button>     
      <p>第{{page}}/{{pages}}</p>
      <button  @click="next()">下一页</button>
      
    </div>
  </div>
</template>

<script>
import store from "@/store";
export default {
  store,
  data () {
    return {
      page: 1,
      pages: '',
      lists: [],
      limit: ''
    }
  },
  methods: {
    skip(n){
      console.log(this.lists[n])
      store.commit('addItem', {
        title: this.lists[n].title,
        content: this.lists[n].content,
        date: this.lists[n].date
      })
      this.$router.push('/blog')
    },
    next () {
    if(this.page == this.pages){
      return
    }
     this.$router.push('/home/list?page=' + (this.page + 1))
    this.showIndex()
    },
    prev () {
    if(this.page == 1){
      return
    }
     this.$router.push('/home/list?page=' + (this.page - 1))
    this.showIndex()
    },
    showIndex () {
      let search = window.location.search
      this.$axios.get(`/api/blog${search}`).then((doc) => {
        this.lists = doc.data.list
        this.page = Number(doc.data.page)
        this.pages = doc.data.pages
        this.limit = doc.data.limit
        
      }).catch((err) => {
        console.error(err)
      })
    }
  },
  created () {
      this.showIndex()
  },
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
  .listTile {
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    border-bottom: 1px solid #e2e2e2;
    box-sizing: border-box;
  }
  p {
    margin: 5px 0 0 8px;
    overflow: hidden;
  }
}
.info{
  margin-top: 10px;
  p{
    display: inline-block;
    margin: 0 8px;
  }
}
.active{
  background: #428412;
}
</style>