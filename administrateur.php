<?php
    session_start();

    require('connexion-bdd.php');
    require('list-category.php');
    require('monFormulaire.php');
    require('get-all.php');
    require('insertTechnique.php');

    include('head.php');




    function myNavbar(){
        // var_dump($_SESSION);
        ?><div class="profiler">
            <ul>
                <li>navbar admin</li>
                <li><a href='index.php'>log out</a></li>
                <li><a href='book-parcours.php'>retour</a></li>
            </ul>
    </div><?php
    }

    ?>
    <div class="panneau">
    <?php
        myNavbar();
        monFormulaire();
        ?>
        <p style='color:red;opacity:0.64'><?php if(isset($msg)){echo $msg;}?></p>
        <div class="sousPanneau1">

        <?php
            getAll($bdd,'techniques','titreTechnique','nomTechnique','description');
            getAll($bdd,'commentaires','pseudo','dateEnvoi','commentaire');
        ?>

        </div>
    </div>

<script>
    // recuperer le body
    let myBody = document.body;
    console.log(myBody);
    myBody.classList = "myBodyAdmin";
</script>