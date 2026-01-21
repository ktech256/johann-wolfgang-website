"use client";

import { motion, AnimatePresence } from "framer-motion";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            className="relative w-full max-w-2xl rounded-3xl border border-amber-500/30 bg-zinc-950/95 p-8 text-zinc-100 shadow-[0_0_40px_rgba(255,202,128,0.15)]"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-amber-300/80">
                  Register Today
                </p>
                <h2 className="text-2xl font-semibold text-amber-100">
                  {title}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-amber-500/30 px-3 py-1 text-sm text-amber-200 transition hover:border-amber-300 hover:text-amber-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                aria-label="Close modal"
              >
                Close
              </button>
            </div>
            <div className="mt-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
