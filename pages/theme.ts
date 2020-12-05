import { createGlobalStyle } from 'styled-components';
// Colors
const defaultColor = '#1890FF';
const primaryColor = '#1890FF';
const infoColor = '#0fceef';
const successColor = '#2dce89';
const warningColor = '#fb6340';
const dangerColor = '#f5365c';
const normalColor = '#d9d9d9';
const secondaryColor = '#f7fafc';
const linkColor = '#1890ff';
const sidebarBackground = ' #1890FF';
const sidebarBackgroundSelected = ' #FFFFFF';
const layoutBodyBackground = '#f0f2f5';
const textColor = 'rgba(0, 0, 0, 0.65)';
const textColorSecondary = 'rgba(0, 0, 0, 0.45)';
const disabledColor = 'rgba(0, 0, 0, 0.25)';
const borderRadiusBase = '4px';
const borderColorBase = '#d9d9d9';
const boxShadowBase = '0 2px 8px rgba(0, 0, 0, 0.15)';
const white = '#fff';
const black = '#000';
const headingColor = '#525f7f';
const headingSmallColor = '#adb5bd';

const verticalAlign = `
	display: inline-flex;
	align-items: center;
	justify-content: center;
	text-align: center;
`;

const theme = {
    colors: {
        defaultColor,
        primaryColor,
        infoColor,
        successColor,
        warningColor,
        dangerColor,
        normalColor,
        secondaryColor,
        linkColor,
        sidebarBackground,
        sidebarBackgroundSelected,
        layoutBodyBackground,
        headingColor,
        textColor,
        textColorSecondary,
        disabledColor,
        borderColorBase,
        boxShadowBase,
        white,
        black,
        headingSmallColor,
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
        sidebar: '1.2em',
    },
    spaces: {
        borderRadiusBase,
    },
    utilities: { verticalAlign },
};

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');
  body {
    font-family: 'Exo 2', 'Open Sans', -apple-system, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
	font-size: 1rem;
  }
h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: 'Exo 2', 'Montserrat', 'Open Sans', -apple-system,
	'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, 'Noto Sans',
	sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
	'Noto Color Emoji';
}
h1 {
	font-weight: 600;
}
.anticon {
	svg {
		display: block;
	}
}
.main-spin {
  position: absolute;
  left: 50%;
  top: 50%;
	transform: translate(-50%, -50%);
}
.errorsHandlerContainer {
	display: block;
	padding: 1rem 5rem 0.5rem;
	li {
		width: 100%;
		text-align: left;
		line-height: 2rem;
		font-size: 1rem;
	}
}
`;

export default theme;
