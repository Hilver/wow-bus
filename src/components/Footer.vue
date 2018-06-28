<template>
   <b-container fluid>
       <b-row>
           <b-col cols="12" md="2" class="offset-md-1 text-md-left text-sm-center">
               <div class="mt-5"><img class="footer-logo" src="../../static/logo-footer.png"></div>
               <div class="mt-2"><strong>Znajdź nas na ...</strong></div>
               <div class="social-wrap">
               <ul class="mt-2">
                   <li><a class="facebook-icon"></a></li>
                   <li><a class="twitter-icon"></a></li>
                   <li><a class="linkedin-icon"></a></li>
               </ul>
               </div>
               <div class="divider border mt-4 mb-4"></div>
               <div class="text-muted">Copyright PolskiBusik.eu 2018<br>All rights reserved</div>
           </b-col>
           <b-col cols="4" md="2" class="ml-auto text-md-left text-sm-center offset-md-1">
               <div class="mt-5">Firma</div>
               <div class="d-flex flex-column mt-3">
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
               </div>
           </b-col>
           <b-col cols="4" md="2" class="ml-auto text-md-left text-sm-center offset-md-1">
               <div class="mt-5">Firma</div>
               <div class="d-flex flex-column mt-3">
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
               </div>
           </b-col>
           <b-col cols="4" md="2" class="ml-auto text-md-left text-sm-center offset-md-1">
               <div class="mt-5">Firma</div>
               <div class="d-flex flex-column mt-3">
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
                   <div><a href="#">FAQ</a></div>
                   <div><a href="#">Newsletter</a></div>
               </div>
           </b-col>
       </b-row>
   </b-container>
</template>

<script>
    export default {

    }
</script>

<style scoped>
.footer-logo {
    width: 170px;
}
a {
color: #d3d3d3;
text-decoration: none;
}

ul li { 
list-style-type: none; 
border-bottom:none;
background: none; 
padding: 0px; 
line-height: 0!important;
display: inline-block;
}

ul {
    padding: 0px;
}

li a { 
margin:5px 3px 0px 0px !important; 
padding:0px; 
width:30px; 
height:30px; 
text-indent:-99999px;
float:left; 
} 

.social-wrap { 
margin: 0 auto; 
padding: 0px; 
text-decoration: none;
}

li a.facebook-icon {
background: transparent url('../../static/facebook-icon.png') no-repeat 0px 0px; 
-webkit-transition:All 0.3s ease-out; 
-moz-transition:All 0.3s ease-out; 
-o-transition:All 0.3s ease-out;
cursor: pointer;
}
li a.facebook-icon:hover { 
background: transparent url('../../static/facebook-icon.png') no-repeat 0px 0px;
transform: translateX(0px) rotate(360deg);
}

li a.twitter-icon {
background: transparent url('../../static/twitter-icon.png') no-repeat 0px 0px;
-webkit-transition:All 0.3s ease-out; 
-moz-transition:All 0.3s ease-out; 
-o-transition:All 0.3s ease-out;
cursor: pointer;
}
li a.twitter-icon:hover {
background: transparent url('../../static/twitter-icon.png') no-repeat 0px 0px;
transform: translateX(0px) rotate(360deg);
}

li a.linkedin-icon {
background: transparent url('../../static/linkedin-icon.png') no-repeat 0px 0px;
-webkit-transition:All 0.3s ease-out; 
-moz-transition:All 0.3s ease-out; 
-o-transition:All 0.3s ease-out;
cursor: pointer;
}
li a.linkedin-icon:hover {
background: transparent url('../../static/linkedin-icon.png') no-repeat 0px 0px;
transform: translateX(0px) rotate(360deg);
}

</style>