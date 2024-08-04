import { Typography } from "@/components";
import { ContactForm } from "@/components/ContactForm";

const Parent = () => {
  return (
    <main className={`min-h-screen`}>
      <Typography fullPage>
        <ContactForm />
      </Typography>
    </main>
  );
};

export default Parent;
