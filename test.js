var MyComponent = {
    name: 'This is a component',
    display: function () {
        console.log(this.name);
    },
    mySubcomponent: {
        display: function (secondName,thirdName) {
            console.log(this.name+' '+secondName+' '+thirdName);
        }
    }
}

var displayFromSubcomponent = MyComponent.mySubcomponent.display.bind(MyComponent);
displayFromSubcomponent('a','b');
MyComponent.mySubcomponent.display.call(MyComponent,'a','b');
MyComponent.mySubcomponent.display.apply(MyComponent,['a','b']);