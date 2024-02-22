import { Suspense, lazy, memo, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "@/components/ErrorFallBack";
import Icon from "./Icons/Aave.jsx";
const VsxIcon = ({
  iconName = "",
  size = 24,
  color = "currentColor",
  type = "linear",
  className,
}) => {
  // const Icon = lazy(() => import(`./Icons/${iconName}.jsx`));

  const [Icon, setIcon] = useState(null);

  console.log(size);

  useEffect(() => {
    const importComponent = async () => {
      const module = await import(`./Icons/${iconName}`);
      const Icon = module.default;
      setIcon(
        <Icon color={color} size={size} type={type}/>
      );
    };

    importComponent();
  }, [iconName, size, type, className, color]);

  console.log(type)

  return (
    // <ErrorBoundary FallbackComponent={ErrorFallBack}>
    //   <Suspense>
    //   </Suspense>
    // </ErrorBoundary>
    // <Icon color={color} size={size} type={type} className={className} />
    Icon && Icon
  );
};

export default VsxIcon;
