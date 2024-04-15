import FundDesc from "./FundDesc";
import FundCard from "./FundCard";
import fundInfo from "../../artifacts/fund_info.json";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { validateForm } from "../../utils/DictUtils";

const formSchema = {
    name: "",
    comment: "",
    card: "",
    month: 1,
    year: 0,
    cvc2: 111,
    chip: 0.0,
};

const Card = () => {
    const [inputs, setInputs] = useState(formSchema);
    const [chip, setChip] = useState(0);
    const [isDisable, setIsDisable] = useState(true);

    useEffect(() => {
        setIsDisable(validateForm(inputs));
    },[inputs]);

    const updateInputs = (object) => {
        setInputs({ ...inputs, ...object });
    };

    const submit = (event) => {
        event.preventDefault();
        setChip(parseFloat(chip) + parseFloat(inputs["chip"]));
        alert(JSON.stringify(inputs));
    }

    return (
        <>
            <div
                className="flex border-0 rounded-[24px] content-stretch 
                                mt-[64px] mb-[16px] min-h-[680px] min-w-[990px] 
                                relative bg-white overflow-hidden"
            >
                <FundDesc fund={fundInfo} inMoney={chip} />
                <form onSubmit={submit} className="fund_body items-center">
                    <FundCard callback={updateInputs} isDisable={isDisable} />
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Card;
