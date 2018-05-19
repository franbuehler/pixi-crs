import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.2:8001/register`;

test('Register User WITH CRS', async t => {
    await t
        .typeText('input#email', 'testuser@pixi.owasp')
        .typeText('input#password', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After registration the search pixi field should be there
        //.expect('#search_query')
});

test('Login User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
});

test('Search Reflected XSS String WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for <script>alert('hi')</script>
        .typeText('#search_query', '<script>alert("hi")</script>')
        .pressKey('enter')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});

test('Search Angular XSS String WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for `{{constructor.constructor("alert(1)")()}}`
        .typeText('#search_query', '`{{constructor.constructor("alert(1)")()}}`')
        .pressKey('enter')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});

test('Login as another User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'email@address.com')
        .typeText('input#pass', '[$ne]=')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        //After login we search for `{{constructor.constructor("alert(1)")()}}`
        .typeText('#search_query', '`{{constructor.constructor("alert(1)")()}}`')
        .pressKey('enter')
        //.expect('body > div > div:nth-child(12) > div > div.card-deck')
});

test('Call service.conf WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/service.conf')
});

test('Call secret.conf WITH CRS', async t => {
    await t
        .navigateTo('http://172.17.0.2:8001/secret.conf')
});

test('Logout User WITH CRS', async t => {
    await t
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-4 > a:nth-child(3) > button')
        .typeText('input#user', 'testuser@pixi.owasp')
        .typeText('input#pass', 'testpw')
        .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
        .click('body > div > div:nth-child(1) > div.col-md-7 > ul > li:nth-child(4) > a')
});
