<template>
	<v-container grid-list-lg>
		<v-layout row>
			<v-flex md-10 xs-12 mx-auto>
				<v-layout col>
					<v-card>
						<v-img :src="dog.url" aspect-ratio="1"> </v-img>
						<v-card-title>
							<div>
								<h3 class="comment">{{ dog.comment }}</h3>
							</div>
							<div>
								<h5>{{ dog.info }}</h5>
							</div>
						</v-card-title>
					</v-card>
				</v-layout>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	name: 'Details',
	props: {
		dog: {
			type: Object,
			required: true
		}
	}
};
</script>
<style scoped></style>
