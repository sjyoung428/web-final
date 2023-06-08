declare const global: unknown;

export const isServer = () =>
  typeof window === "undefined" && typeof global !== "undefined";
