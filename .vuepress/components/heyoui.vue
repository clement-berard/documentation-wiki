<template>
   <div class="component-test">
       <div>
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

<style>
    .component-test {
        text-align: center;
    }
</style>
