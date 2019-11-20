<template>
    <div id="app">
        <router-view></router-view>
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
