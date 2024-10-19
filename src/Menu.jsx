import { Pizza } from "./Pizza";

export function Menu({ pizzas }) {
  return (
    <div className="menu">
      <p>Our Menu</p>
      <ul className="pizzas">
        {pizzas.map((pizza) => (
          <Pizza key={pizza.name} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
}
