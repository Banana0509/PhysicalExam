<template>
    <div>
      <h1>TodoList</h1>
      <input class="item" v-model="inputValue"/>
      <button v-on:click="handleSubmit">提交</button>
      <ul>
        <todo-item v-for="(value, index) in list" :key="index"
        :content="value" :index="index" @delete="handleDelete"
        ></todo-item>
      </ul>
    </div>
</template>

<script>
  import TodoItem from './todoItem'
    export default {
        name: "TodoList",
      components:{
          'todo-item':TodoItem
      },
      data:function (){
          return{
            inputValue:'',
            list:[]
          }
    },
      methods:{
        handleSubmit: function(){
          this.list.push(this.inputValue);
          this.inputValue='';
          //alert("handleSubmit");
        },
        handleDelete(index){
          this.list.splice(index,1)
        }
      }
    }
</script>

<style scoped>

</style>
