export class FormField {
    type: string;
    label?: string;
    index?: number;
    placeholder? : string;
    required: boolean;
    value?: string | boolean;
    disabled: boolean;
   

    constructor(type: string, label?: string, index?: number, placeholder?: string, required?: boolean, value?: string | boolean, disabled?: boolean) {
        this.type = type;
        this.label = label;
        this.placeholder = placeholder;
        this.required = required ? required : false;
        this.value = value;
        this.disabled = disabled ? disabled : false;
        this.index = index;
    }
}
