<template>
   <div class="component-test">
       <div class="search-box">
           <input type="text" v-model="inputModel" placeholder="Ecris du texte ici..." />
       </div>
       <div>
           <span v-show="inputModel">Je suis un component VueJs et tu tapes : {{inputModel}}</span>
       </div>
   </div>
</template>

<script>
    export default {
        data() {
            return {
                inputModel: '',
            }
        }
    }
</script>

<style scoped>
.component-test{
    text-align: center;
}
.search-box {
    margin: 0 auto;
}
.search-box input {
    background: none;
}
</style>
