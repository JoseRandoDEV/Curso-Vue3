<template>
  <section>
    <h3>Añadir Profesor</h3>
    <div><label>Nombre:</label> <input type="text" v-model="teacher.teachername" /></div>
    <div><label>Apellido:</label> <input type="text" v-model="teacher.surname" /></div>
    <div><label>DNI / NIF</label> <input type="text" v-model="teacher.dni" /></div>

    <div>
      <label>Materias:</label> <input type="text" v-model="subject" />
      <button @click="handleSubject()">Agregar</button>
    </div>

    <div>
      <ul>
        <li v-for="(elemento, index) in teacher.subjects" v-bind:key="index">
          {{ elemento }}
        </li>
      </ul>
    </div>

    <input type="checkbox" v-model="teacher.doc" />Documentacion Entregada
    <button @click="handleAddTeacher()">Agregar</button>
  </section>

  <section>
    <h3>Listado de Profesores</h3>
    <table>
      <tr>
        <th>Nombre:</th>
        <th>Apellido:</th>
        <th>DNI / NIF</th>
        <th>Listado de Materias:</th>
        <th>Documentacion Entregada</th>
      </tr>
      <tr v-for="elemento in teachers" :key="elemento.dni">
        <th>{{ elemento.teachername }}</th>
        <th>{{ elemento.surname }}</th>
        <th>{{ elemento.dni }}</th>
        <th>
          <ul>
            <li v-for="(item, index) in elemento.subjects" :key="index">{{ item }}</li>
          </ul>
        </th>

        <th v-if="elemento.doc">Entregada</th>
        <th v-else>No Entregada</th>
      </tr>
    </table>
  </section>
</template>

<script lang="ts" setup>
import { Ref, ref } from "vue";

interface ITeacher {
  teachername: string;
  surname: string; // solo si estamos en TypeScript
  dni: string; //    si estamos en JavaScript se omite la interface
  subjects: Array<string>;
  doc: boolean;
}

let teacher: Ref<ITeacher> = ref({
  teachername: "", //Nombre del profesor
  surname: "", // Apellido del profesor
  dni: "", // DNI del profesor
  subjects: [], // Asignaturas en un arraiz
  doc: false, // si ha entregado o no la documentacion
});

let teachers: Ref<Array<ITeacher>> = ref([]);

let subject: Ref<string> = ref(""); // cuando pulsemos agregar se añade la info a este subjet que es un arraiz

const handleSubject = () => {
  teacher.value.subjects.push(subject.value);
  subject.value = ""; // con esta linea deja em campo vacio luego de agregar el elemento
};

const handleAddTeacher = () => {
  teachers.value.push({
    teachername: teacher.value.teachername,
    surname: teacher.value.surname,
    dni: teacher.value.dni,
    subjects: teacher.value.subjects,
    doc: teacher.value.doc,
  }),
    (teacher.value.teachername = ""),
    (teacher.value.surname = ""),
    (teacher.value.dni = ""),
    (teacher.value.subjects = []),
    (teacher.value.doc = false);
};
</script>

<style scoped></style>
