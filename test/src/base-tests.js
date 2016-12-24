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

    describe("Get non-existent template", function () {
        let template = DataTemplates.getTemplate("non-existent-template");
        it(`Retrieved template should not exists`, function () {
            expect(template).to.not.exist;
        });
    });

    describe("Clone inline template", function () {
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

    describe("Clone imported template", function () {
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

    describe("Clone non-existent template", function () {
        let clone = DataTemplates.clone("non-existent-template");
        it(`Clone should not exist`, function () {
            expect(clone).to.not.exist;
        });
    });

    describe("Loading nested templates", function () {
        let template = DataTemplates.getTemplate("parentTemplate");
        let childTemp = DataTemplates.getTemplate("childTemplate");
        it(`'parentTemplate' should have been loaded`, function () {
            expect(template).to.exist;
        });

        it(`'childTemplate' should have been loaded`, function () {
            expect(childTemp).to.exist;
        });
    });
});