<template>
  <div class="overflow-auto">
    <template>
        <b-breadcrumb>Lista de presentes</b-breadcrumb>
    </template>

    <p class="mt-3">Página: {{ currentPage }}</p>

    <b-table
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
        <template v-else>
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
    <b-pagination
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
	props:["products"],
	data() {
		return {
			item:[],
			modes: ["multi", "single"],
			fields: ["", "retirar", "name", "price", "id"],
			perPage: 4,
			currentPage: 1,
			items: [
				{"id":1,"price":64.33,"name":"Wine - Vidal Icewine Magnotta"},
				{"id":2,"price":16.03,"name":"Daves Island Stinger"},
				{"id":3,"price":56.09,"name":"Bread - Raisin Walnut Pull"},
				{"id":4,"price":51.23,"name":"Bar Mix - Pina Colada, 355 Ml"},
				{"id":5,"price":48.09,"name":"Bread Base - Toscano"},
				{"id":6,"price":19.38,"name":"Capon - Whole"},
				{"id":7,"price":28.72,"name":"Cookie Dough - Double"},
				{"id":8,"price":52.44,"name":"Beef - Short Ribs"},
				{"id":9,"price":73.27,"name":"Bread - Assorted Rolls"},

			],
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
<style scoped>

</style>