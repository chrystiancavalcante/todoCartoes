import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import axios from "axios/dist/axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(Vuex);

const store = new Vuex.Store({
	state: {	
		products:[],
		item: []
	}, 
	mutations:	{
		deleteItem(state, payload){
			const { item } = payload;
			state.products.splice(state.products.indexOf(item), 1);
		},
		setItems(state, payload){
			const {products} = payload;
			state.products = products;
		},
		setItem(state, payload){
			const {product} = payload;
			state.product = product;
		}
	},
	actions: {
		async buscar(contex, payload){
			const item = payload;
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
			query(
			$name: String
			)
			{
			product(filtro: {name:$name})
			{
				id name price image
			}
			}
		`,
					variables: {
						name: item
					}
				}
			})
				.then(response => {
					const query = response.data;
					contex.commit("setItem", {product: query.data.product});
					// eslint-disable-next-line no-console
					console.log(this.product);
				})
				.catch(e => {
					alert("Algo deu errado!");
					// eslint-disable-next-line no-console
					console.log(e);
				});
		},
		async buscarPrMax(contex){
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
              query(
                $price: Float
                )
              {
              product(filtro: {price:$price})
                {
                  id
                  price 
                  name 
                  image
                }
              }
            `,
					variables: {
						price: this.prMax
					}
				}
			})
				.then(response => {
					const query = response.data;
					contex.commit("setItems", {product: query.data.products});
					// eslint-disable-next-line no-console
					console.log(this.prMax);
					// eslint-disable-next-line no-console
					console.log(this.product);
					this.prMax = "";
				})
				.catch(e => {
					alert("Algo deu errado!");
					// eslint-disable-next-line no-console
					console.log(e);
				});
		},
		async deleteItem(contex, payload){
			const item = payload;
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `
              mutation ($id: Int) 
              {
                deleteItem(id: $id)
              }         
          `,
					variables:  {
						id: item.id
					}
				}
			}).then(()=>{
				contex.commit("deleteItem", {item});
				//contex.dispatch("getItems");
				// eslint-disable-next-line no-console
				console.log(item);
				
			}).catch(e =>{
				// eslint-disable-next-line no-console
				console.log(e);
			});
		},
		async getItems( contex ){
			axios({
				url: "http://localhost:4000",
				method: "post",
				data: {
					query: `{
                products {
                  id
                  name
                  price
                  image
                }
              }`
				}
			}).then(response => {
				const query = response.data;
				contex.commit("setItems", {products: query.data.products});
			}).catch(e =>{
				// eslint-disable-next-line no-console
				console.log(e);
			});
		},
	}
});
Promise.all([
	store.dispatch("getItems","products")
]).then(()=>{
	store.dispatch("getItems");
});
new Vue({
	store,
	render: h => h(App),
}).$mount("#app");
