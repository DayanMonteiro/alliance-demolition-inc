import styles from "./TextareaComponent.module.css";

interface TextareaComponentProps {
  id: string;
  name: string;
  label: string;
  value: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
  error?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaComponent = ({
  id,
  name,
  label,
  value,
  required = false,
  placeholder,
  rows = 7,
  error,
  onChange,
}: TextareaComponentProps) => {
  return (
    <div className={styles.field}>
      <label htmlFor={id}>
        {label} {required && <span>(required)</span>}
      </label>

      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        rows={rows}
        className={error ? styles.textareaError : ""}
      />

      {error && <small className={styles.errorMessage}>{error}</small>}
    </div>
  );
};

export default TextareaComponent;
