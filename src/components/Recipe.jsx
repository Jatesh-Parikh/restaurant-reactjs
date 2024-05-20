import recipe1 from "../assets/recipe1.jpg";
import recipe2 from "../assets/recipe2.jpg";
import recipe3 from "../assets/recipe3.jpg";
import recipe4 from "../assets/recipe4.jpg";
import recipe5 from "../assets/recipe5.jpg";
import recipe6 from "../assets/recipe6.jpg";
import recipe7 from "../assets/recipe7.jpg";
import recipe8 from "../assets/recipe8.jpg";

const recipes = [
  {
    id: 1,
    image: recipe1,
    price: 20,
    name: "Noodles",
  },
  {
    id: 2,
    image: recipe2,
    price: 30,
    name: "Singapore Rice",
  },
  {
    id: 3,
    image: recipe3,
    price: 40,
    name: "Pizza",
  },
  {
    id: 4,
    image: recipe4,
    price: 20,
    name: "Hakka Noodles",
  },
  {
    id: 5,
    image: recipe5,
    price: 35,
    name: "Schezwan Noodles",
  },
  {
    id: 6,
    image: recipe6,
    price: 25,
    name: "Panini",
  },
  {
    id: 7,
    image: recipe7,
    price: 20,
    name: "Garlic Bread",
  },
  {
    id: 8,
    image: recipe8,
    price: 45,
    name: "Sizzler",
  },
];

const Recipe = () => {
  return (
    <div className="section" id="recipe">
      <div className="flex flex-col items-center">
        <div className="text-3xl text-center font-bold mb-16">
          Hot Selling Recipes
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {recipes.map((recipe) => {
            return (
              <div
                className="p-4 shadow-lg hover:shadow transition-all duration-300 cursor-pointer"
                key={recipe.id}
              >
                <img
                  src={recipe.image}
                  alt="recipe image"
                  className="rounded-lg mb-4"
                />
                <div className="flex items-center justify-between mb-2">
                  <div className="md:text-xl font-bold">{recipe.name}</div>
                  <div className="flex items-center gap-3">
                    <button>-</button>
                    <span className="text-[0.85rem]">2</span>
                    <button>+</button>
                  </div>
                </div>
                <p className="text-[0.85rem] opacity-70 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Architecto repellat deleniti tempore veniam quasi, dolor
                  accusantium nisi sapiente praesentium mollitia consequatur,
                  maxime officiis. Placeat, atque!
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold">$ {recipe.price}</span>
                  <span className="btn cursor-pointer p-3">Add to cart</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
