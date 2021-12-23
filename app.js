const dom = (() => {
  const bodyBackground = document.body;
  const searchButton = document.getElementById('btn1');
  const city = document.getElementById('city');
  const temp = document.getElementById('temp');
  const description = document.getElementById('description');
  const humid = document.getElementById('humid');
  const pressure = document.getElementById('pressure');
  const highlow = document.getElementById('highlow');
  const feels = document.getElementById('feels');
  const weatherContent = document.getElementById('weather-content');
  const iconElement = document.getElementById('element');

  const searchActivated = searchButton.addEventListener('click', handleClick);

  const nightArr = ['01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n'];
  const dayArr = [
    { a: '01d' },
    { b: '02d' },
    { c: '03d' },
    { d: '04d' },
    { e: '04n' },
    { f: '09n' },
    { g: '10n' },
    { h: '11n' },
    { i: '13n' },
  ];

  return {
    bodyBackground,
    searchButton,
    city,
    temp,
    description,
    humid,
    pressure,
    highlow,
    feels,
    weatherContent,
    searchActivated,
    nightArr,
    dayArr,
    iconElement,
  };
})();

const backgroundImageModule = (() => {
  const mistBlue =
    'linear-gradient(52deg, rgba(163, 163, 163, 0.09) 0%, rgba(163, 163, 163, 0.09) 33.3%,rgba(100, 100, 100, 0.09) 33.3%, rgba(100, 100, 100, 0.09) 66.6%,rgba(162, 162, 162, 0.09) 66.6%, rgba(162, 162, 162, 0.09) 99%),linear-gradient(258deg, rgba(193, 193, 193, 0.06) 0%, rgba(193, 193, 193, 0.06) 33.3%,rgba(169, 169, 169, 0.06) 33.3%, rgba(169, 169, 169, 0.06) 66.6%,rgba(92, 92, 92, 0.06) 66.6%, rgba(92, 92, 92, 0.06) 99%),linear-gradient(129deg, rgba(45, 45, 45, 0.03) 0%, rgba(45, 45, 45, 0.03) 33.3%,rgba(223, 223, 223, 0.03) 33.3%, rgba(223, 223, 223, 0.03) 66.6%,rgba(173, 173, 173, 0.03) 66.6%, rgba(173, 173, 173, 0.03) 99%),linear-gradient(280deg, rgba(226, 226, 226, 0.06) 0%, rgba(226, 226, 226, 0.06) 33.3%,rgba(81, 81, 81, 0.06) 33.3%, rgba(81, 81, 81, 0.06) 66.6%,rgba(186, 186, 186, 0.06) 66.6%, rgba(186, 186, 186, 0.06) 99%),linear-gradient(85deg, rgba(225, 225, 225, 0.04) 0%, rgba(225, 225, 225, 0.04) 33.3%,rgba(95, 95, 95, 0.04) 33.3%, rgba(95, 95, 95, 0.04) 66.6%,rgba(39, 39, 39, 0.04) 66.6%, rgba(39, 39, 39, 0.04) 99%),linear-gradient(128deg, rgba(184, 184, 184, 0.06) 0%, rgba(184, 184, 184, 0.06) 33.3%,rgba(0, 0, 0, 0.06) 33.3%, rgba(0, 0, 0, 0.06) 66.6%,rgba(140, 140, 140, 0.06) 66.6%, rgba(140, 140, 140, 0.06) 99.89999999999999%),linear-gradient(323deg, rgba(40, 40, 40, 0.07) 0%, rgba(40, 40, 40, 0.07) 33.3%,rgba(214, 214, 214, 0.07) 33.3%, rgba(214, 214, 214, 0.07) 66.6%,rgba(190, 190, 190, 0.07) 66.6%, rgba(190, 190, 190, 0.07) 99.89999999999999%),linear-gradient(61deg, rgba(230, 230, 230, 0) 0%, rgba(230, 230, 230, 0) 33.3%,rgba(241, 241, 241, 0) 33.3%, rgba(241, 241, 241, 0) 66.6%,rgba(55, 55, 55, 0) 66.6%, rgba(55, 55, 55, 0) 99%),linear-gradient(0deg, #2625e3,#0bbaef)';

  const original =
    'repeating-linear-gradient(135deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 10px,transparent 10px, transparent 11px),linear-gradient(90deg, hsl(194,74%,56%),hsl(266,74%,56%),hsl(338,74%,56%),hsl(50,74%,56%),hsl(122,74%,56%))';

  const stary =
    'repeating-linear-gradient(157.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 20px,transparent 20px, transparent 22px),repeating-linear-gradient(90deg, rgb(0,0,0) 0px, rgb(0,0,0) 20px,transparent 20px, transparent 22px),linear-gradient(90deg, hsl(333,93%,55%),hsl(45,93%,55%),hsl(117,93%,55%),hsl(189,93%,55%),hsl(261,93%,55%))';

  const night =
    'repeating-linear-gradient(112.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 20px,transparent 20px, transparent 22px),repeating-linear-gradient(22.5deg, rgb(0,0,0) 0px, rgb(0,0,0) 20px,transparent 20px, transparent 22px),linear-gradient(90deg, hsl(60, 100%, 57%),hsl(60, 100%, 57%)';

  const snowDay =
    'linear-gradient(158deg, rgba(84, 84, 84, 0.03) 0%, rgba(84, 84, 84, 0.03) 20%,rgba(219, 219, 219, 0.03) 20%, rgba(219, 219, 219, 0.03) 40%,rgba(54, 54, 54, 0.03) 40%, rgba(54, 54, 54, 0.03) 60%,rgba(99, 99, 99, 0.03) 60%, rgba(99, 99, 99, 0.03) 80%,rgba(92, 92, 92, 0.03) 80%, rgba(92, 92, 92, 0.03) 100%),linear-gradient(45deg, rgba(221, 221, 221, 0.02) 0%, rgba(221, 221, 221, 0.02) 14.286%,rgba(8, 8, 8, 0.02) 14.286%, rgba(8, 8, 8, 0.02) 28.572%,rgba(52, 52, 52, 0.02) 28.572%, rgba(52, 52, 52, 0.02) 42.858%,rgba(234, 234, 234, 0.02) 42.858%, rgba(234, 234, 234, 0.02) 57.144%,rgba(81, 81, 81, 0.02) 57.144%, rgba(81, 81, 81, 0.02) 71.42999999999999%,rgba(239, 239, 239, 0.02) 71.43%, rgba(239, 239, 239, 0.02) 85.71600000000001%,rgba(187, 187, 187, 0.02) 85.716%, rgba(187, 187, 187, 0.02) 100.002%),linear-gradient(109deg, rgba(33, 33, 33, 0.03) 0%, rgba(33, 33, 33, 0.03) 12.5%,rgba(147, 147, 147, 0.03) 12.5%, rgba(147, 147, 147, 0.03) 25%,rgba(131, 131, 131, 0.03) 25%, rgba(131, 131, 131, 0.03) 37.5%,rgba(151, 151, 151, 0.03) 37.5%, rgba(151, 151, 151, 0.03) 50%,rgba(211, 211, 211, 0.03) 50%, rgba(211, 211, 211, 0.03) 62.5%,rgba(39, 39, 39, 0.03) 62.5%, rgba(39, 39, 39, 0.03) 75%,rgba(55, 55, 55, 0.03) 75%, rgba(55, 55, 55, 0.03) 87.5%,rgba(82, 82, 82, 0.03) 87.5%, rgba(82, 82, 82, 0.03) 100%),linear-gradient(348deg, rgba(42, 42, 42, 0.02) 0%, rgba(42, 42, 42, 0.02) 20%,rgba(8, 8, 8, 0.02) 20%, rgba(8, 8, 8, 0.02) 40%,rgba(242, 242, 242, 0.02) 40%, rgba(242, 242, 242, 0.02) 60%,rgba(42, 42, 42, 0.02) 60%, rgba(42, 42, 42, 0.02) 80%,rgba(80, 80, 80, 0.02) 80%, rgba(80, 80, 80, 0.02) 100%),linear-gradient(120deg, rgba(106, 106, 106, 0.03) 0%, rgba(106, 106, 106, 0.03) 14.286%,rgba(67, 67, 67, 0.03) 14.286%, rgba(67, 67, 67, 0.03) 28.572%,rgba(134, 134, 134, 0.03) 28.572%, rgba(134, 134, 134, 0.03) 42.858%,rgba(19, 19, 19, 0.03) 42.858%, rgba(19, 19, 19, 0.03) 57.144%,rgba(101, 101, 101, 0.03) 57.144%, rgba(101, 101, 101, 0.03) 71.42999999999999%,rgba(205, 205, 205, 0.03) 71.43%, rgba(205, 205, 205, 0.03) 85.71600000000001%,rgba(53, 53, 53, 0.03) 85.716%, rgba(53, 53, 53, 0.03) 100.002%),linear-gradient(45deg, rgba(214, 214, 214, 0.03) 0%, rgba(214, 214, 214, 0.03) 16.667%,rgba(255, 255, 255, 0.03) 16.667%, rgba(255, 255, 255, 0.03) 33.334%,rgba(250, 250, 250, 0.03) 33.334%, rgba(250, 250, 250, 0.03) 50.001000000000005%,rgba(231, 231, 231, 0.03) 50.001%, rgba(231, 231, 231, 0.03) 66.668%,rgba(241, 241, 241, 0.03) 66.668%, rgba(241, 241, 241, 0.03) 83.33500000000001%,rgba(31, 31, 31, 0.03) 83.335%, rgba(31, 31, 31, 0.03) 100.002%),linear-gradient(59deg, rgba(224, 224, 224, 0.03) 0%, rgba(224, 224, 224, 0.03) 12.5%,rgba(97, 97, 97, 0.03) 12.5%, rgba(97, 97, 97, 0.03) 25%,rgba(143, 143, 143, 0.03) 25%, rgba(143, 143, 143, 0.03) 37.5%,rgba(110, 110, 110, 0.03) 37.5%, rgba(110, 110, 110, 0.03) 50%,rgba(34, 34, 34, 0.03) 50%, rgba(34, 34, 34, 0.03) 62.5%,rgba(155, 155, 155, 0.03) 62.5%, rgba(155, 155, 155, 0.03) 75%,rgba(249, 249, 249, 0.03) 75%, rgba(249, 249, 249, 0.03) 87.5%,rgba(179, 179, 179, 0.03) 87.5%, rgba(179, 179, 179, 0.03) 100%),linear-gradient(241deg, rgba(58, 58, 58, 0.02) 0%, rgba(58, 58, 58, 0.02) 25%,rgba(124, 124, 124, 0.02) 25%, rgba(124, 124, 124, 0.02) 50%,rgba(254, 254, 254, 0.02) 50%, rgba(254, 254, 254, 0.02) 75%,rgba(52, 52, 52, 0.02) 75%, rgba(52, 52, 52, 0.02) 100%),linear-gradient(90deg, #ffffff,#ffffff)';

  const cloudy =
    'linear-gradient(45deg, rgba(254, 246, 210, 0.53) 0%, rgba(254, 246, 210, 0.53) 14.286%,rgba(221, 240, 216, 0.53) 14.286%, rgba(221, 240, 216, 0.53) 28.572%,rgba(188, 233, 223, 0.53) 28.572%, rgba(188, 233, 223, 0.53) 42.858%,rgba(156, 227, 229, 0.53) 42.858%, rgba(156, 227, 229, 0.53) 57.144%,rgba(123, 220, 235, 0.53) 57.144%, rgba(123, 220, 235, 0.53) 71.42999999999999%,rgba(90, 214, 242, 0.53) 71.43%, rgba(90, 214, 242, 0.53) 85.71600000000001%,rgba(57, 207, 248, 0.53) 85.716%, rgba(57, 207, 248, 0.53) 100.002%),linear-gradient(135deg, rgb(246, 99, 200) 0%, rgb(246, 99, 200) 12.5%,rgb(223, 98, 196) 12.5%, rgb(223, 98, 196) 25%,rgb(199, 97, 192) 25%, rgb(199, 97, 192) 37.5%,rgb(176, 96, 188) 37.5%, rgb(176, 96, 188) 50%,rgb(152, 95, 184) 50%, rgb(152, 95, 184) 62.5%,rgb(129, 94, 180) 62.5%, rgb(129, 94, 180) 75%,rgb(105, 93, 176) 75%, rgb(105, 93, 176) 87.5%,rgb(82, 92, 172) 87.5%, rgb(82, 92, 172) 100%)';

  const purple =
    'radial-gradient(circle at 29% 55%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 4%,transparent 4%, transparent 44%,transparent 44%, transparent 100%),radial-gradient(circle at 85% 89%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 52%,transparent 52%, transparent 100%),radial-gradient(circle at 6% 90%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 53%,transparent 53%, transparent 64%,transparent 64%, transparent 100%),radial-gradient(circle at 35% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 6%,transparent 6%, transparent 98%,transparent 98%, transparent 100%),radial-gradient(circle at 56% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 16%,transparent 16%, transparent 23%,transparent 23%, transparent 100%),radial-gradient(circle at 42% 0%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 3%,transparent 3%, transparent 26%,transparent 26%, transparent 100%),radial-gradient(circle at 29% 28%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 77% 21%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 35%,transparent 35%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 65% 91%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 46%,transparent 46%, transparent 76%,transparent 76%, transparent 100%),linear-gradient(45deg, rgb(83, 91, 235),rgb(76, 11, 174))';

  const blue =
    'linear-gradient(135deg, transparent 0%, transparent 17%,rgba(87, 146, 234,0.6) 17%, rgba(87, 146, 234,0.6) 59%,transparent 59%, transparent 64%,rgba(34, 81, 222,0.6) 64%, rgba(34, 81, 222,0.6) 100%),linear-gradient(45deg, transparent 0%, transparent 2%,rgb(87, 146, 234) 2%, rgb(87, 146, 234) 46%,rgb(114, 178, 239) 46%, rgb(114, 178, 239) 54%,transparent 54%, transparent 63%,rgb(7, 48, 216) 63%, rgb(7, 48, 216) 100%),linear-gradient(90deg, rgb(255,255,255),rgb(255,255,255))';

  const purpleGradient =
    'repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))';

  const blueCircle =
    'radial-gradient(circle at 40% 91%, rgba(251, 251, 251,0.04) 0%, rgba(251, 251, 251,0.04) 50%,rgba(229, 229, 229,0.04) 50%, rgba(229, 229, 229,0.04) 100%),radial-gradient(circle at 66% 97%, rgba(36, 36, 36,0.04) 0%, rgba(36, 36, 36,0.04) 50%,rgba(46, 46, 46,0.04) 50%, rgba(46, 46, 46,0.04) 100%),radial-gradient(circle at 86% 7%, rgba(40, 40, 40,0.04) 0%, rgba(40, 40, 40,0.04) 50%,rgba(200, 200, 200,0.04) 50%, rgba(200, 200, 200,0.04) 100%),radial-gradient(circle at 15% 16%, rgba(99, 99, 99,0.04) 0%, rgba(99, 99, 99,0.04) 50%,rgba(45, 45, 45,0.04) 50%, rgba(45, 45, 45,0.04) 100%),radial-gradient(circle at 75% 99%, rgba(243, 243, 243,0.04) 0%, rgba(243, 243, 243,0.04) 50%,rgba(37, 37, 37,0.04) 50%, rgba(37, 37, 37,0.04) 100%),linear-gradient(90deg, rgb(34, 222, 237),rgb(135, 89, 215))';

  const day =
    'linear-gradient(131deg, rgba(186, 186, 186, 0.01) 0%, rgba(186, 186, 186, 0.01) 16.667%,rgba(192, 192, 192, 0.01) 16.667%, rgba(192, 192, 192, 0.01) 33.334%,rgba(48, 48, 48, 0.01) 33.334%, rgba(48, 48, 48, 0.01) 50.001000000000005%,rgba(33, 33, 33, 0.01) 50.001%, rgba(33, 33, 33, 0.01) 66.668%,rgba(182, 182, 182, 0.01) 66.668%, rgba(182, 182, 182, 0.01) 83.33500000000001%,rgba(211, 211, 211, 0.01) 83.335%, rgba(211, 211, 211, 0.01) 100.002%),linear-gradient(148deg, rgba(48, 48, 48, 0.01) 0%, rgba(48, 48, 48, 0.01) 16.667%,rgba(178, 178, 178, 0.01) 16.667%, rgba(178, 178, 178, 0.01) 33.334%,rgba(192, 192, 192, 0.01) 33.334%, rgba(192, 192, 192, 0.01) 50.001000000000005%,rgba(237, 237, 237, 0.01) 50.001%, rgba(237, 237, 237, 0.01) 66.668%,rgba(194, 194, 194, 0.01) 66.668%, rgba(194, 194, 194, 0.01) 83.33500000000001%,rgba(227, 227, 227, 0.01) 83.335%, rgba(227, 227, 227, 0.01) 100.002%),linear-gradient(138deg, rgba(146, 146, 146, 0.03) 0%, rgba(146, 146, 146, 0.03) 25%,rgba(33, 33, 33, 0.03) 25%, rgba(33, 33, 33, 0.03) 50%,rgba(46, 46, 46, 0.03) 50%, rgba(46, 46, 46, 0.03) 75%,rgba(172, 172, 172, 0.03) 75%, rgba(172, 172, 172, 0.03) 100%),linear-gradient(38deg, rgba(3, 3, 3, 0.03) 0%, rgba(3, 3, 3, 0.03) 16.667%,rgba(28, 28, 28, 0.03) 16.667%, rgba(28, 28, 28, 0.03) 33.334%,rgba(236, 236, 236, 0.03) 33.334%, rgba(236, 236, 236, 0.03) 50.001000000000005%,rgba(3, 3, 3, 0.03) 50.001%, rgba(3, 3, 3, 0.03) 66.668%,rgba(207, 207, 207, 0.03) 66.668%, rgba(207, 207, 207, 0.03) 83.33500000000001%,rgba(183, 183, 183, 0.03) 83.335%, rgba(183, 183, 183, 0.03) 100.002%),linear-gradient(145deg, rgba(20, 20, 20, 0.02) 0%, rgba(20, 20, 20, 0.02) 20%,rgba(4, 4, 4, 0.02) 20%, rgba(4, 4, 4, 0.02) 40%,rgba(194, 194, 194, 0.02) 40%, rgba(194, 194, 194, 0.02) 60%,rgba(34, 34, 34, 0.02) 60%, rgba(34, 34, 34, 0.02) 80%,rgba(71, 71, 71, 0.02) 80%, rgba(71, 71, 71, 0.02) 100%),linear-gradient(78deg, rgba(190, 190, 190, 0.02) 0%, rgba(190, 190, 190, 0.02) 20%,rgba(95, 95, 95, 0.02) 20%, rgba(95, 95, 95, 0.02) 40%,rgba(71, 71, 71, 0.02) 40%, rgba(71, 71, 71, 0.02) 60%,rgba(7, 7, 7, 0.02) 60%, rgba(7, 7, 7, 0.02) 80%,rgba(130, 130, 130, 0.02) 80%, rgba(130, 130, 130, 0.02) 100%),linear-gradient(293deg, rgba(213, 213, 213, 0.03) 0%, rgba(213, 213, 213, 0.03) 20%,rgba(220, 220, 220, 0.03) 20%, rgba(220, 220, 220, 0.03) 40%,rgba(146, 146, 146, 0.03) 40%, rgba(146, 146, 146, 0.03) 60%,rgba(57, 57, 57, 0.03) 60%, rgba(57, 57, 57, 0.03) 80%,rgba(120, 120, 120, 0.03) 80%, rgba(120, 120, 120, 0.03) 100%),linear-gradient(90deg, rgb(225, 15, 180),rgb(78, 198, 243))';

  return {
    stary,
    night,
    snowDay,
    cloudy,
    purple,
    original,
    blue,
    blueCircle,
    purpleGradient,
    day,
    mistBlue,
  };
})();

const searchButton = document.getElementById('btn1');

function handleClick(e) {
  e.preventDefault();
  performSearch();
}

searchButton.addEventListener('click', handleClick);

const performSearch = async () => {
  try {
    const response = await fetch(
      'https://api.openweathermap.org/data/2.5/weather?q=london&appid=eca710e0599278a67e7249f96e68a66b',
      { mode: 'cors' }
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
