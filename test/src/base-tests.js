/**
 * Created by chad on 12/23/16.
 */

describe("Templates", function () {

    describe("Load inline template", function () {
       let template = DataTemplates.getTemplate("testTemplate");
       it(`Template in mocha.html should have been loaded and stored.`, function () {
           expect(template).to.exist;
       });
    });

    describe("Load html import template", function () {
       let template = DataTemplates.getTemplate("importTemplate");
        it(`HTML import template in mocha.html should have been loaded and stored.`, function () {
            expect(template).to.exist;
        });
    });

    describe("Cone inline template", function () {
        let clone = DataTemplates.clone("testTemplate");
        it(`Root element should be a 'div' element`, function () {
            expect(clone.children[0].tagName).to.deep.equal("DIV");
        });

        it(`Grandchild element should be a 'p' element`, function () {
            expect(clone.children[0].children[0].tagName).to.deep.equal("P");
        });

        it(`Grandchild's innerHTML should equal 'Test Template'`, function () {
            expect(clone.children[0].children[0].innerHTML).to.deep.equal("Test Template");
        })
    });
});