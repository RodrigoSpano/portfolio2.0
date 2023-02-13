const TechCard = ({ tech }: { tech: string }) => {
  return (
    <p className="rounded-full w-fit px-4 shadow-lg shadow-zinc-200 font-cairo py-1 bg-zinc-200 text-zinc-800 ">
      {tech}
    </p>
  );
};

export default TechCard;
