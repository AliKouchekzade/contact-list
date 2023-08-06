import { useState } from "react";
import { addNewContactHttp } from "../services/httpServices";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const [newContact, setNewContact] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  const addNewContactHandler = async () => {
    await addNewContactHttp(newContact);
    setNewContact({ name: "", email: "" });
    console.log("add contact");
    navigate("/");
  };

  return (
    <section className="w-7/12 mt-14 m-auto bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-6">
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
      <div className="gap-x-10 mt-5 flex justify-between">
        <button
          className="basis-1/2 text-xl bg-teal-700 text-white py-2 rounded-lg"
          onClick={addNewContactHandler}
        >
          Add Contact
        </button>
        <button
          className="basis-1/2 text-xl text-white py-2 rounded-lg bg-red-600"
          onClick={() => {
            navigate("/");
            setNewContact({ name: "", email: "" });
          }}
        >
          Cancel
        </button>
      </div>
    </section>
  );
};

export default AddContact;
