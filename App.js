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
    launch: function() {
        //Write app code here
		console.log("Hello, you silly dev!");
		var defectStore = Ext.create('Rally.data.WsapiDataStore', {
			model: 'UserStory',
			fetch: ['Name', 'ScheduleState', 'Owner' ],
			autoLoad: true,
			scope:this,		// Note: never forget!
			listeners: {
				load: function( store, records) {
					console.log( store );
					console.log( records );
					console.log( records[2].data ); // assuming you can see 3+ stories
				}
			}
		});
    }
});
