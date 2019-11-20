<template>
    <div class="editor-box">
        <el-input
            type="textarea"
            :autosize="{ minRows: 10, maxRows: 23 }"
            v-model="draft"
            rows="10"
            resize="none"
        >
        </el-input>
    </div>
</template>
<script>
export default {
    data() {
        return {
            draft: ''
        }
    }
}
</script>
