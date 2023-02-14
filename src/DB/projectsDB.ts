import { ProjectBase } from "../utilities/types";

export const Projects: ProjectBase[] = [
  {
    title: "NFTs landing page",
    githubUrl: "https://github.com/RodrigoSpano/ROOTS-challenge",
    description:
      "Landing page for digital art, i create this project to learn how to use threejs",
    tech: ["ReactJs", "NextJs", "ThreeJs", "TailwindCSS"],
    deploy: "https://roots-challenge.vercel.app/",
  },
  {
    title: "Pricing component",
    githubUrl:
      "https://github.com/RodrigoSpano/Pricing-component-FrontEndMentor.git",
    description:
      "Pricing component to display the different plans of a service",
    tech: ["ReactJs", "NextJs", "ReduxJs", "ChakraUi"],
    deploy: "https://pricing-component-rodrigo-spano.vercel.app/",
  },
  {
    title: "Ecommerce Backend",
    githubUrl: "https://github.com/RodrigoSpano/ecommerce-backend.git",
    description: "Ecommerce backend for a Book store with auth and nodemailer",
    tech: ["NodeJs", "Passport-Jwt", "MongoDb"],
  },
  {
    title: "Sneakers Ecommerce",
    githubUrl: "https://github.com/RodrigoSpano/SneakersArg-Spano.git",
    description:
      "Ecommerce frontEnd for a Sneakers store with vitejs and javascript",
    tech: ["ReactJs", "ViteJS", "Firebase"],
    deploy: "https://sneakers-arg.netlify.app/",
  },
];
