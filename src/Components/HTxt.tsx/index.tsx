import React, { type ReactNode } from "react";

type Props={
    children:ReactNode
}

export default function HText({children}:Props) {
  return <h2 className="basis-3/5 font-montserrat text-3xl font-bold">
    {children}
  </h2>;
}
