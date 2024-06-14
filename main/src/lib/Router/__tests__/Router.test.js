import test from 'ava';
import {router} from '../Router.js';

test('Router', t => {
	const myRouter = router;
	const sethRouter = router;

	t.is(myRouter.currentRoute(), 'home');
	myRouter.goTo('dashboard');
	t.is(myRouter.currentRoute(), 'dashboard');
	t.is(myRouter.currentRoute(), 'dashboard');
	t.is(sethRouter.currentRoute(), 'dashboard');
});
