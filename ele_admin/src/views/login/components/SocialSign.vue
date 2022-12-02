<!--
 * @Author: Plum
 * @Date: 2022-09-29 12:56:31
 * @LastEditors: Plum
 * @LastEditTime: 2022-12-02 15:45:54
-->
<template>
  <div class="social_container">
    <div class="social_description">Can not be simulated on local, so please combine you own business simulation! ! !</div>
    <div class="social_container">
      <div>
        <span>
          <svg-icon icon-class="wechat" class-name="icon_size" data-v="3" />
        </span>
        <span>WeChat</span>
      </div>
      <div>
        <span>
          <svg-icon icon-class="qq" class-name="icon_size" />
        </span>
        <span>QQ</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SocialSign'
}
</script>

<style lang="scss" scoped>
.social_container {
  background-color: #fff;

  .social_description {
    background-color: #fff;
    font-size: 17px;
  }

  .social_container {
    background-color: #fff;
    margin-top: 50px;

    div {
      display: inline-block;
    }

    div:last-child {
      margin-left: 50px;
    }

    .icon_size {
      width: 42px;
      height: 42px;
      vertical-align: middle;
    }
    .wechat {
    }

    .qq {
    }
  }
}
</style>
