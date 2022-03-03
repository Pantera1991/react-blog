import DirectusSdk8 from '@directus/sdk-js';

export default class Directus8 {
    constructor() {
        this.directus = new DirectusSdk8({
            url: process.env.REACT_APP_DIRECTUS_HOST || '',
            token: process.env.REACT_APP_DIRECTUS_STATIC_TOKEN || '',
            project: process.env.REACT_APP_DIRECTUS_PROJECT || '',
            mode: 'jwt',
        });
    }

    async getIndexPage() {
        const response = await this.directus.getItems('index_page', {
            single: true,
        });
        try {
            if (response.data === null) {
                return null;
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching collection index_page ${error}`);
            return null;
        }
    }

    async getArticles() {
        try {
            const response = await this.directus.getItems('articles', {
                filter: {
                    status: {
                        eq: 'draft',
                    },
                },
                sort: 'sort,-created_on',
            });
            if (response.data === null) {
                return [];
            }

            response.data.map((item) => {
                const article = item;
                article.date_created = article.created_on;
                article.date_updated = article.modified_on;
                return article;
            });

            const filePromises = response.data.map(async (article) => {
                const temp = article;
                temp.image = await this.getFile(article.hero_image);
                return temp;
            });

            response.data = await Promise.all(filePromises);

            return response.data;
        } catch (error) {
            throw new Error(`Error fetching collection articles ${error}`);
        }
    }

    async getArticle(id) {
        try {
            const response = await this.directus.getItem('articles', id);
            if (response.data === null) {
                return null;
            }

            const article = response.data
            article.date_created = article.created_on;
            article.date_updated = article.modified_on;

            return article;

        } catch (error) {
            throw new Error(`Error fetching collection articles ${error}`);
        }
    }

    async getCategories() {
        try {
            const response = await this.directus.getItems('category');
            if (response.data === null) {
                return [];
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching collection categories ${error}`);
            return [];
        }
    }

    async getUsers() {
        try {
            const response = await this.directus.getUsers({
                filter: {
                    status: {
                        eq: 'active',
                    },
                },
                fields: ['id', 'email', 'first_name', 'last_name', 'avatar'],
            });
            if (response.data === null) {
                return [];
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching collection users ${error}`);
            return [];
        }
    }

    async getSocialMedia() {
        try {
            const response = await this.directus.getItems('social_media');
            if (response.data === null) {
                return [];
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching collection social_media ${error}`);
            return [];
        }
    }

    async getAboutPage() {
        try {
            const response = await this.directus.getItems('about_page', {
                single: true,
            });
            if (response.data === null) {
                return null;
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching collection about_page ${error}`);
            return null;
        }
    }

    async getFile(id) {
        try {
            const response = await this.directus.getFile(`${id}`);
            if (response.data === null) {
                return null;
            }
            return response.data;
        } catch (error) {
            console.error(`Error fetching file id: ${id}, error: ${error}`);
            return null;
        }
    }
}
