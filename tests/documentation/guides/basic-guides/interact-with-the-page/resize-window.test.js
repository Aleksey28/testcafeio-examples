fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Resize Window test', async t => {
    await t
        .resizeWindowToFitDevice('iphonexr')
        .maximizeWindow();
});
