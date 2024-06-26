import {measureText} from '../layouts/measure-text';

const sampleSize = 100;

export const fitText = ({
	text,
	withinWidth,
	fontFamily,
	fontVariantNumeric,
	fontWeight,
	letterSpacing,
	validateFontIsLoaded,
}: {
	text: string;
	withinWidth: number;
	fontFamily: string;
	fontWeight?: number | string;
	letterSpacing?: string;
	fontVariantNumeric?: string;
	validateFontIsLoaded?: boolean;
}) => {
	const estimate = measureText({
		text,
		fontFamily,
		fontSize: sampleSize,
		fontWeight,
		fontVariantNumeric,
		letterSpacing,
		validateFontIsLoaded,
	});
	return {fontSize: (withinWidth / estimate.width) * sampleSize};
};
