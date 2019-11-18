<template>
    <div id="app">
        <el-container>
            <el-main>
                <contents></contents>
            </el-main>
            <el-footer></el-footer>
        </el-container>
    </div>
</template>

<script>
export default {
    components: {
        pageheader,
        contents
    }
}
import pageheader from '../src/components/PageHeader'
import contents from '../src/components/Contents'
</script>

<style>
@import './common/style.css';
</style>
