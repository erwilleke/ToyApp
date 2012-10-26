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
	columnsOfInterest: ['Name', 'ScheduleState', 'Owner', 'Description' ],
    launch: function( ) {
        //Write app code here
		console.log("Hello, you silly dev!");
		var defectStore = Ext.create('Rally.data.WsapiDataStore', {
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
				load: function( store, records) {
					var container = this.down( '#storyListPanel' );
					if( container.items.length == 0 )
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
										var righterSidePanel = this.down( "#storyDetailPanel" );
										var clickedItem = grid.store.data.items[ rowIndex ];
										righterSidePanel.update( clickedItem.data.Description );
									}
								}]
							
							}
						];
						console.log( columnDefs );
						container.add({
							xtype: 'rallygrid',
							columnCfgs: columnDefs,
							disableSelection: true,
							enableEditing: false,
							store: store
						});
					}
				}
			}
		});
    }
});
