<template>
 <Form  :label-width="150" inline>
   <FormItem v-for="(name,index) in checkedNamesArray" :key="index" :label="name">
     <RadioGroup  v-model= 'InternalDataArray[index]' >
       <Radio label="1">有</Radio>
       <Radio label="0">无</Radio>
     </RadioGroup>
   </FormItem>
   <FormItem label="记录小结">
     <Input v-model="InternalDataArray[5]" type="textarea" :autosize="true" placeholder="请输入..." />
   </FormItem>
 </Form>

</template>

<script>
    export default {
        name: "InternalData",
        data(){
          return {
            //InternalDataArray:[{Hypertension:false},{HeartDisease:false},{CerebralInfraction:false},{Diabetes:false},{Tumor:false},{Summarize:''}],
            InternalDataArray:['0','0','0','0','0',''],
            checkedNamesArray:['有无高血压','有无冠心病','有无脑梗塞','有无糖尿病','有无肿瘤']
          }
        }
    }
</script>

<style scoped>

</style>
