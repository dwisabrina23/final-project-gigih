<p align="right">:sparkles:GIGIH 2.0:sparkles:</p>
<h1 align="center">SPOTICLONE</h1>

<p align="center">
<a href="http://unlicense.org/">
<img src="https://img.shields.io/github/license/dwisabrina23/final-project-gigih?style=flat-square" alt="License: Unlicense">
</a>

<a href="https://github.com/dwisabrina23/final-project-gigih">
<img src="https://img.shields.io/github/last-commit/dwisabrina23/final-project-gigih?style=flat-square" alt="Last Commit">
</a>

<a href="https://github.com/markdown-templates/markdown-snippets/fork">
<img src="https://img.shields.io/github/forks/dwisabrina23/final-project-gigih?style=flat-square" alt="Forks">
</a>
  
<a href="https://github.com/dwisabrina23/final-project-gigih/graphs/contributors">
<img src="https://img.shields.io/github/contributors/dwisabrina23/final-project-gigih?style=flat-square" alt="Contributor">
</a>
</p>


<p align="center">
<strong><a href="https://reservaksin.live">Preview Link</a></strong>
</p>

## Preview
| Admin | User |
| ----------- | ----------- |
| <img src="./Dashboard-admin.svg" alt="preview admin">| <img src="./Landing Page- Before Login.svg" alt="preview user"> |

## 🎯 Project Goal
Gigih adalah seorang anak muda yang menyukai musik. Hampir setiap hari dia
mendengarkan musik di Spotify dari berbagai genre. Dia ingin membuat playlist (daftar
putar) yang berisikan lagu lagu yang sedang ia gandrungi. Bantulah Gigih dengan
membuat sebuah aplikasi berbasis web sehingga Gigih dapat membuat playlist dengan
mudah

## 🚩 MVP
| Main | Additional |
| ----------- | ----------- |
| <ul><li>- [x] OAuth using Spotify account</li>| <ul><li>- [x] Edit playlist cover image</li> |
| <ul><li>- [x] Create new playlist</li>| <ul><li>- [x] Edit playlist description</li> |
| <ul><li>- [x] Add items to playlist</li>| <ul><li>- [x] Create Spotify quiz</li> |
| <ul><li>- [x] Show user playlist</li>| <ul><li>- [x] Play Spotify quiz</li> |
| <ul><li> </li>| <ul><li> </li> |

## 💻 Tecnology That We Used
  * [React JS](reactjs.org)
  * [Typescript](typescriptlang.org/)
  * [Boostrap5](https://getbootstrap.com/docs/5.0/getting-started/introduction/)
  * [Chakra-UI](https://chakra-ui.com/)
  * [Redux](redux.js.org)
  * [GraphQL with Hasura](https://hasura.io)
  
## 🚀 Installation
1. Clone this repository using 
```html
git clone https://github.com/dwisabrina23/final-project-gigih.git
```
  
2. Install all required package by run this command in your CMD
```html
npm install
```
3. Get your **spotify client ID**
  - login to [spotify developer](https://developer.spotify.com/dashboard/)
  - create an App
  - copy your clientID
  - go to edit settings > set your redirects URL to ```https://developer.spotify.com/dashboard/```
  
4. Create .env.local file and place your client id using this format
```html
REACT_APP_SPOTIFY_CLIENT_ID = your-spotify-client-id
```
5. App ready to serve
```html
npm start
```
  or
```html
yarn start
```
