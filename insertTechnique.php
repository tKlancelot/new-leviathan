<?php

if(isset($_POST['titreTechnique']) AND (isset($_POST['description']))){
    $titreTechnique = htmlspecialchars($_POST['titreTechnique']);
    $description = htmlspecialchars($_POST['description']);
    $nomTechnique = $_POST['nomTechnique'];
    $categTechnique = $_POST['categoryTech'];
    $niveauTech = $_POST['niveauTech'];
    $msg = "desc titre et nomtech existent";
    if(!empty($titreTechnique) AND !empty($description)){
        $msg = "variable description et titreTechnique non vide";
        if(!empty($nomTechnique)){
        $msg = "variable nomTechnique non vide";    
            if(strlen($nomTechnique) < 40){
                $msg = "ok on continue";
                if(strlen($titreTechnique) < 40){
                $msg="ok";
                    if(strlen($description)<1000){
                        $msg = "<span style='color:#4c8'>ta technique a bien été enregistrée</span>";
                        $req = $bdd->prepare('INSERT INTO techniques (nomTechnique, titreTechnique, description, categoryTech, niveauTech) VALUES (?,?,?,?,?)');
                        $req->execute(array($nomTechnique,$titreTechnique,$description,$categTechnique,$niveauTech));
                    }
                    else{
                        $msg = "ton description est trop longue";
                    }
                }
                else{
                    $msg = "le titre de cette technique est trop long";
                }
            }                        
            else{
                $msg = "le nom de la technique est trop long";
            }
        }
        else{
            $msg = "nomTechnique non renseigné";
        }
    }
    else{
        $msg = "remplis les champs ci-dessus";
    }
}
else{
    $msg = "";
} 
?>