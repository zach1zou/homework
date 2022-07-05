<template>
    <div>
        <div class="title">
            <!-- 搜索功能 -->
            <el-input v-model="inputVal" placeholder="请输入搜索内容" @keydown.enter="searchFn" class="inputBtn"></el-input>

            <!-- 添加-->
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
                <el-form-item label="书名" prop="bookname">
                    <el-input v-model="ruleForm.bookname"></el-input>
                </el-form-item>
                <el-form-item label="作者" prop="author">
                    <el-input v-model="ruleForm.author"></el-input>
                </el-form-item>
                <el-form-item label="出版商" prop="publisher">
                    <el-input v-model="ruleForm.publisher"></el-input>
                </el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">添加</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form>
        </div>
        <!-- 列表 -->
        <el-table :data="tableData" style="width: 100%" class="table">
            <el-table-column label="序号" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="书名" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.bookname }}</span>
                </template>
            </el-table-column>
            <el-table-column label="作者" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.author }}</span>
                </template>
            </el-table-column>
            <el-table-column label="出版商" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span style="margin-left: 10px">{{ scope.row.publisher }}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!-- 弹框 -->
        <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
            书名： <el-input v-model="visibleVal.bookname"></el-input>
            <br>
            作者： <el-input v-model="visibleVal.author"></el-input>
            <br>
            出版社：<el-input v-model="visibleVal.publisher"></el-input>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="updateFn()">确 定</el-button>
            </span>
        </el-dialog>
        <!-- 分页 -->
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
            :current-page="info.pagenum" :page-sizes="[5, 10, 15,20]" :page-size="info.pagesize"
            layout="total, sizes, prev, pager, next, jumper" :total="info.total">
        </el-pagination>
    </div>
</template>
<script>


export default {
  props:{ 
      

}, 
  components: {
  },
  data () {
      return {
          tableData:[],
          inputVal: '',
          visibleVal: {
              bookname: '',
              author: '',
              publisher: ''
          },
          ruleForm: {
              bookname: '',
              author: '',
              publisher:''
          },
          dialogVisible: false,
    
          
          info: { 
              pagenum: 1,
              pagesize: 5,
              total: 0,
            
          },
          rules: {
              bookname: [
                  { required: true, message: '请输入书名称', trigger: 'blur' },
                  { min: 1, max: 8, message: '长度在1 到 8 个字符', trigger: 'blur' }
              ],
              author: [
                  { required: true, message: '请输入作者名称', trigger: 'blur' },
                  { min:1, max: 6, message: '长度在1 到 6 个字符', trigger: 'blur' }
              ],
              publisher: [
                  { required: true, message: '请输入出版社名称', trigger: 'blur' },
                  { min: 1, max: 10, message: '长度在 1 到 10 个字符', trigger: 'blur' }
              ],
          }
    }
  },
    methods: {
        // 渲染列表
        getUerList() { 
            
            this.$http({
                url: "/api/getbooks",
                method: "GET",
               
            }).then((res) => {
                const { data } = res
                this.tableData = data.data
                // console.log(data.data);
                this.info.total = data.data.length
            });
        },
        // 添加功能
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                // console.log(valid);
                    this.$http({
                        url: "/api/addbook",
                        method: "POST",
                        data: {
                            appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
                            // ...this.bookObj
                            // 等同于下面
                            bookname: this.ruleForm.bookname,
                            author: this.ruleForm.author,
                            publisher: this.ruleForm.publisher
                        }
                    }).then((res) => {
                        const { data } = res
                        this.ruleForm = ''
                        this.$message({
                            type: 'success',
                            message: '添加成功!',
                        })
                    });
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
  ,
        // 编辑功能
        handleEdit(index, row) {
            // console.log(index, row);
            this.dialogVisible=true
            this.visibleVal.bookname = row.bookname
            this.visibleVal.author = row.author
            this.visibleVal.publisher = row.publisher
        },
        // 弹框
        handleClose(done) {
            this.$confirm('确认关闭？')
                .then(_ => {

                    done();
                })
                .catch(_ => { });
        },
        // 修改功能
        updateFn() { 
            this.dialogVisible = false
        },
        // 删除功能
     handleDelete(index, row) {
          const { id } = row
         this.$http({
              url: "/api/delbook",
              methods: "GET",
              params: {
                  id: id,
                  appkey: "7250d3eb-18e1-41bc-8bb2-11483665535a",
              }
         }).then((res) => { 
            console.log(res);
             const { status } = res
             if (status == 200) { 
                 this.$message({
                     type: 'success',
                    message: '删除成功!',
                 })
             
             }
         })
        },
        // 搜索功能
        searchFn() { 
            this.$http({
                url: "/api/getbooks",
                method: "GET",
                params: { 
                    bookname: this.inputVal
                }
            }).then(res => {
                const { data } = res
                this.tableData=data.data
            })
        },
        // 分页
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.info.pagesize = val
            // this.getUerList()
        },
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.info.pagenum = val
            // this.getUerList()
        }
    },
    mounted() {
        this.getUerList()
  },
    updated() {
        this.searchFn()
  },
  beforeDestroy () {
  },
  filters: {
  },
  computed: {
  },
  watch: {
  },
}
</script>
<style lang="less" scoped>








div{
    overflow: hidden;

   
}
.title{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60vw;
    margin: 0 auto;

    .inputBtn{
        flex:2
    }
    .demo-ruleForm{
        flex:6;
        display: flex;
        justify-content: space-around;
        align-items: center;
            
    }
}
.table{
    margin: 0 20vw;
 
}
.el-pagination{
    margin: 0 25vw;
}

</style>
