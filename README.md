# Netflix-Clone

In this project my aim was imitate Netflix homepage. Data is coming from an API ([https://www.themoviedb.org/documentation/api](https://www.themoviedb.org/documentation/api)). I used React Hooks for this project. Project coded by me with following Clever Programming.

### 🎆✨ Live Demo => [http://netflix.orhanozkercin.com/](http://netflix.orhanozkercin.com/)

## Author ✍️  

👤 <b> Orhan Özkerçin </b>

## Built With

- HTML5
- CSS3
- React Hooks
- [Tmbd Api](https://www.themoviedb.org/documentation/api)

## Installation

- Step 1: You need to run `yarn` command on terminal.
- Step 2: You need to have [TMBD API](https://www.themoviedb.org/documentation/api) Api key to get movies and series information.
- Step 3: After you get api key, you need to reate `.env.local` file to your root folder and after that you need to define variable for your api key. `I.E: REACT_APP_API_KEY = 'YOUR_API_KEY'`
- Step 4: After steps I mention above you can start your application with `yarn start` command.

## Components and Files

### Configuration Files

- <b>requests.jsx : </b> In this file you can change genres of movies or you can add new categories. All of api endpoints I took from [official documentation ](https://developers.themoviedb.org/3). If you want to add or change some stuff you need to look documentation for endpoints.
- <b> axios.js : </b> In this file I added baseUrl I got from again official documentation. I used `Axios` which is package for http requests. I created baseUrl for endpoints in this file.

### UI Components

- <b> Navbar.jsx : </b> This component is responsable for navbar as you can understand. I styled this navbar with `Navbar.css`

<p align="center">
<img src="https://i.ibb.co/CtGq53V/nav.png" alt="nav" border="0" style='text-align:center'>
 </p>
 
 - <b> Hero.jsx : </b> This component is responsable for hero section. In this component I managed for big picture that welcomes you and content on that picture. Pictures randomly changing from `Netflix Originals` everytime you reflesh the page. Styling about this component is managed in `Hero.css`

<p align='center'><img src="https://i.ibb.co/6ZQSCbx/hero.png" alt="hero" border="0"></p>

- <b> Row.jsx : </b> This component is responsable for each category that showing in all page. All categories are passing with props to this component. `Row.css` is style file for this component.

<p align='center'><img src="https://i.ibb.co/93vgfGQ/row.png" alt="row" border="0"></p>

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**
