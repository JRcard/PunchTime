<?php

$fileInFolder = [];

foreach (glob('./files/*.json') as $file){
      array_push($fileInFolder, basename($file));
      } 
      
echo json_encode($fileInFolder);

?>