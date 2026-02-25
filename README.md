<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="src/assets/circle.svg" alt="logo" width="200" height="auto" />
  <h1>Questlists (Svelte)</h1>
  
  <p>
    A Svelte version of Questlists used to develop and test the Twintrinsic UI Library. These two are being developed alongside each other.
  </p>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/skamansam/questlists-svelte/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/skamansam/questlists-svelte" alt="contributors" />
  </a>
  <a href="https://github.com/skamansam/questlists-svelte">
    <img src="https://img.shields.io/github/last-commit/skamansam/questlists-svelte" alt="last update" />
  </a>
  <a href="https://github.com/skamansam/questlists-svelte/network/members">
    <img src="https://img.shields.io/github/forks/skamansam/questlists-svelte" alt="forks" />
  </a>
  <a href="https://github.com/skamansam/questlists-svelte/stargazers">
    <img src="https://img.shields.io/github/stars/skamansam/questlists-svelte" alt="stars" />
  </a>
  <a href="https://github.com/skamansam/questlists-svelte/issues/">
    <img src="https://img.shields.io/github/issues/skamansam/questlists-svelte" alt="open issues" />
  </a>
  <a href="https://github.com/skamansam/questlists-svelte/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/skamansam/questlists-svelte.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://skamansam.github.io/questlists-svelte">View Demo</a>
  <span> · </span>
    <a href="https://github.com/skamansam/questlists-svelte">Documentation</a>
  <span> · </span>
    <a href="https://github.com/skamansam/questlists-svelte/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/skamansam/questlists-svelte/issues/">Request Feature</a>
  </h4>
</div>

<br />

