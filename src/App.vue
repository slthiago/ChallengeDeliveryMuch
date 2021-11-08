<template>
  <div id="app">
    <div class="top-bar text-center">
		<router-link to="/"><img src="./assets/img/logo.png" class="logo" alt="Challenge Delivery Much"></router-link>
	</div>
    <router-view/>

	<footer class="footer">
		<p>Orgulhosamente feito por <a href="https://thiagosantosweb.com/" target="_blank">Thiago Santos</a></p>
	</footer>
  </div>
</template>

<style scoped>
/*	TOPBAR	*/
.top-bar {
  background: #ffd435;
  height: 10vh;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 10px 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 99;
}

.logo {
  max-width: 160px;
  height: auto;
}

/*	FOOTER STYLES	*/
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffd435;
  padding: 20px 0;
  color: #f9f8f8;
  position: absolute;
  width: 100%;
  left: 0;
  top: 240vh;
  
}

.footer a {
  text-decoration: none;
  color: #2c6cb5;
}

</style>
