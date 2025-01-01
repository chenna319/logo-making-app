/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { iconList } from "@/constants/icons";
import { icons } from "lucide-react";
import { useState } from "react";

const IconList = ({ selectedIcon }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [dialogOpen, setDialogOpen] = useState(false);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
  const Icon = ({ name, color, size }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return;
    }
    return <LucideIcon color={color} size={size} />;
  };
  return (
    <div>
      <div className="">
        <label>Icon</label>
        <div
          onClick={() => setDialogOpen(true)}
          className="p-3 h-[50px] w-[50px] flex items-center justify-center my-2 rounded-md cursor-pointer bg-gray-200"
        >
          <Icon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={dialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Choose Your Favourite Icon</DialogTitle>
            <DialogDescription>
              <div className="h-[400px] overflow-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border rounded-sm p-3 flex items-center justify-center"
                    onClick={() => {
                      selectedIcon(icon);
                      setDialogOpen(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
