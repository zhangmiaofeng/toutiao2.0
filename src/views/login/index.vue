<template>
  <div class="container">
    <el-card class="my-card">
      <img src="../../assets/images/logo_index.png" alt />

    </el-card>
    <!-- 表单 -->

  </div>
</template>

<script>
export default {}
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
    margin: 0 auto;
  }
}
.el-card__body {
  background: red;
}
</style>
