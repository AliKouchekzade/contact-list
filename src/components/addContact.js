import { useState } from "react";
import { addNewContactHttp, getAllContactHttp } from "../services/httpServices";

const AddContact = ({ setContacts }) => {
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  const addNewContactHandler = async () => {
    await addNewContactHttp(newContact);
    const resposne = await getAllContactHttp();
    setContacts(resposne.data);
    setNewContact({ name: "", email: "" });
  };

  return (
    <div className="basis-1/2 bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-6">
      <h2 className="text-4xl text-teal-900">ADD CONTACT</h2>
      <label className="text-teal-700 text-lg font-semibold mt-5">Name</label>
      <input
        className="px-5 py-1 outline-teal-800 rounded-md border border-teal-700 h-10 text-lg"
        type="text"
        placeholder="text"
        value={newContact.name}
        onChange={({ target }) =>
          setNewContact({ ...newContact, name: target.value })
        }
      ></input>
      <label className="text-teal-700 text-lg font-semibold">Email</label>
      <input
        className="px-5 py-1 outline-teal-800 border rounded-md border-teal-700 h-10 text-lg"
        type="text"
        placeholder="email"
        value={newContact.email}
        onChange={({ target }) =>
          setNewContact({ ...newContact, email: target.value })
        }
      ></input>
      <button
        className="text-xl mt-5 bg-teal-700 text-white py-2 rounded-lg"
        onClick={addNewContactHandler}
      >
        Add Contact
      </button>
    </div>
  );
};

export default AddContact;
