# Questlists (svelte version)

> A svelte version used to develop and test the Twintrinsic UI Library. These two are being developed alongside each other.

[![Run Tests](https://github.com/BizziQuest/QuestListsFB/actions/workflows/PRtests.yml/badge.svg)](https://github.com/BizziQuest/QuestListsFB/actions/workflows/PRtests.yml)
[![Last Deploy Status](https://github.com/BizziQuest/QuestListsFB/actions/workflows/deploy.yml/badge.svg)](https://github.com/BizziQuest/QuestListsFB/actions/workflows/deploy.yml)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/BizziQuest/QuestListsFB) 

# QuestLists

QuestLists is a crowd-sourcing application that organizes lists of any sort. The crowd builds the lists, you say what
you want to use from that list, and then use it as a normal checklist. At its heart, this is an _n_-state checklist
application.

The intention is to use the crowd to build lists for games, inventories, shopping, music, videos, and more! Once the
lists are built and created, you can add/remove your items from them. It uses the browser's caching for data, so you
don't even have to login to use it (only for the same devise)!

NOTE: This is the frontend for QuestLists, with a firebase backend, by default. More backends will be developed
separately.

## Demo

This is the public code for http://skamansam.github.io/questlists-svelte. The code is redeployed when I finish any feature or
want to test something, so it may change a lot and may break down  often. I will do my best not to disturb any data
that is already there, but be warned, your data may be a casualty of development!

Once everything is stable, it will become a REAL application, and all the notices about the demo will be removed.

## Roadmap

Questlists is originally intended for game quests, so will have the following ideas implemented first:

  1. Your progress in quests.
  2. Items collected
  3. Overall progress in the game
  4. Locations reached
  5. Information about any other object in the game

I am sure you can generalize these ideas to fit any circumstance, so i will eventually create a few demos of lists for
everyday use, such as a shopping list and various TODO lists.

### Future Plans

  1. A modular DB backend with firebase as the default so it can be deployed


# Contributing

To keep things simple, I am only using GitHub and associated tools that anyone can use. I am even deploying this app to
GitHub pages. For ticket management, I am using ZenHub, so you can use it too, if you want. All tickets will be managed
through ZenHub, but you can create Issues in GitHub if you want, as well.

## GitHub

If you would like to help with the development of this project, follow these instructions:
```text
TL;DR - Fork repo and create a new branch for each issue, then create a new pull request. I won't be too 
harsh on the rest.
```

  1. fork this repo (or ask to join the BizziQuest team!)
  2. See if there is an issue currently in GitHub that addresses your feature, bugfix, etc. If not, create one!
  3. create a new branch in your forked repo, including the ticket number in the branch name, like `4-my-new-feature`
     or `my-new-feature_issue-4` or `my_new_feature-issue_4`. You get the idea.
  4. hack away!
  5. When committing your changes, please make sure you include the ticket number in the description, surrounded b y
     brackets. Something like `make sure we use the correct ES2016 syntax for foo-bar elements. [46]`. The commit
     message should read like a command, not a summary of what you did. (This is a hard one to follow, as you can tell
     from my commit messages, but it really does help new-comers get an understanding of what's going on.)
  6. Make sure ALL tests run successfully by running `yarn check`. This is to ensure you do not bug the application.
     Automated tests run for every PR and merge, and any code will not be merged without passing tests and linter
     checks.
  7. Create a new pull request against the develop branch once you are happy with your code
  8. Wait for the team to review and merge the changes. Merges cannot happen without review.

## App Setup
We are using node version 10.x, due to compatibility with the firebase libraries. You should be using it as well. 
You can [install nvm](https://github.com/nvm-sh/nvm) to manage local versions of node.

```
nvm use
npm install -g yarn
yarn
yarn serve
```

## Running Questlists for Development

Just run `yarn dev` or `yarn serve` from the repo's directory. Running the dev command will start a local firebase
emulator for you to connect for testing and local development. 

## Deploying Questlists

You can set up your own firebase instance at https://firebase.google.com. From there, you can configure
`firebaseConfig` in `main.js` with your project's name. You need to have the following environment variables for
deploying to your firebase instance. You can put these in a `.env` file, or copy the `.env.example` file.

```
VITE_APP_FIREBASE_API_KEY
VITE_APP_FIREBASE_AUTH_DOMAIN
VITE_APP_FIREBASE_DATABASE_URL
VITE_APP_FIREBASE_STORAGE_BUCKET
VITE_APP_FIREBASE_MESSAGING_SENDER_ID
VITE_APP_FIREBASE_APP_ID
```


## Code Style Guide
Having a style guide really helps code readability and lessens cognitive overhead when developing software. I am using 
the Airbnb rules for eslint, with a few differences:

1. line length is 120 characters. the 80 char limit has not been applicable for more than 20 years.
1. You ARE allowed to use `console.[error, info, warn]` in production code. The team will be looking at these to
    determine whether they are used correctly and are necessary. You are not allowed to just `console.log`, as that
    usually means you are not thinking about **why** you need to print to the browser console.

NOTE: `eslint` is run as part of the testing for each PR so PRs will not be merged that don't pass the tests _and_
       linter. If you want to run the linter yourself, you can run `yarn check`.

<!--
Hey, thanks for using the awesome-readme-template template.  
If you have any enhancements, then fork this project and create a pull request 
or just open an issue with the label "enhancement".

Don't forget to give this project a star for additional support ;)
Maybe you can mention me or this repo in the acknowledgements too
-->
<div align="center">

  <img src="assets/logo.png" alt="logo" width="200" height="auto" />
  <h1>Awesome Readme Template</h1>
  
  <p>
    An awesome README template for your projects! 
  </p>
  
  
<!-- Badges -->
<p>
  <a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/Louis3797/awesome-readme-template" alt="contributors" />
  </a>
  <a href="">
    <img src="https://img.shields.io/github/last-commit/Louis3797/awesome-readme-template" alt="last update" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/network/members">
    <img src="https://img.shields.io/github/forks/Louis3797/awesome-readme-template" alt="forks" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/stargazers">
    <img src="https://img.shields.io/github/stars/Louis3797/awesome-readme-template" alt="stars" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/issues/">
    <img src="https://img.shields.io/github/issues/Louis3797/awesome-readme-template" alt="open issues" />
  </a>
  <a href="https://github.com/Louis3797/awesome-readme-template/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/Louis3797/awesome-readme-template.svg" alt="license" />
  </a>
</p>
   
<h4>
    <a href="https://github.com/Louis3797/awesome-readme-template/">View Demo</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template">Documentation</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Report Bug</a>
  <span> · </span>
    <a href="https://github.com/Louis3797/awesome-readme-template/issues/">Request Feature</a>
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


<!-- Screenshots -->
### :camera: Screenshots

<div align="center"> 
  <img src="https://placehold.co/600x400?text=Your+Screenshot+here" alt="screenshot" />
</div>


<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://nextjs.org/">Next.js</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
    <li><a href="https://tailwindcss.com/">TailwindCSS</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
    <li><a href="https://go.dev/">Golang</a></li>
    <li><a href="https://nestjs.com/">Nest.js</a></li>
    <li><a href="https://socket.io/">SocketIO</a></li>
    <li><a href="https://www.prisma.io/">Prisma</a></li>    
    <li><a href="https://www.apollographql.com/">Apollo</a></li>
    <li><a href="https://graphql.org/">GraphQL</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com/">MySQL</a></li>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
    <li><a href="https://redis.io/">Redis</a></li>
    <li><a href="https://neo4j.com/">Neo4j</a></li>
    <li><a href="https://www.mongodb.com/">MongoDB</a></li>
  </ul>
</details>

<details>
<summary>DevOps</summary>
  <ul>
    <li><a href="https://www.docker.com/">Docker</a></li>
    <li><a href="https://www.jenkins.io/">Jenkins</a></li>
    <li><a href="https://circleci.com/">CircleCLI</a></li>
  </ul>
</details>

<!-- Features -->
### :dart: Features

- Feature 1
- Feature 2
- Feature 3

<!-- Color Reference -->
### :art: Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Primary Color | ![#222831](https://via.placeholder.com/10/222831?text=+) #222831 |
| Secondary Color | ![#393E46](https://via.placeholder.com/10/393E46?text=+) #393E46 |
| Accent Color | ![#00ADB5](https://via.placeholder.com/10/00ADB5?text=+) #00ADB5 |
| Text Color | ![#EEEEEE](https://via.placeholder.com/10/EEEEEE?text=+) #EEEEEE |


<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`ANOTHER_API_KEY`

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses Yarn as package manager

```bash
 npm install --global yarn
```

<!-- Installation -->
### :gear: Installation

Install my-project with npm

```bash
  yarn install my-project
  cd my-project
```
   
<!-- Running Tests -->
### :test_tube: Running Tests

To run tests, run the following command

```bash
  yarn test test
```

<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/Louis3797/awesome-readme-template.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn start
```


<!-- Deployment -->
### :triangular_flag_on_post: Deployment

To deploy this project run

```bash
  yarn deploy
```


<!-- Usage -->
## :eyes: Usage

Use this space to tell a little more about your project and how it can be used. Show additional screenshots, code samples, demos or link to other resources.


```javascript
import Component from 'my-project'

function App() {
  return <Component />
}
```

<!-- Roadmap -->
## :compass: Roadmap

* [x] Todo 1
* [ ] Todo 2


<!-- Contributing -->
## :wave: Contributing

<a href="https://github.com/Louis3797/awesome-readme-template/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Louis3797/awesome-readme-template" />
</a>


Contributions are always welcome!

See `contributing.md` for ways to get started.


<!-- Code of Conduct -->
### :scroll: Code of Conduct

Please read the [Code of Conduct](https://github.com/Louis3797/awesome-readme-template/blob/master/CODE_OF_CONDUCT.md)

<!-- FAQ -->
## :grey_question: FAQ

- Question 1

  + Answer 1

- Question 2

  + Answer 2


<!-- License -->
## :warning: License

Distributed under the no License. See LICENSE.txt for more information.


<!-- Contact -->
## :handshake: Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - email@email_client.com

Project Link: [https://github.com/Louis3797/awesome-readme-template](https://github.com/Louis3797/awesome-readme-template)


<!-- Acknowledgments -->
## :gem: Acknowledgements

Use this section to mention useful resources and libraries that you have used in your projects.

 - [Shields.io](https://shields.io/)
 - [Awesome README](https://github.com/matiassingers/awesome-readme)
 - [Emoji Cheat Sheet](https://github.com/ikatyang/emoji-cheat-sheet/blob/master/README.md#travel--places)
 - [Readme Template](https://github.com/othneildrew/Best-README-Template)
