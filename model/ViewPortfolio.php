<?php

$portfolio__bigtitle=<<<EOT
My Projects
EOT;
function genererContenuBanniere($imageSrc) {
    $text = '<img src="' . htmlspecialchars($imageSrc) . '" alt="Languages" >';
    return $text;
}

$dirPath = './../public_html/img/Languages/';
$files = scandir($dirPath);

$bannerFiles = array_filter($files, function ($file) {
    return pathinfo($file, PATHINFO_EXTENSION) === 'png';
});

$banner = ''; 
foreach ($bannerFiles as $bannerFile) { 
    $imageSrc = $dirPath . $bannerFile; 
    $banner .= genererContenuBanniere($imageSrc);
}


function genererContenuProjects($cheminFichier, $imageSrc) {
    $text = '';
    if (file_exists($cheminFichier)) {
        $text .= '<div class="grid__item">';
        $text .= '<div class="card">';
        $text .= '<div class="card-container">';
        $text .= '<a href="#">';
        $text .= '<img src="' . htmlspecialchars($imageSrc) . '" alt="Projects" >';
        $imageName = pathinfo($imageSrc, PATHINFO_FILENAME);
        $text .= $imageName; 
        $text .= '</a>';
        $text .= '</div>';
        $text .= '</div>';
        $text .= '</div>';
    }
    return $text;
}

$dirPath = './../public_html/img/Projects/';
$files = scandir($dirPath);

$projetFiles = array_filter($files, function ($file) {
    return pathinfo($file, PATHINFO_EXTENSION) === 'png';
});

$projects = ''; 
foreach ($projetFiles as $projetFile) { 
    $cheminFichier = $dirPath . $projetFile; 
    $imageSrc = $dirPath . pathinfo($projetFile, PATHINFO_FILENAME) . '.png';
    $projects .= genererContenuProjects($cheminFichier, $imageSrc);
}




?>