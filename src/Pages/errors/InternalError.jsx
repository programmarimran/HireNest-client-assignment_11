import { Link } from "react-router";
import { AlertTriangle } from "lucide-react";

const InternalError = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
      <div className="max-w-md">
        <img
          src="https://cdn.openai.com/chatgpt/404-hiring-error.png"
          alt="404 Illustration"
          className="w-full mb-6 rounded-lg shadow-md"
        />

        <div className="text-red-500 mb-4">
          <AlertTriangle size={48} />
        </div>

        <h1 className="text-5xl font-bold text-error mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
        <p className="text-base-content mb-6">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default InternalError;
