<template>
  <div class="overflow-auto">
    <div id="slogan" class="col-md row">
      <strong>todo</strong>
      <p>cartões</p>
    </div>
    <AppView></AppView>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import AppView from "./components/AppView";

export default {
	name: "app",
	components: {
		AppView
	}
};
</script>
<style>
#slogan {
  padding-left: 45%;
  margin-top: 20px;
  margin-bottom: 20px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-size: 2em;
}
</style>
