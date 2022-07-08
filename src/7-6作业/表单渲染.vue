<template>
  <div>
    <MyTable>
      <template #name="scope">
        <input type="text" name="" id="" v-model="scope.row.name" />
      </template>
    </MyTable>
    <MyTable>
      <template #avatar="scope">
        <a v-if="scope.row.type == 0" :href="scope.row.headImgUrl" alt="">{{
          scope.row.headImgUrl
        }}</a>
        <img
          v-else-if="scope.row.type == 0"
          :src="scope.row.headImgUrl"
          alt=""
          width="100px"
        />
        <div v-else>{{ scope.row.headImgUrl }}</div>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from "../components/MyTable.vue";
export default {
  data() {
    return {};
  },
  components: {
    MyTable,
  },
};
</script>