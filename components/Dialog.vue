<template>
  <v-dialog  v-model="getDialog.isShow"
      width="500">
  <v-card>
    <v-card-title>{{ getDialog.title }}</v-card-title>
    <v-card-text>{{ getDialog.message }}</v-card-text>
    <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
  </v-card>
  </v-dialog>
</template>
<script>
export default{
 computed: {
  getDialog(){
    return this.$store.getters.getDialog
  }
 }
}
</script>
