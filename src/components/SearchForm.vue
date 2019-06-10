<template>
<b-container fluid>
    <b-row>
        <b-col xl="5" lg="12" cols="12" class="d-flex">
        <b-input id="input-go-from" class="input-place" v-model="goFrom" placeholder="Miejsce podróży"></b-input>
        <b-btn class="btn-transparent" v-on:click="changeDestiny"><img src="../../static/change-button.png"></b-btn>        
        <b-input id="input-go-to" class="input-place" v-model="goTo" placeholder="Miejsce docelowe"></b-input>        
        </b-col>
        <b-col xl="2" md="6" cols="12" class="d-flex">
            <div class="inner-addon right-addon">
                <img src="../../static/calendar.png" class="input-icon">
            <!-- <date-picker v-model="goOnDate" lang="en" placeholder="Podaj datę wyjazdu" class="input-date"></date-picker> -->
            <b-input name="datepicker-to-go" class="input-date" v-model="goOnDate" placeholder="Data wyjazdu"></b-input>
            </div>
        </b-col>
        <b-col xl="2" md="6" cols="12" class="d-flex">
            <b-btn class="btn-transparent input-date-text" v-if="!backDate" v-on:click="backDate = !backDate"><img class="mr-1" src="../../static/plus.png"> Dodaj powrót</b-btn>
            <transition name="fade">
            <div class="inner-addon right-addon" v-if="backDate">
            <img src="../../static/calendar.png" class="input-icon">
            <b-input name="datepicker-to-go" class="input-date" v-model="backOnDate" placeholder="Data przyjazdu"></b-input>
            </div>
            </transition>
        </b-col>
        <b-col xl="1" md="12" cols="12" class="d-flex">
            <div class="inner-addon right-addon">
                <img src="../../static/people-counter.png" class="input-icon">
            <b-input name="input-get-people" class="input-people" v-model="people"></b-input>
            </div>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
// import DatePicker from 'vue2-datepicker'

export default {
//   components: {
//     DatePicker
//   },
  data () {
    return {
      goFrom: '',
      goTo: '',
      goOnDate: '',
      backOnDate: '',
      people: 1,
      backDate: false
    }
  },
  methods: {
    changeDestiny () {
      let goFrom = this.goFrom
      let goTo = this.goTo
      this.goFrom = goTo
      this.goTo = goFrom
    }
  }
}
</script>

<style scoped>
.input-place {
    margin: 10px 0px;
    border: 1px solid #dedede;
    border-radius: 0px;    
}
.btn-transparent {
    background-color: transparent;
    border: none;
    box-shadow: none;
}
.input-date {
    margin: 10px 0px;
    border: 1px solid #dedede;
    border-radius: 0px;
}
.input-people {
    margin: 10px 0px;
    border: 1px solid #dedede;
    border-radius: 0px;     
}
.inner-addon {
    position: relative;
    margin: 0px;
    padding: 0px;
    width: 100%;
}

.inner-addon .input-icon {
  position: absolute;
  padding: 10px;
  pointer-events: none;
}

.right-addon .input-icon { right: 0px; top: 10px;}

.input-date-text {
    font-size: 14px;
    color: #252e2d;
    font-weight: bold;
}
label {
    padding-bottom: 2px!important;
}
button:focus {
    outline: none!important;
    border: none;
    background-color: transparent;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>