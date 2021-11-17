import getData from './getData';

const url = 'https://tiktok33.p.rapidapi.com/trending/feed';

beforeEach(() => {
    jest.setTimeout(60000);
});

test('feed is fetched', async () => {
    const posts = await getData(url);

    expect(Array.isArray(posts)).toBe(true);
    expect(posts.length).toBeGreaterThanOrEqual(30);
});
