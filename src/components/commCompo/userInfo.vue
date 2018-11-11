<template>
  <div class="infoDiv">
    <Row class="margin-inside">
      <Col span="6">
      ID：
      <Input class="input-width" v-model="userInfo.userId"/>
      </Col>
      <Col span="6">
      姓名：
      <Input class="input-width" v-model="userInfo.name"/>
      </Col>
      <Col span="6">
      性别：
      <Input class="input-width" v-model="userInfo.sex"/>
      </Col>
      <Col span="6">
      诊断结果:
      <Input class="input-width" v-model="userInfo.diagnosis"/>
      </Col>
    </Row>
    <Row class="margin-inside">
      <Col span="8">
      检查日期:
      <DatePicker type="date" placeholder="Select date" class="input-width" v-model="userInfo.Date"></DatePicker>
      </Col>
      <Col span="8">
      当前日期:
      <DatePicker type="date" placeholder="Select date" class="input-width" v-model="userInfo.curDate"></DatePicker>
      </Col>
      <Col span="8">
      <login-dialog class="input-width"></login-dialog>
      </Col>
    </Row>
  </div>
</template>
<script>
  import LoginDialog from "../LoginDialog"
  export default {
    name: 'userInfo',
    data() {
      return {
        userInfo: {
          userId: this.GLOBAL.userId,
          name: "",
          sex: "",
          diagnosis: "",
          empId: this.GLOBAL.employeeId,
          curDate: "",
          Date: ""
        }
      }
    },
    components: {
      'login-dialog': LoginDialog
    },
  }
</script>


<style>
  .infoDiv {
    background: white;
    border: 1px solid lightgray;
    border-radius: 8px;
    margin: 20px 10px;
  }

  .margin-inside {
    margin: 20px 20px;
  }

  .input-width {
    width: 70%;
  }
</style>
