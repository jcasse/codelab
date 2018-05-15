/*
  GoldenLayout configuration.
*/
var editConfig = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};

/*
  Create GoldenLayout. Place it in the edit area of the page content.
*/
var myLayout = new GoldenLayout(editConfig, document.getElementById("edit"));

/*
  Initialize component state.
*/
myLayout.registerComponent(
    'testComponent',
    function(container, componentState ) {
        container.getElement().html('<h2 style="text-align:center">'
                                    + componentState.label + '</h2>');
    });
$(document).ready(function () {


/*
  Start up GoldenLayout.
*/
myLayout.init();

myLayout.on("initialised", function() {
    window.setTimeout(function() {
    console.log("tree layout initialized");
    myLayout.updateSize();
    }, 1000);
});

});
