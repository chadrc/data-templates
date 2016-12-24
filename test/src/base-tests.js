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

    describe("Clone inline template", function () {
        let clone = DataTemplates.clone("testTemplate");
        console.log('clone:', clone);
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

    describe("Clone imported template", function () {
        let clone = DataTemplates.clone("importTemplate");
        console.log('clone:', clone);
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