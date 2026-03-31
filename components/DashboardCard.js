import CopyLinkButton from "./CopyLinkButton";

export default function DashboardCard({ username }) {
  const link = `http://localhost:3000/booking/${username}`;

  return (
    <div className="bg-white border rounded-xl p-4 sm:p-6 shadow-sm">
      
      <h2 className="text-base sm:text-lg font-semibold mb-4">
        Your Booking Link
      </h2>

      <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between bg-gray-50 border rounded-lg px-3 py-3">
        
        <span className="text-sm text-gray-700 break-all">
          {link}
        </span>

        <CopyLinkButton link={link} />
      </div>

    </div>
  );
}