"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import TerminalCard from "@/components/Terminal/TerminalCard";
import Input from "./Input";
import Button from "../ui/Button/Button";
import { toast, Toaster } from "sonner";
import { validateEmail } from "@/lib/validation";

const initialState = {
  sender_identity: "",
  return_address: "",
  payload_content: "",
};

function ContactForm() {
  const [formData, setFormData] = useState(initialState);
  const [isSending, setIsSending] = useState(false);

  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  }

  function isValidEmail(email: string) {
    return validateEmail(email);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!formData.sender_identity.trim()) {
      toast.error("Heyy Buddy, Missed your name.");
      return;
    }

    if (!formData.return_address.trim()) {
      toast.error(`Heyy ${formData.sender_identity}, Missed your email.`);
      return;
    }

    if (!isValidEmail(formData.return_address)) {
      toast.error(`Heyy ${formData.sender_identity}, Shoot a valid email address.`);
      return;
    }

    if (!formData.payload_content.trim()) {
      toast.error(`Heyy ${formData.sender_identity}, Missed your message.`);
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.sender_identity,
          email: formData.return_address,
          message: formData.payload_content,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.error || "Failed to send message. Try again later.");
        return;
      }

      toast.success(data?.message || "Message sent successfully.");
      setFormData(initialState);
    } catch (error) {
      toast.error("Unable to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <TerminalCard>
      <form className="flex flex-col gap-4 p-6 relative " onSubmit={handleSubmit}>
        <div>
          <span className="font-terminal! text-secondary small-p inline-block mr-6">1</span>
        </div>
        <p className="font-terminal">{`{`}</p>
        <p className="font-terminal">
          <span className="font-terminal text-primary-900">sender_identity</span>":
          <Input
            label="sender_identity"
            name="sender_identity"
            value={formData.sender_identity}
            onChange={handleChange}
            terminal
            placeholder="Enter your name"
          />
        </p>

        <p className="font-terminal">
          <span className="font-terminal text-primary-900">return_address</span>":
          <Input
            label="return_address"
            name="return_address"
            value={formData.return_address}
            className="w-[70%]"
            onChange={handleChange}
            terminal
            placeholder="Enter your email address"
          />
        </p>

        <div className="font-terminal flex items-start">
          <p className="flex items-start">"</p>
          <span className="font-terminal text-primary-900">payload_content</span>":
          <Input
            label="payload_content"
            name="payload_content"
            className="w-full"
            value={formData.payload_content}
            onChange={handleChange}
            terminal
            placeholder="Enter your payload content"
          />
        </div>
        <p className="font-terminal">{`}`}</p>
        <Button type="submit" className="self-end mt-4" disabled={isSending}>
          {isSending ? "SENDING..." : "EXECUTE TRANSMISSION"}
        </Button>
        <Toaster position="top-right" />
      </form>
    </TerminalCard>
  );
}

export default ContactForm;
