# HRnet - Application de Gestion des Employés
## À propos du projet
HRnet est une application moderne de gestion des ressources humaines développée pour WealthHealth, une grande entreprise financière. Ce projet représente la conversion d'une application legacy jQuery vers une application React moderne, offrant une meilleure performance, une maintenance simplifiée et une expérience utilisateur améliorée.

## Table des matières
- Fonctionnalités
- Technologies utilisées
- Prérequis
- Installation
- Utilisation
- Structure du projet
- Composant Modal publié sur npm
- Améliorations de performance
- Contribution
- Licence
## Fonctionnalités
- Création d'employés : Formulaire complet pour l'ajout de nouveaux employés
- Liste des employés : Visualisation de tous les employés avec tri et recherche
- Gestion d'état : Utilisation de Redux pour une gestion d'état globale
- Interface réactive : Design responsive adapté à tous les appareils
- Composants réutilisables : Architecture modulaire avec des composants isolés
## Technologies utilisées
- React 19 : Framework front-end moderne
- Redux Toolkit : Gestion d'état globale
- React Router v7 : Navigation entre les pages
- Tailwind CSS : Framework CSS utilitaire
- Vite : Outil de build rapide et optimisé
- ESLint : Linting et formatage du code
## Prérequis
- Node.js (version 18.0.0 ou supérieure)
- npm (version 8.0.0 ou supérieure)
- Un navigateur web moderne
## Installation
1. Clonez le dépôt :
```bash
git clone https://github.com/votre-username/hrnet-react.git
cd hrnet-react
 ```

2. Installez les dépendances :
```bash
npm install
 ```

3. Lancez l'application en mode développement :
```bash
npm run dev
 ```

4. Ouvrez votre navigateur à l'adresse indiquée (généralement http://localhost:5173 )
## Utilisation
### Création d'un employé
1. Accédez à la page d'accueil
2. Remplissez le formulaire avec les informations de l'employé
3. Cliquez sur "Save" pour enregistrer l'employé
4. Une fenêtre modale confirmera la création
### Consultation des employés
1. Cliquez sur "View Current Employees" depuis la page d'accueil
2. Visualisez la liste complète des employés
3. Utilisez la barre de recherche pour filtrer les résultats
4. Cliquez sur les en-têtes de colonnes pour trier les données
## Structure du projet
```plaintext
hrnet-react/
├── public/              # Fichiers statiques
├── rapport_lighthouse/  # Rapports de performance
│   ├── rapports_jquery/ # Rapports pour la version jQuery
│   └── rapports_react/  # Rapports pour la version React
├── src/
│   ├── components/      # Composants réutilisables
│   │   ├── Input.jsx    # Composant de champ de saisie
│   │   ├── Modal.jsx    # Composant de fenêtre modale
│   │   ├── SearchBar.jsx # Composant de recherche
│   │   ├── Select.jsx   # Composant de menu déroulant
│   │   └── Table.jsx    # Composant de tableau
│   ├── data/            # Données statiques
│   │   └── states.js    # Liste des états américains
│   ├── pages/           # Pages principales
│   │   ├── CreateEmployee.jsx # Page de création d'employé
│   │   └── EmployeeList.jsx   # Page de liste des employés
│   ├── store/           # Configuration Redux
│   │   ├── index.js     # Configuration du store
│   │   └── employeeSlice.js # Slice pour les employés
│   ├── styles/          # Styles globaux
│   │   └── index.css    # Importation de Tailwind
│   ├── App.jsx          # Composant racine
│   └── main.jsx         # Point d'entrée
├── index.html           # Template HTML
├── vite.config.js       # Configuration de Vite
├── eslint.config.js     # Configuration ESLint
├── package.json         # Dépendances et scripts
└── README.md            # Documentation du projet
```

## Composant Modal publié sur npm
Dans le cadre de ce projet, nous avons converti un plugin jQuery de fenêtre modale en un composant React moderne, puis l'avons publié sur npm sous le nom @jeiiro/react-tailwind-modal .

### Caractéristiques du composant
- Intégration native avec Tailwind CSS
- Fermeture par clic à l'extérieur ou touche Échap
- Personnalisation complète du contenu
### Installation du composant
```bash
npm install @jeiiro/react-tailwind-modal
 ```

### Utilisation du composant
```jsx
import { Modal } from '@jeiiro/react-tailwind-modal';

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        Ouvrir la modale
      </button>
      
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <h2>Titre de la modale</h2>
        <p>Contenu de la modale...</p>
      </Modal>
    </>
  );
}
 ```

## Améliorations de performance
Par rapport à l'application jQuery d'origine, cette version React offre :

- Temps de chargement réduit : Optimisation du bundle avec Vite
- Rendu plus rapide : Utilisation du Virtual DOM de React
- Meilleures performances : Compression des assets avec vite-plugin-compression
- Optimisation des re-render : Utilisation de hooks comme useMemo
- Meilleure maintenabilité : Architecture modulaire et composants isolés
## Contribution
Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche pour votre fonctionnalité ( git checkout -b feature/amazing-feature )
3. Committez vos changements ( git commit -m 'Add some amazing feature' )
4. Poussez vers la branche ( git push origin feature/amazing-feature )
5. Ouvrez une Pull Request
## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus d'informations.

Développé dans le cadre du projet 14 "Faites passer une librairie jQuery vers React" du parcours Développeur Front-end JavaScript React d'OpenClassrooms.