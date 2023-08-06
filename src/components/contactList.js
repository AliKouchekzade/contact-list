import { useEffect, useState } from "react";
import Contact from "./contact";
import { ThreeCircles } from "react-loader-spinner";
import { getAllContactHttp } from "../services/httpServices";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function get() {
      try {
        const response = await getAllContactHttp();
        setContacts(response.data);
        console.log("get all contact");
      } catch (error) {
        console.log(error);
      }
    }
    get();
  }, []);

  return (
    <section className=" w-7/12 mt-16 m-auto bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-5">
      <div className="flex gap-x-3 items-center">
        <h2 className="text-4xl text-teal-900">CONTACT LIST</h2>
        <span className="text-xl text-white bg-teal-300 w-7 h-7 flex justify-center items-center rounded-full">
          {contacts.length}
        </span>
      </div>
      {contacts.length ? (
        <>
          <div
            id="contactlist"
            className="p-3 border-2 rounded-lg border-teal-600 flex flex-col gap-y-1 "
          >
            {contacts.map((contact) => (
              <Contact
                key={contact.id}
                contact={contact}
                setContacts={setContacts}
              />
            ))}
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
