import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Box({ field, handleChange }) {
    console.log("field in box")
    const { id,label,value } = field;
  
    return (
      <div className="grid grid-cols-4 items-center gap-4">
        <Label htmlFor={id} className="text-right">{label}</Label>
        <Input
          id={id}
          value={value}
          className="col-span-3"
          onChange={handleChange}
        />
      </div>
    );
  }