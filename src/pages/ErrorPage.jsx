import { Link } from "react-router-dom";

export default function ErrorPage({
  errorCode,
  errorDescription,
  errorImage,
}) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
      {errorImage ? (
        <img
          src={errorImage}
          alt={`Error ${errorCode}`}
          className="w-64 h-64 object-contain mb-8 animate-bounce"
        />
      ) : (
        <h1 className="text-8xl font-bold text-gray-300 mb-4">{errorCode}</h1>
      )}

      <h2 className="text-2xl text-gray-700 font-semibold mb-2">
        Oops! Terjadi Kesalahan
      </h2>
      <p className="text-gray-500 max-w-md mx-auto mb-8">
        {errorDescription}
      </p>

      <Link
        to="/"
        className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-green-500/30"
      >
        Kembali ke Dashboard
      </Link>
    </div>
  );
}
