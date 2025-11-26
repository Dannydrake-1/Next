function NotFound() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 flex flex-col justify-center items-center px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-2xl text-gray-600 mb-8">Oops! Page not found</p>
          <p className="text-gray-500 mb-8 max-w-md">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => window.history.back()}
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
export default NotFound;
