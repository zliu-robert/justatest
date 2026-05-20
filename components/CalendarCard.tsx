import { CalendarDays, ChevronLeft, ChevronRight, LogIn, LogOut, Maximize2, MoreVertical, Search } from 'lucide-react';

export default function CalendarCard() {
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dates = [
    { num: 26, isCurrentMonth: false },
    { num: 27, isCurrentMonth: false },
    { num: 28, isCurrentMonth: false },
    { num: 29, isCurrentMonth: false },
    { num: 30, isCurrentMonth: false },
    { num: 1, isCurrentMonth: true },
    { num: 2, isCurrentMonth: true },
  ];

  return (
    <div className="bg-white rounded shadow flex flex-col h-full">
      <div className="bg-white p-4 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-3">
          <div className="bg-inox-card-header p-2 rounded flex items-center justify-center">
            <CalendarDays className="h-6 w-6 text-black" />
          </div>
          <h3 className="text-lg font-bold">Calendar</h3>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <LogIn className="h-5 w-5 text-blue-600" />
            <span className="font-bold text-lg">Move-In</span>
          </div>
          <div className="flex items-center gap-2">
            <LogOut className="h-5 w-5 text-inox-green" />
            <span className="font-bold text-lg">Move-Out</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Maximize2 className="h-4 w-4 cursor-pointer hover:text-gray-600" />
            <Search className="h-4 w-4 cursor-pointer hover:text-gray-600" />
            <MoreVertical className="h-4 w-4 cursor-pointer hover:text-gray-600" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <ChevronLeft className="h-5 w-5 cursor-pointer text-gray-600" />
            <span className="text-xl">May 2026</span>
            <ChevronRight className="h-5 w-5 cursor-pointer text-gray-600" />
            <span className="text-sm text-gray-500 ml-4 cursor-pointer hover:text-black">This Month</span>
          </div>
          <select className="border border-gray-300 rounded p-1 px-3 focus:outline-none focus:border-inox-green text-gray-700 bg-white">
            <option>Month</option>
            <option>Week</option>
            <option>Day</option>
          </select>
        </div>

        {/* Simple Calendar Grid */}
        <div className="grid grid-cols-7 gap-1 text-center">
          {daysOfWeek.map(day => (
            <div key={day} className="py-2 text-inox-green font-medium text-lg">{day}</div>
          ))}
          {dates.map((date, i) => (
            <div
              key={i}
              className={`py-4 text-lg ${date.isCurrentMonth ? 'font-bold text-black' : 'text-gray-400'}`}
            >
              {date.num}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
