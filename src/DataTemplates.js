/**
 * Created by chad on 12/23/16.
 */

class DataTemplates {
    static getTemplate(name) {
        return DataTemplates.store[name];
    }

    static onWindowLoad() {
        let htmlTemplates = document.querySelectorAll("template[data-template]");
        for (let temp of htmlTemplates) {
            DataTemplates.store.push(temp);
            let name = temp.dataset.template;
            if (name) {
                DataTemplates.store[name] = temp;
            }
        }
    }
}
DataTemplates.store = [];
window.addEventListener('load', DataTemplates.onWindowLoad);