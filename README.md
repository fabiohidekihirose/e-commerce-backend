<a name="readme-top"></a>
<br />

<div align="center">

  <h3 align="center">Home Decor</h3>

  <p align="center">
   Backend of Home Decor, an e-commerce app for stylish furniture.
    <br />
    <a href="https://github.com/fabiohidekihirose/home-decor-frontend"><strong>Explore the docs »</strong></a>
    <br />
    <a href="https://github.com/fabiohidekihirose/home-decor-frontend"><strong>Check out Home Decor Frontend</strong></a>
    <br />
    <br />
    <a href="https://github.com/niidl/niidl-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/niidl/niidl-client/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#features">Features</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

[Home Decor app](https://home-decor-fabiohidekihirose.vercel.app/)

Welcome to our premier online furniture store, where style, comfort, and quality converge to transform your living spaces into extraordinary havens. At our e-commerce furniture boutique, we bring you an extensive collection of exquisite furniture pieces curated to meet your unique taste and elevate your home decor.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

This section lists frameworks/libraries used to bootstrap the project.

- [![TypeScript][typescript]][typescript-url]
- [![Node][node.js]][node-url]
- [![Express][express.js]][express-url]
- [![Prisma][prisma]][prisma-url]
- [![PostgreSQL][postgresql]][postgresql-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Getting Started

To get a local copy up and running follow these simple steps.
Please keep in mind this repo only includes the backend, you will also need fork Home Decor's frontend repo which can be found here:
[home-decor-frontend](https://github.com/fabiohidekihirose/home-decor-frontend)

### Installation

_Below you will find the basics on installation and set up._
_Please note you will need to follow the steps found on [home-decor-frontend](https://github.com/fabiohidekihirose/home-decor-frontend) before any deployment can be done._

1. Clone the repo
   ```sh
   git clone https://github.com/your_username_/Project-Name.git
   ```
2. Module Installation
   ```sh
   npm install
   ```
3. Create a Postgres Database
   ```sh
   psql postgres
   CREATE DATABASE db_name_here
   ```
4. Configure .env File
   _Create a .env file in your ROOT directory with the following_
   ```js
   DATABASE_URL = 'postgresql://postgres:test@localhost:5432/db_name_here';
   ACCESS_TOKEN_SECRET="your_access_token_secret_here"
   PORT=8000
   ```
5. Migration and Seeds via Prisma
   ```sh
   npx prisma migrate dev
   npx prisma generate
   npx prisma db seed
   ```
6. Run Server
   The server will be running on port 8000.
   ```sh
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Features

- Create an account
- Personal dashboard
- Add and remove products from cart
- Search by key words
- Filter by department
- Favorites
- Rating and review

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Contact

- Hideki Hirose - [@fabiohidekihirose](https://github.com/fabiohidekihirose) - fabiohidekihirose@gmail.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[typescript]: https://img.shields.io/badge/TypeScript-007acc?style=for-the-badge&logo=typescript&logoColor=white
[typescript-url]: https://www.typescriptlang.org/
[node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=66cc33
[node-url]: https://nodejs.org/en/
[express.js]: https://img.shields.io/badge/express.js-black?style=for-the-badge
[express-url]: https://expressjs.com/
[prisma]: https://img.shields.io/badge/Prisma-002e63?style=for-the-badge&logo=prisma&logoColor=white
[prisma-url]: https://www.prisma.io/
[postgresql]: https://img.shields.io/badge/PostgreSQL-008bb9?style=for-the-badge&logo=postgresql&logoColor=white
[postgresql-url]: https://www.postgresql.org/
