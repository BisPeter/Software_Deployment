# Doku zu Lab 3

## Teil 1
Im ersten teil der Aufgabe habe ich eine doker-compose file erstellen müssen der mittels LAMP Wordpress bereitstellt.
In dem doker-compose file werden die images eingebunen, die benötigt sind um LAMP + Wordpress in ein Container zu komponieren.

Mit dem folgenden befel kann mann den Docker Container erstellen und zum laufen bringen:

```
docker-compose up -d
```

## Teil 2

Um Teil 2 laufen zu bringen habe ich 2 Images erstellen müssen. Eine image wo eine MySQL DB lauft und eine weitere der Apache, PHP und und wordpress beinhaltet. 
Die zwei images werden mit ein docker-compose file zusammengefügt.
Man muss die Images nicht extra "bauen lassen" da im docker-compose.yml es spezifiziert ist.

Mit dem folgenden befel kann mann Teil 2  erstellen und zum laufen bringen:

```
docker-compose up -d
```
