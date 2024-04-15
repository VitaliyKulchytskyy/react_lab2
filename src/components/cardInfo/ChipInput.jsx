import { useEffect, useState } from "react";
import { isNumericKey } from "../../../utils/Input";
import { formatMoney, formatMoneyToFloat } from "../../../utils/MoneyFormat";
import Input from '@mui/material/Button';

function getColorValue(value) {

}

const ChipButton = ({ value, onClick=(() => {}) }) => {
    return (
        <div
            onClick={onClick}
            className="bg-white border-[1px] border-solid border-corner 
                        rounded-[16px] pl-[3px] pr-[3px] mb-[8px] mt[8px] mr-[16px] cursor-pointer min-h-[40px]
                        font-[500] text-[16px] text-center justify-center items-center flex flex-1 last:mr-0 hover:bg-hoverGray"
        >
            +{formatMoney(value)}&nbsp;₴
        </div>
    );
};

const ChipInput = ({callback, minChip, maxChip}) => {
    const [inputChip, setInputChip] = useState("0");

    useEffect((() => {
        if(parseFloat(inputChip) > parseFloat(maxChip))
            setInputChip(maxChip);
        else if(parseFloat(inputChip) < parseFloat(minChip))
            setInputChip(minChip);

        callback({chip: inputChip});
    }), [inputChip]);

    const handleKeyPress = (event) => {
        const keyCode = event.keyCode || event.which;
        const keyValue = String.fromCharCode(keyCode);

        if (!/[\d.]/.test(keyValue)) event.preventDefault();
    };

    const handleChange = (event) => {
        const text = event.target.innerText;
        setInputChip(text.replace(/[^\d.]/g, ""));
    };

    const addChip = (chip) => {
        setInputChip(parseFloat(inputChip) + chip);
    };

    return (
        <>
            <div className="flex justify-center font-[700] text-[48px] label-empty p-[20px]">
                <div
                    className="border-none outline-none cursor-text"
                    contentEditable="true"
                    onKeyUp={handleKeyPress}
                    onInput={handleChange}
                    onChange={callback}
                >
                    {formatMoney(inputChip)}
                </div>
                <div>&nbsp;₴</div>
            </div>
            <div className="flex flex-row flex-[1] w-[100%] min-w-[346px]">
                <ChipButton value="100" onClick={() => addChip(100)} />
                <ChipButton value="500" onClick={() => addChip(500)} />
                <ChipButton value="1000" onClick={() => addChip(1000)} />
            </div>
        </>
    );
};


export default ChipInput;
