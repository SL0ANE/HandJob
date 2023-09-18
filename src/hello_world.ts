import * as events from './util/events'
import PACKAGE from '../package.json'
import { createBlockbenchMod, createAction, createBarMenu } from './util/moddingTools'

createBlockbenchMod(
	`${PACKAGE.name}:hand_job/hello_world`,
	{
		menu: BarMenu.prototype,
		action: Action.prototype
	},
	context => {
		context.menu = new BarMenu(
			'handjob:menu',
			[],
			() => true
		);
		context.action = new Action('hand_job:hello_world', {
			name: 'Hello World',
			description: '',
			icon: 'bar_chart',
			click: function () {
				console.log('Hello World');
			}
		});
		MenuBar.addAction(
			context.action,
			'handjob:menu'
		);
		MenuBar.update();

		return context
	},
	context => {
		console.log(context.menu);
		context.action.delete();
		context.menu.delete();
		MenuBar.update();
	}
)
