Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
	items: [
		{
			html: 'Does this work?'
		
		}
	],
    launch: function() {
        //Write app code here
		console.log("Hello, you silly dev!");
		console.log( this );
    }
});
