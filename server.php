<?php
$_POST = json_decode(file_get_contents("php://input"), true); // для того чтобы на php сервере получит json данные
echo var_dump($_POST);