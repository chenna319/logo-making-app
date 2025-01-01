/* eslint-disable react/prop-types */
import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Header = ({ DownloadIcon }) => {
  return (
    <div className="p-4 border shadow-sm flex justify-between items-center">
      <img src="/logo.png" className="h-[30px]" alt="logo" />
      <Button
        className="flex items-center gap-2"
        onClick={() => DownloadIcon(Date.now())}
      >
        <Download /> Download
      </Button>
    </div>
  );
};

export default Header;
