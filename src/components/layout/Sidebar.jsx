import { NavLink } from "react-router-dom";
import {
  CommandCenterIcon,
  LiveMonitoringIcon,
  AlertIcon,
  SuspiciousQueueIcon,
  IncidentsIcon,
  HostIcon,
  ActionsIcon,
  SystemStatusIcon,
  UserIcon
} from "../../assets/icons/icons.js";

const links = [
  { name: "Command Center", icon: CommandCenterIcon, path: "/" },
  { name: "Live Monitoring", icon: LiveMonitoringIcon, path: "/monitoring" },
  { name: "Alerts", icon: AlertIcon, path: "/alerts" },
  { name: "Suspicious Queue", icon: SuspiciousQueueIcon, path: "/queue" },
  { name: "Incidents", icon: IncidentsIcon, path: "/incidents" },
  { name: "Hosts", icon: HostIcon, path: "/hosts" },
  { name: "Actions", icon: ActionsIcon, path: "/actions" },
  { name: "System Status", icon: SystemStatusIcon, path: "/system-status" },
];

function Sidebar() {
  return (
    <div className="w-64 bg-[var(--primary-color)] p-4 flex flex-col justify-between">
      <h1 className="text-lg font-bold mb-6 text-white">Fusion Strick AI</h1>

      <div className="space-y-2">
        {links.map((link, index) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg transition ${isActive
                  ? "bg-[#111313] text-white"
                  : "text-gray-400 hover:bg-[#111313] hover:text-white"
                }`
              }
            >
              <Icon className="w-6 h-6 shrink-0" />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>

      <div className="mt-auto">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg transition ${isActive
              ? "bg-[#111313] text-white"
              : "text-gray-400 hover:bg-[#111313] hover:text-white"
            }`
          }
        >
          <UserIcon className="w-6 h-6 shrink-0" />
          <span>Yussef Taie</span>
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;