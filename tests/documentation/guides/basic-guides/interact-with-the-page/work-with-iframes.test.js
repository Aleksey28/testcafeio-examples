fixture`Interact With the Page`
    .page`https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/jQuery/Light/`;

test('Working With iframe test', async t => {
    await t
        .switchToIframe('.demo-frame')
        .click('.dx-datagrid-group-panel')
        .switchToMainWindow();
});
