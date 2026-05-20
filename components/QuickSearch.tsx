import { Search } from 'lucide-react';

export default function QuickSearch() {
  return (
    <div className="bg-white rounded shadow flex flex-col h-full">
      <div className="bg-inox-card-header p-4 flex items-center gap-3 border-b border-gray-100">
        <div className="text-black">
          <Search className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-bold">Quick Search</h3>
      </div>
      <div className="p-6 flex flex-col gap-6 flex-1">
        <div>
          <label className="block text-sm text-gray-600 mb-2">Name</label>
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-inox-green focus:ring-1 focus:ring-inox-green"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600 mb-2">Type</label>
          <select className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-inox-green focus:ring-1 focus:ring-inox-green bg-white">
            <option>Units</option>
            <option>Devices</option>
            <option>Users</option>
          </select>
        </div>
      </div>
    </div>
  );
}
