import { Search, DoorOpen } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-inox-sidebar text-white flex flex-col">
      <div className="p-4 border-b border-gray-500">
        <h2 className="text-center font-semibold mb-4">All Properties</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search here..."
            className="w-full rounded bg-transparent border-b border-gray-400 py-2 pl-9 pr-4 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-white"
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">
        <div className="flex cursor-pointer items-center gap-3 bg-inox-green p-4 font-medium transition-colors">
          <div className="h-5 w-5 rounded border border-white flex items-center justify-center">
            <DoorOpen className="h-3 w-3" />
          </div>
          <div className="flex flex-col">
            <span>Inox Smart Lock Center</span>
            <span className="text-xs opacity-90">(Web portal test)</span>
          </div>
        </div>
        <div className="flex cursor-pointer items-center gap-3 border-b border-gray-600 p-4 hover:bg-gray-600 transition-colors">
          <div className="h-5 w-5 rounded border border-white flex items-center justify-center">
            <DoorOpen className="h-3 w-3" />
          </div>
          <span>Inox Test Portal Property1</span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 border-b border-gray-600 p-4 hover:bg-gray-600 transition-colors">
          <div className="h-5 w-5 rounded border border-white flex items-center justify-center">
            <DoorOpen className="h-3 w-3" />
          </div>
          <span>Inox Test Portal Property2</span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 border-b border-gray-600 p-4 hover:bg-gray-600 transition-colors">
          <div className="h-5 w-5 rounded border border-white flex items-center justify-center">
            <DoorOpen className="h-3 w-3" />
          </div>
          <span>Inox Test Portal Property3</span>
        </div>
      </div>
      <div className="p-4 text-xs text-gray-300">
        <p>© 2026 INOX by Unison Hardware</p>
        <p>Version 1.0.12</p>
      </div>
    </aside>
  );
}
