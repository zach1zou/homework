<template>
    <div class="my-tab-bar">
        <div class="tab-item" v-for="(item, index) in list" :key="index" :class="{current: activeIndex === index}"
            @click="clickFn(index, item.componentName)">
            <!-- 图标 -->
            <span :class="item.iconText" class="iconfont"></span>
            <!-- 文字 -->
            <span>{{ item.text }}</span>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        list:
        {
            type: Array,
            default: () => []
        },

    },
    components: {
    },
    data() {
        return {
            activeIndex: 0,
        }
    },
    methods: {
        clickFn(index, componentName) { 
            this.activeIndex = index
            this.$emit('changeCom', componentName)
        }
    },
    mounted() {
    },
    updated() {
    },
    beforeDestroy() {
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


.my-tab-bar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    border-top: 1px solid #ccc;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    .tab-item {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}

.current {
    color:skyblue;
}
</style>
