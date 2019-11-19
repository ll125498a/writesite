<template>
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="请输入内容"
    ></el-autocomplete>
</template>
<script>
export default {
    data() {
        return {
            state: ''
        }
    },
    methods: {
        querySearchAsync() {}
    }
}
</script>
