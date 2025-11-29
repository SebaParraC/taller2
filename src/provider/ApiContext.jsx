// Este archivo solo crea un “espacio” compartido (contexto)
// donde puedo guardar datos que quiero usar en varias páginas.

import { createContext } from "react";

export const ApiContext = createContext();
