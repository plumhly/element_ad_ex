<template>
  <div class="login-container">
    <div class="content">
      <h3 class="title">
        Login form
      </h3>
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
      >
        <el-form-item prop="username">
          <i class="icon-user username_icon" />
          <el-input
            ref="username"
            v-model="form.username"
            class="username"
            placeholder="Username"
            name="username"
            size="normal"
            type="text"
            autocomplete="on"
            tabindex="1"
          />
        </el-form-item>

        <el-tooltip
          v-model="captionOn"
          effect="dark"
          content="Caps Lock On"
          placement="right"
          manual
        >
          <el-form-item prop="password">
            <i class="icon-password password_icon" />
            <el-input
              ref="password"
              v-model="form.password"
              class="password"
              placeholder="Password"
              name="password"
              size="normal"
              :type="passwordType"
              autocomplete="on"
              tabindex="2"
              @blur="captionOn = false"
              @keyup.native="checkCapsLock"
              @keyup.enter="login"
            />
            <i
              :class="[showPwd ? 'icon-eye' : 'icon-eye1', 'eye']"
              @click="showPassword"
            />
          </el-form-item>
        </el-tooltip>

        <el-button
          class="login-button"
          type="primary"
          @click="login"
          :loading="loading"
        >
          Login
        </el-button>
      </el-form>
      <div class="bottom-container">
        <div class="tips">
          <div>Username: admin Password:any</div>
          <div>Username: editor Password:any</div>
        </div>
        <el-button
          type="primary"
          @click="loginWithOther"
        >
          Or connect with
        </el-button>
      </div>
    </div>
    <el-dialog
      title="Or connect with"
      :visible.sync="dialogVisible"
      width="50%"
    >
      <social-sign />
    </el-dialog>
  </div>
</template>

<script>
import SocialSign from "./components/SocialSign.vue";

export default {
  components: {
    SocialSign,
  },
  data() {
    const usernameChecker = (rule, value, callback) => {
      if (typeof value === "undefined" || value === "") {
        callback(new Error("please input username"));
      }

      callback();
    };

    const passwordChecker = (rule, value, callback) => {
      if (typeof value === "undefined" || value.length < 5) {
        callback(new Error("password need 5 character"));
      }

      callback();
    };

    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          {
            required: true,
            trigger: "blur",
            validator: usernameChecker,
          },
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            validator: passwordChecker,
          },
        ],
      },
      showPwd: false,
      passwordType: "password",
      captionOn: false,
      dialogVisible: false,
      loading: false,
    };
  },

  mounted() {
    if (this.form.username === "") {
      this.$refs.username.focus();
    } else if (this.form.password === "") {
      this.$refs.password.focus();
    }
  },

  methods: {
    login() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.loading = true;
          this.$router.push("/main");
          this.loading = false;
        } else {
          console.log("error");
          return false;
        }
      });
    },
    loginWithOther() {
      this.dialogVisible = true;
    },
    showPassword() {
      this.showPwd = !this.showPwd;
      if (this.showPwd) {
        this.passwordType = "text";
      } else {
        this.passwordType = "password";
      }
    },

    checkCapsLock(event) {
      debugger;
      const { key } = event;
      this.captionOn = key && key.length === 1 && key >= "A" && key <= "Z";
    },
  },
};
</script>

<style lang="scss" scoped>
// reset
.el-input {
  display: inline-block;
  height: 47px;
  width: 85%;
  // background-color: #303745;

  :deep(.el-input__inner) {
    border: 0px;
    height: 47px;
    color: white;
    background-color: transparent;
  }
}

.el-form-item {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  color: #454545;
  padding-left: 15px;
}
</style>

<style lang="scss" scoped>
@mixin icon_set($class) {
  .#{$class}::before {
    font-size: 20px;
    vertical-align: middle;
    line-height: 47px;
  }
}

.login-container {
  height: 100%;
  width: 100%;
  background-color: #2d3a4b;
  // display: flex;
  // flex-direction: column;
  // align-items: stretch;

  .content {
    margin: 0 auto;
    padding-top: 169px;
    width: 450px;

    .title {
      color: white;
      font-size: 30px;
      font-weight: bold;
      text-align: center;
    }

    @include icon_set(username_icon);

    // .username {
    // margin-top: 40px;
    // }

    @include icon_set(password_icon);
    // .password {
    // margin-top: 22px;
    // height: 47px;
    // }

    .login-button {
      height: 38px;
      margin: 22px 0 29px 0;
      width: 100%;
    }

    .bottom-container {
      width: 100%;
      font-size: 15px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .tips {
        color: white;
      }

      .other-button {
        width: 144px;
        height: 38px;
      }
    }
  }

  // /deep/ .el-input__inner {
  //   height: 47px;
  //   background-color: #303745;
  // }
}
</style>