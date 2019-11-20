<template>
    <div>
        <el-carousel height="600px">
            <el-carousel-item v-for="item in 2" :key="item.index">
                <h3></h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {}
</script>
<style>
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
}
.el-carousel__item:nth-child(2n) {
    background-color: #333333;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #333333;
}
</style>
