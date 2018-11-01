<template>
  <MenuItem  name="1">
    <!--<Icon type="ios-paper"></Icon>-->
    {{personnalInfo}}
    <Button type="primary" @click="modall = true" v-if="isShow">体检个人信息录入</Button>
    <Modal v-model="modall" title="体检个人信息"
           @on-ok="ok"
           @on-cancel="cancel">
      <Form>
        <FormItem label="体检人ID">
            <Input v-model="id" placeholder="请输入ID" />
        </FormItem>
      </Form>
    </Modal>
  </MenuItem>
</template>

<script>
    export default {
        name: "LoginDialog",
      data(){
          return{
            personnalInfo:'',
            id:"",
            modall:false,
            isShow:true
          }
      },
      methods:{
        ok(){
          console.log("ok");
          this.personnalInfo="体检人ID:"+this.id;
          this.isShow=false;
          this.sendMsg();
        } ,
        cancel(){
          console.log("cancel");
        },
        sendMsg(){
          this.$emit('id',this.id);
        }
      }
    }
</script>

<style scoped>

</style>
