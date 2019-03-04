<template>
  <div class="back">
    <div class="hello">
      <br><br>
      <h1>{{ msg }}</h1>
      <h2>请根据自己的部门进行相应体检操作</h2>
      <h2>有任何问题请联系管理员</h2>
      <Row>
        <Button @click="openOneExe">调用txt exe</Button>
      </Row>
      <Row>
        <a href="myprotocol://">
          执行可执行文件
        </a>
      </Row>
      <Row>
        <input type="file" placeholder="请选择文件" @change="senfile" ref="dataFile" style="width:200px"/>
      </Row>
      <Table border :columns="dataImportColumns" :data="dataImportData"></Table>
      </Row>
    </div>
  </div>
</template>

<script>
  import XLSX from "xlsx"
export default {
  name: 'welcome',
  data () {
    return {
      msg: '欢迎您使用兴欣体检平台',
      dataImportColumns: [],
      dataImportData: []
    }
  },
  methods: {
    senfile() {
      let obj = this.$refs.dataFile;
      if (!obj.files) {
        return;
      }
      var zzexcel;
      var f = obj.files[0];
      var reader = new FileReader();
      reader.readAsBinaryString(f);
      reader.onload = (e) => {
        var data = e.target.result;
        zzexcel = XLSX.read(data, {
          type: 'binary'
        });
        //zzexcel.SheetNames[0]  表格第一个tab页名称

        this.dataImportData = XLSX.utils.sheet_to_json(zzexcel.Sheets[zzexcel.SheetNames[0]]);
        //设置表头
        let arr = [];
        for (var key in this.dataImportData[0]) {
          arr.push({
            title: key,
            key: key
          });
        }
        this.dataImportColumns = arr;
        //console.log(this.dataImportColumns );
        //console.log(this.dataImportData)
      };
    },


    open_exe(shellp, str) {
      let a = new ActiveXObject("wscript.shell");
      a.run(shellp + "   " + str);
    },
    openOneExe() {
      netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
      var file = Components.classes["@mozilla.org/file/local;1"].createInstance(Components.interfaces.nsILocalFile);
      file.initWithPath("D:\\Program Files\\Notepad++\\notepad++.exe");
      file.launch();
      //this.open_exe('notepad.exe','2dPt.txt')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .back {
    background: transparent;
  }

  .hello {
    margin: 0 auto;
    text-align: center;
    alignment: center;
    background: transparent;
}
</style>
