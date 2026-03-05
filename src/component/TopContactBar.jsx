export default function TopContactBar({ visible }) {
  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 transition-transform duration-500 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-white text-black text-sm md:text-base md:p-6">
        <div className="max-w-7xl mx-auto px-6 py-2 flex flex-col md:flex-row justify-between items-center gap-2">

          <p className="hidden md:block">📍 Oranto International Airport Hotel, Enugu, Nigeria</p>

          <div className="flex flex-col md:flex-row gap-4">
            <p>☎ Switchboard: +234 916 000 2437</p>
            <p>✉ info@orantohotel.ng</p>
          </div>

        </div>
      </div>
    </div>
  );
}