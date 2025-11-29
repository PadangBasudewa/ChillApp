import Input from "../atoms/Input";
import Label from "../atoms/Label";

export default function FormInput({ label, error, ...rest }) {
  return (
    <div className="text-left mb-4">
      <Label>{label}</Label>
      <Input {...rest} />

      {error && <p className="text-red-400 text-xs mt-1">{error}</p>}
    </div>
  );
}
