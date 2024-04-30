<a name="top"></a>

<p align="center">
  <img title="JavaScript" src="https://res.cloudinary.com/idepixel/image/upload/c_scale,h_100,w_200/v1683961930/parental_advisory_nerd.webp"/>
</p>

<hr>
<p align="center">
  UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA<br>
  Virrectorado Académico<br>
  Coordinación General de Pregrado<br>
  Ingeniería Informática<br>
  Desarrollo Web
</p>

# INDEX

- [¿WHAT IS TECH TALENT HUB?](#what-is)
- [REQUIREMENTS](#requirements)
- [STEPS TO DOWNLOAD, CONFIGURE AND USE THE APPLICATION](#main-steps)
  - [Download](#download)
  - [Install dependencies](#install-dependencies)
  - [Configure environment variables](#configure-env)
  - [Start application in your local machine](#start-app)
- [TECHNOLOGIES THAT WE USED](#technologies)
- [CONTRIBUTIONS](#contributions)
- [LICENSE](#license)

<a name="what-is"></a>

# ¿WHAT IS TECH TALENT HUB?

TechTalentHub is designed to streamline the recruitment of IT professionals, providing a robust platform for both companies seeking specialized IT talent and IT professionals looking for employment opportunities. This web facilitates user registration, profile creation, job searches with advanced filtering, and direct job application functionalities. Ideal for enhancing the hiring process, TechTalentHub ensures a smooth, efficient interaction for all users in the tech industry.

<a name="requirements"></a>

# REQUIREMENTS

- [Git](https://gitforwindows.org/) installed in your machine.
- [pnpm](https://pnpm.io/es/) installed and configured in your machine.
- [node](https://nodejs.org/es/download/) installed and configured in your machine.
- Text editor like [VS Code](https://code.visualstudio.com/).

We recommend use [NVM](https://github.com/coreybutler/nvm-windows) to manage Node versions.

<a name="main-steps"></a>

# STEPS TO DOWNLOAD, CONFIGURE AND USE THE APPLICATION

<p align="center">
  <img src="https://res.cloudinary.com/idepixel/image/upload/c_scale,h_260,w_360/v1651348337/Landing/service-image.webp" alt="Download and configure">
</p>

<a name="download"></a>

## > Download

You can download the application by copying its link, either by ssh or https. The git command you need to run is as follows:

```sh
# HTTPS =====================================================!

# Clone repository
$ git clone https://github.com/dancrewzus/tech-talent-hub-front
$ cd tech-talent-hub-front

# If you want to download it with another folder name, example your-folder-name
$ git clone https://github.com/dancrewzus/tech-talent-hub-front your-folder-name
$ cd your-folder-name

# SSH =======================================================!

# Clone repository
$ git clone git@github.com:dancrewzus/tech-talent-hub-front.git
$ cd tech-talent-hub-front

# If you want to download it with another folder name, example your-folder-name
$ git clone git@github.com:dancrewzus/tech-talent-hub-front.git your-folder-name
$ cd your-folder-name
```

<a name="install-dependencies"></a>

## > Install dependencies

In the application root folder, type this command in the command line terminal:

```sh
# Install dependencies with pnpm
$ pnpm install

# Install dependencies with npm
$ npm install

# Install dependencies with Yarn
$ yarn install
```

<a name="configure-env"></a>

## > Configure environment variables

The app uses some environment variables to get its important data like the API URL, keys or any other information. These variables must be created directly on your computer and you must assign values ​​to the data that appears below:

```sh
# API URL
BASE_API_URL=""

# GENERAL
PUBLIC_API_TOKEN=""
```

You must create an `.env.development` with the development keys. In other hand, you have to create an `.env.production` to set the production keys.

<a name="start-app"></a>

## > Start application in your local machine

To start the application, we must execute the following command:

```sh
# development
$ pnpm dev

# production mode
$ pnpm build && pnpm preview
```

> If you want to stop the execution press (ctrl + c) / (cmd + c) in the command line terminal.

<a name="technologies"></a>

# TECHNOLOGIES THAT WE USED

This is the list of technologies that i use in the development of this front.
<br>
<br>

- NodeJS
- React
- JavaScript
- TypeScript
- Tailwind
- shadcn/ui

<a name="contributions"></a>

# CONTRIBUTIONS

This project is private and open only to contributions from students in the course and the professor. Below are the guidelines for contributing to the TechTalentHub Front project:

## How to contribute

1. **Repository access**: Ensure you have access to the repository.

2. **Fork the repository**: Fork the repository to work on your own copy. This allows you to experiment and make changes without affecting the main repository.

3. **Clone your fork**:

```bash
  git clone https://github.com/your-username/tech-talent-hub-front.git
  cd techtalenthub-front
```

4. **Create a new branch**: Before making any changes, create a branch for your specific feature or fix:

```bash
  git checkout -b feature/your-branch-name
```

5. **Make your changes**: Implement your changes and improvements on your branch. Ensure you follow coding conventions and perform adequate testing.

6. **Commit your changes**: Once you are satisfied with your changes, commit them:

```bash
  git add .
  git commit -m "Brief description of changes"
```

7. **Push to GitHub**: Push your changes up to your fork on GitHub:

```bash
  git push origin feature/your-branch-name
```

8. **Submit a Pull Request (PR)**: Go to the original repository on GitHub, and under the 'Pull Requests' section, click on 'New Pull Request'. Select your branch and be sure to provide a detailed description of your changes and the reasons behind them.

9. **Code review**: Wait for the code review from other students. You may be asked for additional changes before your contribution is accepted.

## Contribution guidelines

- **Respectful communication**: Maintain respectful and constructive communication during PR discussions and other exchanges.
- **Code documentation**: Comment your code where necessary to ensure it is easy to understand and maintain.
- **Testing**: Include tests with your contributions to ensure the stability and functionality of the project.
- **Keep scope**: Ensure your contributions align with the project's goals and do not divert its focus.

We appreciate your interest in contributing and look forward to your innovative inputs to improve the TechTalentHub Front project.

<a name="license"></a>

# LICENSE

This project is licensed under the [MIT licensed](LICENSE).

<br><hr>

<p align="center">
  Universidad Nacional Experimental de Guayana (UNEG) | 2024
</p>
