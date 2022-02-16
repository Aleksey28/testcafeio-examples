fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Navigate To URL test', async t => {
    await t
        .navigateTo('https://github.com/DevExpress/testcafe');
});
