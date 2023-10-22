<?php

// Home //

function home() {
    require("./../model/ViewHome.php");
    require("./../view/TemplateHome.html");
    require("./../model/ViewPortfolio.php");
    require("./../view/TemplatePortfolio.html");
    require("./../model/_ViewMain.php");
    require("./../view/_TemplateMain.html");

}