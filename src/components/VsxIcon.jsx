import React, { Suspense, memo, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallBack from "@/components/ErrorFallBack";

const VsxIcon = ({
  iconName = "",
  size = 24,
  color = "currentColor",
  type = "linear",
  className,
}) => {

  const Icon = useMemo(
    () => React.lazy(() => import(`./Icons/${iconName}.jsx`)),
    []
  );

  return (
      <ErrorBoundary FallbackComponent={ErrorFallBack}>
        <Suspense>
          <Icon color={color} size={size} type={type} className={className} />
        </Suspense>
      </ErrorBoundary>
  );
};

export default memo(VsxIcon);