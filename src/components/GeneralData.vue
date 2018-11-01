<template>
  <Form :model="Data" class="form_type" label-position="right" :label-width="150">
    <FormItem label="身高(m)">
      <InputNumber v-model="Data.height"/>
        </FormItem>
        <FormItem label="体重(kg)">
          <InputNumber v-model="Data.weight"/>
        </FormItem>
          <FormItem label="体重指数(BMI)">
            <InputNumber v-model="Data.BMI" readonly="true"/>
          </FormItem>
          <FormItem  label="腰围(cm)">
            <InputNumber v-model="Data.waistline"/>
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
          <FormItem label="基本服药史">
            <Select v-model="Data.medicationHis_select">
              <Option value="服药历史1">服药历史1</Option>
              <Option value="服药历史2">服药历史2</Option>
              <Option value="服药历史3">服药历史3</Option>
            </Select>
          </FormItem>
    <FormItem label="基本服药史-备注">
      <Input type="textarea" v-model="Data.medicationHis" :autosize="true" placeholder="可不填"/>
          </FormItem>
          <FormItem label="药物及食物过敏史">
            <Select v-model="Data.allergicHis_select">
              <Option value="药物及食物过敏史1">药物及食物过敏史1</Option>
              <Option value="药物及食物过敏史2">药物及食物过敏史2</Option>
              <Option value="药物及食物过敏史3">药物及食物过敏史3</Option>
            </Select>
          </FormItem>
    <FormItem label="药物及食物过敏史-备注">
      <Input type="textarea" v-model="Data.allergicHis" :autosize="true" placeholder="可不填"/>
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
      name: "GeneralData",
      data() {
        return {
          msg: '一般信息页面',
          Data: {
            UserId: this.GLOBAL.userId,
            height: 1.75,
            weight: 65,
            waistline: 71,
            BMI: 1,
            bloodPressureL: 90,
            bloodPressureH: 130,
            medicationHis: "",
            medicationHis_select: '',
            allergicHis: "",
            allergicHis_select: '',
            Summarize: ""
          },
        }
      },
      computed: {
        DataBmi() {
          console.log("computed DataBmi");
          if (this.Data.weight > 0 && this.Data.height > 0) {
            let num = this.Data.weight / (this.Data.height * this.Data.height);
            this.Data.BMI = num.toFixed(3);
          }
          if (this.Data.height) {
          }
        }
      },
      watch: {
        DataBmi() {//必须写上，不然computed不工作。。。
          console.log("watch DataBmi");
        }
      },
      methods: {
        saveInfo() {
          this.$http.post(this.GLOBAL.url + "/GeneralData", this.Data).then(function (res) {
            this.data = res.data;
            })
        },
        generateSummarize() {
          this.Data.Summarize = "身高: " + this.Data.height + "米\r\n" + "体重: " + this.Data.weight + " 千克\r\n"
            + "体重指数: " + this.Data.BMI + "\r\n" + "腰围: " + this.Data.waistline + " 厘米\r\n"
            + "血压: " + this.Data.bloodPressureL + "/" + this.Data.bloodPressureH + " mmHg\r\n"
            + "基本服药史: " + this.Data.medicationHis_select + "\r\n" + "备注: " + this.Data.medicationHis + "\r\n"
            + "基本服药史: " + this.Data.allergicHis_select + "\r\n" + "备注: " + this.Data.allergicHis;
        }
      }
    }
</script>

<style scoped>
.form_item_type{
  width: 100px;
}

.form_type{
  width: 400px;
  margin: 0 auto;
}

</style>
