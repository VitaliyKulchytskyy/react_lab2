const Footer = () => {
    return (
        <div className="w-[990px] h-12 font-medium text-opacity-[0.8] text-[#ffffff] flex mt-[16px]">
            <div className="w-1/2 text-[12px]">
                АТ «УНІВЕРСАЛ БАНК» Ліцензія НБУ №92 від<br></br>
                20.01.1994, у держреєстрі банків №226
            </div>
            <div className="w-1/2 gap-3 flex items-center justify-end">
                <button className="text-[14px] font-bold leading-6 rounded-2xl p-2 border-[1px] gap-1 flex items-center justify-center hover:bg-white hover:bg-opacity-20">
                    <img src="../../public/cup.svg" alt="" />
                    <div className="widget-button-icon-text">
                        Провести розіграш
                    </div>
                </button>
                <button className="text-[14px] font-bold leading-6 rounded-2xl p-2 border-[1px] gap-1 flex items-center justify-center hover:bg-white hover:bg-opacity-20">
                    <img src="../../public/gamepad.svg" alt="" />
                    <div className="widget-button-icon-text">
                        Віджет для стрімів
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Footer;
