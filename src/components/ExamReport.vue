<template>
  <div>
    <!--<Button type="info" @click="download">点击下载体检报告</Button> <br><br>  embed自带下载按钮，不在进行下载按钮的添加-->
    <embed id="pdfplace" :src="pdfData" type="application/pdf" width="100%" height="1000" allowfullscreen="true" align="middle" >
  </div>
</template>

<script>
    export default {
      name: "ExamReport",
      data() {
        return {
          column: [{title: 'id', key: 'id'}, {title: 'age', key: 'age'}, {title: 'cupSize', key: 'cupSize'}],
          //data1: [{name: 'banana', name1: 'banana1'}, {name: 'banana', name1: 'banana1'}]
          data:[],
          res:"",
          isShowPdf:true,
          pdfData:"",
          realheight:1000
        }
      },
      mounted(){
        console.log("mounted");
        //this.getData();
        this.exportData();
      },
      methods : {
        exportData() {
          this.$http.get(this.GLOBAL.url+"/GeneralData/Report/"+this.GLOBAL.userId).then(function () {
            //this.data = res.data;
            console.log( this.GLOBAL.userId);
          });
          this.$http.get(this.GLOBAL.url+"/download",{responseType:'arraybuffer'}).then(function (ret) {
              if(ret.status == 200){
                let blob = new Blob([ret.data],{
                  type:'application/pdf'
                });
                let objectUrl = URL.createObjectURL(blob);
                let link = document.createElement("a");
                this.pdfData = objectUrl;
                let fname = '体检报告';
                link.pdfurl = objectUrl;
                link.href = objectUrl;
                link.setAttribute("download",fname);
                document.body.appendChild(link);
              }})
        },
        /*getData(){
         console.log("getdata");
         this.$http.get(this.GLOBAL.url+"/girls").then(function (res) {
           this.data = res.body;
           console.log( this.data);
         })
       },
       download(){

         console.log("download");
         this.$http.get(this.GLOBAL.url+"/download",{responseType:'arraybuffer'}).then(function (ret) {
           if(ret.status == 200){
             let blob = new Blob([ret.data],{
               type:'application/pdf'
             });

             let objectUrl = URL.createObjectURL(blob);
             let link = document.createElement("a");
             //this.pdfData = objectUrl;
             let fname = '体检报告';
             link.pdfurl = objectUrl;
             link.href = objectUrl;
             link.setAttribute("download",fname);
             document.body.appendChild(link);
             link.click();
           }
         })
       }*/
      },
      components:{
      }
    }
</script>

<style scoped>

</style>
