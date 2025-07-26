import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function EmailForm() {
  const navigate = useNavigate();
  const localemail = localStorage.getItem("email");
  console.log("localemail", localemail);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [contactNo, setContactNo] = useState("");

  const handleSubmit = (e) => {
    return (
      navigate("/") ||
      alert("Emailjs is OFF!") ||
      localStorage.removeItem("email")
    );

    e.preventDefault();
    const templateParams = {
      name: name,
      email: email,
      contact: contactNo,
      message: message,
    };
    emailjs
      .send(
        "service_wxmhebs", // e.g., service_xxx
        "template_kbsg3mp", // e.g., template_yyy
        templateParams,
        "XBjKOr7uAvNnbBQG1" // e.g., your_user_id
      )
      .then(
        (result) => {
          alert("Email sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
          setContactNo("");
          localStorage.removeItem("email");
          navigate("/");
        },
        (error) => {
          alert("Failed to send email.");
        }
      );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        onClick={() => {
          navigate("/");
          localStorage.removeItem("email");
        }}
        className="absolute top-2 left-10 text-2xl"
      >
        🔙
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-3"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            required
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={localemail}
            name="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Contact No.
          </label>
          <input
            onChange={(e) => setContactNo(e.target.value)}
            name="contact"
            type="text"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Message
          </label>
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            name="message"
            required
            placeholder="Write your message..."
            rows="5"
            className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
export default EmailForm;
