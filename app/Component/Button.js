"use client";
import Link from "next/link";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  loading = false,
  disabled = false,
  icon,
  href,
  onClick,
  type = "button",
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-colors";
  
  const variants = {
    primary: "bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:bg-purple-700 rounded-full hover:from-blue-500 hover:to-purple-600",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 rounded-full",
    outline: "border border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  const isDisabled = disabled || loading;

  const buttonContent = (
    <>
      {loading ? (
        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin"></div>
      ) : (
        <>
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...props}>
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={isDisabled}
      type={type}
      onClick={onClick}
      {...props}
    >
      {buttonContent}
    </button>
  );
};

export default Button; 