export function Order({ openHour, closeHour }) {
  return (
    <div className="order">
      <p>We are Open now</p>
      <button className="btn">Order Now</button>
      <p>
        We are open between: {openHour}:00 AM - {closeHour}:00 PM
      </p>
    </div>
    
  );
}
