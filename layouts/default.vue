<template>
  <v-app >
    <nuxt/>
    <Dialog />
  </v-app>
</template>
<script>
import Dialog from '~/components/Dialog'
export default{
  components:{
    Dialog
  }
}
</script>
<style lang="scss">
.v-toolbar__title{
  text-align: center;
  width:100%;
  font-weight:bold;
}
.v-appication .primary{
  background: #1A56BE !important;
  border-color:#1A56BE !important;
}
.w-100{
  width: 100%;
}
.text-primary{
  color: #1A56BE;
}
.text-title{
  font-size:20px;
  font-weight: bold;
}
.my-btn{
  font-size: 20px;
  text-transform: none !important;
}
</style>
<script>

</script>
