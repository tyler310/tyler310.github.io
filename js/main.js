var palettes = [
	{
		top: "#D1DBA5",
		left: "#A2D4AB",
		right: "#3DACA8"
	},
	{
        top: "#97D2EB",
        left: "#E1F2FE",
        right: "#B2B1CF"
    },
    {
        top: "#FCCEA8",
        left: "#F4827C",
        right: "#E8495F"
    },
    {
        top: "#F2727F",
        left: "#6C5B7B",
        right: "#355C7D"
    },
    {
        top: "#C5DBE9",
        left: "#5C8FB1",
        right: "#3B586B"
    },
    {
        top: "#48466D",
        left: "#54C4C8",
        right: "#3D84A8"
    }
]

var logoTop = document.getElementById("logoTop");
var logoLeft = document.getElementById("logoLeft");
var logoRight = document.getElementById("logoRight");

var currentIndex = 0;
var color = {};

function getPalette() {
    var num = 0;

    do {
        num = getIndex();
    } while (num == currentIndex);

    color = palettes[num];
    logoTop.style.fill = color.top;
    logoLeft.style.fill = color.left;
    logoRight.style.fill = color.right;
    currentIndex = num;
};

function getIndex() {
    return Math.floor(Math.random() * palettes.length);
}