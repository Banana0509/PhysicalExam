<template>
  <div>
    <user-info></user-info>
    <div class="infoDiv">
      <Row class="margin-inside">
        <Col span="6">
        有无高血压&nbsp
        <RadioGroup v-model="Data.Hypertension">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="6">
        <Select v-model="Data.Hypertension_select" class="input-width">
          <Option value="高血压1">高血压1</Option>
        </Select>
        </Col>
        <Col span="6">
        有无冠心病&nbsp
        <RadioGroup v-model="Data.HeartDisease">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="6">
        <Select v-model="Data.HeartDisease_select" class="input-width">
          <Option value="冠心病1">冠心病1</Option>
        </Select>
        </Col>
      </Row>
      <Row class="margin-inside">
        <Col span="6">
        有无脑梗塞&nbsp
        <RadioGroup v-model="Data.CerebralInfraction">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="6">
        <Select v-model="Data.CerebralInfraction_select" class="input-width">
          <Option value="脑梗塞1">脑梗塞1</Option>
        </Select>
        </Col>
        <Col span="6">
        有无糖尿病&nbsp
        <RadioGroup v-model="Data.Diabetes">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="6">
        <Select v-model="Data.Diabetes_select" class="input-width">
          <Option value="糖尿病1">糖尿病1</Option>
        </Select>
        </Col>
      </Row>
      <Row class="margin-inside">
        <Col span="6">
        有无肿瘤&nbsp
        <RadioGroup v-model="Data.Tumor">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="6">
        <!-- v-show="Data.Tumor == '1'"-->
        <Select v-model="Data.Tumor_select" class="input-width">
          <Option value="肿瘤1">肿瘤1</Option>
        </Select>
        </Col>
        <Col span="6">
        <Button type="success" @click="generateSummarize">生成记录小结</Button>
        </Col>
        <Col span="6">
        <Button type="success" @click="saveInfo">保存信息</Button>
        </Col>
      </Row>
      <Row class="margin-inside">
        <Col span="8">
        记录小结&nbsp
        <Input v-model="Data.Summarize" type="textarea" :autosize="true" placeholder="点击按钮自动生成，无需输入"/>
        </Col>
      </Row>
    </div>
  </div>
</template>

<script>
  import userInfo from './commCompo/userInfo'

  export default {
    name: "Internal",
    data() {
      return {
        Data: {
          userId: this.GLOBAL.userId,
          empId: this.GLOBAL.employeeId,
          Hypertension: "0", Hypertension_select: "",
          HeartDisease: "0", HeartDisease_select: "",
          CerebralInfraction: "0", CerebralInfraction_select: "",
          Diabetes: "0", Diabetes_select: "",
          Tumor: "0", Tumor_select: "",
          Summarize: "",
        },
        checkedNamesArray: ['有无高血压', '有无冠心病', '有无脑梗塞', '有无糖尿病', '有无肿瘤']
      }
    },
    components: {
      'user-info': userInfo
    },
    methods: {
      saveInfo() {
        this.Data.userId = this.GLOBAL.userId;
        this.Data.empId = this.GLOBAL.employeeId;
        this.$http.post(this.GLOBAL.url + "/InternalData", this.Data).then(function (res) {
          this.data = res.data;
        })
      },
      generateSummarize() {
        if (this.Data.Hypertension == 1) {
          this.Data.Summarize = "有高血压   " + this.Data.Hypertension_select + "\r\n";
        }
        else if (this.Data.Hypertension == 0) {
          this.Data.Summarize = "无高血压   " + "\r\n";
        }
        if (this.Data.HeartDisease == 1) {
          this.Data.Summarize += "有冠心病   " + this.Data.HeartDisease_select + "\r\n";
        }
        else if (this.Data.HeartDisease == 0) {
          this.Data.Summarize += "无冠心病   " + "\r\n";
        }
        if (this.Data.CerebralInfraction == 1) {
          this.Data.Summarize += "有脑梗塞   " + this.Data.CerebralInfraction_select + "\r\n";
        }
        else if (this.Data.CerebralInfraction == 0) {
          this.Data.Summarize += "无脑梗塞   " + "\r\n";
        }
        if (this.Data.Diabetes == 1) {
          this.Data.Summarize += "有糖尿病   " + this.Data.Diabetes_select + "\r\n";
        }
        else if (this.Data.Diabetes == 0) {
          this.Data.Summarize += "无糖尿病   " + "\r\n";
        }
        if (this.Data.Tumor == 1) {
          this.Data.Summarize += "有肿瘤   " + this.Data.Tumor_select + "\r\n";
        }
        else if (this.Data.Tumor == 0) {
          this.Data.Summarize += "无肿瘤   " + "\r\n";
        }
      }
    }
  }
</script>

<style scoped>
  .form_type {
    width: 500px;
    margin: 0 auto;
  }

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
    width: 80%;
  }
</style>
