import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ mode, language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let bg = !mode ? "#1e2939" : "#f1f5f9";
  let text = mode ? "#1e2939" : "#f1f5f9";


  const [submitted, setSubmitted] = useState(false);

  const titles = {
    en: "Contact Me",
    uz: "Bog'lanish",
    ru: "Связаться со мной",
  };

  const placeholders = {
    en: { name: "Your Name", email: "Your Email", message: "Your Message" },
    uz: { name: "Ismingiz", email: "Emailingiz", message: "Xabaringiz" },
    ru: { name: "Ваше имя", email: "Ваш Email", message: "Сообщение" },
  };

  const title = titles[language] || titles["en"];
  const placeholder = placeholders[language] || placeholders["en"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

      emailjs
        .send(
          "service_aj9alnu", // Service ID
          "template_tt3e297", // Template ID
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
          "ft8_k7uzI0tZYSiC0" // Public key
        )

        .then(
          (res) => {
            console.log("Email yuborildi", res.status, res.text);
            setSubmitted(true);
            setFormData({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 3000);
          },
          (err) => {
            console.error("Xatolik yuz berdi: ", err);
            alert("Xabar yuborilmadi!");
          }
        );
  };

  return (
    <div className="max-w-[1280px] mx-auto px-8 flex flex-col items-center py-20 min-h-screen">
      <h2 className="text-3xl font-extrabold mb-12 text-white">{title}</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder={placeholder.name}
          style={{ backgroundColor: bg , color: text}}
          className="p-4 rounded-xl text-white placeholder-gray-400 border border-transparent focus:border-teal-400 focus:outline-none transition-all"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={{ backgroundColor: bg , color: text}}
          placeholder={placeholder.email}
          className="p-4 rounded-xl text-white placeholder-gray-400 border border-transparent focus:border-teal-400 focus:outline-none transition-all"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={{ backgroundColor: bg , color:text}}
          placeholder={placeholder.message}
          className="p-4 rounded-xl text-white placeholder-gray-400 border border-transparent focus:border-teal-400 focus:outline-none transition-all resize-none h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-xl font-bold transition-all"
        >
          {language === "uz"
            ? "Yuborish"
            : language === "ru"
            ? "Отправить"
            : "Send"}
        </button>

        {submitted && (
          <p className="text-green-400 font-semibold mt-2 animate-pulse">
            {language === "uz"
              ? "Xabaringiz yuborildi!"
              : language === "ru"
              ? "Ваше сообщение отправлено!"
              : "Message sent!"}
          </p>
        )}
      </form>
    </div>
  );
}
