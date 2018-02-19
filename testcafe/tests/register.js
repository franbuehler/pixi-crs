import { Selector } from 'testcafe';

fixture`Getting Started`
    .page `http://172.17.0.1:8000/register`;

//test('Test DevSlop App', async t => {
	await t.resizeWindow(1920, 1080)
	    await t
	      //  .typeText('#email', 'testuser@pixi.owasp')
	      //  .typeText('input#password', 'testpw')
	        this.t.click('body > div.jumbotron.jumbotron-fluid > div > div:nth-child(5) > div.col-8 > form > button')
//});
