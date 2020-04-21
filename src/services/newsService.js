class NewsService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    fetchTopNews(country) {
        return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.apiKey}`);
    }

    fetchNewsByCategory(country, category) {
        return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`);
    }
}

export const newsService = new NewsService('4cb281adf82f48a08c58e5bf84a964cc');