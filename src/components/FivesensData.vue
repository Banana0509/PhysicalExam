<template>
  <Form  :label-width="100" inline>
    <FormItem v-for="(name,index) in checkedNamesArray" :key="index" :label="name">
      <Input v-model='InternalDataArray[index]' type="textarea" :autosize="true" placeholder="请输入..." />
    </FormItem>
  </Form>

</template>

<script>
  export default {
    name: "FivesensData",
    data(){
      return {
        //InternalDataArray:[{Hypertension:false},{HeartDisease:false},{CerebralInfraction:false},{Diabetes:false},{Tumor:false},{Summarize:''}],
        InternalDataArray:['','','','',''],
        checkedNamesArray:['听力筛查','视力筛查','口腔检查','口腔治疗','记录小结']
      }
    }
  }
</script>

<style scoped>

</style>
