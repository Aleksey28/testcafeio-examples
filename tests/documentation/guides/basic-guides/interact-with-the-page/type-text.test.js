fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Type Text test', async t => {
    await t
        .typeText('#developer-name', 'John Doe');
});
