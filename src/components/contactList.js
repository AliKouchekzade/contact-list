import Contact from "./contact";

const ContactList = ({contacts}) => {


  return (
    <div className="basis-1/2 bg-teal-50 rounded-md py-8 px-10 flex flex-col gap-y-5">
      <h2 className="text-4xl text-teal-900">CONTACT LIST</h2>
      <div
        id="contactlist"
        className="h-80 overflow-auto p-3 border-2 rounded-lg border-teal-600 flex flex-col gap-y-1 "
      >
        {contacts.map((contact) => (
          <Contact key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
};

export default ContactList;
