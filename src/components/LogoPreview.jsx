/* eslint-disable react/prop-types */
import { UpdateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";

const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);

  useEffect(() => {
    if (downloadIcon) {
      downloadIconPng();
    }
  }, [downloadIcon]);

  const downloadIconPng = () => {
    const downloadIconDiv = document.getElementById("downloadIconDiv");
    html2canvas(downloadIconDiv, {
      backgroundColor: null,
      scale: 2,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "chenna_kesava_output.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucideIcon = icons[name];
    if (!LucideIcon) {
      return;
    }
    return (
      <LucideIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };
  return (
    <div className="h-screen flex items-center justify-center">
      <div
        style={{
          padding: storageValue?.bgPadding,
        }}
        className="h-[600px] w-[600px] outline-dotted outline-gray-300 bg-gray-200"
      >
        <div
          id="downloadIconDiv"
          className="h-full w-full flex justify-center items-center"
          style={{
            background: storageValue?.bgColor,
            borderRadius: storageValue?.bgRounded,
          }}
        >
          <Icon
            name={storageValue?.icon}
            size={storageValue?.iconSize}
            color={storageValue?.iconColor}
            rotate={storageValue?.iconRotate}
          />
        </div>
      </div>
    </div>
  );
};

export default LogoPreview;
