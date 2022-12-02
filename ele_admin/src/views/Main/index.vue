<!--
 * @Author: Plum
 * @Date: 2022-08-30 18:34:39
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 16:59:52
 * @Description:
-->
<template>
  <div class="container">
    <el-container :direction="horizontal">
      <el-aside width="200px" style="background-color: red"> </el-aside>
      <el-container :direction="vertical">
        <el-header height="200px"> </el-header>
        <el-main>
          <!-- Main content -->
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
}
</style>
