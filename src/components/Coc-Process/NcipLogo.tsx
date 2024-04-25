
import NcipLog from "../../assets/Ncip-Logo.png";



const NcipLogo = () => {
    return (
        <div className="container flex flex-col items-center sm mx-aut w-4/5 h-3/3 mr-40">
            <div className="text-container mb-14 text-center font-semibold ">
                <h1 className="text-3xl text-black">National Commission of</h1>
                <h1 className="text-3xl text-black">
                    <span className="inline-block">Indigenous People</span>
                </h1>
            </div>
            <img className="size-80 max-w-full h-auto" src={NcipLog} alt="NCIP LOGO" />
        </div>
    );
};

export default NcipLogo;
