import { contacts } from "../../contents/contacts";

function Contacts() {
  return (
    <>
      {contacts.map((contact, index) => {
        return (
          <div className={`${index} w-[60px] xl:w-[80px]`}>
            <img
              src={contact.img}
              alt={contact.name}
              className="w-full h-full hover:cursor-pointer hover:scale-125 hover:duration-300"
            />
          </div>
        );
      })}
    </>
  );
}

export default Contacts;
