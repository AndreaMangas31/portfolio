import { Card } from "../../utils/interfaces";

interface CollapsableCardProps {
  card: Card;
  isExpanded: boolean;
}
export const CollapsableCard = ({ card, isExpanded }: CollapsableCardProps) => {
  return (
    <div
      className={`flex group  bg-gray-800/40 shadow-md h-full rounded-lg border border-gray-600 group-hover:shadow-2xl group-hover:shadow-green-400/40  group-hover:border-green-700 group-hover:border-2 group-hover:scale-105 ${isExpanded ? "flex-row" : "flex-col"}`}
      style={{
        flexDirection: isExpanded ? "row" : "column",
      }}
    >
      <img
        src={card.photo}
        alt={card.name}
        className={`w-full h-48 object-cover rounded-t-lg ${isExpanded && ` group-hover:rounded-l-md group-hover:rounded-tr-none group-hover:h-full h-full group-hover:w-60`}`}
      />
      {/* Text content */}
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2 text-white">{card.name}</h2>
        <p className="text-gray-400">{card.description}</p>
      </div>
    </div>
  );
};
