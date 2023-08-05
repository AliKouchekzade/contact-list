import { useEffect, useState } from "react";
import AddContact from "../components/addContact";
import ContactList from "../components/contactList";
import { getAllContactHttp } from "../services/httpServices";

const HomePage = () => {
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
    <section className="mt-10 flex container p-5 gap-x-5">
      <AddContact setContacts={setContacts} />
      <ContactList contacts={contacts} />
    </section>
  );
};

export default HomePage;
