import { ClientFunction } from 'testcafe';

const scrollBy = ClientFunction(() => {
    window.scrollBy(0, 1000);
});

fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Scroll an Element into View', async () => {
    await scrollBy();
});
