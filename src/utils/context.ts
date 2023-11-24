import { createContext } from "react";

type States = any[]

export const Context = createContext<States>([]);