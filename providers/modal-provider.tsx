"use client";

import { useEffect, useState } from "react";

import { StoreModal } from "@/components/modals/store-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // returning null in case of server side rendering // this is generally done to avoid the hydration error !
  }

  return (
    <>
      <StoreModal />
    </>
  );
};
