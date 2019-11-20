<template>
    <div id="create-draft">
        <div class="draft-box">
            <draftside></draftside>
            <draftmid></draftmid>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            textarea2: ''
        }
    },
    methods: {},
    components: {
        draftside,
        draftmid
    }
}
import draftside from './DraftSide'
import draftmid from './DraftMid'
</script>
<style>
.el-input--suffix .el-input__inner {
    height: 36px;
    width: 390px;
    border-radius: 20px;
    margin-top: 10px;
}
</style>
