import { useEffect, useState } from "react";
import Contact from "./contact";
import { ThreeCircles } from "react-loader-spinner";
import { getAllContactHttp } from "../services/httpServices";
import { BsSearch } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();
  const loc = useLocation().search;

  const searchHandler = ({ target }) => {
    setSearchInput(target.value);
    target.value === "" ? navigate("/") : navigate(`/?search=${target.value}`);
  };

  useEffect(() => {
    async function get() {
      try {
        const response = await getAllContactHttp();
        const search = queryString.parse(loc).search;
        console.log(search);
        setSearchInput(search);
        search === "" || !search
          ? setContacts(response.data)
          : setContacts(
              response.data.filter((con) =>
                Object.values(con)
                  .join(" ")
                  .toLowerCase()
                  .includes(search.toLowerCase())
              )
            );
        console.log("get all contact");
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, [loc]);

  return (
    <section className=" w-7/12 mt-16 m-auto bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-5">
      <div className="flex gap-x-3 justify-between items-center">
        <div className="basis-6/12 flex gap-x-3 items-center">
          <h2 className="text-4xl text-teal-900">CONTACT LIST</h2>
          <span className="text-xl text-white bg-teal-300 w-7 h-7 flex justify-center items-center rounded-full">
            {contacts ? contacts.length : 0}
          </span>
        </div>
        <div className="basis-5/12 flex items-center">
          <BsSearch className="relative left-5" />
          <input
            className="px-6 py-1 outline-teal-800 rounded-md border border-teal-700 h-9 text-lg w-full"
            type="text"
            placeholder="search . . . "
            value={searchInput}
            onChange={searchHandler}
          />
        </div>
      </div>
      {contacts ? (
        <>
          <div
            id="contactlist"
            className="p-3 border-2 rounded-lg border-teal-600 flex flex-col gap-y-1 "
          >
            {contacts.length ? (
              <>
                {contacts.map((contact) => (
                  <Contact
                    key={contact.id}
                    contact={contact}
                    setContacts={setContacts}
                  />
                ))}
              </>
            ) : (
              <p className="text-center">No Results Found</p>
            )}
          </div>
        </>
      ) : (
        <div className="flex flex-col gap-y-5 justify-center h-full items-center">
          <ThreeCircles
            height="65"
            width="65"
            visible={true}
            ariaLabel="three-circles-rotating"
            outerCircleColor="#0f766e"
            innerCircleColor="#059669"
            middleCircleColor="#10b981"
          />
          <span className="text-teal-900">Loading . . . </span>
        </div>
      )}
    </section>
  );
};

export default ContactList;
