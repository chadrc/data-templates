/**
 * Created by chad on 12/23/16.
 */

describe("Common", function () {
    describe("Get non-existent template", function () {
        let template = DataTemplates.getTemplate("non-existent-template");
        it(`Retrieved template should not exists`, function () {
            expect(template).to.not.exist;
        });
    });

    describe("Clone non-existent template", function () {
        let clone = DataTemplates.clone("non-existent-template");
        it(`Clone should not exist`, function () {
            expect(clone).to.not.exist;
        });
    });

    describe("Namespaced templates", function () {
        let template = DataTemplates.getTemplate("templateNamespace").namespacedTemplate;

        it(`Namespaced template should exist`, function () {
            expect(template).to.exist;
        })
    });
});