<!-- Table of Contents -->
# :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Features](#dart-features)
  * [Color Reference](#art-color-reference)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Installation](#gear-installation)
  * [Running Tests](#test_tube-running-tests)
  * [Run Locally](#running-run-locally)
  * [Deployment](#triangular_flag_on_post-deployment)
- [Usage](#eyes-usage)
- [Roadmap](#compass-roadmap)
- [Contributing](#wave-contributing)
  * [Code of Conduct](#scroll-code-of-conduct)
- [FAQ](#grey_question-faq)
- [License](#warning-license)
- [Contact](#handshake-contact)
- [Acknowledgements](#gem-acknowledgements)

  

<!-- About the Project -->
## :star2: About the Project

QuestLists is a crowd-sourcing application that organizes lists of any sort. The crowd builds the lists, you say what you want to use from that list, and then use it as a normal checklist. At its heart, this is an _n_-state checklist application.

The intention is to use the crowd to build lists for games, inventories, shopping, music, videos, and more! Once the lists are built and created, you can add/remove your items from them. It uses the browser's caching for data, so you don't even have to login to use it (only for the same device)!

**Note:** This is the frontend for QuestLists, with a Firebase backend by default. More backends will be developed separately.

<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://svelte.dev/">Svelte 5</a></li>
    <li><a href="https://kit.svelte.dev/">SvelteKit</a></li>
    <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
    <li><a href="https://tailwindcss.com/">Tailwind CSS</a></li>
    <li><a href="https://vite.dev/">Vite</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://firebase.google.com/">Firebase</a></li>
  </ul>
</details>

<details>
<summary>Testing & Documentation</summary>
  <ul>
    <li><a href="https://playwright.dev/">Playwright</a></li>
    <li><a href="https://vitest.dev/">Vitest</a></li>
    <li><a href="https://storybook.js.org/">Storybook</a></li>
  </ul>
</details>

<details>
<summary>Development Tools</summary>
  <ul>
    <li><a href="https://pnpm.io/">pnpm</a></li>
    <li><a href="https://biomejs.dev/">Biome</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- Crowd-sourced list creation and management
- Multi-state checklist functionality (track progress beyond simple done/not done)
- Browser caching for offline list usage
- No login required for basic usage (data persists on device)
- Game quest tracking, inventory management, shopping lists, and more
- Responsive design with Tailwind CSS
- Fully typed with TypeScript
- Comprehensive test coverage with Playwright and Vitest

<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file. Copy `.env.example` to get started:

```
VITE_APP_FIREBASE_API_KEY
VITE_APP_FIREBASE_AUTH_DOMAIN
VITE_APP_FIREBASE_DATABASE_URL
VITE_APP_FIREBASE_STORAGE_BUCKET
VITE_APP_FIREBASE_MESSAGING_SENDER_ID
VITE_APP_FIREBASE_APP_ID
```

<!-- Backend Configuration -->
### :gear: Backend Configuration

QuestLists supports multiple backend options for both file storage and database operations. Choose the backends that best fit your needs.

#### File Storage Backends

The following file storage backends are supported for storing user-generated content, images, and other assets:

| Status | Backend | Free Tier | Pricing | Cost per GB (Cheapest) | Setup Complexity | Best For |
|--------|---------|-----------|---------|------------------------|------------------|----------|
| [ ] | **Supabase Storage** | 1 GB | Pay-as-you-go | $0.05/GB | Easy | Small to medium projects, integrated auth |
| [ ] | **AWS S3** | 12 months free (5 GB) | Pay-as-you-go | $0.023/GB | Medium | Large-scale, high-traffic applications |
| [ ] | **Google Cloud Storage** | 5 GB free | Pay-as-you-go | $0.020/GB | Medium | Google ecosystem integration, scalability |
| [ ] | **Azure Blob Storage** | 5 GB free | Pay-as-you-go | $0.0184/GB | Medium | Microsoft ecosystem, enterprise features |
| [ ] | **Cloudflare R2** | 10 GB free | Pay-as-you-go | $0.015/GB | Easy | Cost-effective, no egress fees |
| [ ] | **DigitalOcean Spaces** | None | $5/month + usage | $0.025/GB | Easy | Simplicity, affordable baseline |
| [ ] | **Backblaze B2** | 10 GB free | Pay-as-you-go | $0.006/GB | Easy | Most cost-effective option |
| [ ] | **MinIO (Self-hosted)** | Open source | Self-hosted costs | Varies | Hard | Full control, on-premises deployment |

#### Database Backends

The following database backends are supported for storing application data and user information:

| Status | Backend | Type | Free Tier | Pricing | Startup Cost | Scalability | Best For |
|--------|---------|------|-----------|---------|--------------|-------------|----------|
| [ ] | **Firebase Realtime DB** | NoSQL | 100 MB storage | $1/GB stored | None | Good | Real-time sync, rapid prototyping |
| [ ] | **Supabase (PostgreSQL)** | SQL | 500 MB | $25/month | None | Excellent | Full-featured SQL, open source |
| [ ] | **Turso (SQLite Cloud)** | SQL | 9 GB | $29/month | None | Good | Edge computing, low latency |
| [ ] | **Turso (In-Browser)** | SQL | Unlimited | Free | None | Local only | Offline-first, no backend needed |
| [ ] | **PlanetScale (MySQL)** | SQL | 5 GB | $29/month | None | Excellent | MySQL compatibility, branching |
| [ ] | **SurrealDB** | Multi-model | Unlimited | $99/month | None | Excellent | Graph + document + time-series |
| [ ] | **MongoDB Atlas** | NoSQL | 512 MB | $57/month | None | Excellent | Document-oriented, flexible schema |
| [ ] | **Neon (PostgreSQL)** | SQL | 3 GB | $14/month | None | Excellent | Serverless PostgreSQL, auto-scaling |
| [ ] | **Fauna** | NoSQL | 100 MB | $25/month | None | Excellent | ACID transactions, multi-region |
| [ ] | **CockroachDB** | SQL | 5 GB free | $29/month | None | Excellent | Distributed SQL, high availability |

#### Recommended Combinations

**For Rapid Prototyping:**
- Database: Firebase Realtime DB (free tier)
- Storage: Supabase Storage (1 GB free)

**For Production (Cost-Conscious):**
- Database: Neon PostgreSQL ($14/month)
- Storage: Cloudflare R2 (10 GB free, then $0.015/GB)

**For Enterprise Scale:**
- Database: PlanetScale or CockroachDB
- Storage: AWS S3 or Google Cloud Storage

**For Privacy-First (Self-Hosted):**
- Database: SurrealDB (self-hosted)
- Storage: MinIO (self-hosted)

**For Edge Computing:**
- Database: Turso (SQLite Cloud)
- Storage: Cloudflare R2

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses `pnpm` as the package manager. Install it globally:

```bash
npm install --global pnpm
```

You should also use Node.js version specified in `.nvmrc`. You can use [nvm](https://github.com/nvm-sh/nvm) to manage local versions:

```bash
nvm use
```

<!-- Installation -->
### :gear: Installation

Clone the project

```bash
git clone https://github.com/skamansam/questlists-svelte.git
cd questlists-svelte
```

Install dependencies

```bash
pnpm install
```

Set up environment variables by copying the example file:

```bash
cp .env.example .env
```

Then fill in your Firebase configuration in the `.env` file.

<!-- Run Locally -->
### :running: Run Locally

Start the development server

```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

<!-- Running Tests -->
### :test_tube: Running Tests

Run all tests (unit + e2e):

```bash
pnpm test
```

Run unit tests only:

```bash
pnpm test:unit
```

Run e2e tests only:

```bash
pnpm test:e2e
```

<!-- Deployment -->
### :triangular_flag_on_post: Deployment

Build the project for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

The app is deployed to GitHub Pages at https://skamansam.github.io/questlists-svelte


<!-- Usage -->
## :eyes: Usage

QuestLists is designed to be intuitive and easy to use:

1. **Browse or Create Lists** – Explore crowd-sourced lists or create your own
2. **Select Items** – Choose which items from a list you want to track
3. **Track Progress** – Mark items with multi-state progress (not started, in progress, completed, etc.)
4. **Offline Support** – Your progress is saved locally in your browser, no login required
5. **Sync to Cloud** – Optionally create an account and sync your data across devices

The app works great for:
- Game quest tracking
- Shopping lists
- Inventory management
- TODO lists
- Music/video playlists
- And much more!

<!-- Roadmap -->
## :compass: Roadmap

QuestLists is originally intended for game quests and will have the following features implemented:

* [x] Multi-state checklist functionality
* [x] Browser caching for offline usage
* [x] Crowd-sourced list creation
* [ ] User accounts and cloud sync
* [ ] Advanced filtering and sorting
* [ ] Custom list templates
* [ ] Modular database backend support
* [ ] Modular storage backend support

### Modular Database Backend Support

* [ ] Firebase Realtime DB
* [ ] Supabase (PostgreSQL)
* [ ] Turso (SQLite Cloud)
* [ ] Turso (In-Browser)
* [ ] PlanetScale (MySQL)
* [ ] SurrealDB
* [ ] MongoDB Atlas
* [ ] Neon (PostgreSQL)
* [ ] Fauna
* [ ] CockroachDB

### Modular Storage Backend Support

* [ ] Supabase Storage
* [ ] AWS S3
* [ ] Google Cloud Storage
* [ ] Azure Blob Storage
* [ ] Cloudflare R2
* [ ] DigitalOcean Spaces
* [ ] Backblaze B2
* [ ] MinIO (Self-hosted)


<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/skamansam/questlists-svelte/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=skamansam/questlists-svelte" />
</a>

Contributions are always welcome! To keep things simple, we use GitHub and associated tools that anyone can use.

### Getting Started with Contributing

1. **Fork the repo** or ask to join the team
2. **Check for existing issues** – See if there's already an issue for your feature/bugfix. If not, create one!
3. **Create a branch** – Include the issue number in your branch name (e.g., `4-my-new-feature` or `my-new-feature-issue-4`)
4. **Make your changes** – Hack away!
5. **Commit with issue reference** – Include the issue number in your commit message (e.g., `Add feature for foo-bar elements. [46]`). Commit messages should read like commands, not summaries.
6. **Run tests** – Ensure all tests pass before submitting:
   ```bash
   pnpm test
   pnpm check
   pnpm lint
   ```
7. **Create a pull request** – Submit against the main branch. All PRs require review before merging.

### Code Style Guide

- **Line length**: 120 characters (the 80 char limit hasn't been applicable for 20+ years)
- **Console usage**: You ARE allowed to use `console.[error, info, warn]` in production code. Use them thoughtfully and only when necessary.
- **Linting**: ESLint and Prettier checks are run on every PR. Your code must pass these checks to be merged.

Run the linter yourself:
```bash
pnpm lint
```

<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/skamansam/questlists-svelte/blob/main/CODE_OF_CONDUCT.md)

<!-- FAQ -->
## :grey_question: FAQ

- **Do I need to create an account to use QuestLists?**

  + No! You can use QuestLists without creating an account. Your progress is saved locally in your browser. Creating an account allows you to sync your data across devices.

- **Will my data be lost if I clear my browser cache?**

  + Yes, if you're using local storage without an account. If you create an account and sync to Firebase, your data will be preserved.

- **Can I contribute lists to the community?**

  + Yes! That's the core idea of QuestLists. You can create and share lists for others to use.

- **What if I find a bug?**

  + Please report it on our [GitHub Issues](https://github.com/skamansam/questlists-svelte/issues/) page. Include steps to reproduce and any error messages.


<!-- License -->
## :warning: License

Distributed under the MIT License. See [LICENSE](https://github.com/skamansam/questlists-svelte/blob/main/LICENSE) for more information.


<!-- Contact -->
## :handshake: Contact

For questions, suggestions, or feedback:

- **GitHub Issues**: [Report bugs or request features](https://github.com/skamansam/questlists-svelte/issues/)
- **Project Link**: [https://github.com/skamansam/questlists-svelte](https://github.com/skamansam/questlists-svelte)
- **Live Demo**: [https://skamansam.github.io/questlists-svelte](https://skamansam.github.io/questlists-svelte)


<!-- Acknowledgments -->
## :gem: Acknowledgements

This project is built with and uses resources from:

- [Svelte](https://svelte.dev/) - The reactive JavaScript framework
- [SvelteKit](https://kit.svelte.dev/) - The web app framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Playwright](https://playwright.dev/) - E2E testing
- [Vitest](https://vitest.dev/) - Unit testing
- [Storybook](https://storybook.js.org/) - Component documentation
- [Twintrinsic](https://github.com/skamansam/twintrinsic) - UI component library
- [Shields.io](https://shields.io/) - Badge generation
- [Awesome README](https://github.com/matiassingers/awesome-readme) - README inspiration
