<template>
    <b-navbar toggleable="md" type="dark">
  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
  <b-navbar-brand to="#"><img class="header-logo" src="../../static/wow-bus-logo.png"></b-navbar-brand>
  <b-collapse is-nav id="nav_collapse">
    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">
      <b-nav-item to="/">Strona główna</b-nav-item>
      <b-nav-item to="#">Szukaj połączenia</b-nav-item>
      <b-nav-item to="#">FAQ</b-nav-item>
      <b-nav-item to="#">O nas</b-nav-item>
      <b-nav-item to="#">Kontakt</b-nav-item>
      <b-nav-item class="horizontal-divider"></b-nav-item>
      <b-nav-item to="/"><img class="flag" src="../../static/poland-flag.png">PL</b-nav-item>
      <b-nav-item to="#"><img class="flag" src="../../static/britain-flag.png">GB</b-nav-item>
      <b-nav-item to="#"><img class="flag" src="../../static/germany-flag.png">DE</b-nav-item>
    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
    export default {

    }
</script>

<style scoped>

.navbar {
    background-color: #00b97e;
}

.header-logo {
    height: 35px;
}

.nav-link {
    
    font-size: 14px;
    font-weight: bold;    
}

.horizontal-divider {
    border-left: 1px solid #22c390;
    margin-left: 15px;
}

.flag {
    margin-right: 5px;
}

</style>