<template>
  <div>
    <!--<Button type="info" @click="download">点击下载体检报告</Button> <br><br>  embed自带下载按钮，不在进行下载按钮的添加-->
    <embed id="pdfplace" :src="pdfData" type="application/pdf" width="100%" height="1000" allowfullscreen="true"
           align="middle">
  </div>
</template>

<script>
  export default {
    name: "ChildReport",
    data() {
      return {
        data: [],
        res: "",
        isShowPdf: true,
        pdfData: "",
        realheight: 1000
      }
    },
    mounted() {
      console.log("mounted");
      //this.getData();
      this.exportData();
    },
    methods: {
      exportData() {
        this.$http.get(this.GLOBAL.url + "/ChildInsurData/Report/" + this.GLOBAL.userId, {responseType: 'arraybuffer'}).then(function (ret) {
          if (ret.status == 200) {
            let blob = new Blob([ret.data], {
              type: 'application/pdf'
            });
            let objectUrl = URL.createObjectURL(blob);
            let link = document.createElement("a");
            this.pdfData = objectUrl;
            let fname = '儿保报告';
            link.pdfurl = objectUrl;
            link.href = objectUrl;
            link.setAttribute("download", fname);
            document.body.appendChild(link);
          }
        })
      },
    },
    components: {}
  }
</script>

<style scoped>

</style>
