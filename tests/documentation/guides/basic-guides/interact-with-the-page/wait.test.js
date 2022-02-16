fixture`Interact With the Page`
    .page`https://js.devexpress.com`;

test('Wait test', async t => {
    await t
        .hover('.map-container')
        .wait(1000);
});
