const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className=" w-[calc(100vw-6rem)] h-[calc(100vh-3.5rem)] overflow-y-auto  py-12 px-14 ">
      <div className=" w-full bg-color-white border border-color-border rounded-lg p-5">
        {children}
      </div>
    </section>
  );
};

export default Card;
