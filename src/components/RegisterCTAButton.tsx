"use client";

import { CTAButton } from "@/components/CTAButton";
import { useModal } from "@/components/ModalProvider";

type RegisterCTAButtonProps = {
  label?: string;
  className?: string;
  variant?: "primary" | "secondary";
};

export function RegisterCTAButton({
  label = "Register Today",
  className,
  variant,
}: RegisterCTAButtonProps) {
  const { open } = useModal();

  return (
    <CTAButton
      label={label}
      onClick={open}
      className={className}
      variant={variant}
    />
  );
}
