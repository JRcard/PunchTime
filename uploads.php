<?php

$array = array("fileInFolder" => [], "error" => "", "msg" => "", "uploadOk" => false);
$target_dir = "files/";

if($_SERVER["REQUEST_METHOD"] == "POST"){
    foreach ($_FILES as $key => $file) {

      $file_name = $file["name"]; 
      $file_tmp_name = $file["tmp_name"]; 
      $file_size = $file["size"];
      
      $target_file = $target_dir . basename($file_name);
      $file_type =  strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

      $array["uploadOk"] = true; 

    // Check if file already exists
    if (file_exists($target_file)) {
      $array['msg'] .=  "Le fichier $file_name existe déjà, vous pouvez continuer ";
    }
    else{
      // Check file size
      if ($file_size > 3000000) {
        $array['error'] .=  "Désolé, le fichier est trop gros ";
        $array["uploadOk"] = false;
      }

      // Allow certain file formats
      if($file_type != "json") {
        $array['error'] .=  "Désolé, seul les fichiers JSON sont acceptés. ";
        $array["uploadOk"] = false;
      }  
    };

    // Check if $uploadOk is set to false by an error
    if (!$array["uploadOk"]) {
      $array['error'] .=  "Le fichier ne s'est pas téléversé. ";
      echo json_encode($array);
      exit;
    }
    else {  
      // check if file is uploaded  
      if (is_uploaded_file($file_tmp_name)) {
        $array["msg"] .= "$file_name is loaded! ";

      // if everything is ok, try to upload file
        if (move_uploaded_file($file_tmp_name, $target_file)) {
          $array["msg"] .= 'The move_uploaded_file fonction pass! ';
        }
        else {
          $array['error'] .=  "Désolé, une erreur est survenu. " . $file['error'] . '     .....     ';
          $array["uploadOk"] = false;
        };
      };
    };
  };

    foreach (glob('./files/*.json') as $file){
      array_push($array['fileInFolder'], basename($file));
      } 
};

  echo json_encode($array);

?>