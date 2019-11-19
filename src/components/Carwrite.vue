<template>
    <div class="banner">
        <div class="inner">
            <el-button type="primary" plain round @click="Shopping()"
                >导购按钮</el-button
            >
            <el-button type="primary" plain round @click="Evaluation()"
                >评测按钮</el-button
            >
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    methods: {
        Shopping() {
            this.$router.push({ path: '/Car-Write/Shopping' })
        },
        Evaluation() {
            this.$router.push({ path: '/Car-Write/Evaluation' })
        }
    }
}
</script>
<style>
.el-button--primary.is-plain {
    width: 280px;
    height: 120px;
    font-size: 18px;
    font-weight: bolder;
    color: #fff;
    background-color: #5eaeff;
    border-color: #409eff;
    margin-top: 30px;
}
.el-button--primary.is-plain:hover {
    color: #fff;
    background-color: #5eaeff;
    border-color: #409eff;
    box-shadow: 0px 0px 10px 1px #565656;
}
.el-button--primary.is-plain:focus {
    color: black;
    background-color: #fff;
    border-color: 2px solid #ffffff;
}
</style>
