<template>
    <el-form @submit.native.prevent="updateArticle" ref="form" :model="article" label-width="80px">
        <el-form-item label="文章标题">
            <el-input v-model="article.title"></el-input>
        </el-form-item>
        <el-form-item label="文章内容">
            <el-input type="textarea" v-model="article.body"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" native-type="submit">保存</el-button>
            <el-button>取消</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        data() {
            return {
                article: {}
            }
        },
        created(){
            this.fetch()
        },
        methods: {
            fetch() {
                this.$http.get(`/articles/${this.$route.params.id}`).then(res => {
                    this.article = res.data
                })
            },
            updateArticle() {
                this.$http.put(`/articles/${this.$route.params.id}`, this.article).then(res => {
                    if(res.data) {
                        this.$message({
                            type: 'success',
                            message: '文章更新成功'
                        })
                        this.$router.push({ path: '/articles/index' })
                    }
                })
            }
        }
    }
</script>