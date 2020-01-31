<template>
  <div>
    <nav class="navbar navbar-dark bg-primary">
      <div class="row container-fluid" id="main">
        <div class="col-sm">
          <h6>
            <span class="fa fa-angle-double-left"></span> VOLTAR PARA CATEGORIA
          </h6>
        </div>
        <div class="col-sm">
          <h6>LOGOTIPO DO CLIENTE</h6>
        </div>
        <div class="col-sm">
          <h6>LOGIN | CADASTRO</h6>
        </div>
      </div>
    </nav>
    <nav>
      <div id="etapas">
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Etapa 1
              <br />Descrição da etapa 1
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Etapa 2
              <br />Descrição da etapa 2
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Etapa 3
              <br />Descrição da etapa 3
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Etapa 4
              <br />Descrição da etapa 4
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
export default {
	name: "Navs"
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
</style>
