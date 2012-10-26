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
            title: 'Left of the world',
			width: 250,
			html: 'Hello, world left'
        },
        {
            xtype: 'panel',
			flex: 1,
            title: 'Right of the world',
			html: 'Hello, world right 1/4'
		},
        {
            xtype: 'panel',
			flex: 3,
            title: 'Righter of the world',
			html: 'Hello, world righter 3/4'
		}
	],
    launch: function() {
        //Write app code here
		console.log("Hello, you silly dev!");
		console.log( this );
    }
});
