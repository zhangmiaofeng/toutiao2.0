<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />
    <!-- 表单 -->
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" status-icon="">
        <!-- 表单项 -->
        <el-form-item prop="mobile">
            <el-input v-model="loginForm.mobile" placeholder="输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
            <el-input  v-model="loginForm.code" placeholder="输入手机验证码" style="width:236px;margin-right:10px;"></el-input>
            <el-button>发送验证码</el-button>
        </el-form-item>
        <el-form-item>
           <el-checkbox :value="true">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
              <el-button type="primary" style="width:100%" @click="login()">登 录</el-button>
        </el-form-item>
    </el-form>

    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    // 申明自定义校验函数
    const checkMobile = (rule, value, callback) => {
      // 校验手机号 1开头 第二位3-9 9位数字
      if (!/^1[3-9]\d{9}$/.test(value)) return callback(new Error('手机号格式不正确'))
      callback()
    }
    return {
      // 表单对象
      loginForm: {
        mobiel: '15130457740',
        code: '246810'
      },
      // 验证表单规则
      loginRules: {
        mobile: [
          { require: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile }
        ],
        code: [
          { require: true, message: '请输入验证码', tigger: 'blur' },
          { len: 6, message: '长度是6位', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    login () {
      // 对整个表单进行校验
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          // console.log('校验成功')
          // 请求登录接口
          this.$https.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginForm)
            .then(res => {
              console.log(res.data)
              // 跳转首页
              this.$router.push('/')
            }).catch(() => {
              // 错误提示
              this.$message.error('手机号或验证码错误')
            })
        }
      })
    }
  }
}
</script>

<style scope lang='less'>
.container {
  position: absolute;
  width: 100%;
  height: 100%;
  /* 设置背景图 */
  // background-color: #ccc;
  background: url(../../assets/images/login_bg.jpg) no-repeat center/cover;
}
.my-card {
  width: 400px;
  height: 350px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -60%);
  img {
    display: block;
    width: 200px;
    margin: 0 auto 20px;
  }
}
// .el-card__body {
//   // background: red;
// }
</style>
