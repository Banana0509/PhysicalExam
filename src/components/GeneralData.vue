<template>
    <Form  :model="Data" class="form_type"   label-position="left" :label-width="120">
        <FormItem  label= "身高(m)" >
            <Input  v-model="Data.height" />
        </FormItem>
        <FormItem label="体重(kg)">
          <Input  v-model="Data.weight"/>
        </FormItem>
          <FormItem label="体重指数(BMI)">
            <Input  v-model="Data.BMI"/>
          </FormItem>
          <FormItem  label="腰围(cm)">
            <Input  v-model="Data.waistline"/>
          </FormItem>
         <FormItem label="血压(mmHg)">
           <Input  v-model="Data.bloodPressure"/>
            </FormItem>
          <FormItem label="基本服药史">
          <Input type="textarea" v-model="Data.medicationHis" :autosize="true"  placeholder="请输入..."/>
          </FormItem>
          <FormItem label="药物及食物过敏史">
          <Input type="textarea" v-model="Data.allergicHis" :autosize="true"placeholder="请输入..."/>
          </FormItem>
          <FormItem label="记录小结">
          <Input type="textarea" v-model="Data.Summarize" :autosize="true" placeholder="点击按钮自动生成，无需输入"/>
            <br>
            <Button type="info" @click="generateSummarize">生成记录小结</Button>
          </FormItem>
          <FormItem>
              <Button type="info" @click="saveInfo">保存信息</Button>
          </FormItem>
    </Form>
</template>

<script>
    export default {
        name: "GeneralData",
      data(){
          return{
            msg:'一般信息页面',
              GeneralDataArray:{'UserId':this.GLOBAL.userId,'height':0,'weight':0,'waistline':0,'BMI':0,'bloodPressure':0, 'medicationHis':'', 'allergicHis':'','Summarize':''},
              Data:{
                UserId:this.GLOBAL.userId,
                height:1.55,
                weight:55,
                waistline:71,
                BMI:1,
                bloodPressure:"90/130",
                medicationHis:"",
                allergicHis:"",
                Summarize:""
              },
          }
      },
      computed:{
        DataBmi(){
          console.log("computed DataBmi");
          if (this.Data.weight > 0 && this.Data.height > 0){
            let num = this.Data.weight /(this.Data.height*this.Data.height);
            console.log("computed:"+num.toString()+","+this.Data.BMI.toString());
            this.Data.BMI = num.toFixed(3);
            console.log("computed:"+num.toString()+","+this.Data.BMI.toString());
          }
        }
      },
      watch:{
        DataBmi(){//必须写上，不然computed不工作。。。
          console.log("watch DataBmi");
        }
      },
      methods:{
        saveInfo(){
          console.log("saveInfo");
          console.log(this.GeneralDataArray);
         // console.log("this.GLOBAL.userId:"+this.GeneralDataArray['userId']);
          this.$http.post(this.GLOBAL.url+"/GeneralData",this.GeneralDataArray).then(function (res) {
            this.data = res.data;
            console.log( this.data);
            })
        },
        generateSummarize(){

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
