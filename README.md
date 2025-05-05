# **Punchtime**  
📌 _Un projet de gestion du temps basé sur les données de Google Timeline_  

## 🌟 Introduction  
**Punchtime** est une application web conçue pour analyser les données de **Google Timeline** et afficher les lieux visités ainsi que le temps passé à chaque endroit.  
Initialement pensé comme un outil pour suivre les heures de travail via un système de "punch", il est maintenant adapté à un usage plus général.  

Alors que Google Timeline ne permet plus d’exporter ses fichiers, cette application est maintenant désuète.  
Pour tester ses fonctionnalités, **l’application originale requiert un téléversement manuel des fichiers JSON dans l’interface**.  Ces fichiers teste sont disponible dans le fichier files/ressources.

---

## ⚙️ Fonctionnalités  
✅ **Téléversement des fichiers JSON dans l’application**  
✅ **Analyse des lieux visités et du temps passé** sur chaque emplacement  
✅ **Affichage détaillé des résultats** (date, heure, durée de visite)  
✅ **Exportation en PDF** du résumé des visites  

---

## 🛠️ Technologies utilisées  
- **JavaScript** → Appels serveur avec `fetch()`, traitement des dates avec `Date()`, manipulation du DOM  
- **PHP** → Gestion du téléversement de fichiers, lecture et parsing des JSON  
- **JSON** → Format des données de Google Timeline, utilisé pour l’analyse  
- **jsPDF** → Exportation des résultats en **PDF**  

---

## 🎯 Pourquoi ce projet ?  
Ce projet est un **exercice personnel**, conçu comme un **défi technique** pour approfondir :  
- **Les requêtes `fetch()` vers un serveur en JavaScript**  
- **Le traitement de fichiers JSON** et leur affichage dynamique  
- **La gestion des téléversements de fichiers en PHP**  
- **L'exploitation des dates et heures avec `Date()` en JS**  
- **L’exportation des résultats en format PDF**  

Punchtime n’a pas vocation à être un produit fini, mais il met en valeur des compétences **essentielles en développement web**.  

---

## 📌 Note importante  
⚠️ **La version sur GitHub nécessite un téléversement manuel des fichiers JSON.**  
Assurez-vous d’ajouter vos fichiers dans l’interface avant d’explorer l’application.  
