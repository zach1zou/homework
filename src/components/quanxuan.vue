<template>
    <div>
        <!-- 全选反选功能 -->
        <div>
            <span>全选:</span>
            <!-- 4. v-model 关联全选 - 选中状态 -->
            <input type="checkbox" v-model="isAll" />
            <button @click="btnFx">反选</button>
            <ul>
                <li v-for="(obj, index) in arr" :key="index">
                    <!-- 3. 对象.c - 关联 选中状态 -->
                    <input type="checkbox" v-model="obj.c" />
                    <span>{{ obj.name }}</span>
                </li>
            </ul>
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
          arr: [
              {
                  name: "猪八戒",
                  c: false,
              },
              {
                  name: "孙悟空",
                  c: false,
              },
              {
                  name: "唐僧",
                  c: false,
              },
              {
                  name: "白龙马",
                  c: false,
              },
          ],
    }
  },
    methods: {
        btnFx() { 
            this.arr.forEach(
                (val) => {val.c=!val.c}
            )
        }
  },
  created () {
  },
  updated () {
  },
  mounted () {
  },
  filters: {
  },
    computed: {
        isAll: {
            set(val) {
                //改变全选
                this.arr.forEach((ele) => {
                    return ele.c = val
                })
            },
            get() {
            return  this.arr.every((ele) => {
                    return ele.c === true
                })
            }
        }
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>

</style>
