<?php
$page = 'releases';
include_once("header.php");
?>

<div class="row justify-content-center text-center header-section">
    <div class="col-xxl-4 r-padding text-center">
        <h1><b>Release Notes & Roadmap</b></h1>
        <div class="spacer mt-5"></div>
        <h4>Cook wordt continu verbeterd met nieuwe functionaliteiten en optimalisaties. Hieronder vindt u de meest recente updates.
</h4>
    </div>
    <div class="row justify-content-center">
        <div class="col-xxl-2 r-padding">
            <span onclick="window.scrollTo(0, 600);" class="text-decoration-none" style="cursor: pointer;">
                <p style="font-size: 50px"><b class="icon-animation">↓</b></p>
            </span>
        </div>
    </div>
</div>

<!-- Release Timeline -->
<div class="container-sm my-5">
    <div class="row">
        <div class="col-lg-10 offset-lg-1">
            
            <!-- Release 1.6.2 -->
            <div class="card mb-4 shadow-sm rounded-4">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-md-3">
                            <span class="badge bg-success mb-2">Nieuwste versie</span>
                            <h3 class="text-gold mb-0">v1.6.2</h3>
                            <p class="text-muted">November 2025</p>
                        </div>
                        <div class="col-md-9">
                            <h4 class="mb-3">Kleine verbeteringen en bug fixes</h4>
                            <ul class="fs-6">
                                <li>Email white labeling wordt middels de database ingeladen.</li>
                                <li>Emails worden gelogged met status.</li>
                                <li>Mogelijkheid om de streetsmart obliques direct te configureren.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card mb-4 shadow-sm rounded-4">
                <div class="card-body p-4">
                    <div class="row">
                        <div class="col-md-3">
                            <h3 class="text-gold mb-0">v1.6.1</h3>
                            <p class="text-muted">Juni 2025</p>
                        </div>
                        <div class="col-md-9">
                            <h4 class="mb-3">Kleine verbeteringen en bug fixes</h4>
                            <ul class="fs-6">
                                <li>Bewerken van formulieren met geavanceerde instellingen voor beheerders.</li>
                                <li>Rechtstreeks zoeken op database tabellen, maakt het eenvoudig een zoekingang op maat te ontwikkelen</li>
                                <li>Het is nu mogelijk om redlining te bewaren in een configuratie zodat collega's hier inzicht op hebben.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

