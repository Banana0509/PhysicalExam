<template>
  <MenuItem  name="1">
    <Button type="success" ghost v-if="!isShow">体检人ID:{{ this.GLOBAL.userId}}</Button>
    <Button type="success" v-if="!isShow" @click="change">切换</Button>

    <Button type="success" @click="modall = true,id=''" v-if="isShow">体检个人信息录入</Button>
    <Modal v-model="modall" title="体检人信息" width="40%">
      <div>
      <Form>
        <FormItem label="体检人ID">
          <Input v-model="id" placeholder="请输入"/>
          <Alert type="error" v-show="showAlert">{{alertinfo}}</Alert>
        </FormItem>
        <FormItem>
          <Row>
            <Col span="11">
            <Button type="success" @click="ok">录入信息</Button>
            </Col>
            <Col span="2">
            <Button type="default" @click="cancel">取消</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>
      </div>
      <div slot="footer">

      </div>
    </Modal>
  </MenuItem>
</template>

<script>
    export default {
        name: "LoginDialog",
      data(){
          return{
            //personnalInfo:'',
            id: '',
            alertinfo: '',
            showAlert: false,
            modall:false,
            isShow:true
          }
      },
      methods:{
        ok(){
          console.log("LoginDialog this.GLOBAL.userId:" + this.GLOBAL.userId);
          if (this.id.length > 0 && this.id > 0) {
            console.log("111");
            this.showAlert = false;
            this.GLOBAL.userId = this.id;
            console.log("LoginDialog this.GLOBAL.userId:" + this.GLOBAL.userId);
            this.isShow = false;
            this.modall = false;
            this.id = '';
            this.$Message.success("录入成功!");
          }
          else {
            console.log("222");
            this.id = '';
            this.alertinfo = "请输入合法ID！";
            this.showAlert = !this.showAlert;
            this.modall = true;
            this.isShow = true;
            this.$Message.success("录入失败!");
          }
          //this.sendMsg();
        } ,
        cancel(){
          this.id = '';
          this.modall = false;
        },
        sendMsg(){
          //this.$emit('id',this.id);
        },
        change() {
          //this.isShow = !this.isShow;
          this.id = '';
          this.modall = true;
        }
      }
    }
</script>

<style scoped>

</style>
