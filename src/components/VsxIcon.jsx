import { useEffect, useState } from "react";
const VsxIcon = ({
  iconName = "",
  size = 24,
  color = "currentColor",
  type = "linear",
  className,
}) => {
  const [Icon, setIcon] = useState(null);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`./Icons/${iconName}.jsx`);
      const Icon = module.default;
      setIcon(
        <Icon color={color} size={size} type={type} className={className} />
      );
    };
    importComponent();
  }, [iconName, size, type, className, color]);

  return Icon && Icon;
};

export default VsxIcon;
