import SectionLayout from "@/components/Layout/SectionLayout";
import ContactForm from "@/components/Contact/ContactForm";

export default function Contact() {
  return (
    <SectionLayout count="01" title="CONTACT">
      <div className="space-y-6">
        <div>
          <h1 className="display-h2">Establish Connection</h1>
          <p className="text-secondary large-p max-w-2xl">
            Initialize a new communication protocol. Fill the configuration object below to transmit
            your request to the central processing unit.
          </p>
        </div>
        <div className="w-[70%]"> 
        <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
