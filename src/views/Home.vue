<template>
  <div class="home">
		<div class="header">
			<h1 class="text-header">PokePlay</h1>
		</div>

		<main class="main-content">
			<div class="container">
				<div class="text-main">
					<h2 class="title-main">Gerações de Games Pokémons</h2>
					<span class="sub-title-main">Escolha uma  geração  para saber mais detalhes</span>
				</div>

				<section class="cards">
					<div class="row d-flex justify-content-center">
						<div class="col-md-4 card-item" v-for="(data, index) in generations" :key="index">
							<router-link :to="`game-details/${data.name}`">
								<div class="img" :class="data.name"></div>
								<h2 class="card-title">{{data.name}}</h2>
								<span class="card-year">1996</span>
							</router-link>
						</div>
					</div>
				</section>
			</div>
		</main>
		
  </div>
	
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  components: {
  },
	data() {
		return{
			generations: [],
		}
	},
	created(){
		this.getGenerations();
	},
	methods:{
		getGenerations(){
			axios
				.get("https://pokeapi.co/api/v2/generation/")
				.then((response) => {
					this.generations = response.data.results	
				})
				.catch(error => console.log(error))		
				
		}
	}

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Press+Start+2P&display=swap");

body {
  font-family: "DM Sans", sans-serif;
  background: #f9f8f8;
}

a {
  text-decoration: none;
  display: inline;
}

.header {
  position: relative;
  height: 55vh;
  background: url(../assets/img/banner.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}
.header::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 1;
}

.text-header {
  font-family: "Press Start 2P", cursive;
  color: #ffffff;
  z-index: 10;
}

/* MAIN STYLES */
.main-content {
  padding: 60px 0;
}

.text-main {
  text-align: center;
}

.title-main {
  color: #2c6cb5;
}

.sub-title-main {
  color: #a4a4a4;
  font-weight: 500;
}

/* CARDS */
.cards {
  padding-top: 40px;
}

.card-item {
  border: 2px solid #2c6cb5;
  max-width: 220px;
  text-align: center;
  padding: 8px;
  border-radius: 20px;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0 15px 15px 0;
  cursor: pointer;
	
}

.card-item .img {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
  max-width: 190px;
  height: 300px;
	border-radius: 20px;
}

.generation-i{
	background:url(../assets/img/ger-01.png);
}
.generation-ii{
	background:url(../assets/img/ger-02.png);
}
.generation-iii{
	background:url(../assets/img/ger-03.png);
}
.generation-iv{
	background:url(../assets/img/ger-04.png);
}
.generation-v{
	background:url(../assets/img/ger-05.png);
}
.generation-vi{
	background:url(../assets/img/ger-06.png);
}
.generation-vii{
	background:url(../assets/img/ger-07.png);
}
.generation-viii{
	background:url(../assets/img/ger-08.png);
}
.card-title {
  padding-top: 10px;
  color: #2c6cb5;
  font-size: 1.5em;
}

.card-year {
  color: #ffd435;
  font-weight: bold;
}
</style>
