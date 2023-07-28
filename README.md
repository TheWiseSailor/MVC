# Model-View-Controller (MVC) Challenge: Tech Blog

## Overview

Welcome to the Tech Blog application! This is a web-based platform that allows users to create, publish, and interact with blog posts on various technology-related topics.

## Table of Contents

- [Key Features](#key-features)🔑
- [Installation](#installation)💻
- [Usage](#usage)📲
- [Contributing](#contributing)📜
- [Sources](#sources)🔎
- [License](#license)💳
- [Contact](#contact)📩
- [Heroku](#heroku)
- [Deployed Site](#deployed-site)🎞
- [Repository](#repository)📂
- [Tools](#tools)🛠

## Key Features <a name="key-features"></a>

- User Authentication: Securely sign up and log in to the platform using unique usernames and passwords. Your credentials are hashed for added security.

- Homepage with Blog Posts: Upon logging in, you are presented with the homepage that displays existing blog posts, including their titles and creation dates.

- Viewing and Commenting: Click on any blog post to view its full contents. Leave comments on posts to engage with other developers and share your thoughts.

- Dashboard: Access your personalized dashboard, where you can manage your blog posts. View, update, or delete your existing posts with ease.

- Adding New Blog Posts: Create fresh content by adding new blog posts. Simply provide a title and the post's contents to share your insights with the community.

- User Session Management: The application handles session timeout when idle for extended periods, prompting you to log in again for added security.

The Tech Blog application offers a user-friendly and secure environment for developers to publish articles, interact with fellow bloggers, and foster meaningful discussions around technology topics. Get started today and become part of the vibrant developer community!

## Installation <a name="installation"></a>

To install and run the , follow these steps: <br>

1. Clone the repo: `git clone <repository_url>`
2. Navigate to the project directory: `cd <cloned_repo>`
3. Install the necessary dependencies: `npm install`
4. Set up environment variables for the MySQL connection in a `.env` file
5. Create the database using the `schema.sql` file: `mysql -u <username> -p < schema.sql`
6. Seed the database with test data: `npm run seed`
7. Start the application: `npm start`
8. Access the application at [http://localhost:3001](http://localhost:3001)

## Usage <a name="usage"></a>

- Signing Up and Logging In: To use the Tech Blog application, first, visit the site. If you don't have an account, click on "Sign Up" to create one with a username and password. If you already have an account, click on "Log In" and enter your credentials.

- Exploring Blog Posts: Once logged in, you'll see the homepage with existing blog posts. Click on any post to view its contents. Leave comments on posts if desired.

- Managing Your Blog Posts: Access your dashboard to view, delete, or update your existing blog posts. To add a new post, click on "Add New Post" and provide a title and contents.

- Logging Out and Session Timeout: Click "Log Out" to sign out. If idle for too long, the session will timeout, and you'll need to log in again.

## Contributing <a name="contributing"></a>

1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name: `git checkout -b my-branch`
3. Make the necessary changes and commit them: ` git commit -m "Description of changes"`
4. Push your changes to your forked repository: `git push origin my-branch`

## Sources<a name="sources"></a>

- https://stackoverflow.com/
- https://developer.mozilla.org/en-US/
- https://www.codecademy.com/
- https://www.freecodecamp.org/
- https://www.youtube.com/
- https://www.geeksforgeeks.org/
- https://handlebarsjs.com/
- https://devdocs.io/handlebars/
- https://www.jsdelivr.com/
- Tutor (Katherine Redford)

## License <a name="license"></a>

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Contact <a name="contact"></a>

You may contact me by rudasilljay@gmail.com

## Deployed Site <a name="deployed-site"></a>

https://thewisesailor.github.io/Model-View-Controller-MVC-Challenge-Tech-Blog/ <br>

https://techblogger69-127d9bdcae73.herokuapp.com/

## Repository <a name="repository"></a>

https://github.com/TheWiseSailor/Model-View-Controller-MVC-Challenge-Tech-Blog

## Heroku<a name="heroku"></a>

To deploy the Tech Blog application on Heroku, follow these steps:

1. Ensure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed on your machine.
2. Open a terminal or command prompt and navigate to the project directory.
3. If you haven't already initialized a Git repository for your project, run the following command: `git init`.
4. Log in to your Heroku account using the Heroku CLI: `heroku login`.
5. Create a new Heroku app: `heroku create <your-app-name>`.
6. Set up environment variables on Heroku. If your application requires environment variables (e.g., database connection), you can set them using the Heroku CLI or through the Heroku dashboard.

##

## Tools<a name="tools"></a>

[![GitHub](https://img.shields.io/badge/--181717?logo=github&logoColor=ffffff)](https://github.com/)
[![Visual Studio](https://badgen.net/badge/icon/visualstudio?icon=visualstudio&label)](https://visualstudio.microsoft.com)
[![JavaScript](https://badgen.net/badge/icon/javascript?icon=javascript&label)](https://www.javascript.com/)
[![.gitignore](https://badgen.net/badge/icon/git?icon=git&label)](https://git-scm.com/doc)
[![Node.js](https://badgen.net/badge/icon/nodejs?icon=nodejs&label)](https://nodejs.org/)
[![npm](https://badgen.net/badge/icon/npm?icon=npm&label)](https://npmjs.com/)
[![Express.js](https://badgen.net/badge/icon/express?icon=express&label)](https://expressjs.com/)
[![MySQL2](https://badgen.net/badge/icon/mysql2?icon=npm&label)](https://www.npmjs.com/package/mysql2)
[![Sequelize](https://badgen.net/badge/icon/sequelize?icon=sequelize&label)](https://sequelize.org/)
[![dotenv](https://badgen.net/badge/icon/dotenv?icon=npm&label)](https://www.npmjs.com/package/dotenv)
[![Jest](https://img.shields.io/badge/Jest-Test%20Coverage-green)](https://jestjs.io/)
[![Inquirer](https://img.shields.io/badge/Inquirer-8.2.4-blue)](https://github.com/SBoudrias/Inquirer.js)
[![bcrypt](https://badgen.net/badge/icon/bcrypt?icon=npm&label)](https://www.npmjs.com/package/bcrypt)
[![connect-session-sequelize](https://badgen.net/badge/icon/connect-session-sequelize?icon=npm&label)](https://www.npmjs.com/package/connect-session-sequelize)
[![express-handlebars](https://badgen.net/badge/icon/express-handlebars?icon=npm&label)](https://www.npmjs.com/package/express-handlebars)
