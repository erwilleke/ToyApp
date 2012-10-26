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

		
		Rally.data.ModelFactory.getModel({
			type: 'UserStory',
			scope: this, // hint: this brings callback into the 'this' context
			success: function( model ){
				console.log( "Back from model creation!" );
				this.useModel( model );
				}
			});
			
		console.log("This should happen before call returns!");
    },
	useModel: function( model ) {
		model.load( '9000433564', // This is the number at the end of the user story detail page URL
			{ 
				fetch: ['Name', 'ScheduleState', 'Owner' ],
				scope: this, // hint: Don't forget this!
				callback: function( result, operation ) {
					if( operation.wasSuccessful() ) {
						this.down('#furtherRight').add( {
							xtype: 'panel', 
							title: 'Woot!',
							items: [
								{ html: result.data.Owner._refObjectName},
								{ html: result.data.ScheduleState},
								{ html: result.data.Name},
								],
							layout: { type: 'vbox'}
							});
					console.log( result );
					}
					else {
						this.down( '#furtherRight' ).update( 'Doh!' );
					}
				}				
			} 
		);	
	}
	
});
