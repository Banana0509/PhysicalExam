<template>
    <li class="item" @click="handleDelete">{{index}}-{{content}}</li>
</template>

<script>
    export default {
        name: "todoItem",
        props:['content','index'],//子组件获取父组件的值
      methods:{
        handleDelete(){
          //alert(this.index+":"+this.content);
          this.$emit('delete',this.index);
        }
      }
    }
</script>

<style scoped>
.item{
  color: #42b983;
}
</style>
