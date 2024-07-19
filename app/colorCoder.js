
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
	return majorIndex = MajorColorNames.indexOf(pair.majorColor);
	}

	function minorIndex(pair) {
     	let minorIndex = -1;
	return minorIndex = MinorColorNames.indexOf(pair.minorColor);
	}

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
