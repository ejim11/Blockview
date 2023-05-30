import { useEffect } from "react";
import { useRouter } from "next/router";


const HomeLoader = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });

  return <>
  </>;
};

export default HomeLoader;
