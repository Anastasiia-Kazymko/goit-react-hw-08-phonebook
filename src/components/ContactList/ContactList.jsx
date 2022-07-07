export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <>
      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            {name}: {number}
            <button
              type="Submit"
              onClick={() => {
                deleteContact(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
