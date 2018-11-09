<template>

</template>

<script>
  export default {
    name: "store",
    data() {
      return {
        isShowLogin: true
      }
    },
    mutations: {
      setisShowLogin(isShow) {  //使用方式 store.commit("set",true)
        this.isShowLogin = isShow;
        console.log('change store setisShowLogin = ' + isShow);
      }
    }
  }
</script>

<style scoped>

</style>
