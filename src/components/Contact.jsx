export default function Contact() {
  // Replace this with your actual phone number (include country code, no spaces/plus)
  const whatsappNumber = "+9779847766260";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <section id="contact" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Let's Work Together</h2>
        <p className="text-slate-400 mb-10 leading-relaxed">
          Have a project in mind or just want to say hi? Reach out via email or drop a message on WhatsApp.
        </p>

        <div className="flex flex-col gap-6 items-center">
          {/* Email Link */}
          <a
            href="mailto:pawanm9816@gmail.com"
            className="text-2xl font-semibold text-cyan-400 hover:text-cyan-300 transition-colors break-all"
          >
            pawanm9816@gmail.com
          </a>

          {/* WhatsApp Button */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-transform hover:scale-105 active:scale-95"
          >
            {/* WhatsApp Simple Icon */}
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.483 8.413-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.308 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}