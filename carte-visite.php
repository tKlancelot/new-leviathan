<!DOCTYPE html>
    <html lang="fr">
    <?php
    $title = 'carte de visite';
    ?>
    <?php include('head.php'); ?>
    <body>
        <div class="cadreLoader">
            <div class='cadreL'>
                <p>chargement...</p>
                <div class='myLoader'></div>
            </div>
        </div>

        <div class="body">
        <?php
        include('navbar.php');
        ?>
        </div>
    </body>
    <script src='js/pages/carte-de-visite.js' type="module"></script>
</html>