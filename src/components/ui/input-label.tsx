import { Input } from "./input";
import { Label } from "./label";

export function InputLabel({ placeholder, id, ...props }: React.ComponentProps<typeof Input>) {
    return (
        <div className="grid w-full max-w-full items-center gap-1.5 pb-3">
            <Label htmlFor={id}>{placeholder}</Label>
            <Input id={id} {...props} placeholder={placeholder} />
        </div>
    )
}