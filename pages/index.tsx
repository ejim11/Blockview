import { useEffect } from "react";
import { NextRouter, useRouter } from "next/router";

const HomeLoader = () => {
  const router: NextRouter = useRouter();

  useEffect((): void => {
    router.push("/home");
  });

  return <></>;
};

export default HomeLoader;
