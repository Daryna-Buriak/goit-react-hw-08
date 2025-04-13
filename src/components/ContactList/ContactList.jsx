import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/selectors";
import { selectFilteredContacts } from "../../redux/contacts/slice";

export default function ContactList() {
  const contact = useSelector(selectContacts);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map((contactCard) => (
        <li key={contactCard.id}>
          <Contact contactItem={contactCard} />
        </li>
      ))}
    </ul>
  );
}
