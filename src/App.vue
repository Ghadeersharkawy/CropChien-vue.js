<template>
	<v-app>
		<v-app-bar app>
			<v-toolbar-title class="headline text-uppercase">
				<span>Crop</span>
				<span class="font-weight-light">Chien</span>
			</v-toolbar-title>
<v-spacer></v-spacer>
			<v-btn 
			class="ml-4"
			color="pink"
			dark
             @click="$router.go(-1)">
				Back
			</v-btn>
		</v-app-bar>

		<v-content>
			<router-view />
		</v-content>
	</v-app>
</template>

<script>
// import { Home } from './components/Home';
export default {
	name: 'App',
	data: () => ({
		//
	})
};
</script>
