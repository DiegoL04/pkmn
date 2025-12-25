export async function getData(dex) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${dex}`);

    if (!response.ok) {
        throw new Error("API request failed");
    }
    return response.json();
}