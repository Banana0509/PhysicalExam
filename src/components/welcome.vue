<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li>请根据自己的部门进行相应体检操作</li>
      <li>有任何问题请联系管理员</li>
    </ul>
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
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
