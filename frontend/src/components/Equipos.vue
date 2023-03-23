<template>
    <header class="w-100 bg-white py-4">
        <h1>EQUIPOS</h1>
        <ul class="nav justify-content-center bg-white">
            <li class="nav-item">
                <a class="nav-link" href="../index.html">Inicio</a>
            </li>
        </ul>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Nuevo Equipo
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
                            <label for="text">Nombre:</label>
                            <input type="text" class="form-control" id="email" v-model="name">
                          </div>
                          <div class="form-group">
                            <label for="text">Serial:</label>
                            <input type="text" class="form-control" id="email" v-model="serial">
                          </div>
                          <div class="mb-3">
                            <label for="disabledSelect" class="form-label" >Id Marca</label>
                            <select id="disabledSelect" class="form-select" >
                              <option>Disabled select</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label for="disabledSelect" class="form-label">Id Referencia</label>
                            <select id="disabledSelect" class="form-select">
                              <option>Disabled select</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <label for="text">Descripcion:</label>
                            <input type="text" class="form-control" id="email" v-model="name">
                          </div>
                          <div class="form-group">
                            <label for="text">Estado:</label>
                            <input type="text" class="form-control" id="email" v-model="name">
                          </div>
                    </div> 
                    
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button id="btnAdd" type="button" class="btn btn-primary" @click="postMarcas">Agregar</button>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <section class="container">

        <table class="table_">
            <thead>
                <tr>
                    <th id="first">ID</th>
                    <th id="first">NOMBRE</th>
                    <th id="first">SERIAL</th>
                    <th id="first">ID MARCA</th>
                    <th id="first">ID REFERENCIA</th>
                    <th id="first">DESCRIPCION</th>
                    <th id="first">ESTADO</th>
                    <th id="last">ELIMINAR</th>
                </tr>
            </thead>

            <tbody>
               <tr v-for="(equipo,index) in equipos" :key="index">
                <td>{{equipo._id}}</td>
                <td>{{equipo.name}}</td>
                <td>{{equipo.serial}}</td>
                <td>{{equipo.id_brand?._id}}</td>
                <td>{{equipo.id_reference?._id}}</td>
                <td>{{equipo.description}}</td>
                <td>{{equipo.status}}</td>
                <td><button @click="deleteMarca(marca._id)">Eliminar</button></td>
               </tr>
            </tbody>
        </table>
    </section>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import axios from "axios";

const equipos = ref([]);
const name = ref("")

onMounted(()=>{
     getEquipos();
     console.log(equipos.value);
})


async function getEquipos() {
    const res = await fetch("http://localhost:3000/api/v1/device//all")
    const data = await res.json();
    equipos.value = data;
}

async function postEquipos() {
    const res = await axios.post("http://localhost:3000/api/v1/device/create", {name: name.value}, {serial: serial.value}, {id_brand: id_brand?._id.value}, {id_reference: id_reference?._id.value}, {description: description.value},{status: status.value})
}

async function deleteMarca(id) {
    const res = await axios.delete(`http://localhost:3000/api/v1/brand/delete/${id}`)
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
    margin-top: 15px;
    height: 50vh;
    overflow: scroll;
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