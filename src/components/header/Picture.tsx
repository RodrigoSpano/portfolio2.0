const Picture = () => {
  return (
    <div>
      <img
        src="/assets/me.jpg"
        className=" w-[200px] h-[200px] md:w-[300px] md:h-[300px] xl:w-[400px] xl:h-[400px] object-cover object-top rounded-lg shadow-md shadow-zinc-900"
        alt="myself"
      />
    </div>
  );
};

export default Picture;
