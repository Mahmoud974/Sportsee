Développer des éléments graphiques avancés en utilisant des librairies
Le code des éléments graphiques peut être validé si :

❒ Le projet utilise une librairie graphique (D3 ou Recharts) pour implémenter les 4 graphiques du tableau de bord.

❒  Le projet respecte la maquette Figma tant au niveau des charts que des deux navigations.

❒ Le projet est utilisable sur les résolutions d’au moins 1024 par 780 pixels.

❒ Le projet comprend un package.json contenant les librairies installées. Les librairies ne sont pas installées de manière globale.

❒ Les graphiques du projet sont fidèles à la maquette.

Interagir avec un service web
Le code de l’API peut être validé si :

❒ Les données sont récupérées auprès de l’API.

❒ L’étudiant utilise soit l’API Fetch, soit la librairie axios.

❒ Les calls API ont été réalisés dans un service situé en dehors d’un composant React.

❒ Les cas d’erreurs (indisponibilité de l’API) ne font pas planter le site. Dans le cas d’une indisponibilité, un message d’erreur est affiché.

Assurer la qualité des données dans une application web
Le code peut être validé si :

❒ Les données récupérées sont transformées en JSON.

❒ Une classe de modélisation permet de formater les données une fois récupérées auprès de l’API.

❒ Quelles que soient les données envoyées (mockées ou de l’API), ces dernières complètent les charts.

❒ L’étudiant peut changer la source des données (les données mockées et les données de l’API) en changeant uniquement le service utilisant l’API et la classe de modélisation. Le code des composants ne doit pas être changé.