import { FormEvent, useState } from "react";
import { computeFormData, computeFormErrors } from "../../common/utils/forms";
import { schema } from "./ContactFormSchema";
import { FormData, FormErrors } from "./Interfaces";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: ""
  })
  const [formErrors, setFormErrors] = useState<FormErrors>();

  const submitMail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isError = computeFormErrors(schema, formData, setFormErrors);

    if (isError) {
      return;
    }

    setIsLoading(true);
    const res = await fetch('/api/email', {
      method: 'POST',
      body: JSON.stringify({...formData})
    });

    setIsLoading(false);
  }

  return (
    <form
      onSubmit={submitMail}
      className="form"
      noValidate
    >
      <h2 id="contact">Let's chat</h2>
      <div className="field">
        <label htmlFor="name" className="label">Name / Alias</label>
        <input
          value={formData.name}
          onChange={(e) => computeFormData(e, setFormData, formData)}
          className="input"
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name or alias"
        />
        <span className="input-error">{formErrors?.name}</span>
      </div>
      <div className="field">
        <label htmlFor="email" className="label">Email</label>
        <input
          value={formData.email}
          onChange={(e) => computeFormData(e, setFormData, formData)}
          className="input"
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
        <span className="input-error">{formErrors?.email}</span>
      </div>
      <div className="field">
        <label htmlFor="message" className="label">Message</label>
        <textarea
          value={formData.message}
          onChange={(e) => computeFormData(e, setFormData, formData)}
          className="input"
          name="message"
          id="message"
          cols={30}
          rows={2}
          placeholder="Enter your message"
        >
        </textarea>
        <span className="input-error">{formErrors?.message}</span>
      </div>
      {
        isLoading ? (
          <button className="btn submit loader" disabled>
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </button>
        ) : (
          <button className="btn submit">
            Send
          </button>
        )
      }
      <br />
      <small>Information is stored only by the email provider.</small>
      <br />
      <small>Use your prefered <a href="mailto:contact@devedco.com">email service</a>.</small>
    </form>
  )
}