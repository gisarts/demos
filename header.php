<?php

$page = $_GET['page'];

?>

<!doctype html>
<html lang="en">
    <head>
        <!-- <base href="/"> -->
        <title>Cook Demo</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="subject" content="Serve The World">
        <meta name="description" content="Probeer hier de GIS Viewer van Cook. Op deze pagina kunt u de demo GIS viewer van Cook bekijken.">
        <meta name="copyright"content="Gisarts">
        <meta name="keywords" content="cook, gis, viewer, geo, gisarts"/>

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link href="css/main.css" rel="stylesheet" media="screen">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet"> 
    </head>
    <body>
        <header class="text-center">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <div class="nav-item text-start nav-logo">
                        <a class="nav-link" aria-current="page" href="/"><img width="250px" src="./img/logo_cook.webp" class="r-logo-main" alt="logo_cook"></a>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link <?php if($page == "") { echo "active";} ?>" href="/">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?php if($page == "demo") { echo "active";} ?>" href="?page=demo">Demo</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?php if($page == "functies") { echo "active";} ?>" href="?page=functies">Functies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link <?php if($page == "applicatiebeheer") { echo "active";} ?>" href="?page=applicatiebeheer">Applicatiebeheer</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" onclick="window.scrollTo(0, document.body.scrollHeight);">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>