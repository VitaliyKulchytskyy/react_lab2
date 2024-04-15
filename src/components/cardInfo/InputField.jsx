import { useEffect, useState } from "react";
import { parseDefault } from "../../../utils/Validators";


const BaseField = ({ label, callback, validator = parseDefault, maxLength = 64 }) => {
    const [hideState, setHide] = useState("inputF");
    const [input, setInput] = useState("");

    useEffect(() => {
        if (input.length > 0 && input != "") setHide("inputF input-hidden");
        else setHide("inputF");
        
        callback(input);
    }, [input]);

    const getLength = (e) => {
        setInput(validator(e.target.value));
    };

    return (
        <>
            <input
                className={hideState}
                onChange={getLength}
                maxLength={maxLength}
                value={input}
            />
            <label className="label">{label}</label>
        </>
    );
};

// Schema: [{"label": "str", "length": 12, "callback": (() => {}), ("validator": parseNumber)}, ...]
export const MultipleInlineInput = ({ labels }) => {
    return (
        <div class="field border-[1px] w-[340px]">
            {labels.map((label, index) => (
                <>
                    <div className="relative inline-block w-[90px]">
                        <BaseField
                            label={label["label"] || ""}
                            callback={label["callback"] || ((e) => {}) }
                            validator={label["validator"] || parseDefault}
                            maxLength={label["length"] || 64}
                        />
                    </div>
                    {index !== labels.length - 1 && (
                        <span className="borderline"></span>
                    )}
                </>
            ))}
        </div>
    );
};

export const InputField = ({ label, maxLength, validator, callback}) => {
    return (
        <div className="field border-[1px]">
            <BaseField 
                label={label} 
                maxLength={maxLength} 
                validator={validator} 
                callback={callback}
            />
        </div>
    );
};
