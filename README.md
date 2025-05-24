## 🔗 Live Preview

👉 [Click here to view the app live](https://gb-pokemon-card-details.netlify.app/)



# 🧩 Pokémon Explorer

A dynamic and interactive **React-based** Pokémon explorer app that displays detailed information about 500 Pokémon using the [PokeAPI](https://pokeapi.co/). This project is built with advanced API handling techniques, efficient data processing, reusable components, and modern styling.

---

## 🚀 Features

- 🔁 **Nested API Fetching**  
  The app first fetches a list of 500 Pokémon and then performs **individual fetch requests** for each Pokémon's detailed information. This showcases deep API drilling and asynchronous data handling.

- 🔍 **Live Search Filter**  
  Real-time search functionality allows users to filter Pokémon by name as they type.

- 📦 **Reusable Components**  
  Built with a modular structure. The `<PokemonCard />` component handles display logic for each Pokémon, ensuring reusability and separation of concerns.

- 🎨 **Responsive UI with Tailwind CSS**  
  Uses Tailwind CSS utility classes combined with custom styles from a separate CSS file to ensure the UI is responsive, clean, and visually appealing.

- ⚛️ **React Concepts Used**
  - `useState` for managing state
  - `useEffect` for API calls and lifecycle control
  - `.map()` for rendering lists
  - Controlled components (`input`)
  - Conditional rendering for `loading` and `error` states

---

## 🧠 Key Highlights

This project demonstrates:

- ✅ Handling **nested API responses**
- ✅ **Efficient use of Promises** with `Promise.all()` for parallel API calls
- ✅ **Manipulating arrays and objects** for rendering dynamic content
- ✅ Extracting complex object properties like:
  - `pokData.sprites.other.dream_world.front_default`
  - `pokData.stats[5].base_stat` for Speed
  - `pokData.abilities[0].ability.name`

---

## 📂 Folder Structure

pokemon-app/
│
├── public/
│
├── src/
│ ├── components/
│ │ ├── Pokemon.jsx # Main container component
│ │ └── PokemonCard.jsx # Reusable card for each Pokémon
│ ├── cssFiles/
│ │ └── Pokemon.css # Custom styling for cards and layout
│ ├── App.jsx # Main app entry
│ └── main.jsx # React entry point
│
└── README.md # Project documentation



## 🔧 How to Run the Project

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/pokemon-app.git
   cd pokemon-app
   npm install
   npm run dev


## API Used
 

PokeAPI

This API provides a list of Pokémon along with URLs to their detailed information, which is fetched in the second-level API call for stats like type, speed, experience, and abilities.


## 📌 Technologies Used

React (Functional Components)
Tailwind CSS (Utility-first CSS)
Custom CSS (Fine-tuned layout and animations)
Vite (Lightning-fast build tool)
JavaScript (ES6+)


## ✍️ Author's Note

This project goes beyond basic API fetch operations. It demonstrates deep API drilling, where each Pokémon’s individual details are fetched through a second-level API call, processed, and rendered.

It also includes:

Clean state management using React hooks.
Thoughtful error handling and loading state design.
Advanced manipulation of nested JavaScript objects and arrays.
Performance-conscious rendering using Promise.all().
This project reflects my ability to handle complex data structures, build modular and scalable UI, and work with modern web development tools.


## 📃 License
This project is licensed under the MIT License.


## 🙌 Acknowledgements

PokeAPI for the Pokémon data
Tailwind CSS for UI design
React for front-end framework
