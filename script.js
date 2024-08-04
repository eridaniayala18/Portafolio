<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portafolio Eridania Ayala</title>
    <!-- Bootstrap CSS -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-brand" href="#">Eridania Ayala</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="#perfil">Perfil</a></li>
                <li class="nav-item"><a class="nav-link" href="#proyectos">Proyectos</a></li>
                <li class="nav-item"><a class="nav-link" href="#videos">Videos</a></li>
                <li class="nav-item"><a class="nav-link" href="#contacto">Contacto</a></li>
            </ul>
        </div>
    </nav>

    <!-- Perfil Section -->
    <section id="perfil" class="container text-center py-5">
        <h2>Desarrollando con la  (AI)</h2>
        <img src="data:image/jpeg;base64,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" alt="Perfil" class="rounded-circle my-3 animated-heart">
        <p><strong>Eridania Ayala</strong></p>
        <p>Estudiante en la carrera de Ingeniero en Sistemas</p>
    </section>

    <!-- Proyectos Section -->
    <section id="proyectos" class="container py-5">
        <h2 class="text-center">Playas de la republica dominicana</h2>
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Saona_Island_December_2020.jpg/413px-Saona_Island_December_2020.jpg" class="card-img-top" alt="Isla saona">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">La Isla Saona/ Kaíku Adamaney 1​2​ es una de las más grandes de la República Dominicana3​4​ que se encuentra ubicada frente a las costas de la provincia La Altagracia pero pertenece a la provincia La Romana.​ Es parte del parque nacional Cotubanamá (Antiguo parque nacional Del Este). La isla también es de gran atractivo turístico por sus hermosas playas y bellezas naturales.

La isla cuenta con dos asentamientos humanos permanentes, los poblados de Mano Juan y Catuano. Mano Juan es un pueblo de pescadores con casas de madera y la «playa Catuano», la cual tiene un destacamento de la marina de guerra..</p>
                        <a href="https://es.wikipedia.org/wiki/Isla_Saona" class="btn btn-primary">Ver más...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img src="https://images.trvl-media.com/lodging/1000000/200000/196800/196715/60bfe16a.jpg?impolicy=resizecrop&rw=1200&ra=fit" class="card-img-top" alt="Cayo levantado">
                    <div class="card-body">
                        <h5 class="card-title">Cayo levantado</h5>
                        <p class="card-text">Cayo Levantado, es un islote en la bahía de Samaná, que pertenece administrativamente a la Provincia de Samaná, al noreste de la isla Santo Domingo en la República Dominicana. Se trata un destino turístico conocido en ese país. El Aeropuerto más cercano, el de Samaná, está a 68 kilómetros, además la isla posee un hotel.​ Posee alrededor de 1 kilómetro de extensión. Tiene una vegetación de bosque húmedo y playas de arena blanca. En este precioso islote se podrá disfrutar de buenas comidas, mariscos frescos y cocteles cómo la piña colada y el coco loco ofrecidos por vendedores en el lugar de distintos bares y restaurantes..</p>
                        <a href="https://es.wikipedia.org/wiki/Cayo_Levantado" class="btn btn-primary">Ver más...</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img src="https://st.depositphotos.com/1038117/4091/i/450/depositphotos_40914467-stock-photo-beach-of-catalina-island-in.jpg" class="card-img-top" alt="PIsla catalina">
                    <div class="card-body">
                        <h5 class="card-title">Islas catalina</h5>
                        <p class="card-text">Isla Catalina fue descubierta en 1494 por el navegante Cristóbal Colón en el segundo viaje que hizo al continente americano y le dio el nombre en honor a la hija de la Reina Isabel de Castilla, pero también es conocida como Isla Ikiita y es llamada por los indígenas locales como Labanea o Toeya. Forma parte del trío de islas adyacentes del sureste de República Dominicana, junto a la Saona y a la Catalinita, siendo la Saona la única habitada.

Isla Catalina fue, como otras zonas del Caribe, refugio de piratas y corsarios desde 1520 y hasta la década de 1720. Éstos aguardaban los barcos españoles que pasaban por ahí para atacarles y robarles, lo que resulta interesante para los amantes de estas historias ancestrales.

Una de estas historias es la de William Kidd, mejor conocido como el Capitán Kidd, un marino británico que fue ejecutado, acusado de piratería en 1701 y que se muestra en la literatura inglesa como uno de los más famosos forajidos de todos los tiempos. Los restos de su embarcación, el Quedagh Merchant, fueron descubiertos, sumergidos a pocos metros de la costa de la isla, por arqueólogos de la Universidad de Indiana en 2007..</p>
                        <a href="https://www.barcelo.com/guia-turismo/es/republica-dominicana/republica-dominicana/que-ver/isla-catalina/" class="btn btn-primary">Ver más...</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Videos Section -->
    <section id="videos" class="container py-5">
        <h2 class="text-center">Videos</h2>
        <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/FyRsC0RXSJE?si=p6M3e7NzHE14ycec" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Muestra una descripcion de las playas de la Republica Dominicana</h5>
                        <p class="card-text"></p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/q8TOGmJPgUw?si=Pgfg95HaTlbguS5S" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">Videos sobre las mejores playas de la republica Dominicana.</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/nIjiIVMJrZI?si=sObx3bvVeYXEUf6_" allowfullscreen></iframe>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p class="card-text">Tour por las islas saonas.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Contacto Section -->
    <section id="contacto" class="container py-5">
        <h2 class="text-center">Contacto</h2>
        <form>
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Tu nombre">
            </div>
            <div class="form-group">
                <label for="email">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" placeholder="Tu correo electrónico">
            </div>
            <div class="form-group">
                <label for="asunto">Asunto</label>
                <input type="text" class="form-control" id="asunto" placeholder="Asunto">
            </div>
            <div class="form-group">
                <label for="mensaje">Mensaje</label>
                <textarea class="form-control" id="mensaje" rows="3" placeholder="Tu mensaje"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
        </form>
    </section>

    <!-- Footer -->
    <footer class="bg-dark text-white text-center py-3">
        <div class="container">
            <a href="" class="text-white mx-2"><i class="fab fa-facebook-f"></i></a>
            <a href="" class="text-white mx-2"><i class="fab fa-instagram"></i></a>
            <a href="#" class="text-white mx-2"><i class="fab fa-youtube"></i></a>
            <p class="mb-0">&copy; 2024 Eridania Ayala. Todos los derechos reservados.</p>
        </div>
    </footer>

    <!-- Bootstrap JS, Popper.js, and jQuery -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Custom JS -->
    <script src="scripts.js"></script>
</body>
</html>