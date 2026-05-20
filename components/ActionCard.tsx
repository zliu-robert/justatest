import { ReactNode } from 'react';

interface ActionCardProps {
  title: string;
  icon: ReactNode;
  actions: string[];
}

export default function ActionCard({ title, icon, actions }: ActionCardProps) {
  return (
    <div className="bg-white rounded shadow flex flex-col">
      <div className="bg-inox-card-header p-4 flex items-center gap-3 border-b border-gray-100">
        <div className="text-black">{icon}</div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="p-6 flex flex-col gap-4 text-gray-700">
        {actions.map((action, index) => (
          <a key={index} href="#" className="hover:text-inox-green text-lg transition-colors">
            {action}
          </a>
        ))}
      </div>
    </div>
  );
}
