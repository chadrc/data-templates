/**
 * Created by chad on 12/23/16.
 */

class DataTemplates {
    static getTemplate(name) {
        return DataTemplates.store[name];
    }

    static onWindowLoad() {
        // Inline Templates
        let htmlTemplates = document.querySelectorAll("template[data-template]");
        let importTemplates = document.querySelectorAll("link[data-template]");
        for (let temp of htmlTemplates) {
            DataTemplates.store.push(temp.content);
            let name = temp.dataset.template;
            if (name) {
                DataTemplates.store[name] = temp.content;
            }
        }

        for (let temp of importTemplates) {
            DataTemplates.store.push(temp.import);
            let name = temp.dataset.template;
            if (name) {
                DataTemplates.store[name] = temp.import;
            }
        }
    }

    static clone(name) {
        let template = DataTemplates.getTemplate(name);
        return template.cloneNode(true);
    }

    static get importsSupported() {
        return 'import' in document.createElement('link');
    }
}
DataTemplates.store = [];

if (DataTemplates.importsSupported) {
    window.addEventListener('load', DataTemplates.onWindowLoad);
} else {
    window.addEventListener('HTMLImportsLoaded', DataTemplates.onWindowLoad);
}