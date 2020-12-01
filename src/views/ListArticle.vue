<template>
    <el-container>
        <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
                <i class="el-icon-setting" style="margin-right: 15px"></i>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>查看</el-dropdown-item>
                    <el-dropdown-item>新增</el-dropdown-item>
                    <el-dropdown-item>删除</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>

        <el-main>
            <el-table :data="tableData">
                <el-table-column type="index" width="50">
                </el-table-column>
                <el-table-column prop="title" label="文章标题" width="120">
                </el-table-column>
                <el-table-column prop="body" label="文章内容">
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="edit(scope.row._id)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="remove(scope.row._id)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        data() {
            return {
                tableData: []
            }
        },
        created() {
            this.fetch()
        },
        methods: {
            fetch() {
                this.$http('/articles').then(res => {
                    this.tableData = res.data
                })
            },
            edit(id) {
                this.$router.push({ path: `/articles/${id}/edit` })
            },
            remove(id) {
                this.$http.delete(`/articles/${id}`).then(res => {
                    if(res.data.status === true) {
                        this.$message({
                            type: 'success',
                            message: '文章删除成功'
                        })
                        this.fetch()
                    }
                })
            }
        }
    };
</script>