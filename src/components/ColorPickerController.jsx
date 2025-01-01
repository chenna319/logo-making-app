import { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const ColorPickerController = ({
  // eslint-disable-next-line react/prop-types
  hideControllsOption = false,
  // eslint-disable-next-line react/prop-types
  selectedColor,
}) => {
  const [color, setColor] = useState("rgba(255,255,255,1)");
  return (
    <div>
      <ColorPicker
        hideControls={hideControllsOption}
        value={color}
        onChange={(e) => {
          setColor(e);
          selectedColor(e);
        }}
        hideEyeDrop
        hideAdvancedSliders
        hideColorGuide
        hideInputType
      />
    </div>
  );
};

export default ColorPickerController;
