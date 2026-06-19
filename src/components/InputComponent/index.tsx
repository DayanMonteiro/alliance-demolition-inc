import styles from "./InputComponent.module.css";

interface InputComponentProps {
  id: string;
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "number";
  value: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputComponent = ({
  id,
  name,
  label,
  type = "text",
  value,
  required = false,
  placeholder,
  error,
  onChange,
}: InputComponentProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label} {required && <span>(required)</span>}
      </label>

      <input
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        className={error ? styles.inputError : ""}
      />

      {error && <small className={styles.errorMessage}>{error}</small>}
    </div>
  );
};

export default InputComponent;
