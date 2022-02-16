fixture`Interact With the Page`
    .page`https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/FileSelection/jQuery/Light/`;

test('Upload Files test', async t => {
    await t
        .switchToIframe('.demo-frame')
        .setFilesToUpload('.dx-fileuploader-input', [
            // substitute the following string with the path to a local file or multiple files you want to upload
            'src/file.txt',
        ]);
});
