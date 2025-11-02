import { useParams } from "react-router-dom";
import { useGetCharacterByName } from "../features/character/hooks/useGetCharacterByName.hook";
import { LoadingState } from "../ui/states/loadingState";
import { ErrorState } from "../ui/states/errorState";
import { getFolderName } from "../shared/helpers";

export const CharacterDetailPage = () => {
  const { id } = useParams();
  const { data: character, isLoading, error } = useGetCharacterByName(id);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error as Error} />;
  if (!character) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-oceanBlue-900 to-oceanBlue-700">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Main info */}
        <div className="relative rounded-lg overflow-hidden mb-8 h-[40vh]">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <div className="flex w-full justify-end">
            <img
              alt={character.name + "_pose"}
              className="w-[40%] h-full object-cover "
              src={`/images/characters/${getFolderName(
                character.name
              )}/${getFolderName(character.name)}-attack.png`}
            />
          </div>
          <div className="absolute bottom-0 left-0 right-0 z-20 p-8">
            <h1 className="text-5xl font-bold text-white mb-2">
              {character.name}
            </h1>
            <p className="text-xl text-white/90">{character.job}</p>
          </div>
        </div>

        {/* Speacil info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* basic */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 space-y-4">
            <h2 className="text-2xl font-bold text-white mb-4">
              Basic Information
            </h2>
            <InfoItem label="Size" value={character.size} />
            <InfoItem label="Age" value={character.age} />
            <InfoItem label="Birthday" value={character.birthday} />
            <InfoItem label="Bounty" value={character.bounty} />
            <InfoItem label="Status" value={character.status} />
          </div>

          {/* Crew */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Crew Details</h2>
            <div className="space-y-4">
              <InfoItem label="Crew Name" value={character.crew.name} />
              <InfoItem label="Position" value={character.crew.number} />
              {character.crew.description && (
                <div className="mt-4">
                  <h3 className="text-white/80 text-sm mb-2">Description</h3>
                  <p className="text-white leading-relaxed">
                    {character.crew.description}
                  </p>
                </div>
              )}
              {character.crew.is_yonko === "true" && (
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-500 text-white">
                    Yonko Crew
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* devil fruit */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl font-bold text-white mb-4">Devil Fruit</h2>
            {character.fruit ? (
              <div className="space-y-4">
                <InfoItem label="Name" value={character.fruit.name} />
                <InfoItem label="Type" value={character.fruit.type} />
                <div className="mt-4">
                  <h3 className="text-white/80 text-sm mb-2">Powers</h3>
                  <p className="text-white leading-relaxed">
                    {character.fruit.description}
                  </p>
                </div>
              </div>
            ) : (
              <InfoItem label="Name" value={"None"} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-sm font-medium text-white/60">{label}</dt>
    <dd className="mt-1 text-lg text-white">{value}</dd>
  </div>
);
