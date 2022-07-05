<template>
  <button @click="sendMsg">发送MsgA</button>
</template>

<script>
import EventBus from '@/EventBus/EventBus';
export default {
  data() {
    return {
      MsgA: "A组件中的Msg",
    };
  },
  methods: {
    sendMsg() {
      //传值过去
      EventBus.$emit("aMsg", this.MsgA);
    },
  },
};
</script>
