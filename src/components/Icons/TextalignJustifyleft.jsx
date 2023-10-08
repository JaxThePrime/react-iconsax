const TextalignJustifyleft = ({
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
          d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
          d="M12 4.5H3M12 9.5H3M21 14.5H3M10.05 19.5H21M3 19.5h2.98"
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
          d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          d="M21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
          fill={color}
        ></path>
        <path
          opacity=".4"
          d="M21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
          d="M12 4.5H3M12 9.5H3M21 14.5H3M21 19.5H3"
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
          d="M12 5.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM12 10.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h9c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 15.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 20.25H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z"
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
          d="M12 4.5H3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M12 9.5H3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          opacity=".4"
          d="M21 14.5H3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M21 19.5H3"
          stroke={color}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    );
  }
};

export default TextalignJustifyleft;
