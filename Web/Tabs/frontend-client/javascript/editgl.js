/*
  GoldenLayout configuration.
*/
var editConfig = {
    content: [{
        type: 'row',
        title: 'Edit Area',
        content:[{
            type: 'component',
            title: 'Input',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                title: 'Output 1',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'component',
                title: 'Output 2',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};

/*
  Create GoldenLayout. Place it in the edit area of the page content.
*/
var editLayout = new GoldenLayout(editConfig, document.getElementById("editid"));

/*
  Initialize component state.
*/
editLayout.registerComponent(
    'testComponent',
    function(container, componentState ) {
        container.getElement().html('<h2 style="text-align:center">'
                                    + componentState.label + '</h2>');
    });

/*
  Start up GoldenLayout.
*/
editLayout.init();
