Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	items: [
		{
            xtype: 'panel',
            title: 'Top of the world',
            height: 100,
            width: '75%',
			html: 'Hello, world topper'
        },
        {
            xtype: 'panel',
            title: 'Bottom of the world',
            height: 100,
            width: '75%',
			html: 'Hello, world bottom'
		}
	],
    launch: function() {
        //Write app code here
		console.log("Hello, you silly dev!");
		console.log( this );
    }
});
