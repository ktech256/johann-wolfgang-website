"use client";

import { ContactForm } from "@/components/ContactForm";
import { Modal } from "@/components/Modal";
import { useModal } from "@/components/ModalProvider";

export function ContactModal() {
  const { isOpen, close } = useModal();

  return (
    <Modal isOpen={isOpen} onClose={close} title="Quick Registration">
      <ContactForm contextLabel="Modal" onSuccess={close} />
    </Modal>
  );
}
