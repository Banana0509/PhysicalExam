<template>

  <div class="demo-split">
    <Split >
      <div slot="left" class="demo-split-pane">
        <label>{{DataTitle[0]}}</label>
        <input-number :max="10000" :min="1" v-model="GeneralDataArray['height']" :formatter="value=> `${value}cm`"
                      :parser="value=> value.replace('cm','')" :step="0.1"></input-number><br><br>

        <label>{{DataTitle[1]}}</label>
        <input-number :max="10000" :min="1" v-model="GeneralDataArray['preHeight']" :formatter="value=> `${value}cm`"
                      :parser="value=> value.replace('cm','')" :step="0.1"></input-number><br><br>

        <label>{{DataTitle[2]}}</label>
        <input-number :max="1000" :min="1" v-model="GeneralDataArray['weight']" :formatter="value=> `${value}kg`"
                      :parser="value=> value.replace('kg','')" :step="0.01"></input-number><br><br>

        <label>{{DataTitle[3]}}</label>
        <input-number :max="1000" :min="1" v-model="GeneralDataArray['bloodPressure']" :formatter="value=> `${value} mmHg`"
                      :parser="value=> value.replace('mmHg','')" :step="0.01"></input-number><br><br>

      </div>
      <div slot="right" class="demo-split-pane">
        <label>{{DataTitle[4]}}</label><br>
        <Input type="textarea" v-model="GeneralDataArray['feedStatus']" :autosize="true"  placeholder="请输入..."/><br><br>
        <label>{{DataTitle[5]}}</label><br>
        <Input type="textarea" v-model="GeneralDataArray['growComment']" :autosize="true"placeholder="请输入..."/><br><br>
        <label>{{DataTitle[6]}}</label><br>
        <Input type="textarea" v-model="GeneralDataArray['Summarize']" :autosize="true" placeholder="请输入..."/><br>
      </div>
    </Split>
  </div>
</template>

<script>
  export default {
    name: "ChildInsurData",
    data(){
      return{
        msg:'一般信息页面',
        GeneralDataArray:[{height:''},{weight:''},{preHeight:''},{feedStatus:''},{bloodPressure:''},{growComment:''},{Summarize:''}],
        DataTitle:['身高 ','预测身高','体重','血压','喂养情况','生长发育评价','记录小结']
      }
    }
  }
</script>

<style scoped>
  .demo-split{
    height:400px;
    border:1px solid #dcdee2;
  }
  .demo-split-pane{
    padding: 10px;
  }

</style>
