import React from "react";
import { SocialMediaBase } from "../../../utilities/types";
import SocialCard from "./SocialCard";

const SocialContainer = () => {
  const Social: SocialMediaBase[] = [
    {
      name: "github",
      url: "https://www.github.com/rodrigospano/",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/rodrigospano/",
    },
  ];
  return (
    <div className="flex gap-10">
      {Social.map((el: SocialMediaBase) => (
        <SocialCard key={Math.random()} media={el} />
      ))}
    </div>
  );
};

export default SocialContainer;
