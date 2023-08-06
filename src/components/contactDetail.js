import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  deleteIDContactHttp,
  getIDContactHttp,
  updateIDContactHttp,
} from "../services/httpServices";
import { FaLeftLong, FaUpload } from "react-icons/fa6";
import { toast } from "react-toastify";

const ContactDetail = () => {
  const [contact, setContact] = useState({});

  const updateButton = useRef();
  const id = useParams().id;
  const navigate = useNavigate();

  const deleteHandler = async () => {
    await deleteIDContactHttp(id);
    console.log("delete contact");
    navigate("/");
  };

  const updateHandler = async () => {
    if (updateButton.current.className.includes("700")) {
      await updateIDContactHttp(id, contact);
      console.log("updated");
      toast.success("Contact Updated", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      updateButton.current.className = updateButton.current.className.replace(
        "700",
        "300"
      );
      updateButton.current.className = updateButton.current.className.replace(
        "cursor-pointer",
        "cursor-not-allowed"
      );
    }
  };

  useEffect(() => {
    async function get() {
      const response = await getIDContactHttp(id);
      setContact(response.data);
      console.log("get id contact");
    }
    get();
  }, [id]);

  return (
    <section className="w-7/12 mt-14 m-auto bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-8">
      <div className="flex justify-between">
        <div className="basis-1/2 flex flex-col justify-center">
          <button
            className="bg-gray-200 w-min rounded-lg px-2 py-1 flex justify-start items-center gap-x-2"
            onClick={() => navigate("/")}
          >
            <FaLeftLong className="text-teal-800" />
            <span className="text-teal-800">back</span>
          </button>
        </div>
        <div className="flex basis-2/4 justify-center">
          <img
            className="w-36 h-36 rounded-full"
            src={contact.img}
            alt="profile"
          />
        </div>
        <div className="basis-1/2 flex flex-col justify-center items-center">
          <input
            type="file"
            name="file"
            id="file"
            className="w-px h-px opacity-0 overflow-hidden abolute z-0"
            onChange={({ target }) => {
              setContact({
                ...contact,
                img:
                  "../assets/" +
                  target.value.substring(target.value.lastIndexOf("\\") + 1),
              });
              updateButton.current.className =
                updateButton.current.className.replace("300", "700");
              updateButton.current.className =
                updateButton.current.className.replace(
                  "cursor-not-allowed",
                  "cursor-pointer"
                );
            }}
            accept="image/*"
          />
          <label
            htmlFor="file"
            className="bg-gray-200 w-min rounded-lg px-2 py-1 flex justify-start items-center gap-x-2 cursor-pointer"
          >
            <FaUpload className="text-teal-800" />
            <span className="text-teal-800">upload</span>
          </label>
        </div>
      </div>
      <div className="flex items-center gap-x-10 justify-between">
        <label className="text-teal-700 text-lg font-semibold">Name:</label>
        <input
          className="px-5 py-1 outline-teal-800 rounded-md border border-teal-700 h-10 text-lg w-10/12"
          type="text"
          placeholder="name"
          defaultValue={contact.name}
          onChange={({ target }) => {
            setContact({ ...contact, name: target.value });
            updateButton.current.className =
              updateButton.current.className.replace("300", "700");
            updateButton.current.className =
              updateButton.current.className.replace(
                "cursor-not-allowed",
                "cursor-pointer"
              );
          }}
        ></input>
      </div>
      <div className="flex items-center gap-x-10 justify-between">
        <label className="text-teal-700 text-lg font-semibold">Email:</label>
        <input
          className="px-5 py-1 outline-teal-800 rounded-md border border-teal-700 h-10 text-lg w-10/12"
          type="text"
          placeholder="email"
          defaultValue={contact.email}
          onChange={({ target }) => {
            setContact({ ...contact, email: target.value });
            updateButton.current.className =
              updateButton.current.className.replace(
                "cursor-not-allowed",
                "cursor-pointer"
              );
            updateButton.current.className =
              updateButton.current.className.replace("300", "700");
          }}
        ></input>
      </div>
      <div className="gap-x-10 mt-5 flex justify-between">
        <button
          ref={updateButton}
          className="basis-1/2 text-xl bg-teal-300 text-white py-2 rounded-lg cursor-not-allowed"
          onClick={updateHandler}
        >
          Update Contact
        </button>
        <button
          className="basis-1/2 text-xl text-white py-2 rounded-lg bg-red-600"
          onClick={deleteHandler}
        >
          Delete Contact
        </button>
      </div>
    </section>
  );
};

export default ContactDetail;
