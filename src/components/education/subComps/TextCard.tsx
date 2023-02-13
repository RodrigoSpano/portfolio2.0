import { TfiShare } from "react-icons/tfi";
import { EducationBase } from "../../../utilities/types";

const TextCard = ({ course }: { course: EducationBase }) => {
  return (
    <div className="flex gap-2 items-center ">
      <p className="text-sky-600 md:text-lg xl:text-xl font-cairo">
        {course.title}
      </p>
      <p className="xl:text-lg font-thin">- {course.period} -</p>
      <a
        className="flex gap-2 items-center xl:text-lg"
        href={course.certificate}
        download
      >
        <p className="font-thin">download certificate</p>
        <TfiShare />
      </a>
    </div>
  );
};

export default TextCard;
