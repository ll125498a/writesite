<template>
    <div class="fodder-box">
        <el-tabs type="border-card">
            <el-tab-pane>
                <span slot="label"><i class="el-icon-edit">创建底稿</i> </span>
            </el-tab-pane>
            <span> 1、选择车型</span>
            <el-select multiple v-model="value" filterable placeholder="请选择">
                <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                >
                </el-option>
            </el-select>

            <span> 2、选择模板 </span>
            <el-select v-model="select" placeholder="请选择">
                <el-option label="导购文章" value="1"></el-option>
                <el-option label="评测文章" value="2"></el-option>
            </el-select>
        </el-tabs>
    </div>
</template>
<script>
export default {
    data() {
        return {
            value: '',
            select: '',
            options: []
        }
    }
}
</script>
