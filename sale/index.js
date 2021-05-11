import template from './template';

export default function(jqueryElement,items){
    const result = template(items);
    jqueryElement.html(result);
}