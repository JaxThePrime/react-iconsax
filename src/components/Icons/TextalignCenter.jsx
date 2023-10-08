const TextalignCenter = ({
  type = "linear",
  size = 24,
  color = "currentColor", className=""
}) => {
  if (type === "bold") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.742 10.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.742 20.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "broken") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M7.262 9.5h9.48M3 14.5h18M7.262 19.5h9.48M10.05 4.5H21M3 4.5h2.98"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "bulk") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M16.742 10.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75Z"
          fill={color}
        ></path>
        <path
          d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M16.742 20.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "linear") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M3 4.5h18M7.26 9.5h9.48M3 14.5h18M7.26 19.5h9.48"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
  if (type === "outline") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.742 10.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM16.742 20.25h-9.48c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9.47c.41 0 .75.34.75.75s-.33.75-.74.75Z"
          fill={color}
        ></path>
      </svg>
    );
  }
  if (type === "twotone") {
    return (
      <svg className={className}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          opacity=".4"
          d="M3 4.5h18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.262 9.5h9.48"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M3 14.5h18"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M7.262 19.5h9.48"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default TextalignCenter;
