<template>
	<div class="moves">
		<div class="card-item" v-for="(data, index) in moves" :key="index">{{data.name}}</div>
	</div>
</template>

<script>
import './style.css';

export default {
	props: ['moves'],
	data() {
		return{
			
		}
	},
}
</script>

<style>

</style>