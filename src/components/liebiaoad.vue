<template>
    <div>
        <!-- <p :style="{color:Color,fontSize:'50px'} ">6.30课堂上学的</p> -->

        <div class="container">
            <!-- 顶部框模块 -->
            <div class="form-group">
                <div class="input-group">
                    <h4>品牌管理</h4>
                </div>
            </div>

            <!-- 数据表格 -->
            <table class="table table-bordered table-hover mt-2">
                <thead>
                    <tr>
                        <th>编号</th>
                        <th>资产名称</th>
                        <th>价格</th>
                        <th>创建时间</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in list">
                        <td>{{item.id}}</td>
                        <td>{{item.name}}</td>

                        <!-- 如果价格超过100，就有red这个类 -->
                        <td :class="{ red: item.price > 100 }">{{item.price}}</td>
                        <td>{{item.time}}</td>
                        <td><a href="#" @click.prevent="delFn(item.id)">删除</a></td>
                    </tr>
                    <!-- <tr style="background-color: #EEE">
              <td>统计:</td>
              <td colspan="2">总价钱为: 0</td>
              <td colspan="2">平均价: 0</td>
          </tr> -->
                </tbody>
                <!-- 
        <tfoot >
          <tr>
            <td colspan="5" style="text-align: center">暂无数据</td>
          </tr>
        </tfoot>
            -->
            </table>

            <!-- 添加资产 -->
            <form class="form-inline" style="display:flex;">
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="资产名称" v-model.trim="name" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <div class="form-group">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="价格" v-model.number="price" />
                    </div>
                </div>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <!-- 阻止表单提交 -->
                <button class="btn btn-primary" @click.prevent="addFn">添加资产</button>
            </form>
            <!--  -->
            <ul>
                <li v-for="item in arr">{{item}}</li>
            </ul>
            <button @click="btn">点一下</button>
        </div>
    </div>

</template>
<script>
export default {
  props: [],
  components: {
  },
  data () {
      return {
          Color: 'red',
          name: '',
          price: 0,
          list: [
              { id: 100, name: "外套", price: 199, time: new Date('2010-08-12').toLocaleString() },
              { id: 101, name: "裤子", price: 34, time: new Date('2013-09-01').toLocaleString() },
              { id: 102, name: "鞋", price: 25.4, time: new Date('2018-11-22').toLocaleString() },
              { id: 103, name: "头发", price: 19900, time: new Date('2020-12-12').toLocaleString() }
          ],
          arr:['帅哥','美女','程序员']
    }
  },
    methods: {
        addFn() { 
            if (this.name == '' || this.price == 0) { 
              return  alert('请添加数据')
            }
            const Id = this.list[this.list.length - 1]? this.list[this.list.length - 1].id + 1:100
                //新增
            this.list.push({
                id: Id,
                name: this.name,
                price: this.price,
                time: new Date().toLocaleString(),

            })
            this.name = ''
            this.price = 0
        },
        delFn(id) { 
            let index = this.list.findIndex((val) => { 
                return id == val.id
            })
            this.list.splice(index, 1)
        },
        btn() {
            this.arr.push(this.arr[0])
            this.arr.shift()
        }
  },
  created () {
  },
  mounted () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

.red {
    color: red;
}
</style>
