
$('.header-sidebar-menu').click(function () {
	$('.header-sidebar-menu').toggleClass('menu-active');
	$('#header').toggleClass('header-sidebar-active');
	$('.pure-g').toggleClass('header-sidebar-active');
	$('.sidebar').toggleClass('sidebar-show');
});

$('.pure-g').click(function () {
	var status = $('.sidebar').css("display");
	if (status != 'none') {
		$('.sidebar').toggleClass("sidebar-show");
		$('.header-sidebar-menu').toggleClass('menu-active');
		$('#header').toggleClass('header-sidebar-active');
		$('.pure-g').toggleClass('header-sidebar-active');
	}
});

var hash = {};
hash['sidebar-tab-archives'] = 0;
hash['sidebar-tab-tags'] = 1;
hash['sidebar-tab-categories'] = 2;
var rhash = new Map();
rhash[0] = 'sidebar-tab-archives';
rhash[1] = 'sidebar-tab-tags';
rhash[2] = 'sidebar-tab-categories';

$('.sidebar-tab-archives>span').css('color', '#87daff').css('font-size', '1.3rem');

$('.sidebar-tab').click(function (e) {

	let className = e.currentTarget.className.split(" ")[0];

	var root = document.styleSheets[0];

	$('.sidebar-tab').each(function (e1) {
		if (e1 != hash[className]) {
			$('.' + rhash[e1] + '>span').css('color', '#eee').css('font-size', '18px');
		} else {
			$('.' + className + '>span').css('color', '#87daff').css('font-size', '1.3rem');
		}
	});

	document.styleSheets[0].addRule('.sidebar-tabs::after', 'transform:' + "translate3d(" + hash[className] * 100 + "%, 0, 0)");
	document.styleSheets[0].addRule('.sidebar-contents', 'transform:' + "translate3d(" + (-hash[className] * 0.3333333333 * 100) + "%, 0, 0)");

});

// 侧栏排序 -start
var yResult = [];
var ydata = Object.values($('.sidebar-content-archives').children());
for (var i = 0, len = ydata.length - 2; i < len; i += 2) {
	yResult.push(ydata.slice(i, i + 2));
}
function sortNumber(a, b) { return $(b[0]).text().localeCompare($(a[0]).text()); }
yResult.sort(sortNumber);

var obj = new Array();
for (var i = 0, len = yResult.length; i < len; i++) {
	$(yResult[i][1]).append($(yResult[i][1]).children().sort(function (a, b) {
		return $(b).text().substring(0, 6).localeCompare($(a).text().substring(0, 6));
	}));
	obj.push(yResult[i]);
}
$('.sidebar-content-archives').children().remove();
$('.sidebar-content-archives').append([].concat.apply([], $(obj)));
// 侧栏排序 -end



