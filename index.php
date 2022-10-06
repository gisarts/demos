<?php 

include_once("header.php");

try {
    $page = $_GET['page'];
    switch ($page) {
        case 'home':
            include_once("home.php");
            break;
        case 'demo':
            include_once("demo.php");
            break;
        case 'functies':
            include_once("functies.php");
            break;
        case 'applicatiebeheer':
            include_once("applicatiebeheer.php");
            break;
        default:
            include_once("home.php");
            break;
    }
} catch (\Throwable $th) {
    include_once("home.php");
}

include_once("footer.php");

?>