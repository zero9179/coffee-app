import { useNavigate } from "react-router-dom";
function EmailForm() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="absolute top-2 left-10 text-2xl"
      >
        🔙
      </div>

      <form
        // action="https://formsubmit.co/pg557249@gmail.com"
        // method="POST"
        className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 space-y-5"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Contact Us
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Name
          </label>
          <input
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
          name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Your Message
          </label>
          <textarea
            name="message"
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
