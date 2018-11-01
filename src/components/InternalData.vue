<template>
  <Form :label-width="150" class="form_type">
    <FormItem label="有无高血压">
      <Row>
        <Col span="11">
        <RadioGroup v-model="Data.Hypertension">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="11">
        <Select v-model="Data.Hypertension_select" v-show="Data.Hypertension == '1'">
          <Option value="高血压1">高血压1</Option>
        </Select>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="有无冠心病">
      <Row>
        <Col span="11">
        <RadioGroup v-model="Data.HeartDisease">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="11">
        <Select v-model="Data.HeartDisease_select" v-show="Data.HeartDisease == '1'">
          <Option value="冠心病1">冠心病1</Option>
        </Select>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="有无脑梗塞">
      <Row>
        <Col span="11">
        <RadioGroup v-model="Data.CerebralInfraction">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="11">
        <Select v-model="Data.CerebralInfraction_select" v-show="Data.CerebralInfraction == '1'">
          <Option value="脑梗塞1">脑梗塞1</Option>
        </Select>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="有无糖尿病">
      <Row>
        <Col span="11">
        <RadioGroup v-model="Data.Diabetes">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="11">
        <Select v-model="Data.Diabetes_select" v-show="Data.Diabetes == '1'">
          <Option value="糖尿病1">糖尿病1</Option>
        </Select>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="有无肿瘤">
      <Row>
        <Col span="11">
        <RadioGroup v-model="Data.Tumor">
          <Radio label="1">有</Radio>
          <Radio label="0">无</Radio>
        </RadioGroup>
        </Col>
        <Col span="11">
        <Select v-model="Data.Tumor_select" v-show="Data.Tumor == '1'">
          <Option value="肿瘤1">肿瘤1</Option>
        </Select>
        </Col>
      </Row>
    </FormItem>
    <FormItem label="记录小结">
      <Input v-model="Data.Summarize" type="textarea" :autosize="true" placeholder="点击按钮自动生成，无需输入"/>
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
        name: "InternalData",
        data(){
          return {
            Data: {
              Hypertension: "",
              Hypertension_select: "",
              HeartDisease: "",
              HeartDisease_select: "",
              CerebralInfraction: "",
              CerebralInfraction_select: "",
              Diabetes: "",
              Diabetes_select: "",
              Tumor: "",
              Tumor_select: "",
              Summarize: "",
            },
            checkedNamesArray:['有无高血压','有无冠心病','有无脑梗塞','有无糖尿病','有无肿瘤']
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
