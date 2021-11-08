<template>
	<div>
		<div class="row d-flex justify-content-center total-poke">
			<p class="poke-total">Total Pokémons: <span class="poke-total-number">{{pokemons.length}}</span></p>
		</div>
				
		<div class="pokemons">
			<div class="row d-flex justify-content-center poke-row">
				<div class="col-md-4 poke-item" v-for="(data, index) in pokemons" :key="index" @click="abrirModal(data.id)">
					<div class="poke-img">
						<img :src="data.img" :alt="data.name">
					</div>
					<span class="poke-id">N° {{data.id}}</span>
					<h3 class="poke-name">{{data.name}}</h3>
					<span class="abilities" :class="item" v-for="(item, index) in data.types" :key="index">{{item}}</span>
				</div>
			</div>
		</div>

		<!-- Modal -->
		<div class="modal" :class="{modal_ativo: modal}" @click="clickForaModal">
			<div class="container modal_container">
				<div class="modal_dados">
					<button  class="modal_fechar" @click="fecharModal">X</button>
					<div class="row">
					<div class="col-md-4">
						<div class="modal-img">
							<img :src="itens.img" :alt="itens.name">
						</div>
					</div>
					<div class="col-md-8">
						<h1 class="modal-title">{{itens.name}}</h1>
						<div class="row info">
							<div class="col-6">
								<h4>Height</h4>
								<p>{{itens.height}}</p>
							</div>
							<div class="col-6">
								<h4>Weight</h4>
								<p>{{itens.weight}}</p>
							</div>
							<div class="col-6">
								<h4>Base Experience</h4>
								<p>{{itens.base_experience}}</p>
							</div>
							<div class="col-6">
								<h4>Abilities</h4>
								<p v-for="(data, index) in itens.abilities" :key="index">{{data.ability.name}}</p>
							</div>
						</div>						
					</div>
				</div>
				</div>
			</div>
		
    </div>
	</div>
</template>

<script>
import './style.css';

export default {
	props:['pokemons'],
	data() {
		return{
			modal:false,
			itens: {}
		}
	},
	methods:{
		abrirModal(id) {
			this.modal = true;
			this.itens = this.pokemons[id-1];
			window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
		},
		fecharModal(){
			this.modal = false;
			this.itens = {};
		},
		clickForaModal({ currentTarget, target }) {
      if (currentTarget === target) this.modal = false;
    }
	},
	
}
</script>

<style>

</style>