<!-- Roadmap Section -->
<div class="album py-5 mb-5" style="background-color: #F7F7F6;">
    <div class="container-sm">
        <div class="row justify-content-center mb-5">
            <div class="col-lg-8 text-center">
                <h2 class="mb-4" style="color: #D4BE87;">Roadmap <b>2026 - 2029</b></h2>
                <p class="fs-5">
                    Dit zijn onze plannen voor de toekomst. We werken continu aan nieuwe functionaliteiten om Cook nog beter te maken.
                </p>
            </div>
        </div>

        <!-- 2026 -->
        <div class="row mb-5">
            <div class="col-lg-10 offset-lg-1">
                <div class="card rounded-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="text-gold mb-2">2026</h3>
                                <!-- <p class="text-muted mb-3"><strong>Stabiliteit, fundament & datakwaliteit</strong></p>
                                <p class="small text-muted">Focus op betrouwbaarheid, beheer, migratie naar open standaarden en datakwaliteit.</p> -->
                            </div>
                            <div class="col-md-9">
                                <h5 class="mb-3">Belangrijkste ontwikkelingen:</h5>
                                <ul class="fs-6">
                                    <li><strong>API-first architectuur:</strong> Volledige implementatie Cook Datacatalogus (OGC API - Features, Tiles, Records)</li>
                                    <li><strong>Slimme datakwaliteit:</strong> Automatische datavalidaties via ETL (FME Flow)</li>
                                    <li><strong>Datacatalogus uitbreiding:</strong> Uitbreiding soorten datadistributie</li>
                                    <li><strong>Uitbreiding koppelingen:</strong> Integratie met DSO (Digitaal Stelsel Omgevingswet)</li>
                                    <li><strong>3D-viewing:</strong> Op basis van Three.js (zonder Cesium)
                                        <ul>
                                            <li>Textured meshes</li>
                                            <li>LiDAR point clouds</li>
                                            <li>Doorsnedes / profielen maken</li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2027 -->
        <div class="row mb-5">
            <div class="col-lg-10 offset-lg-1">
                <div class="card rounded-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="text-gold mb-2">2027</h3>
                                <p class="text-muted mb-3"><strong>TBA</strong></p>
                                <!-- <p class="small text-muted">Focus op ketensamenwerking, datagedreven workflows en dashboarding.</p> -->
                            </div>
                            <!-- <div class="col-md-9">
                                <h5 class="mb-3">Belangrijkste ontwikkelingen:</h5>
                                <ul class="fs-6">
                                    <li><strong>Uitbreiding koppeling BRK API:</strong> Verbeterde integratie met Basisregistratie Kadaster</li>
                                    <li><strong>Event-driven data-updates:</strong> Common Ground principes - bijwerken aan bron / near real-time</li>
                                    <li><strong>Datavirtualisatie:</strong> Voor flexibele databevraging</li>
                                    <li><strong>Geavanceerde dashboards:</strong> Ruimtelijke KPI's en visualisaties</li>
                                    <li><strong>Cook-AI assistent:</strong> Vragen stellen over kaarten en registraties</li>
                                    <li><strong>Samenwerkingsfunctionaliteit:</strong> Workflow "review–approve–publish" voor kaartlagen</li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 2028 - 2029 -->
        <div class="row mb-5">
            <div class="col-lg-10 offset-lg-1">
                <div class="card rounded-4 shadow-sm">
                    <div class="card-body p-4">
                        <div class="row">
                            <div class="col-md-3">
                                <h3 class="text-gold mb-2">2028 - 2029</h3>
                                <p class="text-muted mb-3"><strong>TBA</strong></p>
                                <!-- <p class="small text-muted">Focus op voorspellende analyses, AI-ondersteunde kaarten en 3D-integratie.</p> -->
                            </div>
                            <!-- <div class="col-md-9">
                                <h5 class="mb-3">Belangrijkste ontwikkelingen:</h5>
                                <ul class="fs-6">
                                    <li><strong>Geavanceerde Cook-AI assistent:</strong>
                                        <ul>
                                            <li>Uitlezen objectinformatie via natuurlijke taal</li>
                                            <li>Risicoanalyse (bijv. klimaat, beheer, beleidsbeslissingen)</li>
                                        </ul>
                                    </li>
                                    <li><strong>Automatische herkenning & classificatie:</strong>
                                        <ul>
                                            <li>Drone/LiDAR-herkenning van objecten (bomen, verhardingen, veiligheidsrisico's)</li>
                                        </ul>
                                    </li>
                                    <li><strong>Realtime data pipelines:</strong> Integratie van sensoren, telpunten en beheerdata</li>
                                </ul>
                            </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>

<!-- Feature Requests Section -->
<div class="container-sm my-5">
    <div class="row justify-content-center">
        <div class="col-lg-8">
            <div class="card rounded-4 shadow-sm" style="background-color: #EBE1C9;">
                <div class="card-body p-5 text-center">
                    <h2 class="mb-4">Heeft u suggesties?</h2>
                    <p class="fs-5 mb-4">
                        We horen graag uw ideeën! Uw feedback helpt ons om Cook nog beter te maken. 
                        Heeft u een functie die u graag zou willen zien, of suggesties voor verbetering?
                    </p>
                    <a href="mailto:contact@gisarts.nl?subject=Feature Request voor Cook" class="btn btn-lg btn-primary rounded-pill px-5">
                        Deel uw suggestie
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="spacer" style="margin-bottom: 100px"></div>

<?php
include_once("footer.php");
?>