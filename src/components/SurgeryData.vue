<template>
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
    name: "SurgeryData",
    data(){
      return {
        Data: {
          UserId: this.GLOBAL.userId,
          bald: "",
          bald_select: "",
          lump: "",
          lump_select: "",
          skin: "",
          skin_select: "",
          phimosis: "",
          phimosis_select: "",
          piles: "",
          piles_select: "",
          hernia: "",
          hernia_select: "",
          varix: "",
          varix_select: "",
          Summarize: ""
        },
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
