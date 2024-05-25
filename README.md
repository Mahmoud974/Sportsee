Documentation de l'application SportSee
Cette documentation fournit des informations sur l'application SportSee, y compris son fonctionnement, ses fonctionnalités principales, et les méthodes utilisées pour récupérer les données des utilisateurs.

Introduction
SportSee est une application de suivi de la performance sportive qui permet aux utilisateurs de visualiser leurs données d'activité physique, leurs performances et leurs progrès au fil du temps. L'application offre une variété de graphiques et de statistiques pour aider les utilisateurs à suivre leur performance sportive et à atteindre leurs objectifs de santé et de fitness.

Fonctionnalités principales
Affichage des données utilisateur telles que le nom, l'âge, et les statistiques clés.
Visualisation des activités physiques quotidiennes, y compris les calories brûlées et le poids.
Suivi des sessions d'entraînement moyennes sur une période donnée.
Analyse des performances dans différentes catégories telles que le cardio, l'énergie, l'endurance, etc.
Affichage de badges pour résumer les réalisations et les objectifs atteints.
Technologies utilisées
React.js : Framework JavaScript utilisé pour développer l'interface utilisateur de l'application.
Recharts : Bibliothèque de graphiques basée sur React pour la création de graphiques interactifs.
Axios : Bibliothèque JavaScript utilisée pour effectuer des requêtes HTTP vers l'API backend.
React Router : Bibliothèque de routage pour la navigation dans l'application.
Architecture du code
L'application est divisée en plusieurs composants React réutilisables, chacun responsable d'une partie spécifique de l'interface utilisateur. Les données sont récupérées à partir d'une API backend à l'aide de la bibliothèque Axios. En cas d'indisponibilité de l'API backend, l'application bascule automatiquement sur des données mockées pour assurer une expérience utilisateur continue.

Installation
Pour exécuter l'application en mode de développement, suivez ces étapes :

Clonez ce dépôt sur votre machine locale.
Assurez-vous que Node.js est installé sur votre machine.
Dans le répertoire du projet, exécutez npm install pour installer les dépendances.
Ensuite, exécutez npm start pour démarrer l'application en mode de développement.
Ouvrez votre navigateur et accédez à l'URL http://localhost:3000 pour voir l'application en action.
Auteur
Ce projet a été développé par Moussa Mahamoud, mon github est @Mahmoud974