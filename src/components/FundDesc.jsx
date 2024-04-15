import JarState from "./fundInfo/JarState";
import FundProgress from "./fundInfo/FundProgress";

const fundScheme = {
    ownerName: "Невідомий автор",
    fundName: "Назва банки - відсутня",
    fundDescription: "",
    targetSum: 0,
};

const FundDesc = ({ fund, inMoney }) => {
    const merged = { ...fundScheme, ...fund };

    return (
        <div className="fund_body bg-primary">
            <div className="block mt-[42px] mb-[24px] ml-auto mr-auto">
                <img src="logo_short.png" alt="" />
            </div>
            <div className="pr-[20px] pl-[20px] mt-auto mb-[20px]">
                <JarState inMoney={inMoney} targetMoney={merged["targetSum"]} />
            </div>
            <div className="text-center mt-[4px] ml-auto mr-auto">
                <div className="font-[500] text-[14px]">
                    {merged["ownerName"]}
                </div>
                <div className="font-[800] text-[22px]">
                    {merged["fundName"]}
                </div>
                <div
                    className="w-[unset] leading-[140%] ml-0 mr-0 mb-[20px]"
                    style={{ whiteSpace: "pre-wrap" }}
                >
                    {merged["fundDescription"]}
                </div>
                <div className="ml-[64px] mr-[64px] mt-[16px] min-w-[340px]">
                    <FundProgress
                        inMoney={inMoney}
                        targetMoney={merged["targetSum"]}
                    />
                </div>
            </div>
            <div className="block pb-[42px] w-[100%] mt-auto"></div>
        </div>
    );
};

export default FundDesc;
