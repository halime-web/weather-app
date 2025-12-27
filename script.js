const API_KEY = "SuKfvvnheMbWbCOQqGK/Wg==Ncq3B8mALQt2kNB4";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const statusMessage = document.getElementById("statusMessage");
const weatherCards = document.getElementById("weatherCards");
const detailArea = document.getElementById("detailArea");
const clearBtn = document.getElementById("clearBtn");

/* YEDEK (MOCK) VERİ */
const mockData = {
  temp: 20,
  humidity: 60,
  feels_like: 22,
  wind_speed: 5
};

async function fetchWeather(city) {
  statusMessage.textContent = "Yükleniyor...";
  weatherCards.innerHTML = "";
  detailArea.innerHTML = "";

  try {
    const response = await fetch(
      "https://api.api-ninjas.com/v1/weather?city=" + city,
      {
        headers: {
          "X-Api-Key": API_KEY
        }
      }
    );

    if (!response.ok) {
      throw new Error("API erişim hatası");
    }

    const data = await response.json();
    createWeatherCard(data, city);
    statusMessage.textContent = "";

  } catch (error) {
    console.warn("API erişilemedi, yedek veri kullanıldı");

    createWeatherCard(mockData, city);
    statusMessage.textContent =
      "API erişim hatası (yedek veri gösteriliyor)";
  }
}

function createWeatherCard(data, city) {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <h3>${city}</h3>
    <p>Sıcaklık: ${data.temp} °C</p>
    <p>Nem: ${data.humidity} %</p>
    <button>Detay Göster</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    showDetail(data);
  });

  weatherCards.appendChild(card);
}

function showDetail(data) {
  detailArea.innerHTML = `
    <p>Hissedilen Sıcaklık: ${data.feels_like} °C</p>
    <p>Rüzgar Hızı: ${data.wind_speed} km/h</p>
  `;
}

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();

  if (city === "") {
    statusMessage.textContent = "Lütfen şehir giriniz";
  } else {
    fetchWeather(city);
  }
});
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    darkModeBtn.textContent = " Açık Mod";
  } else {
    darkModeBtn.textContent = " Koyu Mod";
  }
});
cityInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBtn.click();
  }
});
clearBtn.addEventListener("click", () => {
  cityInput.value = "";
  weatherCards.innerHTML = "";
  detailArea.innerHTML = "";
  statusMessage.textContent = "";
});