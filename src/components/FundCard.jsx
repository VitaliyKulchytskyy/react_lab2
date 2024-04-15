import {
    parseCardNumber,
    parseMonth,
    parseNumber,
} from "../../utils/Validators";
import Chip from "./cardInfo/Chip";
import { InputField, MultipleInlineInput } from "./cardInfo/InputField";
import { useEffect, useState } from "react";

const PaymentButton = ({ src, alt = "" }) => {
    return (
        <div className="bg-black h-[48px] w-[340px] justify-center flex cursor-pointer rounded-[8px] hover:bg-button_hover last:mt-[16px]">
            <img src={src} alt={alt} className="scale-[.54]" />
        </div>
    );
};

const CustomCardInfo = ({ callback, isDisable }) => {
    const [card, setCard] = useState("");
    const [month, setMonth] = useState(1);
    const [year, setYear] = useState(1);
    const [cvc2, setCvc2] = useState(111);

    useEffect(() => {
        callback({
            "card": card,
            "month": month,
            "year": year,
            "cvc2": cvc2
        });
    }, [card, month, year, cvc2]);

    return (
        <>
            <div className="flex items-center mt-2 mb-[24px] font-[500] text-[14px] ">
                <div className="splitterLine "></div>
                <div className="pl-[6px] pr-[6px]">або уведіть дані карти</div>
                <div className="splitterLine "></div>
            </div>
            <InputField 
                label="Номер карти" 
                validator={parseCardNumber} 
                callback={setCard} 
            />
            <MultipleInlineInput
                labels={[
                    {
                        label: "Місяць",
                        callback: setMonth,
                        validator: parseMonth,
                        length: 2,
                    },
                    {
                        label: "Рік",
                        callback: setYear,
                        validator: parseNumber,
                        length: 2,
                    },
                    {
                        label: "CVC2",
                        callback: setCvc2,
                        validator: parseNumber,
                        length: 3,
                    },
                ]}
            />
            <input
                type="submit"
                value="Поповнити банку"
                disabled={isDisable}
                className="bg-lightRed h-[54px] w-[340px] font-[700] justify-center flex cursor-pointer 
                rounded-[8px] hover:bg-hoverRed mt-[16px] items-center text-white disabled:bg-disabled"
            />
        </>
    );
};

const HiddenInput = ({ callback }) => {
    return (
        <div className="w-[340px] flex flex-col p-[8px]" onClick={callback}>
            <div className="flex-grow border-t-[.5px] border-solid border-corner mb-[8px]"></div>
            <div className="justify-center items-center flex">
                <img
                    src="../../public/card.svg"
                    alt=""
                    className="w-[16px] h-[26px] mr-[8px]"
                />
                <div className="font-[600] text-[14px] cursor-pointer text-lightRed">
                    Оплатити картою
                </div>
            </div>
        </div>
    );
};

const FundCard = ({ callback, isDisable }) => {
    const [isHidden, setHide] = useState(false);
    const openBlock = () => setHide(true);

    const [name, setName] = useState("");
    const [comment, setComment] = useState("");

    useEffect((() => {
        callback({
            name: name,
            comment: comment
        });
    }), [name, comment]);

    return (
        <>
            <div>
                <Chip callback={callback} minChip={0} maxChip={29999} />
            </div>
            <div>
                <InputField label="Ваше ім'я (необов'язково)" callback={setName} />
                <InputField label="Коментар (необов'язково)" callback={setComment} />
            </div>
            <div>
                <PaymentButton src="../../public/mono_pay.svg" />
                <PaymentButton src="../../public/g_pay.svg" />
            </div>
            <div className="mt-[16px] mb-[30px]">
                {!isHidden ? (
                    <HiddenInput callback={openBlock} />
                ) : (
                    <CustomCardInfo callback={callback} isDisable={isDisable}/>
                )}
            </div>
        </>
    );
};

export default FundCard;
