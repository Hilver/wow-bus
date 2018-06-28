<template>
   <b-container fluid class="background">    
    <b-row align-v="center">
        <b-col md="5" offset-md="2" class="main-text d-none d-md-block">Podróżuj razem z nami<br>po całej Europie</b-col>
    </b-row>
    <b-row class="search-bar">
        <b-col>
            <search-bar></search-bar>
        </b-col>
    </b-row>
  </b-container>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .background {
        background: url('../../static/main-page-bgr.png');
        background-repeat: no-repeat;        
    }
    .main-text {
        font-size: 36px;
        color: #fff;
        text-align: left;
        margin-top: 17vh;
        margin-bottom: 13vh;   
    }
    .search-bar {
        margin-top: 4vh;
    }
</style>