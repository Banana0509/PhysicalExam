<template>
  <div>
    <user-info></user-info>
    <Form :label-width="150" class="form_type">
      <FormItem label="有无秃顶">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.bald">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.bald_select" v-show="Data.bald == '1'">
            <Option value="秃顶">秃顶</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无浅表肿块">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.lump">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.lump_select" v-show="Data.lump == '1'">
            <Option value="肿块1">肿块1</Option>
            <Option value="肿块2">肿块2</Option>
            <Option value="肿块3">肿块3</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无皮肤色素沉着">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.skin">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.skin_select" v-show="Data.skin == '1'">
            <Option value="色素沉着1">色素沉着</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无包茎">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.phimosis">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.phimosis_select" v-show="Data.phimosis == '1'">
            <Option value="包茎">包茎</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无痔疮">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.piles">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.piles_select" v-show="Data.piles == '1'">
            <Option value="痔疮">痔疮</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无疝气">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.hernia">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.hernia_select" v-show="Data.hernia == '1'">
            <Option value="疝气">有无疝气</Option>
          </Select>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="有无静脉曲张">
        <Row>
          <Col span="11">
          <RadioGroup v-model="Data.varix">
            <Radio label="1">有</Radio>
            <Radio label="0">无</Radio>
          </RadioGroup>
          </Col>
          <Col span="11">
          <Select v-model="Data.varix_select" v-show="Data.varix == '1'">
            <Option value="静脉曲张">有无静脉曲张</Option>
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
    name: "SurgeryData",
    data(){
      return {
        Data: {
          userId: this.GLOBAL.userId,
          empId: this.GLOBAL.employeeId,
          bald: "0", bald_select: "",
          lump: "0", lump_select: "",
          skin: "0", skin_select: "",
          phimosis: "0", phimosis_select: "",
          piles: "0", piles_select: "",
          hernia: "0", hernia_select: "",
          varix: "0", varix_select: "",
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
        this.$http.post(this.GLOBAL.url + "/SurgeryData", this.Data).then(function (res) {
          this.data = res.data;
        })
      },
      generateSummarize() {
        if (this.Data.bald == 1) {
          this.Data.Summarize = "有秃顶   " + this.Data.bald_select + "\r\n";
        }
        else if (this.Data.bald == 0) {
          this.Data.Summarize = "无秃顶   " + "\r\n";
        }
        if (this.Data.lump == 1) {
          this.Data.Summarize += "有浅表肿块   " + this.Data.lump_select + "\r\n";
        }
        else if (this.Data.lump == 0) {
          this.Data.Summarize += "无浅表肿块   " + "\r\n";
        }
        if (this.Data.skin == 1) {
          this.Data.Summarize += "有皮肤色素沉着   " + this.Data.skin_select + "\r\n";
        }
        else if (this.Data.skin == 0) {
          this.Data.Summarize += "无皮肤色素沉着   " + "\r\n";
        }
        if (this.Data.phimosis == 1) {
          this.Data.Summarize += "有包茎   " + this.Data.phimosis_select + "\r\n";
        }
        else if (this.Data.phimosis == 0) {
          this.Data.Summarize += "无包茎   " + "\r\n";
        }
        if (this.Data.hernia == 1) {
          this.Data.Summarize += "有疝气   " + this.Data.hernia_select + "\r\n";
        }
        else if (this.Data.hernia == 0) {
          this.Data.Summarize += "无疝气   " + "\r\n";
        }
        if (this.Data.varix == 1) {
          this.Data.Summarize += "有静脉曲张   " + this.Data.varix_select + "\r\n";
        }
        else if (this.Data.varix == 0) {
          this.Data.Summarize += "无静脉曲张   " + "\r\n";
        }
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
