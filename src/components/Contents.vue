<template>
    <div class="block">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in 5" :key="item.index">
                <h3></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>
<style></style>
