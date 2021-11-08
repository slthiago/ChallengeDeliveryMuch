<template>
	<div class="versions">
		<div class="card-item" v-for="(data, index) in versions" :key="index">{{data.name}}</div>
	</div>
</template>

<script>
import './style.css';

export default {
	props: ['versions'],
	data() {
		return{
			
		}
	},
}
</script>

<style>

</style>