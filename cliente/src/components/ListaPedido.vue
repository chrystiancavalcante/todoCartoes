<template>
  <div class="overflow-auto">

        <b-breadcrumb>Lista de presentes</b-breadcrumb>

    <p class="mt-3" v-if="products">Página: {{ currentPage }}</p>

    <b-table
      v-if="products" 
      id="my-table"
      ref="selectableTable"
      selectable
      :items="items"
      :fields="fields"
      @row-selected="onRowSelected"
      responsive="sm"
      :per-page="perPage"
      :current-page="currentPage"
      small
    >  <template v-slot:cell(selecione)="{ rowSelected }">
        <template v-if="rowSelected">
          <span aria-hidden="true">&check;</span>
          <span class="sr-only">Selected</span>
        </template>
        <template v-else >
          <span aria-hidden="true">&nbsp;</span>
          <span class="sr-only">Not selected</span>
        </template>
      </template> 
      <template v-slot:cell(retirar)="{ rowSelected }">
        <p v-if="rowSelected"
         v-on:click="deleteItem(item)"
            size="sm"
            href="#">
            <span aria-hidden="true" class="fa fa-trash"></span>
        </p>
      </template>
      </b-table>
      <div class="text-center" v-else>
        <p>Ainda não têm nenhum produto na lista</p>
      </div>
    <b-pagination
      v-if="products"
      v-model="currentPage"
      :total-rows="rows"
      align="right"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
  </div>
</template>
<script>
import{ mapActions } from "vuex";
export default {
	name: "ListaPedido",
	props:{
		products: Object
	},
	data() {
		return {
			modes: ["multi", "single"],
			fields: ["", "retirar", "name", "price", "id"],
			perPage: 4,
			currentPage: 1,
			items: [],
		};
	},
	methods: {
		...mapActions(["getItems", "deleteItem"]),
    
		onRowSelected(items) {
			this.selected = items;
		},
		selectAllRows() {
			this.$refs.selectableTable.selectAllRows();
		},
	},
	computed: {
		rows() {
			return this.items.length;
		},
		Items() {
			return this.$store.state.products;
		}
	},
};
</script>
