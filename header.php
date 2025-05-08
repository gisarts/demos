<!doctype html>
<html lang="nl-NL">

<head>
    <title>Cook Demo | Gis Viewer</title>
    <meta charset="utf-8">

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
    <meta name="robots" content="index,follow">
    <meta name="description" content="Probeer hier de GIS Viewer van Cook. Op deze pagina kunt u de demo GIS viewer van Cook bekijken.">

    <meta property="og:title" content="Cook Demo | De complete veilige gepersonaliseerde GIS Viewer van GISArts" />
    <meta property="og:description" content="Probeer hier de GIS Viewer van Cook. Op deze pagina kunt u de demo GIS viewer van Cook bekijken." />
    <meta property="og:image" content="https://gis-cook.nl/img/logo_cook.webp" />
    <meta property="og:site_name" content="Cook Demo" />
    <meta property="og:url" content="https://gis-cook.nl/" />

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="subject" content="Serve The World">
    <meta name="copyright" content="Gisarts">
    <meta name="keywords" content="cook, gis, viewer, geo, gisarts" />

    <link rel="icon" href="./img/favicon.webp">
    <!-- Preload critical CSS -->
    <link rel="preload"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
    </noscript>

    <link rel="preload"
        href="/css/main.css"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link rel="stylesheet" href="/css/main.css">
    </noscript>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://cdn.jsdelivr.net" crossorigin>
    <link rel="preload"
        href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
        as="style"
        onload="this.onload=null;this.rel='stylesheet'">
    <noscript>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet">
    </noscript>

    <!-- Preload LCP hero image -->
    <link rel="preload" as="image" href="/img/devices-cook.webp" fetchpriority="high">
    <link rel="preload" as="image" href="/img/background-lines.webp" fetchpriority="high">

    <script>
        // var _paq = window._paq = window._paq || [];
        // /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        // _paq.push(['trackPageView']);
        // _paq.push(['enableLinkTracking']);
        // (function() {
        //     var u="//tracking.gisarts.nl/";
        //     _paq.push(['setTrackerUrl', u+'matomo.php']);
        //     _paq.push(['setSiteId', '1']);
        //     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        //     g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
        // })();
        // 
    </script>

    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Cook - GIS Viewer",
            "url": "https://www.gisarts.nl",
            "image": "https://cook.gisarts.nl/assets/img/thumbnail_cook1_1.webp",
            "description": "De GIS-Viewer maakt het eenvoudig om geografische data te raadplegen, registreren en analyseren.",
            "applicationCategory": "Geographic Information System",
            "operatingSystem": "Windows, macOS, Linux, Web",
            "offers": {
                "@type": "Offer",
                "price": "Op aanvraag",
                "priceCurrency": "EUR"
            },
            "publisher": {
                "@type": "Organization",
                "name": "Gisarts",
                "url": "https://www.gisarts.nl",
                "logo": "https://gis-cook.nl/img/logo_cook.webp",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "0485 763 601",
                    "contactType": "customer support"
                }
            },
            "review": {},
            "softwareVersion": "Laatste versie",
            "sameAs": [
                "https://www.linkedin.com/company/gisarts"
            ]
        }
    </script>

    <script defer src="https://www.googletagmanager.com/gtag/js?id=G-F2BEPCCC24"></script>
    <script defer>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-F2BEPCCC24');
    </script>
    <style>
        /* Critical above-the-fold styles */
        .header-section {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .header-section h1 {
            font-family: 'Lato', sans-serif;
            font-size: 2.5rem;
        }

        /* …add only what’s needed for first view… */
    </style>
</head>

<body>
    <header class="header nav-down">
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="/img/logo_cook.webp" alt="Cook Logo" width="200" height="83">
                </a>
                <button class="navbar-toggler" type="button" aria-label="Toggle navigation" data-toggle="navbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link <?= $page === 'home' ? 'active' : '' ?>" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $page === 'demo' ? 'active' : '' ?>" href="/demo">Demo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $page === 'functies' ? 'active' : '' ?>" href="/functies">Functies</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link <?= $page === 'applicatiebeheer' ? 'active' : '' ?>" href="/applicatiebeheer">Applicatiebeheer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    <main>