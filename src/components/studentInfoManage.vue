<template>
    <div>
        <div>
            <span>姓名:</span>
            <input type="text" v-model="obj.name" />
        </div>
        <div>
            <span>年龄:</span>
            <input type="number" v-model="obj.age" />
        </div>
        <div>
            <span>性别:</span>
            <select v-model="obj.sex">
                <option value="男">男</option>
                <option value="女">女</option>
            </select>
        </div>
        <div>
            <button @click.prevent="addFn()">添加</button>
        </div>
        <div>
            <table border="1" cellpadding="10" cellspacing="0">
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>年龄</th>
                    <th>性别</th>
                    <th>操作</th>
                </tr>
                <tr v-for="item in arr" :key="item.id">
                    <td>{{ item.id}}</td>
                    <td>{{item.uname}}</td>
                    <td>{{item.age}}</td>
                    <td>{{item.sex}}</td>
                    <td>
                        <button @click="delFn(item.id)">删除</button>
                        <button @click="changeFn(item.id)">编辑</button>
                    </td>
                </tr>
            </table>
            <!-- 弹框 -->
            <div v-show="isshow" class="container">
                <p>修改数据</p>
                姓名<input type="text" name="" id="" v-model="newObj.changeName">
                <br>
                年龄<input type="number" name="" id="" v-model="newObj.changeAge">
                <br>
                性别<input type="text" name="" id="" v-model="newObj.changeSex">
                <br>
                <button @click="currentChanged()">确认修改</button>
                <button @click="changeshow">取消</button>
            </div>
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
          isshow: false,
          index:1,
          newObj: {
                id:1,
              changeName: '',
              changeAge: 18,
              changeSex:'男',
          },
          obj: {
              name: '',
              age: 18,
            sex:'男'
          },
          arr: [{
              id:1,
              uname: '张三',
              age: 18,
             sex:'男'
          }, {
                id:2,
                  uname: '李四',
                  age: 28,
                  sex: '女'
              }]
    }
  },
    methods: {
        addFn() { 
            if (this.obj.name == '' ) {
                return alert('请添加数据')
            }
            const Id = this.arr[this.arr.length - 1] ? this.arr[this.arr.length - 1].id:1
            this.arr.push({
                id: Id,
                uname: this.obj.name,
                age: this.obj.age,
                sex: this.obj.sex
            })
        },
        delFn(id) { 
            let index = this.arr.findIndex((val) => {
                return id == val.id
            })
            this.arr.splice(index, 1)
        },
        changeFn(id) { 
            this.isshow = true
            let index = this.arr.findIndex((val) => {
                return id == val.id
            })
            console.log(index);
            this.index = index
           
        },
        currentChanged() {
          
            this.arr[this.index] = {
                id:this.arr[this.index].id,
                uname: this.newObj.changeName,
                age: this.newObj.changeAge,
                sex: this.newObj.changeSex
            } 
            this.isshow = false
         }
        ,
        changeshow() { 
            this.isshow = false
           
        }
       
  },
  created () {
    },
    updated() { 

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

        .container{
                height: 200px;
                width: 80%;
                border: 1px solid skyblue;
                background: skyblue;
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-30%);
            
                p {
                    text-align: center;
                }
        }
</style>
