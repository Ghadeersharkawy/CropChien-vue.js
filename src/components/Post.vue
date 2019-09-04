<template>
	<v-container>
		<v-layout row wrap>
			<v-flex>
				<v-card>
					<v-card-title>
						<h2>Add New Dog</h2>
					</v-card-title>
				</v-card>

				<form>
					<v-text-field
						v-validate="'required'"
						
						:counter="10"
						:error-messages="errors.collect('comment')"
						label="Comment"
						data-vv-name="comment"
						required
					></v-text-field>
					<v-text-field
						v-validate="'required'"
						
						:counter="10"
						:error-messages="errors.collect('info')"
						label="Info"
						data-vv-name="info"
						required
					></v-text-field>

					<v-btn @click="submit">submit</v-btn>
					<v-btn @click="clear">clear</v-btn>
				</form>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	name:'post'
};
</script>
