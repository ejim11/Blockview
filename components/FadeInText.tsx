import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: string | JSX.Element | JSX.Element[] | (() => JSX.Element) | any;
  className?: string;
};

const FadeInText = ({ children, className }: Props) => {
  return (
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeIn" }}
      className={className}
    >
      {children}
    </motion.p>
  );
};

export default FadeInText;
