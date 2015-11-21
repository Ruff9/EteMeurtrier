iterm: 
	pour splitter l'écran: cmd + d
	pour aller dans le bon dossier: taper cd Site/Etemeurtrier

adresse du site : http://ruff9.github.io/EteMeurtrier/

pour lancer le serveur local:
	(dans le bon dossier)
	jekyll serve
 adresse dans le navigateur: 	http://0.0.0.0:4000/EteMeurtrier/

déploiement git

git status
	(voir les modifs)
git add . 
	(ajoute les modifs)
git commit -m "mon message de modif"
	(fait un commit)

git push origin master
	(push sur github)

git push origin gh-pages
	(push sur le site en ligne)

git pull origin master
	(récupère les données sur Github)

deux branches : 
	master (la principale)
	gh-pages("github pages", la branche qui est déployée)

pour changer de branche :

git checkout "nom-de-la-branche"

exemple: 

si je suis sur master:
git checkout gh-pages
me met sur la branche gh-pages


process:

1 faire des changements sur la branche master

2 faire un commit
	git add . 
	git commit -m "mon message de modif"

3 pusher vers github
	git push origin master

	si nécessaire, faire un pull
	git pull origin master
	git push origin master

4 changer de branche pour gh pages
	git checkout gh-pages

5 fusionner les deux branches
	git merge master

6 déployer sur github pages
	git push origin gh-pages
	
7 retourner sur master
	git checkout master