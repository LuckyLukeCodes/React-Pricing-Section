import {
  IoCheckmarkCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

const PriceCard = ({ plan, features }) => {
  let monthlyPrice = "FREE";

  if (plan === "standard plan") {
    monthlyPrice = "$10";
  } else if (plan === "premium plan") {
    monthlyPrice = "$15";
  }

  return (
    <div className="w-full rounded-2xl bg-slate-500/15 pb-8 pl-6 pt-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] md:lg:h-[75%] lg:pb-0">
      <h3 className="pb-5 text-lg font-semibold capitalize">{plan}</h3>
      {features.map((item, index) => (
        <div key={index} className="flex items-center gap-2 pb-[4px]">
          {item.included ? (
            <IoCheckmarkCircleOutline className="text-green-500" />
          ) : (
            <IoCloseCircleOutline className="text-red-500" />
          )}
          <span className="truncate">{item.feature}</span>
        </div>
      ))}
      <div className="mr-6 flex h-full flex-col pt-4">
        <div className="pb-4">
          <span className="text-xl">{monthlyPrice}</span>
          <span className="text-xs"> / Monthly</span>
        </div>
        <button
          className="w-full rounded-lg bg-gradient-to-r from-blue-400 to-emerald-400 py-3
                     hover:bg-gradient-to-r hover:from-blue-400/80 hover:to-emerald-400/80"
        >
          Purchase Plan
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
