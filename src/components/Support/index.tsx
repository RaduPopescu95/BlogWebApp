"use client";
import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

const Support = () => {
  const [submitted, setSubmitted] = useState(false);

  // Definim tipul pentru `handleSubmit` cu ajutorul `FormEvent`
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name: (e.target as HTMLFormElement).name.value,
      email: (e.target as HTMLFormElement).email.value,
      message: (e.target as HTMLFormElement).message.value,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID", // Inlocuiește cu ID-ul serviciului tău din EmailJS
        "YOUR_TEMPLATE_ID", // Inlocuiește cu ID-ul șablonului tău din EmailJS
        formData,
        "YOUR_USER_ID" // Inlocuiește cu ID-ul tău de utilizator din EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  if (submitted) {
    return (
      <div className="mx-auto mt-40 text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Mulțumim!</h1>
        <p>Echipa noastră de suport va reveni cât mai curând posibil prin email.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Înapoi la Pagina Principală
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[550px] rounded-xl ">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Ai nevoie de ajutor?</h1>
        <p>Echipa noastră de suport va reveni cât mai curând posibil prin email.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10 ">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Nume
            </label>
            <input
              type="text"
              placeholder="Introdu numele tău"
              required
              name="name"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Email
            </label>
            <input
              type="email"
              placeholder="Introdu adresa ta de email"
              required
              name="email"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="mb-3 block text-custom-sm font-medium text-dark"
            >
              Mesaj
            </label>
            <textarea
              name="message"
              placeholder="Scrie mesajul tău aici"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7  focus:border-transparent focus:ring-2 focus:ring-primary"
              cols={20}
              rows={5}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
          >
            Trimite Mesajul
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support;
