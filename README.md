# PokeAPI Web Application

This web application is built using React and integrates with the PokeAPI (https://pokeapi.co/) to provide information about Pokemon.

## Features

- **Homepage**: Includes a search bar and a random Pokemon card that changes daily.
- **Search Results Page**: Displays a list of Pokemon based on user search queries.
- **Details Page**: Shows detailed information about a selected Pokemon.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pokeapi-app.git
   cd pokeapi-app
   ```

2. Install dependencies:

- npm install

3. Start the development server:

- npm start

4. Open your browser and navigate to http://localhost:3000 to view the application.

Usage

- Homepage: The homepage displays a random Pokemon card that changes daily for each user. Users can also search for specific Pokemon using the search bar.

- Details Page: Clicking on More details button on pokemon card will take the user to a details page showing comprehensive information about that Pokemon.

Technologies Used

- React
- Axios (for API requests)
- React Router (for routing)
- CSS (for styling)

Folder Stucture

pokeapi-app/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── HomePage.jsx
│ │ ├── PokemonCard.jsx
│ │ ├── DetailsPage.jsx
│ │ └── App.js
│ ├── App.css
│ ├── index.js
├── package.json
├── README.md
└── ...
