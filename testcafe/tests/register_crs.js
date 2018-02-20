import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.2:8002/register`;

test('Test DevSlop App', async t => {
   await t
      .typeText('#email', 'testuser@pixi.owasp')
      .typeText('#password', 'testpw')
      .click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button');
});
