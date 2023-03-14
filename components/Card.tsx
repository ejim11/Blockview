const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <section className=" w-[calc(100vw-6rem)] sm:w-[calc(100vw-4.5rem)] h-[calc(100vh-3.5rem)] overflow-y-auto  py-12 px-14 sm:px-4 sm:py-3">
      <div className=" w-full bg-color-white border border-color-border rounded-lg p-5 sm:border-0 sm:p-0">
        {children}
      </div>
    </section>
  );
};

export default Card;
