import React, { useState } from "react";
import { z } from "zod";
import {
  checkFormDataAgainstRuleMap,
  checkFormDataValue,
  createRuleMap,
} from "@/modules/checkFormData";
import { TextInput } from "@/components";
import { useNotifyStore } from "@/modules/notify";

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  message: z.string(),
});

const sendData = async (data: z.infer<typeof schema>): Promise<{ success: boolean }> => {
  const response = await fetch("https://formspree.io/f/xeojgnzw", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { Accept: "application/json" },
  });
  const json = await response.json();
  return { success: json.ok };
};

export const ContactForm = () => {
  const notifyStore = useNotifyStore();
  const [formData, setFormData] = useState<z.infer<typeof schema>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const ruleMap = createRuleMap({
    formData: formData,
    ruleMapper: () => ({
      name: [
        {
          validSchema: z.string().min(1),
          message: "Name is required",
        },
      ],
      email: [
        {
          validSchema: z.string().min(1),
          message: "Email is required",
        },
        {
          validSchema: z.string().email(),
          message: "This does not appear to be an email",
        },
      ],
      phone: [
        {
          validSchema: z.string().min(1),
          message: "Phone number is required",
        },
      ],
      message: [
        {
          validSchema: z.string().min(1),
          message: "Message is required",
        },
      ],
    }),
  });

  const [formDataErrorMessages, setFormDataErrorMessages] = useState<typeof formData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const overwriteFormDataErrorMessages = (x: Partial<z.infer<typeof schema>>) =>
    setFormDataErrorMessages({ ...formDataErrorMessages, ...x });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    if (!!isLoading) return;

    const checkFormDataResponse = checkFormDataAgainstRuleMap({ formData: formData, ruleMap });
    if (!checkFormDataResponse.success) {
      notifyStore.push({ heading: "form submission incomplete", type: "alert-error" });

      return overwriteFormDataErrorMessages(checkFormDataResponse.errors);
    }

    setIsLoading(true);

    const sendResponse = await sendData(formData);
    if (sendResponse.success) {
      notifyStore.push({ heading: "form submission successful", type: "alert-success" });
    } else {
      notifyStore.push({ heading: "form submission unsuccessful", type: "alert-error" });
    }
    setIsLoading(false);
  };

  return (
    <form className="flex w-full flex-col gap-8" id="contact-form">
      <h2 className="mb-0">Contact me</h2>
      <TextInput
        showError={!!formDataErrorMessages.name}
        errorMessage={formDataErrorMessages.name}
        value={formData.name}
        label="Type your name"
        placeholder="name"
        onInput={(value) => {
          const checkResponse = checkFormDataValue({ ruleMap, key: "name", value });
          overwriteFormDataErrorMessages({ name: checkResponse.error ?? "" });
          setFormData({ ...formData, name: value });
        }}
      />
      <TextInput
        showError={!!formDataErrorMessages.email}
        errorMessage={formDataErrorMessages.email}
        value={formData.email}
        label="Type your email"
        placeholder="email"
        onInput={(value) => {
          const checkResponse = checkFormDataValue({ ruleMap, key: "email", value });
          overwriteFormDataErrorMessages({ email: checkResponse.error ?? "" });
          setFormData({ ...formData, email: value });
        }}
      />
      <TextInput
        showError={!!formDataErrorMessages.phone}
        errorMessage={formDataErrorMessages.phone}
        value={formData.phone}
        label="Type your phone number"
        placeholder="phone number"
        onInput={(value) => {
          const checkResponse = checkFormDataValue({ ruleMap, key: "phone", value });
          overwriteFormDataErrorMessages({ phone: checkResponse.error ?? "" });
          setFormData({ ...formData, phone: value });
        }}
      />
      <TextInput
        showError={!!formDataErrorMessages.message}
        errorMessage={formDataErrorMessages.message}
        value={formData.message}
        label="Type your message"
        placeholder="message"
        onInput={(value) => {
          const checkResponse = checkFormDataValue({ ruleMap, key: "message", value });
          overwriteFormDataErrorMessages({ message: checkResponse.error ?? "" });
          setFormData({ ...formData, message: value });
        }}
      />
      <div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          Submit
          {!!isLoading && <span className="loading loading-spinner loading-md" />}
        </button>
      </div>
    </form>
  );
};
