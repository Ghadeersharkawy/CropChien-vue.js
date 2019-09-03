<template>
	<v-container>
		<v-layout row wrap>
			<v-flex> 
				<v-card md-10 xs-12 mx-auto>
					<v-img
					:src="dog.url"
					aspect-ratio="2.5">

					</v-img>
					<v-card-title>
                        <div>
                            <h3>{{dog.comment}}</h3>
                        </div>
                        <div>{{dog.info}}</div>
                    </v-card-title>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
export default {
	name: 'Details',
	props:{
		dog: {
			type:Object,
			required:true
		}
	}
};
</script>
