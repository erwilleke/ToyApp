Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	layout: {
		type: 'accordion'
	},
	items: [
		{
            xtype: 'panel',
            title: 'Left of the world',
			html: 'Hello, world left'
        },
        {
            xtype: 'panel',
            title: 'Right of the world',
			html: 'Hello, world right 1/4'
		},
        {
            xtype: 'panel',
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
