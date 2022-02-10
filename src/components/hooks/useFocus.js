import { useRef } from "react";

export const useFocus = () => {
  const htmlElRef = useRef(null);
  const setFocus = () => {
    console.log("focus");
    htmlElRef.current.focus();
  };

  return [htmlElRef, setFocus];
};
