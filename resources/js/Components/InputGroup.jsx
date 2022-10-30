import React from "react";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
const InputGroup = ({label,name,type,value,onHandleChange,errors,labelClass,InputClass,ErrorClass,disabled}) => {
    return (
        <>
            <InputLabel forInput={name} ty value={label} />
            <TextInput
                type={type ? type : "text"}
                name={name}
                value={value}
                className={
                    "mt-1 block  " + InputClass +
                    (errors.name ? " border-red-500" : " ")
                }
                handleChange={onHandleChange}
                disabled={disabled}

            />
            <InputError message={errors.name} className="mt-2" />
        </>
    );
};

export default InputGroup;
