import { FaTrashCan } from "react-icons/fa6";
import {
  deleteIDContactHttp,
  getAllContactHttp,
} from "../services/httpServices";

const Contact = ({ contact, setContacts }) => {
  const deleteHandler = async (id) => {
    await deleteIDContactHttp(id);
    const response = await getAllContactHttp();
    setContacts(response.data);
  };

  return (
    <div
      style={{ borderTopWidth: "1px" }}
      className="border-teal-200 flex justify-between items-center"
    >
      <div className="flex items-center gap-x-5 cursor-pointer">
        <img
          className="w-10 h-10"
          src={require("../assets/profile.png")}
          alt="profile"
        />
        <div>
          <p className="font-semibold text-teal-600">{contact.name}</p>
          <p className="font-semibold text-teal-800">{contact.email}</p>
        </div>
      </div>
      <FaTrashCan
        onClick={() => deleteHandler(contact.id)}
        className="text-red-600 w-5 h-5 cursor-pointer"
      />
    </div>
  );
};

export default Contact;
