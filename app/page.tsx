"use client"


import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState } from "react";
import FoodCard from "./components/FoodCard";
import { Food, foodData } from "./data/food";


type CartItem = {
  food: Food;
  quantity: number;
};

export default function Home() {

const categories = ["All","Pizza", "Burger", "Snacks", "Indian", "South Indian", "Dessert", "Sandwich"];
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen,setCartOpen] = useState(false);
const onAddToCart = (food: Food) => {
  console.log("Adding to cart:", food);
  setCart([...cart, { food, quantity: 1 }]);

};


  return (
    <main className="min-h-screen bg-gray-100" >
   
   <Navbar
  query={search}
  setQuery={setSearch}
  itemCount={cart.reduce((total, item) => total + item.quantity, 0)}
  onCartClick={() => setCartOpen(!cartOpen)}
/>  
     {cartOpen && (
        <div>
          <h2 className="text-xl font-bold mb-4 bg-black-500">Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.food.name} - Quantity: {item.quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      ) }
      <Hero/>


      <div className="mt-6 text-"></div>
   <div className="container mx-auto py-8">
    {foodData.map((food) => (
      <FoodCard key={food.id} food={food} onAddToCart={onAddToCart} />
    ))}
    </div>
</main>
  );
}
