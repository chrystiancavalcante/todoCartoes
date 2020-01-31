<template>
  <div>
    <Navs></Navs>
    <CardProfile></CardProfile>
    <div class="col-md text-right row">
      <CardSearch v-on:bucar="buscar" v-on:buscarPrMax="buscarPrMax"></CardSearch>
      <div class="col-md-8">
      <ListaPedido></ListaPedido>
      </div>
    </div>
    <div id="products" class="container" style="height: 930px; overflow-y: scroll;">
      <CardList></CardList>
    </div>
    <br/>
    <div class="container text-center">
      <button type="button" class="btn btn-light form-control">Voltar</button>
    </div>
  </div>
</template>

<script>
import CardProfile from "./card/CardProfile";
import CardSearch from "./card/CardSearch";
import ListaPedido from "./ListaPedido";
import CardList from "./card/CardList";
import Navs from "./Navs";
import { mapActions } from "vuex";
export default {
	name: "AppView",
	props:["items"],
	components: {
		CardProfile,
		CardSearch,
		ListaPedido,
		CardList,
		Navs
	},
	methods:{
		...mapActions(["buscar", "buscarPrMax","getItems"]),
	}
};
</script>

<style>
#main {
  text-align: center;
  color: aliceblue;
  height: 70px;
}
#etapas {
  color: rgb(131, 129, 129);
  height: 100px;
  background-color: rgb(223, 219, 219);
}
#etapas a p {
  color: darkgray;
  margin-top: 30px;
  margin-bottom: 2px;
}
#card-principal {
  margin-top: 30px;
}
#card-principal img {
  height: 200px;
}
#photo {
  position: relative;
  left: 1%;
  top: -100px;
  z-index: 1;
  border: solid 6px white;
}
.info {
  text-align: center;
  color: cornflowerblue;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 50px;
}
#products {
  margin-top: 50px;
}
</style>
