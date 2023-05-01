![badge](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![barge](https://img.shields.io/badge/%40emotion-11.10.6-pink?style=for-the-badge)
![badge](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

# Readme

Ce projet est une application React simple qui utilise React Router pour créer une application à page unique avec plusieurs routes. Il comprend plusieurs composants pour la gestion des emplois, tels que la création, la mise à jour et la recherche d'emplois.

## Commencer

Pour commencer avec ce projet, vous pouvez suivre ces étapes :

1. Clonez ce référentiel : `git clone https://github.com/BriiceR/front-api-job.git`
2. Installez les dépendances : `npm install`
3. Démarrez le serveur de développement : `npm start`
4. Ouvrez votre navigateur et accédez à `http://localhost:3000`

## Dépendances

Ce projet utilise les dépendances suivantes :

- `react` : une bibliothèque JavaScript pour créer des interfaces utilisateur
- `react-router-dom` : une bibliothèque de routage pour les applications React
- `@emotion` : une bibliothèque pour styler les composants React

## Routes

Ce projet utilise React Router pour créer plusieurs routes pour différentes pages :

- `/` : La page d'accueil, qui affiche une liste d'emplois
- `/:id` : La page de détail de l'emploi, qui affiche les détails d'un emploi spécifique
- `/updatejob/:id` : La page de mise à jour de l'emploi, qui vous permet de mettre à jour un emploi spécifique
- `/createjob` : La page de création d'emploi, qui vous permet de créer un nouvel emploi
- `/searchjob` : La page de recherche d'emploi, qui vous permet de rechercher des emplois

## Composants

Ce projet comprend les composants suivants :

- `Home` : Le composant de la page d'accueil, qui affiche une liste d'emplois
- `JobDetail` : Le composant de détail de l'emploi, qui affiche les détails d'un emploi spécifique
- `JobUpdate` : Le composant de mise à jour de l'emploi, qui vous permet de mettre à jour un emploi spécifique
- `JobCreate` : Le composant de création d'emploi, qui vous permet de créer un nouvel emploi
- `JobSearch` : Le composant de recherche d'emploi, qui vous permet de rechercher des emplois

## Styling

Ce projet utilise `@emotion` pour styler les composants. Les styles sont définis dans le même fichier que les composants, en utilisant la syntaxe CSS-in-JS.

## Conclusion

Il s'agit d'une application React simple qui montre comment utiliser React Router pour créer plusieurs routes pour différentes pages. Il comprend également plusieurs composants pour la gestion des emplois et utilise `@emotion` pour le stylisme. N'hésitez pas à l'utiliser comme point de départ pour vos propres projets !
