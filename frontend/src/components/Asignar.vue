<template>
    <header class="w-100 bg-white py-4">
        <h1>ASIGNAR EQUIPOS</h1>
        <ul class="nav justify-content-center bg-white">
            <li class="nav-item">
                <a class="nav-link" href="../index.html">Inicio</a>
            </li>
        </ul>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Asignar Equipos
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Agregar Nuevo Equipo</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="text">ID EMPLEADO:</label>
                            <input type="text" class="form-control" id="email">
                            <label for="text">ID EQUIPO:</label>
                            <input type="text" class="form-control" id="email">
                            <label for="text">FECHA:</label>
                            <input type="date" class="form-control" id="email">
                            <label for="text">OBSERVACION:</label>
                            <input type="text" class="form-control" id="email">
                          </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button type="button" class="btn btn-primary">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import { onMounted, ref } from 'vue';
import axios from "axios";

const asignar = ref([]);
const name = ref("")

async function postAsignar() {
    const res = await axios.post("http://localhost:3000/api/v1/device_employees/create", {name: name.value})
}

</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Poppins:200,300,400,500,600,700,800,900&display=swap');


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body,
html {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: url(../img/peter-bo-faMPQuSe4Wo-unsplash.jpg) no-repeat center center;
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100%;
    overflow: hidden;

}

button {
    border: none;
    background: none;
    cursor: pointer;
    border-radius: 15px;
    page-break-after: 15 20px;
    background-image: linear-gradient(to right (#b47474), (#f55d06));
    color: #080808;
    font-size: 18px;
    font-weight: bold;
    box-shadow: 3px 3px rgb(0, 0, 0, 0.4);
}

button:hover {
    box-shadow: 6px 6px rgb(0, 0, 0, 0.8);
}

.container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 30px;
    align-items: center;
}

.table_ {
    background-color: #FAFAFA10;
    backdrop-filter: blur(0.7rem);
    text-align: left;
    border-collapse: collapse;
    min-width: 600px;
    border: 2px solid #fafafa10;
    border-radius: 10px;
    color: #000;
    padding: 20px;

}

#first {
    border-radius: 10px 0 0 0;
}

#last {
    border-radius: 0 10px 0 0;

}

.table_ th,
td {
    padding: 20px;
}

td img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.table_ thead {
    background-color: #161a42;
    background-image: linear-gradient(160deg, #161a42 0%, #5462ca 100%);
    border-bottom: solid 5px rgba(255, 255, 255, .5);
}


.table_ tr:nth-child(even) {
    background: rgba(0, 0, 0, .1);
}

.table_ tr:hover td {

    background: rgba(255, 255, 255, .3);
}
</style>