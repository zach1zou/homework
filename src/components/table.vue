<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>头像</th>
        </tr>
      </thead>
      <thead>
        <tr v-for="(item, index) in list" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>
            <slot :row="item" name="age">
              {{ item.age }}
            </slot>
          </td>
          <td>
            <slot :row="item" name="touxiang">
              {{ item.headImgUrl }}
            </slot>
          </td>
          <!-- <td> {{ obj.headImgUrl}}</td> -->
          <!-- <td><img :src="item.headImgUrl" alt=""></td> -->
        </tr>
      </thead>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    arr: {
      type: Array,
      default: () => [],
    },
  },
  components: {},
  data() {
    return {
    
    };
  },
  methods: {},
  mounted() {},
  updated() {},
  beforeDestroy() {},
  filters: {},
  computed: {},
  watch: {},
};
</script>
<style lang="less" scoped></style>
