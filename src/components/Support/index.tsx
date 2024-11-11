"use client"

import { useState, FormEvent } from "react";
import emailjs from "emailjs-com";

const Support = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Folosim FormData pentru a colecta valorile din formular
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    emailjs
      .send(
        "service_4bilcxr", // înlocuiește cu serviceID-ul tău
        "template_i97xbjh", // înlocuiește cu templateID-ul tău
        data,
        "0YKYBGFsUcHd1F4jC" // Inlocuiește cu ID-ul tău de utilizator din EmailJS
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
        <p>Echipa noastră de suport va reveni cât mai curând posibil.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Înapoi la Pagina Principală
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[550px] rounded-xl">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Ai nevoie de ajutor?</h1>
        <p>Echipa noastră de suport va reveni cât mai curând posibil prin email.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="mb-3 block text-custom-sm font-medium text-dark">
              Nume
            </label>
            <input
              type="text"
              placeholder="Introdu numele tău"
              required
              name="name"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="mb-3 block text-custom-sm font-medium text-dark">
              Email
            </label>
            <input
              type="email"
              placeholder="Introdu adresa ta de email"
              required
              name="email"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="mb-3 block text-custom-sm font-medium text-dark">
              Numar telefon
            </label>
            <input
              type="number"
              placeholder="Introdu numarul tau de telefon"
              required
              name="phone"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="mb-3 block text-custom-sm font-medium text-dark">
              Mesaj
            </label>
            <textarea
              name="message"
              placeholder="Scrie mesajul tău aici"
              className="w-full rounded-md border border-gray-4 bg-white px-6 py-3.5 outline-none duration-200 placeholder:text-dark-2 focus:border-gray-7 focus:border-transparent focus:ring-2 focus:ring-primary"
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
