<template>
  <div>
    <MyBody :arr="list">
      <template #header="scope">
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>
      <template #body="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <!-- <td>{{ scope.row.tags }}</td> -->
        <td>
          <input
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-focus
            v-model="scope.row.inputValue"
            v-if="scope.row.inputValue"
            @blur="scope.row.inputValue = false"
            @keydown.enter="enterFn(scope.row)"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            v-else
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            @click="scope.row.inputValue = true"
          >
            +Tag
          </button>
          <span
            style="margin-right: 10px"
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
          >
            {{ item }}
          </span>
        </td>
        <!-- 需要添加权限管理功能 -->
        <td>
          <div v-display="displayStr">
            <button
              style="margin-right: 10px"
              class="btn btn-danger btn-sm"
              @click="removeBtn(scope.row.id)"
            >
              删除
            </button>
            <button class="btn btn-danger btn-sm" @click="addBtn(scope.row.id)">
              编辑
            </button>
          </div>
        </td>
      </template>
    </MyBody>
  </div>
</template>

<script>
// import { log } from "console";
import MyBody from "../components/MyBody.vue";

// 目标: 循环商品列表表格
// 1. 封装MyTable.vue 整体表格组件-一套标签和样式
// 2. axios请求数据
// 3. 传入MyTable组件里循环tr显示数据

// 目标: 展示tags标签
// 1. tags数组 - 某个td循环span使用文字
// 2. span设置bs的样式

// 目标: 删除数据
// 1. 删除按钮 - 点击事件
// 2. 作用域插槽把索引值关联出来了
// scope身上就有row和index
// 3. 删除中使用scope.index的索引值
// 4. 删除事件里删除数组里对应索引值的数据
export default {
  components: {
    MyBody,
  },
  data() {
    return {
      displayStr: "none",
      arr: [0, 1],
      list: [], // 所有数据
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: "/api/goods",
      }).then((res) => {
        res.data.data.forEach((ele) => {
          ele.inputValue = false;
          this.list = res.data.data;
        });
      });
    },
    removeBtn(id) {
      let index = this.list.findIndex((ele) => ele.id === id);
      this.list.splice(index, 1);
      // this.getList();
    },
    enterFn(obj) {
      // 回车
      // console.log(obj.inputValue);
      if (obj.inputValue.trim().length === 0) {
        alert("请输入数据");
        return;
      }
      obj.tags.push(obj.inputValue); // 表单里的字符串状态tags数组
      obj.inputValue = "";
    },
  },
  directives: {
    display: {
      inserted(el, binding) {
        el.style.display = binding.value;
      },
      update(el) {
        el.style.display = "block";
      },
    },
  },
};
</script>
<style lang="less" scoped>
.my-goods-list {
  .badge {
    margin-right: 5px;
  }
}
</style>
