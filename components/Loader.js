export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-10 gap-3">
      
      {/* Spinner */}
      <div className="w-6 h-6 border-2 border-gray-300 border-t-black rounded-full animate-spin"></div>

      {/* Text */}
      <p className="text-sm text-gray-500">
        Loading...
      </p>
      
    </div>
  );
}