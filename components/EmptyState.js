export default function EmptyState({ text }) {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center">
      
      <p className="text-sm text-gray-500 mb-2">
        {text}
      </p>

      <p className="text-xs text-gray-400">
        Try selecting another date
      </p>

    </div>
  );
}