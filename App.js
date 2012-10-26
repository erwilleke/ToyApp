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
			itemId: 'rightSide',
			flex: 1,
            title: 'Right of the world'
		},
        {
            xtype: 'panel',
			itemId: 'furtherRight',
			flex: 3,
            title: 'Righter of the world'
		}
	],
	columnsOfInterest: ['Name', 'ScheduleState', 'Owner' ],
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
			pageSize: 3,
			listeners: {
				scope: this, // Note: this is _inside_ listeners
				load: function( store, records) {
					var container = this.down( '#furtherRight' );
					if( container.items.length == 0 )
					{
						container.add({
							xtype: 'rallygrid',
							columnCfgs: this.columnsOfInterest,
							store: store
						});
					}
				}
			}
		});
    }
});
