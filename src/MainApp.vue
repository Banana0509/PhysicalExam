<template>
  <div class="layout" id="MainApp">
    <Layout class="back">
      <Header>
        <div class="layout-user">
          <login-dialog></login-dialog>
        </div>

        <div class="layout-logo">
          <h1 class="title">{{this.GLOBAL.web_name}}</h1>
        </div>

        <Dropdown @on-click="clickDrop" placement="bottom-start">
          <a href="javascript:void(0)">
            职工ID:{{ this.GLOBAL.employeeId}}
            <Icon type="ios-arrow-down"></Icon>
          </a>
          <DropdownMenu slot="list">
            <DropdownItem name="Setting">设置 Setting</DropdownItem>
            <DropdownItem name="Exit">退出 Exit</DropdownItem>
          </DropdownMenu>
        </Dropdown>

      </Header>
      <Layout class="back">
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="0-1" theme="light" width="auto" :open-names="['0']" accordion>
            <Submenu name="0">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                首页
              </template>
              <MenuItem name="0-1" to="/welcome" v-on:click.native="show(1)">欢迎使用</MenuItem>
            </Submenu>
            <Submenu name="1">
              <template slot="title" >
                <Icon type="ios-paper"></Icon>
                   体检信息录入
              </template>
              <MenuItem name="1-1" to="/GeneralData" v-on:click.native="show(1)" >一般资料</MenuItem>
              <MenuItem name="1-2" to="/InternalData"  v-on:click.native="show(2)">内科</MenuItem>
              <MenuItem name="1-3" to="/SurgeryData" v-on:click.native="show(3)">外科(男)</MenuItem>
              <MenuItem name="1-4" to="/GynaecologyData" v-on:click.native="show(4)">妇科(女)</MenuItem>
              <MenuItem name="1-5" to="/FivesensData"  v-on:click.native="show(5)">五官科</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
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
              <MenuItem name="3-2" to="/ChildReport" v-on:click.native="unshow">儿保报告</MenuItem>
            </Submenu>
            <Submenu name="4">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                数据维护
              </template>
              <MenuItem name="4-1">下拉菜单维护</MenuItem>
            </Submenu>
          </Menu>

        </Sider>
        <Layout :style="{padding: '0 24px 24px'}" class="back">
          <Content :style="{padding: '24px', minHeight: '280px'}" class="back">
            <router-view class="back"></router-view>
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
    }
  },
  components:{
    'login-dialog':LoginDialog
  },
  created() {
    console.log("created");
    this.$router.push({path: "/welcome"});
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
    clickDrop(name) {
      console.log("drop click:" + name);
      if (name == "Exit") {
        this.$store.commit('setIsShowLogin');
      }
    }
  }
}
</script>

<style>
.underline{
  text-decoration: underline;
}
.layout{
  border: 0px;
  background: transparent;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.title {
  color: #f5f7f9;
  background: transparent;
}

.layout-user {
  display: inline;
  width: 40%;
  height: 100px;
  background: transparent;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 20px;
  color: whitesmoke;
}

.layout-logo {
  display: inline;
  width: 50%;
  height: 100px;
  background: transparent;
  border-radius: 3px;
  text-align: center;
  margin: 0 auto;
  float: left;
/ / position: relative;
/ / top: 5 px;
/ / left: 20 px;
}
.layout-nav{
  display: inline;
  width: 30%;
  height: 100px;
  background: transparent;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 5px;
  left: 20px;
}

.back {
  background-color: transparent;
}
</style>
