<template>
  <div>
    <v-app-bar color="primary" flat dense dark>
      <v-toolbar-title>Title</v-toolbar-title>
    </v-app-bar>
    <v-container class="pb-0 pt-0">
      <v-row>
        <v-col cols="12">
          <div class="mt-8 text-primary text-title text-center">
            Step 1 to Step 2
          </div>
        </v-col>
        <v-col cols="12">
          <div class="text-center pb-0">
            <img src="~/assets/user.png" alt="UserAvatar" width="155" />
          </div>
        </v-col>
        <v-col cols="12" class="text-center pb-0 pt-2"> Display name </v-col>

        <v-col cols="12">
          <v-form>
            <v-text-field label="First name" required v-model="form.firstname"/>
            <v-text-field label="Last name" required v-model="form.lastname"/>
            <div class="gender-group d-flex">
              <p>Gender</p>
              <div class="circle " :class="form.gender === 1 ? 'active' : ''" @click="choseGender(1)">
                <span class="matial-icon-female"></span>
              </div>
              <p>Female</p>
              <div class="circle" :class="form.gender === 2 ? 'active' : ''" @click="choseGender(2)">
                <span class="matial-icon-male"></span>
              </div>
              <p>male</p>
            </div>
            <v-btn rounded color="primary" class="w-100 mt-8 my-btn" @click="nextFunc()">Next</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss" scoped>
.gender-group {
  p {
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 0;
    align-self: center;
  }
  .circle {
    width: 45px;
    height: 45px;
    border-radius: 100%;
    color: #fff;
    position: relative;
    background: rgba($color: #000000, $alpha: 0.3);
    &.active {
      background: #1a56be;
    }
    span::before {
      text-transform: none !important;
      font: bold;
      font-size: 30px;
      font-family: "Material Icons";
      content: "\e590";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
<script>

export default {
  data(){
    return {
      form:{
        firstname:'',
        lastname:'',
        gender: 1
      },

    }
  },
  methods:{
    choseGender(g){
      this.form.gender = g;
    },
    validate(){
      let validated = true;
     ['firstname' , 'lastname'].forEach(key => {
      console.log(this.form[key])
      if(!this.form[key]){
        this.$store.dispatch('setDialog',{
          title:'Error form',
          message:"can't be null",
          isShow:true
        })
        validated = false
      }else validated = true
     })
      return validated;
    },
    nextFunc(){
     if(this.validate()){
      this.$store.dispatch('setRegister',this.form)

     }
    }
  }
}
</script>
