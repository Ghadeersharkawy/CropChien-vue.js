<template>
	<v-container>
		<v-layout align-center justify-center>
			<v-flex xs12 sm8 md4>
				<v-card>
              <v-toolbar dark color="pink">
                <v-toolbar-title>Add new dog</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
				  <v-img :src="dog.url" ></v-img>
                <v-form>
                  <v-text-field  name="comment" label="Comment" type="text"></v-text-field>
                  <v-text-field  name="info" label="Info"  type="text"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="pink" dark>POST A DOG</v-btn>
              </v-card-actions>
            </v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>
<script>
import axios from 'axios'
export default {
	name:"Post"
}
</script>