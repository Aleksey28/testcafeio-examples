import { Selector } from 'testcafe';

const article = Selector('#article-content');

fixture `Selector`
    .page `./index.html`;

test('Article content exists', async (t) => {
    await t.expect(article.exists).ok();
});
