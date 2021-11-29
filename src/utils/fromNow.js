/**
 * 此函数待改进, 欢迎各路大神参与开发
 *
 * 此处只是一个栗子 🌰
 * 根据项目需求自行修改
 * 有更好的意见可以提 issue, pr
 */

const MIN = 60e3;
const HOUR = MIN * 60;
const DAY = HOUR * 24;
const YEAR = DAY * 365;
const MONTH = DAY * 30;

/**
 *
 * @param {String} date
 * You may pass it any valid date string.
 * @param {Object} opts
 * options.max
 * Type: Integer
 * Default: null
 * If set, will limits the return to display a maximum number of non-null segments.
 * Important: When opts.zero = true then empty segments will count towards your max limit!
 *
 * options.suffix
 * Type: Boolean
 * Default: false
 * Appends "ago" or "from now" to the output.
 *
 * options.and
 * Type: Boolean
 * Default: false
 * Join the last two segments with " and ".
 *
 * options.zero
 * Type: Boolean
 * Default: false
 * Return segments with 0 value.
 *
 * options.lang
 * Type: String
 * Default: 'en-US'
 * Specify language code, supported code:
 * en-US, zh-CN, ru-RU
 *
 * @returns {String}
 * A valid date string is the only required parameter.
 */
const fromNow = (date, opts = {}) => {
	let del = new Date(date).getTime() - Date.now();
	let abs = Math.abs(del);

	if (abs < MIN) {
		return 'just now';
	}

	let periods;
	switch (opts.lang || 'en-US') {
		case 'en-US':
			periods = {
				'year': abs / YEAR,
				'month': (abs % YEAR) / MONTH,
				'day': (abs % MONTH) / DAY,
				'hour': (abs % DAY) / HOUR,
				'minute': (abs % HOUR) / MIN,
			};
			break;
		case 'zh-CN':
			periods = {
				'年': abs / YEAR,
				'月': (abs % YEAR) / MONTH,
				'天': (abs % MONTH) / DAY,
				'小时': (abs % DAY) / HOUR,
				'分钟': (abs % HOUR) / MIN,
			};
			break;
		case 'ru-RU':
			periods = {
				'год': abs / YEAR,
				'месяц': (abs % YEAR) / MONTH,
				'день': (abs % MONTH) / DAY,
				'час': (abs % DAY) / HOUR,
				'минут': (abs % HOUR) / MIN,
			};
			break;
		default:
			periods = {
				'year': abs / YEAR,
				'month': (abs % YEAR) / MONTH,
				'day': (abs % MONTH) / DAY,
				'hour': (abs % DAY) / HOUR,
				'minute': (abs % HOUR) / MIN,
			};
	}

	let k,
		val,
		keep = [],
		max = opts.max || MIN; // large number

	for (k in periods) {
		if (keep.length < max) {
			val = Math.floor(periods[k]);
			if (val || opts.zero) {
				// Pluralization, example: year -> years
				switch (opts.lang || 'en-US') {
					case 'en-US':
						keep.push(`${val} ${k}${val === 1 ? '' : 's'}`);
						break;
					case 'zh-CN':
						keep.push(`${val} ${k}`);
						break;
					case 'ru-RU':
						// TODO
						// год года лет правила 需要查
						keep.push(`${val} ${k}`);
						break;
					default:
						keep.push(`${val} ${k}${val === 1 ? '' : 's'}`);
				}
			}
		}
	}

	k = keep.length; // reuse
	max = ', '; // reuse

	if (k > 1 && opts.and) {
		if (k === 2) max = ' ';
		switch (opts.lang || 'en-US') {
			case 'en-US':
				keep[--k] = `and ${keep[k]}`;
				break;
			case 'zh-CN':
				keep[--k] = `${keep[k]}`;
				break;
			case 'ru-RU':
				keep[--k] = `${keep[k]}`;
				break;
			default:
				keep[--k] = `and ${keep[k]}`;
		}
	}

	val = keep.join(max); // reuse

	if (opts.suffix) {
		if (del < 0) {
			switch (opts.lang || 'en-US') {
				case 'en-US':
					val = `${val} ago`;
					break;
				case 'zh-CN':
					val = `${val} 之前`;
					break;
				case 'ru-RU':
					val = `${val} назад`;
					break;
				default:
					val = `${val} ago`;
			}
		} else {
			switch (opts.lang || 'en-US') {
				case 'en-US':
					val = `${val} later`;
					break;
				case 'zh-CN':
					val = `${val} 之前`;
					break;
				case 'ru-RU':
					val = `через ${val}`;
					break;
				default:
					val = `${val} later`;
			}
		}
	}

	return val;
};

export default fromNow;
