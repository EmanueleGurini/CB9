function Card({ text, children }) {
  return (
    <div>
      Card: {text}
      <div>{children}</div>
    </div>
  );
}

export default Card;
