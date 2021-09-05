import React from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  let path = useLocation().pathname;
  return <div>Home - {path}</div>;
}
