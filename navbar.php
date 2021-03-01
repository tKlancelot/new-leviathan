<?php 
session_start();
?>
<nav>
    <ul>
        <!-- <li><a href="book-parcours.php">livret de parcours</a></li> -->
        <li><a href="book-parcours.php"><img src="assets/intro-svg/icon-library-alt.svg" alt="icone librairie"></a></li>
        <li><a href="carte-visite.php"><img src="assets/intro-svg/icon-carte-visite-alt.svg" alt="icone carte visite"></a></li>
        <li><a href="quelques-ouvrages.php"><img src="assets/intro-svg/icon-ouvrage-alt.svg" alt="icone ouvrages"></a></li>
        <li><a href="memory-game.php"><img src="assets/intro-svg/icon-play-cards-alt.svg" alt="icone memory game"></a></li>
        <li><a href="section-3d.php"><img src="assets/intro-svg/icon-3d-alt.svg" alt="icone 3d"></a></li>
        <li><a href="about-diapo.php"><img src="assets/intro-svg/icon-diapo-alt.svg" alt="icone diapo about"></a></li>
        <li><a href="techniques.php"><img src="assets/intro-svg/icon-techniques.svg" alt="icone techniques"></a></li>
        <li><a href="mentions-legales.php"><img src="assets/intro-svg/icon-mentions-alt.svg" alt="icone mentions"></a></li>
        <li><a href="index.php"><img src="assets/intro-svg/icon-exit-alt.svg" alt="icone home"></a></li>
        <?php
            if($_SESSION['role']=="admin"){
                ?><li><a href="administrateur.php"><img src="assets/intro-svg/icon-admin.svg" alt="icone admin"></a></li><?php
            }
        ?>
    </ul>
</nav>
