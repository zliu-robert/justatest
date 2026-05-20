import { Globe, Bell, Users } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="flex h-16 shrink-0 items-center justify-between bg-inox-dark px-6 text-white">
      <div className="flex items-center gap-8">
        <div className="flex items-center">
          <div className="text-3xl font-bold tracking-tighter">
            <span className="text-white">Inox</span>
            <span className="text-inox-green">Smart</span>
          </div>
        </div>
        <nav className="flex gap-6 text-sm font-semibold">
          <a href="#" className="text-inox-green">Dashboard</a>
          <a href="#" className="hover:text-inox-green transition-colors">Properties</a>
          <a href="#" className="hover:text-inox-green transition-colors">Units</a>
          <a href="#" className="hover:text-inox-green transition-colors">Devices</a>
          <a href="#" className="hover:text-inox-green transition-colors">Users</a>
          <a href="#" className="hover:text-inox-green transition-colors">Calendar</a>
          <a href="#" className="hover:text-inox-green transition-colors">Access</a>
          <a href="#" className="hover:text-inox-green transition-colors">Occu...</a>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <button className="hover:text-inox-green transition-colors">
          <Globe className="h-5 w-5" />
        </button>
        <button className="hover:text-inox-green transition-colors">
          <Bell className="h-5 w-5" />
        </button>
        <div className="flex items-center gap-2 border-l border-gray-600 pl-4">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-400 overflow-hidden">
            <Users className="h-5 w-5 text-white" />
          </div>
          <span className="text-sm">inox-04@mailto.plus</span>
        </div>
      </div>
    </header>
  );
}
