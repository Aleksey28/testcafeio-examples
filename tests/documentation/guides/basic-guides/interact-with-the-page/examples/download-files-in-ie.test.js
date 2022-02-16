import { RequestLogger } from 'testcafe';

const fileDownloadLogger = RequestLogger(new RegExp('src/file.txt'), {
    logResponseBody:       true,
    stringifyResponseBody: true,
});

fixture`Interact With the Page`
    .page`../pages/index.html`
    .requestHooks(fileDownloadLogger);

test('Download a file in IE and verify contents', async t => {
    await t
        .click('#downloadButton')
        .expect(fileDownloadLogger.contains(r => {
            console.log(r.response.body);
            return /File contents here/.test(r.response.body) && //verify response body
                   r.response.statusCode === 200; //verify response status code
        })).ok();
});
