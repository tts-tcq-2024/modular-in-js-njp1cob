
const MajorColorNames = [
    "WHITE", "RED", "BLACK", "YELLOW", "VIOLET"
];
const MinorColorNames = [
	"BLUE", "ORANGE", "GREEN", "BROWN", "SLATE"
];

function ColorPair(){
           this.majorColor;
           this.minorColor;
}

ColorPair.prototype.toString=function(){
	return `MajorColor:${this.majorColor},MinorColr:${this.minorColor}`;
}

function getPairNumberFromColor(pair) {
	majorIndex(pair)
	minorIndex(pair)
        if (majorIndex == -1 || minorIndex == -1) {
                throw `Unknown Colors:${pair.toString()}`;
            }

        return (majorIndex * MinorColorNames.length) + (minorIndex + 1);
	 }

	function majorIndex(pair) {
		let majorIndex = -1;
	return MajorColorNames.indexOf(pair.majorColor);
	}

	function minorIndex(pair) {
     	let minorIndex = -1;
            for (let i = 0; i < MinorColorNames.length; i++) {
                if (MinorColorNames[i] == pair.minorColor)
                {
                    minorIndex = i;
                    break;
                }
            }
	return minorIndex;
test();
module.exports = {
    getColorFromPairNumber,
    getPairNumberFromColor
};

module.exports = {
    ColorPair,
    MajorColorNames,
    MinorColorNames
};
