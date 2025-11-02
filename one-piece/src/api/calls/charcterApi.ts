import apiClient from "../apiClient";
import { Character } from "../interfaces";

export const fetchCharacterById = async (id: string) => {
  try {
    const response = await apiClient.get(`/characters/en/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
export const fetchCharacterByCrewId = async (id: string) => {
  try {
    const response = await apiClient.get(`/characters/en/crew/${id}`);
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
export const fetchAllCharacters = async () => {
  try {
    const response = await apiClient.get(`/characters/en`);
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const fetchCharacterByName = async (name: string | undefined) => {
  try {
    if (!name) throw new Error("It was not given an id");
    console.log("Fetching character with name:", name);
    let nameLower = name.toLowerCase();
    // Handle special case for Tony Tony Chopper
    if (nameLower === "tony tony chopper") {
      nameLower = "chopper";
    }
    const response = await apiClient.get(
      `/characters/en/search?name=${nameLower}`
    );
    return response.data[0] as Character;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};

export const fetchCharacterByCrewName = async (
  crewName: string
): Promise<Character[]> => {
  try {
    const { data: crew } = await apiClient.get(
      `/crews/en/search?name=${crewName}`
    );
    const response = await fetchCharacterByCrewId(crew[0].id);
    return response.data;
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
};
