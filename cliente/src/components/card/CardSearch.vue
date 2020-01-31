<template>
  <div class="col-md-4">
    <b-card-group deck class="mb-3">
      <b-card border-variant="light" header="Pesquisar por" class="text-center">
        <b-card-text>
          <div>
            <label>Nome</label>
            <b-input-group append>
              <b-form-input
                type="text"
                v-model="item"
                v-on:keyup="buscar"
                placeholder="Digite o Nome do Produto"
              ></b-form-input>
              <b-button variant="btn btn-info" v-on:click="buscar()">
                <span class="fa fa-search"></span>
              </b-button>
            </b-input-group>
            <br />
            <label>Preço</label>
            <b-input-group prepend="R$" append=".00">
			<b-form-input 
			v-model.number="prMax" 
			v-on:keyup="buscarPrMax"
			placeholder="Digite o valor"
			></b-form-input>
            </b-input-group>
            <br />
            <b-button class="form-control" variant="btn btn-info" v-on:click="buscarPrMax()">
              <span class="fa fa-search"></span>
            </b-button>
          </div>
        </b-card-text>
      </b-card>
    </b-card-group>
  </div>
</template>

<script>
import axios from "axios/dist/axios";
export default {
	name: "CardSearch",
	//props: ["items"],
	data() {
		return {item:"", prMax:""};
	},
	methods: {
		buscar() {
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
						name: this.item
					}
				}
			})
				.then(response => {
					const query = response.data;
					this.product = query.data.product;
					// eslint-disable-next-line no-console
					console.log(this.item);
					// eslint-disable-next-line no-console
					console.log(this.product);
					//this.item = "";
				})
				.catch(e => {
					alert("Algo deu errado!");
					// eslint-disable-next-line no-console
					console.log(e);
				});
		},
		buscarPrMax() {
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
					this.product = query.data.product;
					// eslint-disable-next-line no-console
					console.log(this.prMax);
					// eslint-disable-next-line no-console
					console.log(this.product);
				})
				.catch(e => {
					alert("Algo deu errado!");
					// eslint-disable-next-line no-console
					console.log(e);
				});
			//this.prMax = "";

		},
	},
	computed:	{
		items(){
			return this.$store.state.product;
		}
	}
};
</script>

<style>
</style>
