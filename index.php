<?php
$requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$segments   = explode('/', trim($requestPath, '/'));
$page       = $segments[0] ?: 'home';

include_once 'header.php';

try {
    switch ($page) {
        case 'home':
            include_once 'home.php';
            break;

        case 'demo':
            include_once 'demo.php';
            break;

        case 'functies':
            include_once 'functies.php';
            break;

        case 'applicatiebeheer':
            include_once 'applicatiebeheer.php';
            break;

        default:
            include_once 'home.php';
            break;
    }
} catch (\Throwable $th) {
    include_once 'home.php';
}

include_once 'footer.php';
