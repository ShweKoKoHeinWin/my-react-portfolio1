import type { LANGs, MODEs } from "../constants";

export type LangProp = typeof LANGs[keyof typeof LANGs];

export type AppearanceMode = typeof MODEs[keyof typeof MODEs];