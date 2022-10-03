import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font-family: 'Titillium Web', sans-serif;
}
:root{
	--green: #47E10C;
	--black: #2C2B30;
	--grey: #4F4F51;
  --silver: #D6D6D6;
	--pink: #F2C4CE;
  --orange: #F58F7C;
	--white: #E8F0FE;
	--blue: #4CDBC4;
	--purple: #A000C8;

	--regular: 400;
	---bold: 600;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,var(--black)), color-stop(100%, var(--grey)));
	width: 100%;
	height:100%;
}
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
button {
	cursor: pointer;
}
`

export default GlobalStyle
