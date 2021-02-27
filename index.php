<!DOCTYPE html>
    <html lang="fr">
    <?php
    $title = 'nouveau portfolio';
    session_start();
    if($_SESSION['role']){
        echo "session detruite";
        session_destroy();
    }
    else{
        session_start();
        echo "utilisateur";
    }
    ?>
    <?php include('head.php'); ?>
    <body>

        <div class="cadreLoader">
            <div class='cadreL'>
                <p>chargement...</p>
                <div class='myLoader'></div>
            </div>
        </div>


        <div class="body"></div>
        <?php
            include('assets/intro-svg/intro-sphere.svg');
        ?>
        <div id="connect">
            <form action="" method="POST">
                <input type="password" name="password" value="password">
                <input type="submit" value="admin">
            </form>
        </div>
    </body>
    <?php 
        if(isset($_POST['password'])AND !empty($_POST['password'])){
            $password = $_POST['password'];
            if($password == "!stratien86%"){
                $_SESSION['role'] = "admin";
                echo $_SESSION['role'];
            }
        }
    ?>
    <script src='js/pages/intro.js' type="module"></script>
</html>