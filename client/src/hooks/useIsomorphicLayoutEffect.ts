import { isServer } from "@/utils/isServer";
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect = isServer()
  ? useEffect
  : useLayoutEffect;
