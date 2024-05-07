<p align="center">
  Universidad Nacional Experimental de Guayana<br>
  Vicerrectorado Académico<br>
  Coordinación General de Pregrado<br>
  Ingeniería Informática<br>
  Desarrollo Web
</p>

<h1 align="center">Tech Talent Hub</h1>

## TOC

- [What is Tech Talent Hub?](#what-is)
- [Requirements](#requirements)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Start the Application](#start-the-application)
- [Contributing](#contributing)
  - [Branch Convention](#branch-convention)
  - [Commits Convention](#commits-convention)

<a href="what-is"></a>

## What is Tech Talent Hub?

TechTalentHub is designed to streamline the recruitment of IT professionals, providing a robust platform for both companies seeking specialized IT talent and IT professionals looking for employment opportunities. This web facilitates user registration, profile creation, job searches with advanced filtering, and direct job application functionalities. Ideal for enhancing the hiring process, TechTalentHub ensures a smooth, efficient interaction for all users in the tech industry.

<a href="requirements"></a>

## Requirements

- [Git](https://git-scm.com/downloads)
- [Node](https://nodejs.org/en/download)
- [pnpm](https://pnpm.io/es/installation) - This is recommended, but you can use any package manager like npm or [yarn](https://yarnpkg.com/)

<a href="technologies"></a>

## Technologies

- [Node](https://nodejs.org/en/download)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://es.react.dev/) - UI library
- [Tailwind CSS](https://tailwindcss.com/) - The CSS Framework
- [shadcn/ui](https://ui.shadcn.com/) - Component library

<a href="project-structure"></a>

## Project Structure

Inside of your React project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   ├── api/
│   ├── assets/
│   ├── components/
│   ├── features/
│   |   └── components/
│   |   └── hooks/
│   |   └── pages/
│   ├── hooks/
│   |── lib/
│   |   └── utils.ts
│   ├── index.css
│   └── main.tsx
└── package.json
```

The `public` folder contains things like the page favicon or manifest.

The `assets` folder contains the different assets like images and icons.

The `components` folder contains the different UI shared components of the application.

The `hooks` folder contains the different hooks of the application.

The `features` folder contains the different features of the application. Every feature can have its `pages`,`hooks` and `components.

The `lib` folder contains functions or constants that may be used in different parts of the application.

The `index.css` containts the Tailwind CSS base and shadcn/ui styling.

The `main.tsx` is the entry point.

<a href="installation"></a>

## Installation

1. Clone the repository.

```bash
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

2. Use the package manager to install the dependencies.

```bash
pnpm install
```

<a href="start"></a>

## Start the Application

1. Create an `.env.development` and `.env.production` based on the `.env.example`.
2. Run `pnpm dev` for development or `pnpm build && pnpm preview` to run production mode.

<a href="contributing"></a>

## Contributing

This project is private and open only to contributions from students in the course and the professor. Below are the guidelines for contributing to the TechTalentHub Front project:

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

<a href="branch-convention"></a>

### Branch Convention

- feature/branch-name: Add new feature.
- fix/branch-name: Fix a bug.
- docs/branch-name: Changes in the docs.
- refactor/branch-name: Refactor code.

<a href="commits-convention"></a>

### Commits Convention

- feat: Add a new feature.
- fix: Bug solved.
- docs: Changes in the docs.
- style: Applied any format styling change. No code changes.
- refactor: Code refactoring,
- test: Added tests.
- chore: Update packages or settings. No code changes.

For example, if you added the login feature. Then the commit will look like this:

```git
feat: add login
```

You can learn more in this [article](https://codigofacilito.com/articulos/buenas-practicas-en-commits-de-git).

<a href="commits-convention"></a>

## License

This project is licensed under the [MIT licensed](LICENSE).
