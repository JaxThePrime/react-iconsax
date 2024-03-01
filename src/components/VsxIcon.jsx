import { cloneElement, useEffect, useState } from "react";
const VsxIcon = ({
  iconName = "",
  size = 24,
  color = "currentColor",
  type = "linear",
  className = "",
}) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`./Icons/${iconName}.jsx`);
      const Icon = module.default;
      setIcon(<Icon className={className} />);
    };

    importComponent();
  }, [iconName,className]);

  return Icon && cloneElement(Icon, { color, size, type, className });
};

export default VsxIcon;