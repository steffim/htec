export const LANG = {
    US: {
        short: 'US',
        long: 'United States'
    },
    GB: {
        short: 'GB',
        long: 'Great Britain'
    }
};

export const PAGES = {
    topNews: {
        id: 'topNews',
        title: 'Top News'
    },
    categories: {
        id: 'categories',
        title: 'Categories'
    },
    search: {
        id: 'search',
        title: 'Search'
    },
    article: {
        id: 'article',
        title: 'Article'
    }
};

export const navItems = [
    {
        id: PAGES.topNews.id,
        path: '/topNews',
        text: PAGES.topNews.title
    },
    {
        id: PAGES.categories.id,
        path: '/categories',
        text: PAGES.categories.title
    },
    {
        id: PAGES.search.id,
        path: '/search',
        text: PAGES.search.title
    }
];

export const CATEGORIES = {
    business: 'Business',
    entertainment: 'Entertainment',
    general: 'General',
    health: 'Health',
    science: 'Science',
    sports: 'Sports',
    technology: 'Technology'
};

export const CATEGORY_MAX_ITEMS = 5;
export const TIMEOUT_BETWEEN_REQUESTS = 60000;