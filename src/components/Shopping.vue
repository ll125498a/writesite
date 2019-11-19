<template>
    <el-autocomplete
        v-model="state"
        :fetch-suggestions="querySearchAsync"
        placeholder="daoogulei"
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
