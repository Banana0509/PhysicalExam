<template>
  <Form :model="Data" class="form_type" label-position="right" :label-width="150">
    <FormItem label="身高(m)">
      <InputNumber v-model="Data.height"/>
    </FormItem>
    <FormItem label="体重(kg)">
      <InputNumber v-model="Data.weight"/>
    </FormItem>
    <FormItem label="血压(mmHg)">
      <Row>
        <Col span="11">
        <InputNumber v-model="Data.bloodPressureL"/>
        </Col>
        <Col span="2">
        /</Col>
        <Col span="11">
        <InputNumber v-model="Data.bloodPressureH"/>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="预测身高(m)">
      <InputNumber v-model="Data.pre_height"/>
    </FormItem>
    <FormItem label="喂养情况">
      <Select v-model="Data.feed_status_select">
        <Option value="A">优</Option>
        <Option value="B">良</Option>
        <Option value="C">差</Option>
      </Select>
    </FormItem>
    <FormItem label="备注">
      <Input type="textarea" v-model="Data.feed_status" :autosize="true" placeholder="可不填"/>
    </FormItem>
    <FormItem label="生长发育评价">
      <Select v-model="Data.grade_select">
        <Option value="A">优</Option>
        <Option value="B">良</Option>
        <Option value="C">差</Option>
      </Select>
    </FormItem>
    <FormItem label="备注">
      <Input type="textarea" v-model="Data.grade" :autosize="true" placeholder="可不填"/>
    </FormItem>
    <FormItem label="记录小结">
      <Input type="textarea" v-model="Data.Summarize" :autosize="true" placeholder="点击按钮自动生成，无需输入"/>
    </FormItem>
    <FormItem>
      <Row>
        <Col span="11">
        <Button type="info" @click="generateSummarize">生成记录小结</Button>
        </Col>
        <Col span="11">
        <Button type="info" @click="saveInfo">保存信息</Button>
        </Col>
      </Row>
    </FormItem>

  </Form>
</template>

<script>
  export default {
    name: "ChildInsurData",
    data(){
      return{
        Data: {
          UserId: this.GLOBAL.userId,
          height: 1,
          weight: 5,
          bloodPressureL: 90,
          bloodPressureH: 130,
          pre_height: 1,
          feed_status: '',
          feed_status_select: "",
          grade: "",
          grade_select: '',
          Summarize: ""
        },
        DataTitle: ['身高 ', '体重', '血压', '预测身高', '喂养情况', '生长发育评价', '记录小结']
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
