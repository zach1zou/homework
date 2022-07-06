<template>
    <div>
        <keep-alive include="Iphone">
            <van-tabs v-model="activeName">
                <van-tab title="手机注册" name="a">
                    <Iphone>
                        <template #iphone>
                            <van-field v-model="tel" type="tel" label="+86" placeholder="请输入手机号" />
                        </template>
                    </Iphone>
                </van-tab>
                <van-tab title="邮箱注册" name="b">
                    <Iphone>
                        <template #email>
                            <van-field v-model="email" placeholder="请输入邮箱" />
                        </template>
                    </Iphone>
                </van-tab>
            </van-tabs>
        </keep-alive>
    </div>
</template>
<script>

import Iphone from './iphoneEmail/iphone.vue'

export default {
  props:{ 
arr: 
 {
 type: Array,
 default: () =>[]
} ,
obj: 
 {
 type: Object,
 default: () =>{}
} 
}, 
  components: {
    Iphone,
  
},
  data () {
      return {
          activeName: 'a',
          tel: '',
          email: '',
    }
  },
  methods: {
  },
  mounted () {
  },
  updated () {
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style  scoped>


   

</style>
