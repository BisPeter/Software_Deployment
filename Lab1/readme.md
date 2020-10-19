# Readme zum deployment auszuführen

## Als erstes muss man sich beim azure einloggen.
* az login

## Danach muss man ein resource group erstellen mit dem folgenden befehl
* az group create --name lab1PeterVadleRG --location "North Europe"

## Nach dem man mit dem template und den parameters file fertig ist die folgende command in azure cli ausführen
* az deployment group create --resource-group lab1PeterVadleRG --template-file .\azuredeploy.json --parameters .\azuredeploy.parameters.json
