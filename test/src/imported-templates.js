/**
 * Created by chad on 12/24/16.
 */

describe('Imported Templates', function () {
    describe("Load", function () {
        let template = DataTemplates.getTemplate("importTemplate");
        it(`HTML import template in mocha.html should have been loaded and stored.`, function () {
            expect(template).to.exist;
        });
    });

    describe("Clone", function () {
        let clone = DataTemplates.clone("importTemplate");

        it(`Root element should be a 'div' element`, function () {
            expect(clone.tagName).to.deep.equal("DIV");
        });

        it(`First Grandchild element should be a 'p' element`, function () {
            expect(clone.children[0].tagName).to.deep.equal("H1");
        });

        it(`First Grandchild's innerHTML should equal 'Imported Template'`, function () {
            expect(clone.children[0].innerHTML).to.deep.equal("Imported Template");
        });

        it(`Second Grandchild element should be a 'p' element`, function () {
            expect(clone.children[1].tagName).to.deep.equal("P");
        });

        it(`Second Grandchild's innerHTML should equal 'This template was loaded as an html import.'`, function () {
            expect(clone.children[1].innerHTML).to.deep.equal("This template was loaded as an html import.");
        });
    });
});