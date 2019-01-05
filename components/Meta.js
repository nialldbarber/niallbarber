import Head from 'next/head';
import { title, desc } from '../config';

const Meta = () => (
	<Head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta charSet="utf-8" />
		<meta name="description" content="Front End Developer making the internets an awesome place." />
		<meta name="keywords" content="Niall Barber,Niall D Barber,HTML,CSS,JavaScript,Web Developer,React,js" />
		<link rel="shortcut icon" href="/static/icon.png" />
		<link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
		<title>{`${title} | ${desc}`}</title>
	</Head>
);

export default Meta;
