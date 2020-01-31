<template>
  <div>
    <b-container>
      <b-row cols="4">
        <b-card v-for="item in items" v-bind:key="item.id" v-bind:img-src="item.image" img-alt="Image"
          img-top v-bind:title="item.name" tag="article" style="max-width: 20rem;"  class="mb-2 card-principal"
        > <div class="col-md text-center">
            <b-card-text>
              <p>Unidade 1</p>
            </b-card-text>
          </div>
          <template v-slot:footer>
            <em class="row">
              <b-button href="#" variant="info" v-on:click="deleteItem(item)" @click="makeToast()"
              > <span class="fa fa-trash"></span>
              </b-button>
              <div class="col-md text-center">
                <b-card-text>
                  <strong>R$ {{item.price}}</strong>
                </b-card-text>
              </div>
            </em>
          </template>
        </b-card>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
	name: "CardProduct",
	data() {
		return {};
	},
	methods: {
		...mapActions(["getItems", "deleteItem"]),
    
		makeToast(variant = "info") {
			this.$bvToast.toast("Produto excluido com sucesso !", {
				title: "Aviso",
				variant:variant,
				solid: true
			});
		},
	},
	computed: {
		items() {
			return this.$store.state.products;
		}
	},
};
</script>

<style scoped>
strong {
  font-size: 20px;
}
.card-principal{
    box-shadow: 0 0 10px #666;
    border-radius: 5px;
    padding: 5px;
}
</style>
