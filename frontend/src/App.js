import React from "react";



// Components 
import SearchBar from "./components/SearchBar.js";
import Card from "./components/Card.js";
import Maincard from "./components/Maincard.js";

//StyleSheet
import "./App.css";

//Images
import cheeseCake from "./asset/cheeseCake.jpg";
import dumplingSoup from "./asset/dumplingSoup.jpg";
import panCake from "./asset/panCake.jpg";


const App = () => {
  return (
    <div className="App">
      <div id="main-section">

        <section id="left-section">

          <section id="left-top">
            <div id="left-top-container">
               <h1 className="title">Recipe Finder</h1>
               <SearchBar/>
            </div>
          </section>

          <section id="left-bottom">
            <div id="left-bottom-container">

              <div className="subtitle-container">
                <h2 className="subtitle">Popular Recipe</h2>
              </div>

              <Card
                image={cheeseCake}
                title={"Cheese Cake"}
                description={"A delicious and creamy cheesecake with a jam crust."}
                link={"https://www.allrecipes.com/recipe/49066/the-best-unbaked-cherry-cheesecake-ever/"}
              />

              <Card
                image={dumplingSoup}
                title={"Sumpling Soup"}
                description={"A comforting and hearty dumpling soup with vegetables."}
                link={ "https://www.allrecipes.com/recipe/24074/dumpling-soup/" }
              />

              <Card
                image={panCake}
                title={"Pancake"}
                description={"Fluffy and light pancakes perfect for breakfast."}
                link={ "https://www.allrecipes.com/recipe/24530/buttermilk-pancakes-ii/" }
              />

            </div>
          </section>

        </section>

        <section id="right-section">

          <div className="main-content">
            <Maincard/> 
          </div>
        </section>

      </div>
    </div>
  );
};

export default App;
