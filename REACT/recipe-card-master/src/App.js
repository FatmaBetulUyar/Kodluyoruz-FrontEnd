import "./App.css";
import Card from "./components/Card/Card";
import food from "./assets/food.jpg"; // Tell webpack this JS file uses this image
import ReactDOM from "react-dom";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Avokado Ezmeli Taco",
    date: "12 Ocak 2021, Salı",
    image: food,
    description:
      "Bu kremsi ve baharatlı avokado sosu, günlük taco'larınızı hazırlamak için harika seçeneklerden biri. Geleneksel olarak flautas veya taquitos ile servis edilir, ancak bazı vegan enchiladalara da harika bir katkı sağlar.",
  };

  const likeCount = 193;
  const isLiked = false;

  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}

        />
      </header>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
