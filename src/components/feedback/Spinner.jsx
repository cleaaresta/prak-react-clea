export default function Spinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-green-500 border-t-transparent"></div>
        <p className="text-lg font-medium text-green-700">Loading...</p>
      </div>
    </div>
  );
}
