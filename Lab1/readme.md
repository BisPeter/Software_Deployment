# Readme um deployment auszuführen

## Als Erstes muss man sich in Azure einloggen.
* az login

## Danach muss man eine Resource group erstellen mit dem folgenden Befehl:
* az group create --name lab1PeterVadleRG --location "North Europe"

## Nachdem man mit dem Template und dem Parameters-file fertig ist, ist der folgende Command in Azure cli auszuführen:
* az deployment group create --resource-group lab1PeterVadleRG --template-file .\azuredeploy.json --parameters .\azuredeploy.parameters.json
