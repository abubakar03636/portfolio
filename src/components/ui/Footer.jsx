import { FaInstagram, FaLinkedin, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-yellow-300 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between text-center md:text-left">
        
        {/* Left Side - Copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Abubakar Rafique. All rights reserved.</p>
        
        {/* Center - Email and WhatsApp */}
        <div className="flex flex-col items-center md:items-start text-sm gap-2">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <a
              href="mailto:jattabubakar17@gmail.com"
              className="hover:text-yellow-500 transition"
            >
              jattabubakar17@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaWhatsapp className="text-yellow-400" />
            <a
              href="https://wa.me/9231764205585"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition"
            >
              +92 317 6420585
            </a>
          </div>
        </div>
        
        {/* Right Side - Social Links */}
        <div className="flex justify-center md:justify-end gap-6 text-2xl">
          <a
            href="https://www.instagram.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.facebook.com/YOUR_USERNAME"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
