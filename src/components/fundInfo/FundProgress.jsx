import { formatMoney } from "../../../utils/MoneyFormat";

const Stats = ({ imgSrc, label, value }) => {
    return (
        <>
            <div className="flex relative items-center pl-[20px] pr-[20px] mb-[12px] mt-[12px]">
                <img src={imgSrc} alt="icon" className="m-3" />
                <div>
                    <div className="font-[400] text-[14px] text-secondary">
                        {label}
                    </div>
                    <div>{formatMoney(value)} ₴</div>
                </div>
            </div>
        </>
    );
};

const FundProgress = ({inMoney, targetMoney}) => {
    return (
        <>
            <div className="flex bg-white rounded-[16px] text-left justify-center"> 
                <Stats
                    imgSrc="stats/collected.svg"
                    label="Накопичено"
                    value={inMoney}
                />
                <div className="border-l mb-[12px] mt-[12px]"></div>
                <Stats
                    imgSrc="stats/target.svg"
                    label="Ціль"
                    value={targetMoney}
                />
            </div>
        </>
    );
};

export default FundProgress;
