"use client";
import { useState } from "react";
import emailjs from "emailjs-com";

interface FormState {
  succeeded: boolean;
  loading: boolean;
}

const InscrieFirma = () => {
  const [state, setState] = useState<FormState>({
    succeeded: false,
    loading: false,
  });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    county: "",
    locality: "",
    offerType: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState({ ...state, loading: true });

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // înlocuiește cu serviceID-ul tău
        "YOUR_TEMPLATE_ID", // înlocuiește cu templateID-ul tău
        e.target as HTMLFormElement, // tip explicit
        "YOUR_USER_ID", // înlocuiește cu userID-ul tău
      )
      .then(
        (result) => {
          console.log(result.text);
          setState({ succeeded: true, loading: false });
          setFormData({
            name: "",
            email: "",
            phone: "",
            companyName: "",
            county: "",
            locality: "",
            offerType: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setState({ succeeded: false, loading: false });
        },
      );
  };

  if (state.succeeded) {
    return (
      <div className="mx-auto mt-40 text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">Mulțumim!</h1>
        <p>Echipa noastră de suport te va contacta în curând pe email.</p>
        <button className="mt-10 rounded-lg bg-dark px-6 py-3 font-medium text-white hover:opacity-90">
          Înapoi la Acasă
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-40 max-w-[750px] rounded-xl">
      <div className="text-center">
        <h1 className="mb-3.5 text-custom-1 font-bold text-dark">
          Devino Partener
        </h1>
        <p>Completează formularul de mai jos pentru a primi detalii.</p>
      </div>

      <div className="my-10 bg-white p-4 shadow-box sm:p-7.5 xl:p-10">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="mb-3 block text-custom-sm font-medium text-dark">
              Tipul Ofertei
            </label>
            <select
              name="offerType"
              value={formData.offerType}
              onChange={handleChange}
              required
              className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
            >
              <option value="">Alege tipul de ofertă dorit</option>
              <option value="Oferta abonament">Oferta abonament</option>
              <option value="Oferta creare website">
                Oferta creare website
              </option>
              <option value="Oferta optimizare SEO">
                Oferta optimizare SEO
              </option>
              <option value="Oferta Google AdWords">
                Oferta Google AdWords
              </option>
              <option value="Oferta aplicație mobilă">
                Oferta aplicație mobilă
              </option>
            </select>
          </div>

          {/* Grid responsive pentru câmpurile de la Județ la Email */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Județ
              </label>
              <input
                type="text"
                name="county"
                value={formData.county}
                onChange={handleChange}
                placeholder="Județ"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Localitate
              </label>
              <input
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                placeholder="Localitate"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Nume
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Numele tău"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Nume firmă
              </label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Nume firmă"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Telefon
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Telefon"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 block text-custom-sm font-medium text-dark">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-3 block text-custom-sm font-medium text-dark">
              Mesaj
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Mesaj"
              rows={4}
              className="w-full rounded-md border border-gray-4 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-dark px-5 py-3.5 font-medium text-white transition-all duration-200 hover:opacity-90"
            disabled={state.loading}
          >
            {state.loading ? "Se trimite..." : "Trimite"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default InscrieFirma;
