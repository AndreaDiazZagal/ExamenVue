<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col>
          <b-navbar toggleable="lg" type="light" variant="light">
            <b-navbar-brand href="#">Examen</b-navbar-brand>
            <b-navbar-toggle target="navbar-nav"></b-navbar-toggle>
            <b-collapse id="navbar-nav" is-nav>
              <b-navbar-nav class="ml-auto">
                <b-nav-item href="#">Inicio</b-nav-item>
                <b-nav-item href="#">Paginacion</b-nav-item>
                <b-nav-item :to="{ name: 'formulario' }">Formulario</b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="3" md="4" lg="4">
          <b-sidebar
            z-index="-1"
            id="sidebar"
            shadow
            visible
            no-close-on-route-change
            no-header-close
          >
            <b-nav vertical class="pt-5">
              <b-nav-item
                ><b-link :to="{ name: 'inicio' }"> Opcion 1 </b-link>
              </b-nav-item>
              <b-nav-item
                ><b-link :to="{ name: 'main' }">Opcion 2</b-link>
              </b-nav-item>
              <b-nav-item
                ><b-link :to="{ name: 'tercero' }">Opcion 3</b-link>
              </b-nav-item>
            </b-nav>
          </b-sidebar>
        </b-col>
        <b-col>
          <router-view />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
          {
            text: "Inicio",
            active: true,
          },
          {
            text: "Paginación",
            to: { name: "paginacion" },
          },
        ],
    };
  },
  methods: {
    navegarSiguiente() {
      this.$router.push({ name: "formulario" });
    },
  },
};
</script>

<style>
</style>