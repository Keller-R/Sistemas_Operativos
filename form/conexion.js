const express = require('express');
const mysql = require('mysql');

const app = express();

let conexion = mysql.createConnection({
    host: 'localhost',
    database: 'demo1',
    user: 'root',
    password: 'admin',
});

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    
    res.render("registro");
});



app.post("/validar", function (req, res) {
    const datos = req.body;
    let career = datos.career;
    let nom = datos.nom;
    let dni = datos.dni;
    let fecha = datos.fecha;
    let correo = datos.correo;
    let pass = datos.pass;

    let buscar = "select * from persona WHERE dni = " + dni + ";";

    conexion.query(buscar, function (err, row) {
        if (err) {
            throw err;
        } else {
            if (row.legth > 0) {
                console.log("El DNI ya existe");
            } else {
                let registrar = "INSERT INTO persona (carrera, nombres, dni, fecha, correo, contrasenia) VALUES ('" + career + "', '" + nom + "', '" + dni + "', '" + fecha + "', '" + correo + "', '" + pass + "');";

                conexion.query(registrar, function (err) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("Datos almacenados correctamente");
                    }
                })
            }
        }
    });

});

app.listen(3000, function () {
    console.log("Servidor creado en el puerto: 3000");
});