# 1. Introduction
## 1.1. API REST
Cette API est une interface de programmation d'application (API) RESTful qui permet de gérer des fichiers de documentation, des questions, des commandes, des produits avec leurs catégories et réponses associées.

## 1.2. Fonctionnalités principales 
Par exemple, pour la partie documentation, voici les fonctionnalités principales, qu'on pourra retrouver dans les autres controller : 

<ul>
<li>Récupération de tous les fichiers de documentation avec leurs catégories.</li> <br/>
<li>Récupération d'un fichier de documentation spécifique.</li><br/>
<li>Création d'un nouveau fichier de documentation.</li><br/>
<li>Mise à jour d'un fichier de documentation existant</li><br/>
<li>Suppression d'un fichier de documentation.</li><br/>
<li>Association d'une catégorie à un fichier de documentation.</li><br/>
<li>Dissociation d'une catégorie d'un fichier de documentation.</li>
</ul>

<br/>

# 2. Prérequis
Avant d'utiliser cette API, assurez vous d'avoir effectué les actions suivantes : 
<ul>
<li>Mise en place d'une base de données</li> <br/>
<li>Se mettre dans les bons dossiers (cd Back -- cd Front/front)</li><br/>
<li>Initialisation de l'application avec npm init </li><br/>
<li>Installation de packages avec npm install</li><br/>
<li>Configuration et création d'un fichier .env contenant l'adresse de la base de données et le port à utiliser afin de démarrer le serveur expressJS (voir .env.example)</li>
</ul>

<br/>

# 3. Endpoints (url)
## 3.1. Nom des endpoints et decription
Exemple de endpoints pour documentation: 
<ol>
<li>GET /documentation-file: Récupérer tous les fichiers de documentation avec leurs catégories associées.</li> <br/>
<li>GET /documentation-file/:id: Récupérer un fichier de documentation spécifique par son ID.</li> <br/>
<li>POST /documentation-file: Créer un nouveau fichier de documentation.</li> <br/>
<li>PATCH /documentation-file/:id: Mettre à jour un fichier de documentation existant </li><br/>
<li>DELETE /documentation-file/:id: Supprimer un fichier de documentation</li>. <br/>
<li>PATCH /documentation-file/:docId/doc/:catId: Associer une catégorie à un fichier de documentation.</li> <br/>
<li>DELETE /documentation-file/:docId/doc/:catId: Dissocier une catégorie d'un fichier de documentation.</li>
</ol>

## 3.2. Méthodes HTTP
Les méthodes HTTP utilisées pour chaque endpoint sont les suivantes :

<ol>
<li>GET: Récupérer des données.</li> <br/>
<li>POST: Créer de nouvelles données.</li><br/>
<li>PATCH: Mettre à jour des données existantes.</li><br/>
<li>DELETE: Supprimer des données.</li>
</ol>

## 3.3. Exemple requête et réponse 
Exemple de requête GET pour documentation : 
http://localhost:3000/documentation-file/

Exemple de réponse : 
```JSON
{
	"data": [
		{
			"id": 12,
			"documentation_file_name": "Test",
			"documentation_file_format": ".jpg",
			"documentation_file_img": {
				"type": "Buffer",
				"data": [
					49,
					48
				]
			},
			"documentation_file_size": 4,
			"categories": [
				{
					"id": 12,
					"documentation_category_name": "test",
					"documentation_file_category": {
						"documentation_file_id": 12,
						"documentation_category_i": 12
					}
				}
			]
		}
}   ]  
```

<br/>

# 4. Exemples d'utilisation
Vous pouvez utiliser des clients HTTP tels que Postman ou Insomnia pour interagir avec cette API. Voici quelques exemples d'utilisation pour la partie documentation :
<ol>
<li>Pour récupérer tous les fichiers de documentation, utilisez la requête GET /documentation-file. </li>

<br/>
<li>Pour créer un nouveau fichier de documentation, utilisez la requête POST /documentation-file en incluant les données requises dans le corps de la requête. </li>

<br/>
<li>Pour mettre à jour un fichier de documentation existant, utilisez la requête PATCH /documentation-file/:id en spécifiant l'ID du fichier à mettre à jour. </li>

<br/>
<li>Pour associer une catégorie à un fichier de documentation, utilisez la requête PATCH /documentation-file/:docId/doc/:catId en spécifiant les ID du fichier et de la catégorie. </li>

<br/>

<li>Pour supprimer une documentation, utilisez la requête DELETE / documentation-file/:id </li>

<br/>

<li>Pour dissocier une documenation de sa catégorie, utilisez la requête DELETE / documentation-file/:docID/doc/:catID, en spécidiant les ID du fichier et de la catégorie.</li>
</ol>
