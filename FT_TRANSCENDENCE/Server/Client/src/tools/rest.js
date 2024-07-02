import ky from 'https://esm.sh/ky@1';

const rest = ky.create({
	prefixUrl: 'https://jsonplaceholder.typicode.com/',
});

export default rest;
