

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

error_reporting(E_ALL);

require("./../controller/Controller.php");

if (isset($_GET['view'])) {
    switch ($_GET['view']) {

        // Home //
        case 'home':
            home();
            break;

        default:
        home(); 
    }
} else {
    home(); 
}

?>
