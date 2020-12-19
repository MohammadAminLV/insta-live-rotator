let theParentElement;
let theNext;
let vh = 0;
let mediaEl = null;
function rotator(deg) {
		 chrome.tabs.executeScript({
	   code: `theParentElement = document.getElementById('react-root').firstChild.firstChild.firstChild;
	theParentElement.style.transform = 'rotate(${deg})';
	
	theNext = theParentElement.firstChild.firstChild;
	if ( theNext.children[1] && theNext.firstChild.tagName !== 'BUTTON' )
	{
		theNext.children[1].remove();
		theNext.firstChild.style.marginRight = '0';
	}

	mediaEl = theParentElement.querySelector('video');
	if ( '${deg}' === '-90deg' || '${deg}' === '90deg' )
	{
		mediaEl = theParentElement.querySelector('video');
		vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		mediaEl.style.height = 'initial';
		mediaEl.style.width = (vh - 70) + 'px';
	}
	else {
		mediaEl = theParentElement.querySelector('video');
		vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
		console.log(document.getElementById('react-root').clientHeight);
		mediaEl.style.width = 'initial';
		mediaEl.style.height = (vh - 50) + 'px';
	}
`
		  })
}


console.log(document.getElementById('rotate-right'));
document.getElementById('rotate-right').addEventListener('click', function() {
	rotator('-90deg');
});

document.getElementById('rotate-left').addEventListener('click', function() {
	rotator('90deg');
});

document.getElementById('rotate-normal').addEventListener('click', function() {
	rotator('0deg');
});

document.getElementById('rotate-upsidedown').addEventListener('click', function() {
	rotator('180deg');
});
