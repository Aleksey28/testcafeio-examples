fixture`Interact With the Page`
    .page`https://devexpress.github.io/testcafe/example/`;

test('Press Key test', async t => {
    await t
        .click('#tried-test-cafe')
        // pressing 'Space' imitates clicking the checkbox again
        .pressKey('space');
});
