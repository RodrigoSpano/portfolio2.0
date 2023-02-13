const CardText = ({ title, text }: { text: string; title: string }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h4 className="font-bold text-zinc-800 text-3xl font-montserrat">
        {title}
      </h4>
      <p className="font-cairo font-thin text-xl text-zinc-500 text-start max-w-[360px]">
        {text}
      </p>
    </div>
  );
};

export default CardText;
