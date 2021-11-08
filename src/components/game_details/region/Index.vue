<template>
	<div class="regions">
		<table class="table text-center">
			<thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Location</th>
					<th scope="col">Area</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(data, index) in regions" :key="index">
					<th scope="row">{{data.id}}</th>
					<td>{{data.location}}</td>
					<td>{{data.area}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import './style.css';

export default {
	props: ['regions'],
	data() {
		return{
			
		}
	},
}
</script>

<style>

</style>