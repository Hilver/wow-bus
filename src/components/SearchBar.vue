<template>
    <b-container fluid>
        <b-row class="mb-3">
            <b-col lg="10" cols="12" class="background-white-transparent">
                <search-form></search-form>
            </b-col>
            <b-col lg="2" cols="12" class="p-0 m-0">
                <b-btn class="search-button"><img src="../../static/search-icon.png"> Szukaj połączenia</b-btn>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import SearchForm from './SearchForm'
    export default {
      components: {SearchForm}
    }
</script>

<style scoped>
.background-white-transparent {
    background: rgba(255, 255, 255, 0.863);    
}
.search-button {
    width: 100%;
    height: 100%;
    background-color: #00b97e;
    border: none;
    border-radius: 0px;
    margin: 0px;
    padding: 0px;
    outline: none;
}
</style>