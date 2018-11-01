<template>
  <div class="maxdiv" >
    <div v-show="isShowLogin">
      <br><br> <br><br>
      <h1 class="title">兴欣体检平台</h1>
      <br><br>
    </div>
    <div class="content"  v-show="isShowLogin">
      <br><br>
      <Form ref="formInline" :model="formInline" :rules="ruleInline" class="formstyle">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="账号">
          <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="密码">
          <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')">登&nbsp;&nbsp;&nbsp;&nbsp;录</Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Button type="primary">忘记密码</Button>
        </FormItem>
      </Form>
    </div>
    <div v-show="!isShowLogin">
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
        isShowLogin:true,
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
    methods: {
      handleSubmit(name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('Success!');
            //登陆成功进行页面跳转
            this.isShowLogin = false;
            this.$router.push({path:"/MainApp"});
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
    background-color:#5b6270;
    color: white;
    text-align: center;
    text-decoration-color: white;
    margin: 0 auto;
  }
  .maxdiv{
    background-color:#5b6270;
    color: white;
    text-align: center;
    height: 800px;
  }
  .content{
    background-color:white;
    color: white;
    text-align: center;
    alignment: center;
    margin: 0 auto;
    border: 1px solid #5b6270;
    line-height: normal;
    height: 200px;
    width: 500px;
  }
  .formstyle{
    width: 100%;

  }
</style>
