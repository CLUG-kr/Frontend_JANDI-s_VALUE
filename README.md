<div align="center">
    <img src="./src/assets/images/logo.svg" />
</div>
<div align="center">
    <img src="./src/assets/images/thumbnail.png" />
</div>


## 🎥 Live Service

- **Live Service**
  - [Go](https://www.jandevelop.com)
- Beta for testing
  - [Go](https://frontend-jandi-s-value-git-develop-hoondeveloper.vercel.app/intro)



## ✈️ Tech stacks

### Core

- React 17
- Craco for customizing CRA
- TypeScript
- node-sass for using SCSS
- Context API
- React Router
- OAuth 2.0 for Access-Token handling
- Axios for using RESTful API

### Styling

- @emotion
- TailwindCSS
- twin.macro
- PostCSS 7
- autoprefixer

### Data Visualization

- Antd
- Antd Chart

### Code Linting

- ESLint
- Prettier
- @emotion/babel-preset-css-prop

### CI

- Vercel
- Heroku

## 🛰 Features

### Authentication

<div align="center">
    <img src="./src/assets/images/thumbnail_auth.png" />
    <img src="./src/assets/images/thumbnail_repo.png" />
</div>


- OAuth 2.0 Token Handling
  - When we toggle `GitHub Login Button`, this app requests authorization information to GitHub.
  - Then, we requests `Access Token` to our back-end server.
- Conditional Routes (natively functioned)
  - if you are not authenticated, any private routes **can't be accessed.**
  - In root, the conditional routes **prevent** users from `NOT AUTHENTICATED`.
- Updating Authentication States
  - After authentication, users can update or renew auth states.
    - Change target repository
    - Sign out && **revoke** `Access Token`

![](./src/assets/images/gif_header_func.gif)

### Data Analysis

#### Repository Summary

#### Personalization

### Data Visualization

<div align="center">
    <img src="./src/assets/images/thumbnail_visualization.png" />
</div>


### Data Caching

This app is running based on GitHub REST API v3. The public API, as everyone knows, has a request **limit**. To maximize that limit, requests are used using **OAuth tokens**, but excessive requests can result in usage restrictions and service disruption.

So, to avoid this, we use **data caching**

- Data that does not need to be **retrieved** are cached as much as possible.
- Dynamic data everytime changes is **cached and initialized** at regular intervals.

### Cross-platform

#### Supported platforms

- PC with Modern Browsers (Not support Internet Explorer 11⬇)
  - Chrome
  - Edge
  - Safari
  - Firefox
  - Opera
- Mobile with every browsers
  - **Mobile Responsive Design Provided (100% Service Coverage)**

## 🏎 Getting Started

### Development

1. Clone this repository

   ```bash
   $ git clone https://github.com/CLUG-kr/Frontend_JANDI-s_VALUE.git
   ```

2. Install node packages with npm

   ```bash
   $ npm i
   ```

3. Start developing

   ```bash
   $ npm run start
   ```

### Deployment

- Vercel (stable)
- Netlify (stable)
- Firebase (stable)

## 😎 Customizing

- Core
  - Authentication
    - `src/oauth/AuthData.ts` (Client ID, Client Secret, Rediret URI)
- Styles
  - Background Gradient
    - `src/styles/Common.ts` (emotion css object)
  - Font
    - `src/styles/font.scss`
  - Theme Overrides
    - `src/styles/theme-override.scss`

    

## 🐛 Bug Report

[Issues](https://github.com/CLUG-kr/Frontend_JANDI-s_VALUE/issues)

## 💻 Contribution Guide

### Pull Request

#### Forked strategy

```sh
# Fork this repository to yours.
$ git clone https://github.com/CLUG-kr/Frontend_JANDI-s_VALUE.git
$ cd gatsby-starter-bee

# Install npm packages and start this project.
$ npm install
$ npm run start

# (Working on your own..!)

# After that
$ git commit [...]
$ git push origin [YOUR_REPOSITORY]

# Enroll pull-request!
```

### Commit message rules

Consider starting the commit message:

- `refactor:` prefix.
  - when setting new development environment or refactoring codes
- `feat:` prefix.
  - when creating new feature.
- `fix:` prefix.
  - when fixing a bug.
- `docs:` prefix.
  - when adding document.

## LICENSE

Not yet decided.
