/*
  GoldenLayout configuration.
*/
var treeConfig = {
    content: [{
        type: 'row',
        title: 'Project Tree',
        content:[{
            type: 'component',
            title: 'Project Tree',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        }]
    }]
};

/*
  Create GoldenLayout. Place it in the edit area of the page content.
*/
var treeLayout = new GoldenLayout(treeConfig, document.getElementById("treeid"));

/*
  Initialize component state.
*/
treeLayout.registerComponent(
    'testComponent',
    function(container, componentState ) {
        container.getElement().html('<h2 style="text-align:center">'
                                    + componentState.label + '</h2>');
    });

/*
  Start up GoldenLayout.
*/
treeLayout.init();
