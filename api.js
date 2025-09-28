async function getProfileData() {
    const url = "https://raw.githubusercontent.com/BTJUNIN/Portifolio/refs/heads/main/curriculo-M%C3%A1rcio/data/dados.json";
    const response = await fetch(url);
    return await response.json();
}