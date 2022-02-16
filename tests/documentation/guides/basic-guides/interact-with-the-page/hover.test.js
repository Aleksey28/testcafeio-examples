fixture`Interact With the Page`
    .page`https://js.devexpress.com`;

test('Hover test', async t => {
    await t
        .hover('.map-container');
});
