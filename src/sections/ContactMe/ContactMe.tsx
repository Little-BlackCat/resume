import Contacts from "../../components/Contacts/Contacts";
import Title from "../../components/Title/Title";

function ContactMe() {
  return (
    <div className="bg-base px-5 md:px-10 xl:px-20 py-36">
      <Title title="Contact Me" />
      <div className="flex justify-evenly gap-9 mt-10 text-black text-6xl sm:text-9xl">
        <Contacts />
      </div>
    </div>
  );
}

export default ContactMe;
