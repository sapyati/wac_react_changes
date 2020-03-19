/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mx-icon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mx-filter': '&#xe90c;',
		'mx-not-accessible': '&#xe90d;',
		'mx-person-remove': '&#xe90e;',
		'mx-unidentified-Person': '&#xe909;',
		'mx-person': '&#xe90a;',
		'mx-people-group': '&#xe90b;',
		'mx-mail_in': '&#xe900;',
		'mx-mail_out': '&#xe901;',
		'mx-mail': '&#xe902;',
		'mx-phone_in': '&#xe903;',
		'mx-phone_out': '&#xe904;',
		'mx-sms_in': '&#xe905;',
		'mx-sms_out': '&#xe906;',
		'mx-webchat_in': '&#xe907;',
		'mx-webchat_out': '&#xe908;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mx-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
