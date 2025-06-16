"use client";

import { AnimatePresence } from "motion/react"; 
import InitialLoader from "./loader";
import { useLoading } from "./loadingContext";

export default function LayoutContext({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isPageLoaded } = useLoading();

  return (
    <>
      <AnimatePresence>
        {!isPageLoaded && <InitialLoader />}
      </AnimatePresence>
        {children}
    </>
  );
}