Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	layout: {
		type: 'hbox',
		pack: 'start',
		align: 'stretch'
	},
	items: [
        {
            xtype: 'panel',
			itemId: 'storyListPanel',
			flex: 2,
            title: 'In scope stories'
		},
        {
            xtype: 'panel',
			itemId: 'storyDetailPanel',
			flex: 3,
            title: 'Selected story details'
		}
	],
	columnsOfInterest: ['Name', 'ScheduleState', 'Owner' ],
    detailFields: ['Description', 'Notes', 'Name', 
            'TaskActualTotal', 'TaskEstimateTotal', 'TaskRemainingTotal', 
            'Tags', 'CreationDate', 'Blocked', 'BlockedReason',
            'ScheduleState', 'PlanEstimate', 'Iteration', 'Relesae', 'Owner', 
            'Tasks', 'RevisionHistory', 'Changesets', 'Discussion',
            'TestCases', 'TestCaseStatus'],
      
    renderStoryDetails: function( storyData )
    {
        var righterSidePanel = this.down( "#storyDetailPanel" );
        righterSidePanel.update( storyData.Description );
        
    },
    
    loadStoryDetailswithModel: function( model, dataItem )
    {
        console.log( dataItem );
        model.load( dataItem.data.ObjectID, {
            scope: this,
            fetch: this.detailFields,
            callback: function( result, operation ){
                if( operation.wasSuccessful() )                
                {
                    this.renderStoryDetails( result.data );
                }
                else
                {
                    var righterSidePanel = this.down( "#storyDetailPanel" );
                    righterSidePanel.update( "-- Error loading story --" );
                }                
            }
        });
    },
    
    loadStoryDetails: function( dataItem )
    {
        if( this.storyModel )
        {
            this.loadStoryDetailswithModel( this.storyModel );
        }
        else
        {
            Rally.data.ModelFactory.getModel({
                type: 'UserStory',
                scope: this, // hint: this brings callback into the 'this' context
                success: function( model ){ this.loadStoryDetailswithModel( model, dataItem );}
            });
        }
    },
    
    renderStoryListGrid: function( store, records )
    {
		var container = this.down( '#storyListPanel' );
		if( container.items.length === 0 )
		{
			var columnDefs = ['Name', 'Owner',
				{
					xtype:'actioncolumn',
					width:30,
					items: [{									
						icon: 'https://rally1.rallydev.com/apps/images/icon_help.gif',
						tooltip: 'More details',
						scope:this,
						handler: function( grid, rowIndex, colIndex ) 
						{
                            this.down( "#storyDetailPanel" ).update("Loading details...");
							var clickedItem = grid.store.data.items[ rowIndex ];
                            this.loadStoryDetails( clickedItem );
						}
					}]
				}
			];
            
			container.add({
				xtype: 'rallygrid',
				columnCfgs: columnDefs,
				disableSelection: true,
				enableEditing: false,
				store: store
			});
		}
    },
    
    launch: function( ) {
        // Load list of in-progress stories
		Ext.create('Rally.data.WsapiDataStore', {
			model: 'UserStory',
			autoLoad: true,
			fetch: this.columnsOfInterest,
			filters: [
				{ 
					property: 'ScheduleState', 
					operator: '=',
					value: "In-Progress"
				}
			],
			sorters: [
				{
					property: 'Owner',
					direction: 'ASC'			
				}
			],
			pageSize: 10,
			listeners: {
				scope: this, // Note: this is _inside_ listeners
				load: this.renderStoryListGrid
			}
		});
    }
});
