import { ProjectBase } from "../utilities/types";

export const Projectos: ProjectBase[] = [
  {
    title: "NFTs landing page",
    githubUrl: "https://github.com/RodrigoSpano/ROOTS-challenge",
    description:
      "Landing page para arte digital, desarrollé este proyecto para aprender a utilizar ThreeJS",
    tech: ["ReactJs", "NextJs", "ThreeJs", "TailwindCSS"],
    deploy: "https://roots-challenge.vercel.app/",
  },
  {
    title: "Componente de precios",
    githubUrl:
      "https://github.com/RodrigoSpano/Pricing-component-FrontEndMentor.git",
    description:
      "Componente para visualizar los precios de los diferentes planes, por mes o año",
    tech: ["ReactJs", "NextJs", "ReduxJs", "ChakraUi"],
    deploy: "https://pricing-component-rodrigo-spano.vercel.app/",
  },
  {
    title: "Ecommerce Backend",
    githubUrl: "https://github.com/RodrigoSpano/ecommerce-backend.git",
    description:
      "Ecommerce backend para una tienda de ventas de libros, con javascript, nodejs y passport",
    tech: ["NodeJs", "Passport-Jwt", "MongoDb"],
  },
  {
    title: "Sneakers Ecommerce",
    githubUrl: "https://github.com/RodrigoSpano/SneakersArg-Spano.git",
    description:
      "Ecommerce frontEnd para una tienda de sneakers, con javascript y vitejs",
    tech: ["ReactJs", "ViteJS", "Firebase"],
    deploy: "https://sneakers-arg.netlify.app/",
  },
];
