import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.2:8001/register`;

test('Register User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('#email', 'testuser@pixi.owasp')
        .typeText('#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        .expect('#search_query')
});

test('Login and Search', async t => {
    await t
        .typeText('#user', 'testuser@pixi.owasp')
        .typeText('#pass', 'testpw')
        //After login we search for Lunch
        .typeText('#search_query', 'Lunch')
        .pressKey('enter')
        .expect('body > div > div:nth-child(12) > div > div.card-deck')
});
