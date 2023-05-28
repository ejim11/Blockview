import Link from "next/link";

interface PageNavButtons{
   title: string;
   path: string;
}

const Card: React.FC<{ children: React.ReactNode, prev : PageNavButtons | undefined , next : PageNavButtons |  undefined }> = ({ children, prev, next }) => {
  return (
    <section className=" w-[calc(100vw-8rem)] sm:w-[calc(100vw-4.5rem)]  mt-[8rem] h-[calc(100vh-8rem)] overflow-y-auto  p-[5rem] sm:px-4 sm:py-3">
      <div className=" w-full text-[1.7rem] bg-color-white border border-color-border rounded-lg p-[3rem] sm:border-0 sm:p-0">
        {children}
      </div>
      <div className="my-[4rem]">
      {prev && <Link href = {prev.path}>{prev.title}</Link>}
      {next&& <Link href = {next.path} className="ml-auto bg-color-dark-blue text-color-white border-color-dark-blue border rounded-lg block py-[1rem] px-[2rem] hover:bg-color-white transition-all duration-200 ease-in w-max hover:text-color-dark-blue capitalize font-semibold">{next.title}</Link>}
      </div>
    </section>
  );
};

export default Card;
