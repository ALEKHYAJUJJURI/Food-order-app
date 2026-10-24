
import Image from "next/image";
import { Food } from "../data/food";

type FoodCardProps = {
  food: Food;
  onAddToCart: (food: Food) => void;
};

export default function FoodCard({
  food,
  onAddToCart,
}: FoodCardProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-black/5 bg-white p-3 shadow-sm">
      <Image
        src={food.image}
        alt={food.name}
        width={160}
        height={160}
        className="mb-2 h-40 w-full rounded object-cover"
      />

      <div className="flex flex-col items-center">
        <p className="mb-2 text-lg font-semibold">
          {food.name}
        </p>
      </div>

      <div className="mb-3">
        <p className="mb-2 text-gray-600">
          Price:  ₹{food.price}
        </p>
        <p className="mb-2 text-gray-600">
          Category: {food.category}
        </p>
      </div>

      <button
        type="button"
        className="w-full rounded bg-blue-500 px-4 py-2 text-white transition hover:bg-blue-600"
        onClick={() => onAddToCart(food)}
      >
        Add to Cart
      </button>
    </article>
  );
}
