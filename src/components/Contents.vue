<template>
    <div>
        <rotation></rotation>
        <div class="middle-box">
            <el-tooltip
                placement="bottom"
                v-for="item in list"
                :key="item.index"
            >
                <div slot="content">
                    {{ item.title }}<br />{{ item.abstract }}<br />{{
                        item.article
                    }}
                </div>
                <a
                    @click="jumpPath(item.path)"
                    target="_blank"
                    class="el-button el-button--default is-plain is-round"
                    >{{ item.module }}
                </a>
            </el-tooltip>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {
                    module: '通用写作',
                    title: '标题生成',
                    abstract: '摘要生成',
                    article: '文章生成',
                    path: '/'
                },
                {
                    module: '汽车写作',
                    title: '导购类文章生成',
                    abstract: '评测类文章生成',
                    article: '',
                    path: '/Car-Write'
                }
            ]
        }
    },
    methods: {
        jumpPath(path) {
            this.$router.push({ path: path })
        }
    },
    components: {
        rotation
    }
}
import rotation from './RotationChart'
</script>
<style></style>
