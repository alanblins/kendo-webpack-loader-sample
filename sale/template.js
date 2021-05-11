export default function(items){
    var templateText = require('./template.html');
    var template_render = kendo.template(templateText);
    return template_render({items});
}