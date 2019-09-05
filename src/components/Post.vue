<template>
	<v-container grid-list-xs>
		<v-layout row wrap>
			<v-flex xs12>
				<!-- loading start -->
				<div class="loading">
					<v-progress-circular
						v-if="loading"
						:size="40"
						:width="10"
						:rotate="180"
						indeterminate
						color="pink"
					></v-progress-circular>
				</div>
				<!-- End of loading -->
				<!-- Fetch random dog Image -->
				<div id="img-holder">
					<img :src="this.imgUrl" class="postImg" />
				</div>

				<!-- End of Fetch random dog Image -->
				<!-- comment and info inputs -->
				<v-container fluid style="min-height: 0" grid-list-xs>
					<v-layout row wrap>
						<v-flex xs12>
							<v-text-field
								v-model="comment"
								name="title"
								label="Describe me"
								color="pink"
								id="title"
							/>
							<v-text-field
								v-model="author"
								name="author"
								label="Author"
								color="pink"
								hint="your name"
								id="author"
							/>
							<v-btn color="pink" dark @click="postDogs()"
								>POST A DOG</v-btn
							>
						</v-flex>
					</v-layout>
				</v-container>
				<!-- End of comment and info inputs -->
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import axios from 'axios';
import postDog from './mixins/postDog';

export default {
	name: 'Post',
	data() {
		return {
			imgUrl: null,
			loading: true,
			author: '',
			comment: ''
		};
	},
	methods: {
		postDogs() {
			postDog(this.imgUrl, this.author, this.comment);
		}
	},
	mounted() {
		axios.get('https://dog.ceo/api/breeds/image/random').then(response => {
			//console.log(response.status);     200
			//console.log(response.data.status); success
			if (response.status) {
				this.imgUrl = response.data.message;
				this.loading = false;
			} else {
				//console.log('Error getting Image');
			}
		});
	}
};
</script>
<style scoped>
.loading {
	text-align: center;
	margin: auto;
}
#img-holder {
	margin: 20px auto;
}
.postImg {
	width: auto;
	height: auto;
	max-width: 100%;
}
</style>
