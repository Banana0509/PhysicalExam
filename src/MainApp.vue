<template>
  <div class="layout" id="MainApp">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
              <login-dialog v-on:id="getId"></login-dialog>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']" >
            <Submenu name="1" to="/welcome">
              <template slot="title" >
                <Icon type="ios-paper"></Icon>
                   体检信息录入
              </template>
              <MenuItem name="1-1" to="/GeneralData" v-on:click.native="show(1)" >一般资料</MenuItem>
              <MenuItem name="1-2" to="/InternalData"  v-on:click.native="show(2)">内科</MenuItem>
              <MenuItem name="1-3" to="/SurgeryData"  v-on:click.native="show(3)">外科</MenuItem>
              <MenuItem name="1-4" to="/GynaecologyData"  v-on:click.native="show(4)">妇科</MenuItem>
              <MenuItem name="1-5" to="/FivesensData"  v-on:click.native="show(5)">五官科</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                儿保
              </template>
              <MenuItem name="2-1" to="/ChildInsurData"  v-on:click.native="show(6)">一般资料</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                汇总打印
              </template>
              <MenuItem name="3-1" to="/ExamReport" v-on:click.native="unshow">体检报告</MenuItem>
              <MenuItem name="3-2" v-on:click.native="unshow">儿保报告</MenuItem>
            </Submenu>
          </Menu>

        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <!--<breadcrumb>
              <breadcrumb-item to="/">首页</breadcrumb-item>
            </breadcrumb>-->
            <Button type="info"  v-if="isShowButton" @click="saveInfo">保存信息</Button><br><br>
            <router-view> </router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>

</template>

<script>
  import LoginDialog from "./components/LoginDialog"
export default {
    name: "MainApp",
  data(){
    return{
      isShowButton:true,
      currentPage:1,
      id:this.GLOBAL.userId
    }
  },
  components:{
    'login-dialog':LoginDialog
  },
  methods:{
    unshow(){
     // console.log("click");
      this.isShowButton=false;
    },
    show(index){
      this.currentPage=index;
      this.isShowButton=false;
    },
    saveInfo(){
      switch(this.currentPage){
        case 1:

          break;
        default:break;
      }
    },
    getId(id){
      console.log("getid:"+id);
      this.id=id;

      //this.GLOBAL.userId.set(id);
      console.log("this.GLOBAL.userId:"+this.GLOBAL.userId);

      this.GLOBAL.userId=id;
      console.log("this.GLOBAL.userId:"+this.GLOBAL.userId);
    }
  }
}
</script>

<style>
.underline{
  text-decoration: underline;
}
.layout{
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo{
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.layout-nav{
  width: 420px;
  margin: 0 auto;
  margin-right: 20px;
}
</style>
