import { createContext } from "react";

export const ContextUsuario = createContext({
  isLoggedIn: false,
  login: (u: string, c: string) => false,
  logout: () => { },
});