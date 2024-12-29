import { ApertureIcon } from "lucide-react";
import { FaCog } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiGameControllerFill } from "react-icons/pi";

type IconName = "snx" | "snapshots" | "dawg" | "misc";

/**
 * Returns the appropriate icon based on the provided name.
 */
/**
 * Component to display an icon dynamically with a specified size.
 */
export const IconDisplay = ({
  iconName,
  iconSize = 32,
}: {
  iconName: IconName;
  iconSize?: number;
}) => {
  const getIcon = (iconName: IconName): JSX.Element => {
    switch (iconName) {
      case "snx":
        return <FaShirt size={iconSize} />;
      case "snapshots":
        return <ApertureIcon size={iconSize} />;
      case "dawg":
        return <PiGameControllerFill size={iconSize} />;
      case "misc":
      default:
        return <FaCog size={iconSize} />;
    }
  };

  return <div className="mr-4 text-white">{getIcon(iconName)}</div>;
};
