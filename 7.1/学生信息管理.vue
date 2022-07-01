<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" placeholder="请输入姓名" v-model.trim="name" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" placeholder="请输入年龄" v-model.number.trim="age" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="sex">
        <option value="1">男</option>
        <option value="0">女</option>
      </select>
    </div>
    <div>
      <button @click="addfn" v-bind="isEdit">
        {{ isEdit ? "修改" : "添加" }}
      </button>
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
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ { 0: "女", 1: "男" }[item.sex] }}</td>
          <td>
            <button @click="delFn(index)">删除</button>
            <button @click="editFn(index)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { name: "张三", age: 18, sex: 1 },
        { name: "李四", age: 10, sex: 0 },
      ],
      name: "",
      age: 0,
      sex: 0,
      isEdit: false,
      currentIndex: 0,
    };
  },
  methods: {
    addfn() {
      if (this.name == "" || this.age == "") return alert("你没填是吧！");
      if (this.isEdit) {
        this.arr[this.currentIndex].name = this.name;
        this.arr[this.currentIndex].age = this.age;
        this.arr[this.currentIndex].sex = this.sex;
        this.isEdit = false;
        this.currentIndex = 0;
        return;
      }
      this.arr.push({
        name: this.name,
        age: this.age,
        sex: this.sex,
      });
    },
    editFn(index) {
      this.name = this.arr[index].name;
      this.age = this.arr[index].age;
      this.sex = this.arr[index].sex;
      this.isEdit = true;
      this.currentIndex = index;
    },
    delFn(index) {
      this.arr.splice(index, 1);
    },
  },
};
</script>
