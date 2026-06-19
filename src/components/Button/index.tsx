import Link from "next/link";
import styles from "./Button.module.css";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "primaryRadios" | "secondary" | "dark";
  size?: "sm" | "md" | "lg";
}

const Button = ({
  children,
  href,
  variant = "primary",
  size = "md",
}: ButtonProps) => {
  const className = `
    ${styles.button}
    ${styles[variant]}
    ${styles[size]}
  `;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
};

export default Button;
