<!DOCTYPE html>
    <html lang="fr">
    <?php
    $title = 'memory game';
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
    <script src='js/pages/memory-game.js' type="module"></script>
</html>