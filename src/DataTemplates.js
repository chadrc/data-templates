/**
 * Created by chad on 12/23/16.
 */

class DataTemplates {
    static get(name) {
        return DataTemplates.store[name];
    }

    static clone(name) {
        let template = DataTemplates.get(name);
        return template ? template.cloneNode(true) : null;
    }

    static get importsSupported() {
        return 'import' in document.createElement('link');
    }

    static onWindowLoad() {
        let namespace = DataTemplates.store;

        // Get data from inline templates
        DataTemplates.loadTemplates(document, namespace);

        // Get data from html imports
        let importTemplates = document.querySelectorAll("link[rel='import']");
        for (let temp of importTemplates) {
            if (temp.import) {
                namespace = DataTemplates.makeNamespace(namespace, temp.getAttribute("data-template-namespace"));
                DataTemplates.addTemplate(temp, temp.import.body.children[0], namespace);
                DataTemplates.loadTemplates(temp.import, namespace);
            }
        }

        let renderParents = document.querySelectorAll("*[data-template]");
        for (let ele of renderParents) {
            if (ele.tagName !== "TEMPLATE") {
                let templateName = ele.dataset.template;
                if (DataTemplates.get(templateName)) {
                    let clone = DataTemplates.clone(templateName);
                    ele.appendChild(clone);
                }
            }
        }
    }

    static makeNamespace(base, newName) {
        if (newName) {
            if (!base[newName]) {
                base[newName] = [];
            }
            base = base[newName];
        }
        return base;
    }

    static loadTemplates(root, namespace) {
        let htmlTemplates = root.querySelectorAll("template[data-template]");
        for (let temp of htmlTemplates) {
            DataTemplates.addTemplate(temp, temp.content, namespace);
            DataTemplates.loadTemplates(temp.content, namespace);
        }
    }

    static addTemplate(node, content, namespace) {
        if (content) {
            let name = node.dataset.template;
            namespace = DataTemplates.makeNamespace(namespace, node.getAttribute("data-template-namespace"));
            namespace.push(content);
            if (name) {
                namespace[name] = content;
            }
        }
    }
}
DataTemplates.store = [];

if (DataTemplates.importsSupported) {
    window.addEventListener('load', DataTemplates.onWindowLoad);
} else {
    window.addEventListener('HTMLImportsLoaded', DataTemplates.onWindowLoad);
}