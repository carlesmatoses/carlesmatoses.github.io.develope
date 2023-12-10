import React from "react";
import logo from "../../assets/logogris.png"
import logo2 from "../../assets/github-logo-size.png"
import { Link } from 'react-router-dom';
import { Col, Container, Image, Row } from "react-bootstrap";


const diccionario_proyectos = [
    {
        nombre: "Color Management - Introducción| Ep1 | ES |",
        description: `Me gustaría compartir algunos de los conocimientos que
        he adquirido investigando la gestión de color. Creo que pueden ser 
        muy útiles para elegir los métodos mas ajustados a los diferentes proyectos.
        Se trata de un video un poco experimental. Todavía estoy buscando el 
        formato más cómodo y fácil de entender.`,
        image: "https://img.youtube.com/vi/xF_GKddmFJY/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=xF_GKddmFJY",
    },
    {
        nombre: "Color Management - ¿Qué es OpenColorIO/OCIO? | Ep2 | ES |",
        description: `Este es un pequeño resumen de como funcionan las 
        configuraciones ocio. Presentan una gran versatilidad y las considero 
        una herramienta muy útil. Es importante que los usuarios entiendan como 
        funcionan para poder modificarlas y obtener la máxima customización para 
        proyectos específicos.`,
        image: "https://img.youtube.com/vi/3vSTqKgC5Z4/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=3vSTqKgC5Z4",
    },
    {
        nombre: "Color Management - ¿Qué es OpenColorIO/OCIO? | Ep2 | ES |",
        description: `He decidido mostrar de forma gráfica el comportamiento 
        de la configuración que emplea blender. 
        Al mismo tiempo, también señalo algunas decisiones 
        que me molestan un poco de la forma que incorpora blender 
        la configuración en su software.`,
        image: "https://img.youtube.com/vi/iIL-srRsbbU/hqdefault.jpg",
        url: "https://www.youtube.com/watch?v=iIL-srRsbbU",
    },
];


function Proyecto_plantilla({ proyectos }) {
    return (
        <Container>
            {proyectos.map((proyecto, index) => (

                <Row className="p-3 row-cols-1 row-cols-sm-2 justify-content-md-center" key={index}>
                    <Col lg={3} >
                        <img src={proyecto.image} alt={index} style={{ width: "250px", height: "140px", objectFit: "cover" }} />
                    </Col>
                    <Col lg={5}>
                        <Row><h3>{proyecto.nombre}</h3></Row>
                        <Row><p>{proyecto.description}</p></Row>
                    </Col>

                </Row>

            ))}
        </Container >
    );
}


function Proyectos() {


    return (

        <Container>
            <Proyecto_plantilla proyectos={diccionario_proyectos} />
        </Container>
    )
}

export default Proyectos