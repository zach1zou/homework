<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <buttonc @click.prevent="edit(index)">添加/修改</buttonc>
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
        <tr v-for="(item, index) in list" :key="item">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: "女", 1: "男" }[item.sex] }}</td>
          <td>
            <button @click="del(index)">删除</button>
            <button @click.prevent="edit(index)">编辑</button>
          </td>
        </tr>
        <tr v-if="list.length === 0">
          <td colspan="4">没有数据咯~</td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        { id: 1, name: "Amy", age: "19", sex: "女" },
        { id: 2, name: "Sue", age: "21", sex: "女" },
        { id: 3, name: "Tom", age: "20", sex: "男" },
      ],
      name: "",
      age: 0,
      sex: 0,
    };
  },
  methods: {
    del(val) {
      this.list.splice(val, 1);
    },
    edit(val) {
      if (this.name == "" || this.age == "") {
        return alert("Please select a name and age to edit.");
      }
      const id = this.list[this.list.length - 1]
        ? this.list[this.list.length - 1].id + 1
        : 1;
      this.list.push({
        id,
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
      this.name = "";
      this.age = 0;
      this.sex = 0;
    },
  },
};
</script>
