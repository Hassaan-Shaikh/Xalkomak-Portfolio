import { ApertureIcon } from "lucide-react";
import { FaCog } from "react-icons/fa";
import { FaShirt } from "react-icons/fa6";
import { PiGameControllerFill } from "react-icons/pi";
import { BiLogoBlender } from "react-icons/bi";
import { SiGodotengine } from "react-icons/si";
import { LiaToolsSolid } from "react-icons/lia";
import { FaYoutube } from "react-icons/fa6";
import { PiLinktreeLogoBold } from "react-icons/pi";

type IconName = "snx" | "snapshots" | "dawg" | "misc" | "blender" | "godot" | "tool" | "youtube" | "linktree";

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
      case "blender":
        return <BiLogoBlender size={iconSize} />;
      case "godot":
        return <SiGodotengine size={iconSize} />;
      case "tool":
        return <LiaToolsSolid size={iconSize} />;
      case "youtube":
        return <FaYoutube size={iconSize} />;
      case "linktree":
        return <PiLinktreeLogoBold size={iconSize} />;
      case "misc":
      default:
        return <FaCog size={iconSize} />;
    }
  };

  return <div className="mr-4 text-white">{getIcon(iconName)}</div>;
};
