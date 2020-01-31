<template>
  <div>
    <div id="card-principal" class="container">
      <div class="card mb-3">
        <img
          class="card-img-top"
          src="https://bing.biturl.top/?resolution=1920&format=image&index=0&mkt=zh-CN"
          alt="Imagem de capa do card" />
        <img id="photo"
          src="../../assets/photo.jpg"
          class="rounded-circle mx-auto d-block"
          alt="photo" />
        <div class="info">
          <p>Nome do Cliente</p>
        </div>
        <div class="card-body">
          <div class="info2">
            <div class="container row">
              <div>
                <br />
              </div>
            </div>
            <h5 class="card-title">
              <span class="badge badge-info" style="font-size:20px;">{{ items.length }}</span> itens com o total de
              <span class="badge badge-info" style="font-size:20px;">{{ }}</span>
            </h5>
            <button class="btn btn-lg btn-danger" @click="makeToast('success')">QUERO ESTA LISTA!</button>
            <br />
            <br />
            <p class="card-text"
            >Você poderá dar um nome exclusivo e colocar uma foto dos seus depois.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
	name: "CardProfile",
	data(){
		return {};
	},
	methods: {	
		...mapActions(["getItems"]),
	
		makeToast(variant = null) {
			this.$bvToast.toast("Parabéns ! Ótima escolha", {
				title: "Lista adicionada com Sucesso!",
				variant: variant,
				solid: true
			});
		}
	},
	computed: {
		// eslint-disable-next-line vue/no-dupe-keys
		items() {
			return this.$store.state.products;
		}
	},
	// created() {
	// 	this.getItems("products");
	// }
};
</script>
<style scoped>
#input {
  align-items: center;
}
.info2 {
  text-align: center;
  margin: 10px;
}
.btn-danger {
  background-color: rgba(245, 58, 176, 0.76);
  border: none;
}
</style>
