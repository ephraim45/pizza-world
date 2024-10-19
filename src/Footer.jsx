import { Order } from "./Order";

export function Footer() {
  const openHour = 14;
  const closeHour = 18;
  const hour = new Date().getHours();
  const isOPen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOPen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>
          We are open between {openHour}:00 and {closeHour}:00.Come visit Us or
          Order Online
        </p>
      )}
    </footer>
  );
}

