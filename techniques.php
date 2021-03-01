<?php
session_start();

require('connexion-bdd.php');
require('list-category.php');

if(empty($_SESSION)){
    $_SESSION['role'] = "user";
}
// else{
//     $_SESSION['role'] = "admin";
// }

?>

<!DOCTYPE html>
    <html lang="fr">
    <?php
    $title = 'techniques';
    ?>
    <?php include('head.php'); ?>
    <body>
        <div class="cadreLoader">
            <div class='cadreL'>
                <p>chargement...</p>
                <div class='myLoader'></div>
            </div>
        </div>
        <!-- var_dump($_SESSION); -->

        <div class="blocTechnique">
            <div class="panneauBouton">
                <button id="boutonHtml"></button>
                <button id="boutonCss"></button>
                <button id="boutonJs"></button>
            </div>

            <div class="onglet active">
                <?php
                    listCateg($bdd,'html');
                ?>
            </div>  
            <div class="onglet">
                <?php
                    listCateg($bdd,'css');
                ?>
            </div>  
            <div class="onglet">
                <?php
                    listCateg($bdd,'js');
                ?>
            </div>  
        </div>


        <div class="body">
        <?php
        include('navbar.php');
        ?>
        </div>
    </body>
    <script src='js/pages/techniques.js' type="module"></script>
</html>