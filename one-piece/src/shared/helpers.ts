const mugiwarasMap: { [key: string]: string } = {
  luffy: "luffy",
  zoro: "zoro",
  nami: "nami",
  usopp: "usopp",
  sanji: "sanji",
  chopper: "chopper",
  robin: "robin",
  franky: "franky",
  brook: "brook",
  jinbe: "jinbe",
  zeus: "zeus",
};
// This function takes a character's API name, converts it to lowercase, and checks if it contains any of the keys in the characterMap object. If a match is found, it returns the corresponding value from the characterMap. If no match is found, it returns an empty string.
export function getFolderName(apiName: string): string {
  const lowerCaseName = apiName.toLowerCase();
  for (const key in mugiwarasMap) {
    if (lowerCaseName.includes(key)) {
      return mugiwarasMap[key];
    }
  }
  return "";
}

//this function formats character names for URL usage
export const formatCharacterName = (name: string): string => {
  return name.toLowerCase().replace(/\s+/g, "-");
};

//this function deformats character names for api usage
export const deformatCharacterName = (formattedName: string): string => {
  return formattedName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
