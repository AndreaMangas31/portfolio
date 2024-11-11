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
