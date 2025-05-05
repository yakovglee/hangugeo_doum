function Card({ children }) {

  return (
    <>
      <div
        className="w-[325px] h-[280px] bg-white rounded-[36px] shadow-2xl p-4 flex items-center justify-center text-center"
      >
        {children}
      </div>

    </>
  );
}

export default Card;
