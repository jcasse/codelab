/*
  GoldenLayout configuration.
*/
var treeConfig = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'tree-view',
            componentState: { label: 'A' }
        }]
    }]
};


/*
  Create GoldenLayout. Place it in the tree view area of the page content.
*/
var treeLayout = new GoldenLayout(treeConfig, document.getElementById("tree"));


/*
  Initialize component state.
*/
treeLayout.registerComponent(
    'tree-view',
    function(container, componentState ) {
        container.getElement().html('<h2 style="text-align:center">'
                                    + componentState.label + '</h2>');
    });


/*
  Start up GoldenLayout.
*/
treeLayout.init();
