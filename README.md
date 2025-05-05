# **Punchtime**  
📌 _Un projet de gestion du temps basé sur les données de Google Timeline_  

## 🌟 Introduction  
**Punchtime** est une application web conçue pour analyser les données de **Google Timeline** et afficher les lieux visités ainsi que le temps passé à chaque endroit.  
Initialement pensé comme un outil pour suivre les heures de travail via un système de "punch", il est maintenant adapté à un usage plus général.  

Alors que Google Timeline ne permette plus d’exporter ces fichiers, cette application est maintenant désuet. 
Pour pouvoir tester les fonctionnalités de Punchtime **des fichiers JSON de test seront téléversés automatiquement grâce au bouton "Commencer ici"**, permettant d’explorer l’application sans configuration manuelle.  

---

## ⚙️ Fonctionnalités  
✅ **Téléversement automatique des fichiers de test** grâce au bouton "Commencer ici"  
✅ **Analyse des lieux visités et du temps passé** sur chaque emplacement  
✅ **Affichage détaillé des résultats** (date, heure, durée de visite)  
✅ **Exportation en PDF** du résumé des visites  

---

## 🛠️ Technologies utilisées  
- **JavaScript** → Appels serveur avec `fetch()`, traitement des dates avec `Date()`, manipulation du DOM  
- **PHP** → Gestion du téléversement de fichiers, lecture et parsing des JSON  
- **JSON** → Format des données de Google Timeline, utilisé pour l’analyse  
- **jsPDF** → Exportation des résultats en **PDF**  

## 🎯 Pourquoi ce projet ?
Ce projet est un exercice personnel, conçu comme un défi technique pour approfondir :
- Les requêtes fetch() vers un serveur en JavaScript
- Le traitement de fichiers JSON et leur affichage dynamique
- La gestion des téléversements de fichiers en PHP
- L'exploitation des dates et heures avec Date() en JS
- L’exportation des résultats en format PDF

Punchtime n’a pas vocation à être un produit fini, mais il met en valeur des compétences **essentielles en développement web**.

## 📌 Note importante
⚠️ Les fichiers JSON de test seront téléversés automatiquement, en cliquant sur "Commencer ici".
Assurez-vous d’utiliser cette fonctionnalité avant d’explorer l’application.
