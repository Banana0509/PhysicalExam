<template>
  <div>
    <user-info></user-info>
    <Form :model="Data" class="form_type" label-position="right" :label-width="150">
      <FormItem label="听力筛查">
        <Select v-model="Data.hearing_select">
          <Option value="无异常">无异常</Option>
        </Select>
      </FormItem>
      <FormItem label="备注">
        <Input type="textarea" v-model="Data.hearing" :autosize="true" placeholder="可不填"/>
      </FormItem>
      <FormItem label="视力筛查">
        <Select v-model="Data.vision_select">
          <Option value="无异常">无异常</Option>
        </Select>
      </FormItem>
      <FormItem label="备注">
        <Input type="textarea" v-model="Data.vision" :autosize="true" placeholder="可不填"/>
      </FormItem>
      <FormItem label="口腔检查">
        <Select v-model="Data.mouth_select">
          <Option value="无异常">无异常</Option>
        </Select>
      </FormItem>
      <FormItem label="备注">
        <Input type="textarea" v-model="Data.mouth" :autosize="true" placeholder="可不填"/>
      </FormItem>
      <FormItem label="记录小结">
        <Input type="textarea" v-model="Data.Summarize" :autosize="true" placeholder="点击按钮自动生成，无需输入"/>
      </FormItem>
      <FormItem>
        <Row>
          <Col span="11">
          <Button type="success" @click="generateSummarize">生成记录小结</Button>
          </Col>
          <Col span="11">
          <Button type="success" @click="saveInfo">保存信息</Button>
          </Col>
        </Row>
      </FormItem>

    </Form>
  </div>
</template>

<script>
  import userInfo from './commCompo/userInfo'
  export default {
    name: "FivesensData",
    data(){
      return {
        Data: {
          userId: this.GLOBAL.userId,
          empId: this.GLOBAL.employeeId,
          hearing: "", hearing_select: '',
          vision: "", vision_select: '',
          mouth: "", mouth_select: "",
          Summarize: ""
        },
      }
    },
    components: {
      'user-info': userInfo
    },
    methods: {
      saveInfo() {
        this.Data.userId = this.GLOBAL.userId;
        this.Data.empId = this.GLOBAL.employeeId;
        this.$http.post(this.GLOBAL.url + "/FivesensData", this.Data).then(function (res) {
          this.data = res.data;
        })
      },
      generateSummarize() {
        this.Data.Summarize = "听力: " + this.Data.hearing_select + "  " + this.Data.hearing + " \r\n"
          + "视力: " + this.Data.vision_select + "  " + this.Data.vision + " \r\n"
          + "口腔: " + this.Data.mouth_select + "  " + this.Data.mouth + " \r\n";
      }
    }
  }
</script>

<style scoped>
  .form_type {
    width: 400px;
    margin: 0 auto;
  }
</style>
