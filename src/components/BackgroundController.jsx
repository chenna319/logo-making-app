import { useContext, useEffect, useState } from "react";
import { Slider } from "./ui/slider";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "@/context/UpdateStorageContext";

const BackgroundController = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [rounded, setRounded] = useState(
    storageValue ? storageValue?.bgRounded : 0
  );
  const [padding, setPadding] = useState(
    storageValue ? storageValue?.bgPadding : 40
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.bgColor : "#fff"
  );

  const { setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      bgRounded: rounded,
      bgPadding: padding,
      bgColor: color,
    };
    setUpdateStorage(updatedValue);
    localStorage.setItem("value", JSON.stringify(updatedValue));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rounded, padding, color]);
  return (
    <div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Rounded <span>{rounded}px</span>
        </label>
        <Slider
          defaultValue={[rounded]}
          max={512}
          step={1}
          onValueChange={(event) => setRounded(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Padding <span>{padding}px</span>
        </label>
        <Slider
          defaultValue={[padding]}
          max={100}
          step={1}
          onValueChange={(event) => setPadding(event[0])}
        />
      </div>
      <div className="py-2">
        <label className="p-2 flex justify-between items-center">
          Background Color
        </label>
        <ColorPickerController
          selectedColor={(color) => setColor(color)}
          hideControllsOption={false}
        />
      </div>
    </div>
  );
};

export default BackgroundController;