/**
 * Created by chad on 12/24/16.
 */

describe('Imported Templates', function () {
    describe("Load", function () {
        let template = DataTemplates.get("importTemplate");
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

    describe("Loading Nested", function () {
        let template1 = DataTemplates.get("template1");
        let template2 = DataTemplates.get("template2");
        it(`template1 should exist`, function () {
            expect(template1).to.exist;
        });

        it(`template2 should exist`, function () {
            expect(template2).to.exist;
        });
    });
});