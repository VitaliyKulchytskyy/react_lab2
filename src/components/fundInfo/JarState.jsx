import React, { useState } from "react";
import { formatMoney, listToMoney } from '../../../utils/MoneyFormat';

function getJarStateSrcByCurrentValue(currentValue, maxValue) {
    if (maxValue == null) return "img/jar/uah_50.png";

    const jarStates = {
        "jar/uah_0.png": 0.33,
        "jar/uah_33.png": 0.5,
        "jar/uah_50.png": 1,
        "jar/uah_100.png": Infinity,
    };

    for (const [src, value] of Object.entries(jarStates)) {
        if (currentValue < value * maxValue) return src;
    }

    return "jar/uah_0.png";
}

function calcGridDestribution(maxValue, gridScaleCount) {
    var out = [];
    out[0] = 0;
    out[gridScaleCount - 1] = maxValue;

    if (gridScaleCount <= 2) return out;

    const step = maxValue / (gridScaleCount - 1);
    for (var i = 1; i < gridScaleCount - 1; i++) out[i] = out[i - 1] + step;

    return out;
}

const JarState = ({ inMoney, targetMoney }) => {
    const jarImg = getJarStateSrcByCurrentValue(inMoney, targetMoney);
    const gridValues = listToMoney(calcGridDestribution(targetMoney, 3));

    return (
        <>
            <div className="relative flex items-center justify-center">
                <img
                    src="jar_bg.png"
                    alt="jar background"
                    className="w-[215px]"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[.97]">
                    <img src={jarImg} alt="" className="h-[203px] w-[155px]" />
                    <div className=" absolute top-[26px] left-[13px]">
                        <img src="jar/grid.png" alt="" />
                        <div className="jar_label bottom-[147px] left-[16px]">
                            {gridValues[2]}
                        </div>
                        <div className="jar_label bottom-[78px] left-[7px]">
                            {gridValues[1]}
                        </div>
                        <div className="jar_label bottom-[5px] left-[8px]">
                            {gridValues[0]}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default JarState;
