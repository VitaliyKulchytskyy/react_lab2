import { useState } from "react";
import ChipInput from "./ChipInput";

const Chip = ({callback, minChip, maxChip}) => {
    return (
            <div className="p-[3px] rounded-[24px] gradient_corner mt-[42px] mb-[32px] w-[394px] h-[211px]">
                <div className="w-full h-full p-3 flex items-center flex-col rounded-[20px] bg-white">
                    <div className="font-[600] text-[14px] leading-[16px] flex">
                        Сума поповнення <img src="../../../public/money.png" alt="" className="w-[16px] ml-[.5em] mb-[-3px]" />
                    </div>
                    <div>
                        <ChipInput callback={callback} minChip={minChip} maxChip={maxChip}/>
                    </div>
                </div>
            </div>
    );
};


export default Chip;