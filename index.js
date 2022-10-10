/*!
devtools-detect
https://github.com/sindresorhus/devtools-detect
By Sindre Sorhus
MIT License
*/

const threshold = 160;

export const devtoolsDetect = () => {
	const widthThreshold = window.outerWidth - window.innerWidth > threshold;
	const heightThreshold = window.outerHeight - window.innerHeight > threshold;
	const orientation = widthThreshold ? 'vertical' : 'horizontal';

	if (
		!(heightThreshold && widthThreshold)
		&& ((window?.Firebug?.chrome?.isInitialized) || widthThreshold || heightThreshold)
	) {
		return {
			isOpen: true,
			orientation
		}

	} else {
		return {
			isOpen: false,
			orientation
		}
	}
};
