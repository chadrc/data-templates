/**
 * Created by chad on 12/24/16.
 */

describe("Inline Templates", function () {

    describe("Load", function () {
        let template = DataTemplates.get("testTemplate");
        it(`Template in mocha.html should have been loaded and stored.`, function () {
            expect(template).to.exist;
        });
    });

    describe("Clone", function () {
        let clone = DataTemplates.clone("testTemplate");

        it(`Root element should be a 'div' element`, function () {
            expect(clone.children[0].tagName).to.deep.equal("DIV");
        });

        it(`Grandchild element should be a 'p' element`, function () {
            expect(clone.children[0].children[0].tagName).to.deep.equal("P");
        });

        it(`Grandchild's innerHTML should equal 'Test Template'`, function () {
            expect(clone.children[0].children[0].innerHTML).to.deep.equal("Test Template");
        });
    });

    describe("Loading Nested", function () {
        let template = DataTemplates.get("parentTemplate");
        let childTemp = DataTemplates.get("childTemplate");
        it(`'parentTemplate' should have been loaded`, function () {
            expect(template).to.exist;
        });

        it(`'childTemplate' should have been loaded`, function () {
            expect(childTemp).to.exist;
        });
    });

    describe("Cloning Nested", function () {
        let parentClone = DataTemplates.clone("parentTemplate");
        let childClone = DataTemplates.clone("childTemplate");
        it(`parent root element should be a 'ul'`, function () {
            expect(parentClone.children[0].tagName).to.deep.equal("UL");
        });

        it(`parent child element should be a 'template'`, function () {
            expect(parentClone.children[0].children[0].tagName).to.deep.equal("TEMPLATE");
        });

        it(`child root element should be a 'li'`, function () {
            expect(childClone.children[0].tagName).to.deep.equal("LI");
        });

        it(`child root element's innerHTML should equal 'Child Item'`, function () {
            expect(childClone.children[0].innerHTML).to.deep.equal("Child Item");
        });
    });

    describe("Render inline template", function () {
        let renderParent = document.getElementById("testRender");

        it(`Root element should be a 'div' element`, function () {
            expect(renderParent.children[0].tagName).to.deep.equal("DIV");
        });

        it(`Grandchild element should be a 'p' element`, function () {
            expect(renderParent.children[0].children[0].tagName).to.deep.equal("P");
        });

        it(`Grandchild's innerHTML should equal 'Test Template'`, function () {
            expect(renderParent.children[0].children[0].innerHTML).to.deep.equal("Test Template");
        });
    });

    describe("Nested render of inline templates", function () {
        let renderParent = document.getElementById("nestedTestRender");

        it(`Root element should be a 'div' element`, function () {
            expect(renderParent.children[0].tagName).to.deep.equal("DIV");
        });

        it(`First grandchild element should be a 'h1' element`, function () {
            expect(renderParent.children[0].children[0].tagName).to.deep.equal("H1");
        });

        it(`Second grandchild element should be a 'div' element`, function () {
            expect(renderParent.children[0].children[1].tagName).to.deep.equal("DIV");
        });

        it(`Second grandchild' first child should be a 'div' element`, function () {
            expect(renderParent.children[0].children[1].children[0].tagName).to.deep.equal("DIV");
        });

        it(`Second grandchild' first child's first child should be a 'p' element`, function () {
            expect(renderParent.children[0].children[1].children[0].children[0].tagName).to.deep.equal("P");
        });

        it(`Second grandchild's first child's first child's innerHTML should equal 'Test Template'`, function () {
            expect(renderParent.children[0].children[1].children[0].children[0].innerHTML).to.deep.equal("Test Template");
        });
    });
});