<template>
  <Form :label-width="150" inline>
    <FormItem v-for="(name,index) in checkedNamesArray" :key="index" :label="name">
      <RadioGroup  v-model= 'InternalDataArray[index]' >
        <Radio label="1">有</Radio>
        <Radio label="0">无</Radio>
      </RadioGroup>
    </FormItem>
    <FormItem label="记录小结">
      <Input v-model="InternalDataArray[6]" type="textarea" :autosize="true" placeholder="请输入..." />
    </FormItem>
  </Form>

</template>

<script>
  export default {
    name: "GynaecologyData",
    data(){
      return {
        InternalDataArray:['0','0','0','0','0','0',''],
        checkedNamesArray:['有无浅表肿块','有无皮肤色素沉着','有无乳腺结节','宫颈粘液检查','有无疝气','有无静脉曲张']
      }
    }
  }
</script>

<style scoped>

</style>
