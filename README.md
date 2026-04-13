# PokéCoach

<p align="center">
  Developed by <strong>Anthony Liscio</strong><br/>
  <a href="https://github.com/anthony9105">@anthony9105 on GitHub</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5+-3178C6?logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-8.0.8-646CFF?logo=vite&logoColor=white" alt="Vite 8.0.8" />
  <img src="https://img.shields.io/badge/OpenAI-gpt--4o--mini-412991?logo=openai&logoColor=white" alt="OpenAI GPT-4o-mini" />
  <img src="https://img.shields.io/badge/PokéAPI-REST-ef5350?logo=pokemon&logoColor=white" alt="PokeAPI" />
  <img src="https://img.shields.io/github/license/anthony9105/AIPokemonCoach" alt="License" />
  <img src="https://img.shields.io/badge/Anthony Liscio-yellow" alt="Maintainer" />
</p>

PokéCoach is a React + TypeScript web app that lets users search for Pokémon and get AI-powered analysis, including strengths, weaknesses, and recommended team members.  (Currently just a project I ca run locally, it is not deployed and is just a frontend).

It combines the **PokéAPI** for real Pokémon data and the **OpenAI API** for intelligent battle insights.

## Images
![Image 1](src/assets/1.png)
![Image 2](src/assets/1.2.png)
![Image 3](src/assets/1.3.png)
<br></br>
![Image 4](src/assets/2.1.png)
![Image 5](src/assets/2.2.png)
<br></br>
![Image 6](src/assets/3.1.png)
![Image 7](src/assets/3.2.png)
<br></br>
![Image 8](src/assets/4.1.png)
![Image 9](src/assets/4.2.png)
<br></br>

---

## Features

- Search any Pokémon by name
- View stats, types, and images from PokéAPI
- AI-generated analysis (descriptions, strengths & weaknesses)
- AI-generated competetive team suggestions (5 Pokémon)
- Suggested teammates displayed with real data
- Visual stat bars and type color badges

---

## Tech Stack

- React (Vite)
- TypeScript
- OpenAI API (`gpt-4o-mini`)
  - Temperature value and prompt are adjusted often to try and find more variety in answers while still being accurate 
- PokéAPI
- CSS
