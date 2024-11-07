"use client";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import emailjs from "emailjs-com";
import Image from "next/image";
import Loader from "./Loader";
import { FaLaptopCode, FaSearch, FaGoogle, FaMobileAlt } from "react-icons/fa";

const FirmaCallToAction = () => {
  const [formData, setFormData] = useState({
    offerType: "",
    county: "",
    locality: "",
    name: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loader, setLoader] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email || !formData.name || !formData.offerType) {
      toast.error("Te rugăm să completezi toate câmpurile obligatorii.");
      return;
    }

    try {
      setLoader(true);

      await emailjs.send(
        "service_4bilcxr", // Înlocuiește cu serviceID-ul tău
        "template_nmeg26h", // Înlocuiește cu templateID-ul tău
        {
          ...formData,
        },
        "0YKYBGFsUcHd1F4jC", // Înlocuiește cu userID-ul tău
      );

      toast.success("Mulțumim pentru înscriere!");
      setFormData({
        offerType: "",
        county: "",
        locality: "",
        name: "",
        companyName: "",
        phone: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS error:", error);
      toast.error("A apărut o eroare la trimiterea formularului.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <section className="relative z-10 overflow-hidden bg-gray py-12.5">
      <div className="absolute left-0 top-0 -z-1 h-full w-full">
        <Image
          src="/images/newsletter/bg-dots.svg"
          width={1349}
          height={183}
          alt="dot"
        />
      </div>
      <div className="mx-auto max-w-[1170px] px-4 sm:px-8 xl:px-0">
        <div className="rounded-[10px] bg-white px-4 py-9 shadow-1 sm:px-8 xl:px-10">
          <div className="mb-8">
            <div className="w-full">
              <h3 className="mb-3 text-heading-4 font-semibold text-dark">
                Detii o firma si doresti sa iti cresti afacerea?
              </h3>
              <h3 className="text-heading-8 mb-3 text-dark">
                Devino partenerul nostru
              </h3>
              <div>
                <h3 className="mb-3 text-heading-4 font-semibold text-dark">
                  Și beneficiezi de reduceri pentru:
                </h3>
                <ul className="flex flex-wrap gap-4 text-lg text-dark">
                  <li className="flex items-center space-x-2">
                    <FaLaptopCode className="text-3xl text-primary" />
                    <p>Creare website</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaSearch className="text-3xl text-primary" />
                    <p>Optimizare SEO</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaGoogle className="text-3xl text-primary" />
                    <p>Google AdWords</p>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaMobileAlt className="text-3xl text-primary" />
                    <p>Aplicație mobilă</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-1 block font-medium">
                    Tipul ofertei
                  </label>
                  <select
                    name="offerType"
                    value={formData.offerType}
                    onChange={handleChange}
                    required
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
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
                    <option value="Oferta aplicatie mobila">
                      Oferta aplicație mobilă
                    </option>
                  </select>
                </div>
                <div>
                  <label className="mb-1 block font-medium">Județ</label>
                  <input
                    type="text"
                    name="county"
                    value={formData.county}
                    onChange={handleChange}
                    placeholder="Județ"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium">Localitate</label>
                  <input
                    type="text"
                    name="locality"
                    value={formData.locality}
                    onChange={handleChange}
                    placeholder="Localitate"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium">Nume</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Nume"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium">Nume firmă</label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Nume firmă"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium">Telefon</label>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="Telefon"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div>
                  <label className="mb-1 block font-medium">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="E-mail"
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  />
                </div>
                <div className="col-span-1 md:col-span-2">
                  <label className="mb-1 block font-medium">Mesaj</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mesaj"
                    rows={4}
                    className="w-full rounded-md border border-gray-3 bg-white px-5 py-3.5 outline-none focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-dark-4/20"
                  ></textarea>
                </div>
                <div className="col-span-1 md:col-span-2">
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-dark px-5.5 py-3.5 font-medium text-white transition-all duration-300 ease-linear hover:opacity-90"
                    disabled={loader}
                  >
                    {loader ? <Loader /> : "Trimite"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirmaCallToAction;
