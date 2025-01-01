import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-screen shadow-sm border">
      <div>
        {menuList.map((menu, idx) => (
          <h2
            onClick={() => {
              setActiveIndex(idx);
              selectedIndex(idx);
            }}
            key={idx}
            className={`flex items-center gap-2 p-3 text-lg text-gray-500 cursor-pointer px-7 my-2 hover:bg-primary hover:text-white ${
              activeIndex === idx && "bg-primary text-white"
            }`}
          >
            <menu.icon />
            {menu.name}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
