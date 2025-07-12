# MEMS-GMAO

Ce projet est une application de gestion de maintenance assistée par ordinateur (GMAO) construite avec la [T3 Stack](https://create.t3.gg/).

## 🚀 Fonctionnalités

- **Authentification** : Système d'authentification sécurisé avec Better Auth
- **Dashboard** : Interface d'administration pour la gestion de maintenance
- **Base de données** : Modèle de données avec Prisma et PostgreSQL
- **API Type-safe** : API robuste avec tRPC
- **Interface moderne** : UI moderne avec Tailwind CSS et Radix UI

## 🛠️ Technologies utilisées

- [Next.js 15](https://nextjs.org) - Framework React full-stack
- [Better Auth](https://better-auth.com) - Authentification moderne
- [Prisma](https://prisma.io) - ORM pour la base de données
- [PostgreSQL](https://www.postgresql.org) - Base de données relationnelle
- [tRPC](https://trpc.io) - API type-safe end-to-end
- [Tailwind CSS](https://tailwindcss.com) - Framework CSS utilitaire
- [Radix UI](https://www.radix-ui.com) - Composants UI accessibles
- [TypeScript](https://www.typescriptlang.org) - Typage statique

## 📦 Installation

1. **Cloner le repository**
   ```bash
   git clone <repository-url>
   cd mems-gmao
   ```

2. **Installer les dépendances**
   ```bash
   npm install
   # ou
   bun install
   ```

3. **Configurer la base de données**
   ```bash
   # Démarrer la base de données (si vous avez le script)
   ./start-database.sh
   
   # Générer le client Prisma
   npm run db:generate
   
   # Appliquer les migrations
   npm run db:migrate
   ```

4. **Configurer les variables d'environnement**
   Créez un fichier `.env.local` avec :
   ```env
   DATABASE_URL="postgresql://user:password@localhost:5432/mems_gmao"
   AUTH_SECRET="votre-secret-d-authentification"
   ```

5. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

## 🗄️ Structure de la base de données

Le projet utilise Prisma avec les modèles suivants :

- **User** : Gestion des utilisateurs
- **Session** : Sessions d'authentification
- **Account** : Comptes liés aux fournisseurs d'authentification
- **Post** : Système de posts (exemple)
- **Verification** : Vérification des emails

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js (App Router)
│   ├── api/               # API routes
│   ├── dashboard/         # Interface d'administration
│   ├── login/            # Page de connexion
│   └── signup/           # Page d'inscription
├── components/            # Composants React réutilisables
├── lib/                  # Utilitaires et configuration
├── server/               # Logique serveur (tRPC)
└── trpc/                 # Configuration tRPC
```

## 🚀 Scripts disponibles

- `npm run dev` - Serveur de développement
- `npm run build` - Build de production
- `npm run start` - Démarrer en production
- `npm run db:studio` - Ouvrir Prisma Studio
- `npm run db:generate` - Générer le client Prisma
- `npm run db:migrate` - Appliquer les migrations
- `npm run check` - Vérifier le code avec Biome

## 🚀 Déploiement

Ce projet peut être déployé sur :

- [Vercel](https://vercel.com) - Recommandé pour Next.js
- [Netlify](https://netlify.com) - Alternative populaire
- [Docker](https://docker.com) - Pour des environnements personnalisés

## 📚 Ressources

- [Documentation T3 Stack](https://create.t3.gg/)
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Prisma](https://www.prisma.io/docs)
- [Documentation tRPC](https://trpc.io/docs)

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.
