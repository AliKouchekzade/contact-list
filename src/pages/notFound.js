import { HiOutlineEmojiSad, HiChevronLeft } from "react-icons/hi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="w-7/12 mt-16 m-auto bg-teal-50 rounded-md py-4 px-10 flex flex-col justify-center items-center gap-y-5">
      <HiOutlineEmojiSad className="w-60 h-60 text-gray-500" />
      <Link to="/" className="text-blue-500 flex items-center">
        <HiChevronLeft />
        <span>back home</span>
      </Link>
      <span className="text-5xl text-gray-500">404</span>
      <span className="text-xl text-gray-500">Page Not Found</span>
    </section>
  );
};

export default NotFound;
