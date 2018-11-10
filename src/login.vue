<template>
  <div class="background">
    <div class="maxdiv" v-show="isShowLogin">
      <div>
        <br><br> <br><br>
        <h1 class="title">{{this.GLOBAL.web_name}}</h1>
        <br><br>
      </div>
      <div class="content">
        <br>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" class="formstyle" label-position="left"
              :label-width="60">
          <FormItem prop="user" label="账号">
            <Input type="text" v-model="formInline.user" placeholder="账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem prop="password" label="密码">
            <Input type="password" v-model="formInline.password" placeholder="密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
          <FormItem>
            <Button type="success" @click="handleSubmit('formInline')">登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <Button type="error">忘记密码</Button>
          </FormItem>
        </Form>
      </div>
    </div>
    <div v-show="!isShowLogin" class="back">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name:"login",
    data () {
      return {
        formInline: {
          user: '',
          password: '',
        },
        //isShowLogin: this.GLOBAL.isShowLogin,
        ruleInline: {
          user: [
            { required: true, message: '请输入账号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码.', trigger: 'blur' },
            { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
          ]
        }
      }
    },
    computed: {
      //状态管理变量
      isShowLogin() {
        console.log("computed isShowLogin:" + this.$store.state.isShowLogin);
        return this.$store.state.isShowLogin;
      }
    },
    mounted() {
      //console.log("this.$store.state.isShowLogin:" + this.$store.state.isShowLogin);
    },
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.GLOBAL.employeeId = this.formInline.user;
            this.$Message.success('Success!');
            //登陆成功进行页面跳转
            //this.isShowLogin = false;
            //this.GLOBAL.isShowLogin = false;
            this.$store.commit('setIsShowLogin');

            if (this.formInline.user == 'admin') {
              this.$router.push({path: "/Admin"});
            }
            else {
              this.$router.push({path: "/MainApp"});
            }
          } else {
            this.$Message.error('Fail!');
          }
        })
      }
    }
  }
</script>

<style scoped>

  .title{
    width:200px;
    background-color: transparent;
    color: white;
    text-align: center;
    text-decoration-color: white;
    margin: 0 auto;
  }
  .maxdiv{
    color: white;
    text-align: center;
    height: 800px;
    background: url("../static/login.jpg");
    background-size: 100%;
  }
  .content{
    color: white;
    text-align: center;
    alignment: center;
    margin: 0 auto;
  / / border: 1 px solid #5b6270;
    line-height: normal;
    height: 200px;
    width: 400px;
    background-color: transparent;
  }
  .formstyle{
    background-color: transparent;
  }

  .back {
    background-color: transparent;
  }

  .background {
    background: url("../static/background.jpg");
    background-size: 100%;
    height: 800px;
  }

</style>
