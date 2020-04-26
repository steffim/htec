class NewsService {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    fetchTopNews(country) {
        return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${this.apiKey}`)
                .then(response => response.json());
    }

    fetchTopNewsByTerm(country, term) {
        return fetch(`https://newsapi.org/v2/top-headlines?q=${term}&country=${country}&apiKey=${this.apiKey}`)
                .then(response => response.json());
    }

    fetchNewsByCategory(country, category) {
        return fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${this.apiKey}`)
                .then(response => response.json());
    }

    normalizeArticles(articles, path) {
        return articles.reduce((acc, value, index) => {
            acc[index] = {
                ...value,
                id: index,
                path: `${path}/${index}`
            }

            return acc;
        }, {});
    }
}

export const newsService = new NewsService('1ba5369dda8142fba9d4e08ac1583c79');