<template>

    <a name="about"></a>
    <div class="intro-header">
        <div class="container">

            <div class="row">
                <div class="col-lg-12">
                    <div class="intro-message">
                        <h1>Dispositivos</h1>
                        <h3>Registros</h3>
                        <hr class="intro-divider">
                        <ul class="list-inline intro-social-buttons">
                            <li>
                                <router-link to="marcas"  class="network-name">Marcas</router-link>
                        
                            </li>
                            <li>
                                <router-link to="referencias"  class="network-name">Referencias</router-link>
                            </li>
                            <li>
                                <router-link to="empleados"  class="network-name">Empleados</router-link>
                            </li>
                            <li>
                                <router-link to="equipos"  class="network-name">Equipos</router-link>
                            </li>
                            <li>
                                <router-link to="asignar"  class="network-name">Asignar Equipos</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>

</script>
<style>
    .list-inline{
        padding: auto;
        margin: 20px;
    }
    li{
        margin: 20px;
    }
</style>