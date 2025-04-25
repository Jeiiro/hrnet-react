import Modal from "react-tailwind-modal";

function MyModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Ouvrir</button>
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
      >
        <p>Ceci est une modale !</p>
      </Modal>
    </>
  );
}