<template>
  <div class="home">
		<div class="header-game-details">
			<h1 class="text-header title-header-game-details">{{$route.name}}</h1>
		</div>
		<main class="main-game-details">
			<div class="details-wrap">
				<div class="container">
					<div class="index">
						<li @click="ativaPokemon" :class="{ativo: pokemonAtivo}">Pokekemons</li>
						<li @click="ativaRegion" :class="{ativo: regionAtivo}">Region</li>
						<li @click="ativaMoves" :class="{ativo: movesAtivo}">Moves</li>
						<li @click="ativaVersion" :class="{ativo: versionsAtivo}">Version</li>
					</div>
					<div v-if="pokemonAtivo"><Pokemons :pokemons="pokemons"></Pokemons></div>
					<div v-if="regionAtivo"><Region :regions="regions"></Region></div>
					<div v-if="movesAtivo"><Moves :moves="moves"></Moves></div>
					<div v-if="versionsAtivo"><Versions :versions="versions"></Versions></div>
				</div>
			</div>
		</main>	
  </div>
	
</template>

<script>
import axios from 'axios'
import Pokemons from '../components/game_details/pokemon/Index.vue'
import Region from '../components/game_details/region/Index.vue'
import Moves from '../components/game_details/moves/Index.vue'
import Versions from '../components/game_details/versions/Index.vue'

export default {
  name: 'GameDetails',
  components: {
		Pokemons,
		Region,
		Moves,
		Versions
  },
	data() {
		return{
			generation: {
				main_region: {
					name: ""
				}
      },
			generations: "",
			pokemonSpecies: [],
			pokemons: [],
			regions: [],
			locations: {},
			moves: [],
			versions: {},
			pokemonAtivo: true,
			regionAtivo: false,
			movesAtivo: false,
			versionsAtivo: false
		}
	},
	created(){
		this.getGenerations();
	},
	methods:{
		getGenerations(){
			axios
				.get("https://pokeapi.co/api/v2/generation/" + this.$route.name)
				.then((response) => {
					this.generation = response.data
					this.pokemonSpecies = response.data.pokemon_species
					this.generations = response.data.name
					this.moves = response.data.moves
					this.versions = response.data.version_groups
					
					this.getRegions();
					this.getPokemons();
				})
				.catch(error => console.log(error))
				
		},
		getPokemons(){
			this.pokemonSpecies.forEach(pokemon => {
				axios
					.get("https://pokeapi.co/api/v2/pokemon/" + pokemon.name)
					.then((response) => {
						this.pokemons.push({
							id: response.data.id,
							name: response.data.name,
							img: response.data.sprites.front_default,
							types: response.data.types.map(c => c.type.name),
							weight: response.data.weight,
							height: response.data.height,
							base_experience: response.data.base_experience,
							abilities: response.data.abilities
						})
						this.pokemons.sort((a, b) => a.id - b.id)
					})
					.catch(error => console.log(error))
			});	
		},
		getRegions() {
        axios
          .get("https://pokeapi.co/api/v2/region/" + this.generation.main_region.name)
          .then((response) => {
            this.locations = response.data.locations
						
            response.data.locations.forEach(location => {
              axios
                .get("https://pokeapi.co/api/v2/location/" + location.name)
                .then((response) => {
									
									var areas = []
                  response.data.areas.forEach(area => {
                    areas.push(area.name)
                  });

                  this.regions.push({
                    id: response.data.id,
                    location: response.data.name,
                    area: areas.join(' | ')
                  })

                  
                })
            });
          })
          .catch((error) => {
            console.log(error);
          });
    },
		ativaPokemon(){
			this.pokemonAtivo = true;
			this.regionAtivo = false;
			this.movesAtivo = false;
			this.versionsAtivo = false;
		},
		ativaRegion(){
			this.regionAtivo = true;
			this.pokemonAtivo = false;
			this.movesAtivo = false;
			this.versionsAtivo = false;
		},
		ativaMoves(){
			this.movesAtivo = true;
			this.pokemonAtivo = false;
			this.regionAtivo = false;
			this.versionsAtivo = false;
		},
		ativaVersion(){
			this.versionsAtivo = true;
			this.movesAtivo = false;
			this.pokemonAtivo = false;
			this.regionAtivo = false;
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

li {
  list-style: none;
}

/* GAME DETAILS STYLES */
.header-game-details {
  position: relative;
  background: #2c6cb5;
  text-align: center;
  height: 45vh;
  margin-top: 10vh;
}

.title-header-game-details {
  padding-top: 10vh;
	text-transform: uppercase;
}

.main-game-details {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
}

.details-wrap {
  background: #f9f8f8;
  position: absolute;
  top: 40vh;
  width: 85vw;
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.1), 0px 4px 10px rgba(0, 0, 0, 0.2);
  padding: 60px 40px;
  border-radius: 20px;
}

.index {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding-bottom: 20px;
  border-bottom: 1px solid #2c6cb5;
}

.index li {
  background: #2c6cb5;
  color: #ffd435;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.3em;
  font-weight: 500;
  cursor: pointer;
  margin: 10px;
}

.ativo {
  background: #ffd435!important;
  color: #2c6cb5!important;
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
  top: 200vh;
}

.footer a {
  text-decoration: none;
  color: #2c6cb5;
}


</style>
