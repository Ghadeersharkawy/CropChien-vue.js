<template>
	<v-container>
		<v-layout row wrap>
			<v-flex
				v-for="(dog, index) in dogs"
				:key="dog.id"
				xs12
				md4
				xl3
				pa-2
			>
				<v-card
					@click="
						$router.push({
							name: 'details',
							params: { id: dog.id, dog: dogs[index] }
						})
					"
				>
					<v-img :src="dog.url" aspect-ratio="1" min-height="200">
					</v-img>
					<v-card-title>
						<div>
							<h3 class="comment">{{ dog.comment }}</h3>
						</div>
						<div>{{ dog.info }}</div>
					</v-card-title>
				</v-card>
			
			</v-flex>
		</v-layout>
			<v-btn
					absolute
					dark
					fab
					bottom
					right
					class="mb-12"
					color="pink"
					@click="$router.push({ name: 'post' })"
				>
					<v-icon>mdi-plus</v-icon>
				</v-btn>
	</v-container>
</template>

<script>
import firebase from '../firebaseConfig'
export default {
	name: 'Home',
	data() {
		return {
			dogs: [
				{
					id: 0,
					url:
						'https://images.dog.ceo/breeds/germanshepherd/n02106662_13904.jpg',
					comment: 'Dog resting',
					info: 'Posted by Eder on Friday'
				},
				{
					id: 1,
					url:
						'https://images.dog.ceo/breeds/setter-gordon/n02101006_4491.jpg',
					comment: 'Tongue dog',
					info: 'Posted by Naye on Tuesday'
				},
				{
					id: 2,
					url:
						'https://images.dog.ceo/breeds/terrier-australian/n02096294_1429.jpg',
					comment: 'Terrier Australian dog',
					info: 'Posted by Eder on Monday'
				},
				{
					id: 3,
					url:
						'https://images.dog.ceo/breeds/dachshund/dog-495133_640.jpg',
					comment: 'Sad dog',
					info: 'Posted by Eder on Monday'
				}
			]
		};
	},
	mounted(){
		firebase.db.collection('dogs').orderBy('created_at').onSnapshot((snapShot) => {
            //this.dogs=[];
            snapShot.forEach((dog)  => {
                this.dogs.push({
                    id:dog.id,
                    url:dog.data().imgUrl,
                    comment:dog.data().comment,
                    info:dog.data().info
                })
            });
        });
    }
}
</script>
<style>
.comment {
	min-width: 200px;
}
</style>
