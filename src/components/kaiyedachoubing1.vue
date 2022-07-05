<template>
    <div class="my-product">
        <h3>标题: {{ obj.title }}</h3>
        <p>价格: {{ obj.price }}元</p>
        <p>{{ obj.description }}</p>
        <button @click="changePrice">砍一刀</button>
    </div>
</template>
<script>
export default {
    props: {
        obj: {
            type: Object,
            default: () => { }
        }
    },
    components: {
    },
    data() {
        return {
        }
    },
    methods: {
        changePrice() {
            this.obj.price--
        }
    },
    created() {
    },
    updated() {
    },
    mounted() {
    },
    filters: {
    },
    computed: {
    },
    watch: {
    },
}
</script>
<style>
.my-product {
    width: 400px;
    padding: 20px;
    border: 2px solid #000;
    border-radius: 5px;
    margin: 10px;
}
</style>
