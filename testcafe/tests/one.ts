import { Selector } from 'testcafe';

fixture`Getting Started`
    .page`http://172.17.0.1:8000`;

test('My first test', async t => {
    await t
        .click('#header > div.login > a')
        .typeText('#j_username', 's-continuum')
        .typeText('#main-panel > div > form > table > tbody > tr:nth-child(2) > td:nth-child(2) > input[type="password"]', 'javastorm')
        .click('#yui-gen1-button')
        .click('#tasks > div:nth-child(7) > a.task-link')
        .click('#outer > main > article > div.JTable.u-table-maxwidth.pipelines-table > div:nth-child(3) > a.JTable-cell.TableCell--pipelineLink > div');

