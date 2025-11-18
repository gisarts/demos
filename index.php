<?php
$requestPath = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$segments    = explode('/', trim($requestPath, '/'));

// Only allow one segment like "/home", "/demo", etc.
if (count($segments) > 1 && $segments[1] !== '') {
    header("Location: /", true, 302);
    exit;
}

$page = $segments[0] ?: 'home';

$validPages = ['home', 'demo', 'functies', 'applicatiebeheer', 'releases'];

if (!in_array($page, $validPages)) {
    header("Location: /", true, 302);
    exit;
}

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

        case 'releases':
            include_once 'release_notes.php';
            break;
    }
} catch (Throwable $th) {
    header("Location: /", true, 302);
    exit;
}

include_once 'footer.php';
