<template>
  <div class="back">
    <div class="hello">
      <br><br>
      <h1>{{ msg }}</h1>
      <h2>请根据自己的部门进行相应体检操作</h2>
      <h2>有任何问题请联系管理员</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      msg: '欢迎您使用兴欣体检平台'
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
