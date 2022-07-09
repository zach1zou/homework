<template>
  <div>
    <MyTable :arr="list">
      <!-- header插槽 -->
      <template #header>
        <th>※</th>
        <th>商品名称....</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <!--  tbody 插槽 -->
      <template #tbody="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            class="tag-input form-control"
            style="width: 100px"
            type="text"
            v-if="scope.row.inputVisible"
            v-focus
            @blur="scope.row.inputVisible = false"
            @keyup.enter="enterFn(scope.row)"
            v-model="scope.row.inputValue"
            @keydown.esc="scope.row.inputValue = ''"
          />
          <button
            style="display: block"
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>

          <span
            class="badge badge-warning"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            style="margin-right: 10px"
          >
            {{ item }}
          </span>
        </td>
        <td>
          <button class="btn btn-danger btn-sm" @click="delFn(scope.row.id)">
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable";
export default {
  components: {
    MyTable,
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    render() {
      this.$axios({
        url: "/api/goods",
      }).then((res) => {
        this.list = res.data.data;
      });
    },
    delFn(id) {
      const index = this.list.findIndex((item) => item.id == id);
      this.list.splice(index, 1);
    },
    enterFn(item) {
      if (item.inputValue.trim().length <= 0) {
        item.inputVisible = false;
        return;
      }
      item.tags.push(item.inputValue);
      item.inputValue = "";
      item.inputVisible = false;
    },
  },
  created() {
    this.$axios({
      url: "/api/goods",
    }).then((res) => {
      this.list = res.data.data;
    });
  },
};
</script>

<style></style>
