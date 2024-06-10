const logic1 = require('./logic1');

test('cigarParty should return false when given (30, false)', () => {
  expect(logic1.cigarParty(30, false)).toEqual(false);
});

test('cigarParty should return true when given (50, false)', () => {
  expect(logic1.cigarParty(50, false)).toEqual(true);
});

test('cigarParty should return true when given (70, true)', () => {
  expect(logic1.cigarParty(70, true)).toEqual(true);
});

test('cigarParty should return false when given (30, true)', () => {
  expect(logic1.cigarParty(30, true)).toEqual(false);
});

test('cigarParty should return true when given (50, true)', () => {
  expect(logic1.cigarParty(50, true)).toEqual(true);
});

test('cigarParty should return true when given (60, false)', () => {
  expect(logic1.cigarParty(60, false)).toEqual(true);
});

test('cigarParty should return false when given (61, false)', () => {
  expect(logic1.cigarParty(61, false)).toEqual(false);
});

test('cigarParty should return true when given (40, false)', () => {
  expect(logic1.cigarParty(40, false)).toEqual(true);
});

test('cigarParty should return false when given (39, false)', () => {
  expect(logic1.cigarParty(39, false)).toEqual(false);
});

test('cigarParty should return true when given (40, true)', () => {
  expect(logic1.cigarParty(40, true)).toEqual(true);
});

test('cigarParty should return false when given (39, true)', () => {
  expect(logic1.cigarParty(39, true)).toEqual(false);
});

test('dateFashion should return 2 when given (5, 10)', () => {
  expect(logic1.dateFashion(5, 10)).toEqual(2);
});

test('dateFashion should return 0 when given (5, 2)', () => {
  expect(logic1.dateFashion(5, 2)).toEqual(0);
});

test('dateFashion should return 1 when given (5, 5)', () => {
  expect(logic1.dateFashion(5, 5)).toEqual(1);
});

test('dateFashion should return 1 when given (3, 3)', () => {
  expect(logic1.dateFashion(3, 3)).toEqual(1);
});

test('dateFashion should return 0 when given (10, 2)', () => {
  expect(logic1.dateFashion(10, 2)).toEqual(0);
});

test('dateFashion should return 0 when given (2, 9)', () => {
  expect(logic1.dateFashion(2, 9)).toEqual(0);
});

test('dateFashion should return 2 when given (9, 9)', () => {
  expect(logic1.dateFashion(9, 9)).toEqual(2);
});

test('dateFashion should return 2 when given (10, 5)', () => {
  expect(logic1.dateFashion(10, 5)).toEqual(2);
});

test('dateFashion should return 0 when given (2, 2)', () => {
  expect(logic1.dateFashion(2, 2)).toEqual(0);
});

test('dateFashion should return 1 when given (3, 7)', () => {
  expect(logic1.dateFashion(3, 7)).toEqual(1);
});

test('dateFashion should return 0 when given (2, 7)', () => {
  expect(logic1.dateFashion(2, 7)).toEqual(0);
});

test('dateFashion should return 0 when given (6, 2)', () => {
  expect(logic1.dateFashion(6, 2)).toEqual(0);
});

test('squirrelPlay should return true when given (70, false)', () => {
  expect(logic1.squirrelPlay(70, false)).toEqual(true);
});

test('squirrelPlay should return false when given (95, false)', () => {
  expect(logic1.squirrelPlay(95, false)).toEqual(false);
});

test('squirrelPlay should return true when given (95, true)', () => {
  expect(logic1.squirrelPlay(95, true)).toEqual(true);
});

test('squirrelPlay should return true when given (90, false)', () => {
  expect(logic1.squirrelPlay(90, false)).toEqual(true);
});

test('squirrelPlay should return true when given (90, true)', () => {
  expect(logic1.squirrelPlay(90, true)).toEqual(true);
});

test('squirrelPlay should return false when given (50, false)', () => {
  expect(logic1.squirrelPlay(50, false)).toEqual(false);
});

test('squirrelPlay should return false when given (50, true)', () => {
  expect(logic1.squirrelPlay(50, true)).toEqual(false);
});

test('squirrelPlay should return false when given (100, false)', () => {
  expect(logic1.squirrelPlay(100, false)).toEqual(false);
});

test('squirrelPlay should return true when given (100, true)', () => {
  expect(logic1.squirrelPlay(100, true)).toEqual(true);
});

test('squirrelPlay should return false when given (105, true)', () => {
  expect(logic1.squirrelPlay(105, true)).toEqual(false);
});

test('squirrelPlay should return false when given (59, false)', () => {
  expect(logic1.squirrelPlay(59, false)).toEqual(false);
});

test('squirrelPlay should return false when given (59, true)', () => {
  expect(logic1.squirrelPlay(59, true)).toEqual(false);
});

test('squirrelPlay should return true when given (60, false)', () => {
  expect(logic1.squirrelPlay(60, false)).toEqual(true);
});

test('caughtSpeeding should return 0 when given (60, false)', () => {
  expect(logic1.caughtSpeeding(60, false)).toEqual(0);
});

test('caughtSpeeding should return 1 when given (65, false)', () => {
  expect(logic1.caughtSpeeding(65, false)).toEqual(1);
});

test('caughtSpeeding should return 0 when given (65, true)', () => {
  expect(logic1.caughtSpeeding(65, true)).toEqual(0);
});

test('caughtSpeeding should return 1 when given (80, false)', () => {
  expect(logic1.caughtSpeeding(80, false)).toEqual(1);
});

test('caughtSpeeding should return 2 when given (85, false)', () => {
  expect(logic1.caughtSpeeding(85, false)).toEqual(2);
});

test('caughtSpeeding should return 1 when given (85, true)', () => {
  expect(logic1.caughtSpeeding(85, true)).toEqual(1);
});

test('caughtSpeeding should return 1 when given (70, false)', () => {
  expect(logic1.caughtSpeeding(70, false)).toEqual(1);
});

test('caughtSpeeding should return 1 when given (75, false)', () => {
  expect(logic1.caughtSpeeding(75, false)).toEqual(1);
});

test('caughtSpeeding should return 1 when given (75, true)', () => {
  expect(logic1.caughtSpeeding(75, true)).toEqual(1);
});

test('caughtSpeeding should return 0 when given (40, false)', () => {
  expect(logic1.caughtSpeeding(40, false)).toEqual(0);
});

test('caughtSpeeding should return 0 when given (40, true)', () => {
  expect(logic1.caughtSpeeding(40, true)).toEqual(0);
});

test('caughtSpeeding should return 2 when given (90, false)', () => {
  expect(logic1.caughtSpeeding(90, false)).toEqual(2);
});

test('sortaSum should return 7 when given (3, 4)', () => {
  expect(logic1.sortaSum(3, 4)).toEqual(7);
});

test('sortaSum should return 20 when given (9, 4)', () => {
  expect(logic1.sortaSum(9, 4)).toEqual(20);
});

test('sortaSum should return 21 when given (10, 11)', () => {
  expect(logic1.sortaSum(10, 11)).toEqual(21);
});

test('sortaSum should return 9 when given (12, -3)', () => {
  expect(logic1.sortaSum(12, -3)).toEqual(9);
});

test('sortaSum should return 9 when given (-3, 12)', () => {
  expect(logic1.sortaSum(-3, 12)).toEqual(9);
});

test('sortaSum should return 9 when given (4, 5)', () => {
  expect(logic1.sortaSum(4, 5)).toEqual(9);
});

test('sortaSum should return 20 when given (4, 6)', () => {
  expect(logic1.sortaSum(4, 6)).toEqual(20);
});

test('sortaSum should return 21 when given (14, 7)', () => {
  expect(logic1.sortaSum(14, 7)).toEqual(21);
});

test('sortaSum should return 20 when given (14, 6)', () => {
  expect(logic1.sortaSum(14, 6)).toEqual(20);
});

test('alarmClock should return "7:00" when given (1, false)', () => {
  expect(logic1.alarmClock(1, false)).toEqual("7:00");
});

test('alarmClock should return "7:00" when given (5, false)', () => {
  expect(logic1.alarmClock(5, false)).toEqual("7:00");
});

test('alarmClock should return "10:00" when given (0, false)', () => {
  expect(logic1.alarmClock(0, false)).toEqual("10:00");
});

test('alarmClock should return "10:00" when given (6, false)', () => {
  expect(logic1.alarmClock(6, false)).toEqual("10:00");
});

test('alarmClock should return "off" when given (0, true)', () => {
  expect(logic1.alarmClock(0, true)).toEqual("off");
});

test('alarmClock should return "off" when given (6, true)', () => {
  expect(logic1.alarmClock(6, true)).toEqual("off");
});

test('alarmClock should return "10:00" when given (1, true)', () => {
  expect(logic1.alarmClock(1, true)).toEqual("10:00");
});

test('alarmClock should return "10:00" when given (3, true)', () => {
  expect(logic1.alarmClock(3, true)).toEqual("10:00");
});

test('alarmClock should return "10:00" when given (5, true)', () => {
  expect(logic1.alarmClock(5, true)).toEqual("10:00");
});

test('love6 should return true when given (6, 4)', () => {
  expect(logic1.love6(6, 4)).toEqual(true);
});

test('love6 should return false when given (4, 5)', () => {
  expect(logic1.love6(4, 5)).toEqual(false);
});

test('love6 should return true when given (1, 5)', () => {
  expect(logic1.love6(1, 5)).toEqual(true);
});

test('love6 should return true when given (1, 6)', () => {
  expect(logic1.love6(1, 6)).toEqual(true);
});

test('love6 should return false when given (1, 8)', () => {
  expect(logic1.love6(1, 8)).toEqual(false);
});

test('love6 should return true when given (1, 7)', () => {
  expect(logic1.love6(1, 7)).toEqual(true);
});

test('love6 should return false when given (7, 5)', () => {
  expect(logic1.love6(7, 5)).toEqual(false);
});

test('love6 should return true when given (8, 2)', () => {
  expect(logic1.love6(8, 2)).toEqual(true);
});

test('love6 should return true when given (6, 6)', () => {
  expect(logic1.love6(6, 6)).toEqual(true);
});

test('love6 should return false when given (-6, 2)', () => {
  expect(logic1.love6(-6, 2)).toEqual(false);
});

test('love6 should return true when given (-4, -10)', () => {
  expect(logic1.love6(-4, -10)).toEqual(true);
});

test('love6 should return false when given (-7, 1)', () => {
  expect(logic1.love6(-7, 1)).toEqual(false);
});

test('love6 should return true when given (7, -1)', () => {
  expect(logic1.love6(7, -1)).toEqual(true);
});

test('love6 should return true when given (-6, 12)', () => {
  expect(logic1.love6(-6, 12)).toEqual(true);
});

test('love6 should return false when given (-2, -4)', () => {
  expect(logic1.love6(-2, -4)).toEqual(false);
});

test('love6 should return true when given (7, 1)', () => {
  expect(logic1.love6(7, 1)).toEqual(true);
});

test('love6 should return false when given (0, 9)', () => {
  expect(logic1.love6(0, 9)).toEqual(false);
});

test('love6 should return false when given (8, 3)', () => {
  expect(logic1.love6(8, 3)).toEqual(false);
});

test('love6 should return true when given (3, 3)', () => {
  expect(logic1.love6(3, 3)).toEqual(true);
});

test('love6 should return false when given (3, 4)', () => {
  expect(logic1.love6(3, 4)).toEqual(false);
});

test('in1To10 should return true when given (5, false)', () => {
  expect(logic1.in1To10(5, false)).toEqual(true);
});

test('in1To10 should return false when given (11, false)', () => {
  expect(logic1.in1To10(11, false)).toEqual(false);
});

test('in1To10 should return true when given (11, true)', () => {
  expect(logic1.in1To10(11, true)).toEqual(true);
});

test('in1To10 should return true when given (10, false)', () => {
  expect(logic1.in1To10(10, false)).toEqual(true);
});

test('in1To10 should return true when given (10, true)', () => {
  expect(logic1.in1To10(10, true)).toEqual(true);
});

test('in1To10 should return true when given (9, false)', () => {
  expect(logic1.in1To10(9, false)).toEqual(true);
});

test('in1To10 should return false when given (9, true)', () => {
  expect(logic1.in1To10(9, true)).toEqual(false);
});

test('in1To10 should return true when given (1, false)', () => {
  expect(logic1.in1To10(1, false)).toEqual(true);
});

test('in1To10 should return true when given (1, true)', () => {
  expect(logic1.in1To10(1, true)).toEqual(true);
});

test('in1To10 should return false when given (0, false)', () => {
  expect(logic1.in1To10(0, false)).toEqual(false);
});

test('in1To10 should return true when given (0, true)', () => {
  expect(logic1.in1To10(0, true)).toEqual(true);
});

test('in1To10 should return false when given (-1, false)', () => {
  expect(logic1.in1To10(-1, false)).toEqual(false);
});

test('specialEleven should return true when given 22', () => {
  expect(logic1.specialEleven(22)).toEqual(true);
});

test('specialEleven should return true when given 23', () => {
  expect(logic1.specialEleven(23)).toEqual(true);
});

test('specialEleven should return false when given 24', () => {
  expect(logic1.specialEleven(24)).toEqual(false);
});

test('specialEleven should return false when given 21', () => {
  expect(logic1.specialEleven(21)).toEqual(false);
});

test('specialEleven should return true when given 11', () => {
  expect(logic1.specialEleven(11)).toEqual(true);
});

test('specialEleven should return true when given 12', () => {
  expect(logic1.specialEleven(12)).toEqual(true);
});

test('specialEleven should return false when given 10', () => {
  expect(logic1.specialEleven(10)).toEqual(false);
});

test('specialEleven should return false when given 9', () => {
  expect(logic1.specialEleven(9)).toEqual(false);
});

test('specialEleven should return false when given 8', () => {
  expect(logic1.specialEleven(8)).toEqual(false);
});

test('specialEleven should return true when given 0', () => {
  expect(logic1.specialEleven(0)).toEqual(true);
});

test('specialEleven should return true when given 1', () => {
  expect(logic1.specialEleven(1)).toEqual(true);
});

test('specialEleven should return false when given 2', () => {
  expect(logic1.specialEleven(2)).toEqual(false);
});

test('specialEleven should return true when given 121', () => {
  expect(logic1.specialEleven(121)).toEqual(true);
});

test('specialEleven should return true when given 122', () => {
  expect(logic1.specialEleven(122)).toEqual(true);
});

test('specialEleven should return false when given 123', () => {
  expect(logic1.specialEleven(123)).toEqual(false);
});

test('specialEleven should return false when given 46', () => {
  expect(logic1.specialEleven(46)).toEqual(false);
});

test('specialEleven should return false when given 49', () => {
  expect(logic1.specialEleven(49)).toEqual(false);
});

test('specialEleven should return false when given 52', () => {
  expect(logic1.specialEleven(52)).toEqual(false);
});

test('specialEleven should return false when given 54', () => {
  expect(logic1.specialEleven(54)).toEqual(false);
});

test('specialEleven should return true when given 55', () => {
  expect(logic1.specialEleven(55)).toEqual(true);
});

test('more20 should return false when given 20', () => {
  expect(logic1.more20(20)).toEqual(false);
});

test('more20 should return true when given 21', () => {
  expect(logic1.more20(21)).toEqual(true);
});

test('more20 should return true when given 22', () => {
  expect(logic1.more20(22)).toEqual(true);
});

test('more20 should return false when given 23', () => {
  expect(logic1.more20(23)).toEqual(false);
});

test('more20 should return false when given 25', () => {
  expect(logic1.more20(25)).toEqual(false);
});

test('more20 should return false when given 30', () => {
  expect(logic1.more20(30)).toEqual(false);
});

test('more20 should return false when given 31', () => {
  expect(logic1.more20(31)).toEqual(false);
});

test('more20 should return false when given 59', () => {
  expect(logic1.more20(59)).toEqual(false);
});

test('more20 should return false when given 60', () => {
  expect(logic1.more20(60)).toEqual(false);
});

test('more20 should return true when given 61', () => {
  expect(logic1.more20(61)).toEqual(true);
});

test('more20 should return true when given 62', () => {
  expect(logic1.more20(62)).toEqual(true);
});

test('more20 should return false when given 1020', () => {
  expect(logic1.more20(1020)).toEqual(false);
});

test('more20 should return true when given 1021', () => {
  expect(logic1.more20(1021)).toEqual(true);
});

test('more20 should return false when given 1000', () => {
  expect(logic1.more20(1000)).toEqual(false);
});

test('more20 should return true when given 1001', () => {
  expect(logic1.more20(1001)).toEqual(true);
});

test('more20 should return false when given 50', () => {
  expect(logic1.more20(50)).toEqual(false);
});

test('more20 should return false when given 55', () => {
  expect(logic1.more20(55)).toEqual(false);
});

test('more20 should return false when given 40', () => {
  expect(logic1.more20(40)).toEqual(false);
});

test('more20 should return true when given 41', () => {
  expect(logic1.more20(41)).toEqual(true);
});

test('more20 should return false when given 39', () => {
  expect(logic1.more20(39)).toEqual(false);
});

test('more20 should return true when given 42', () => {
  expect(logic1.more20(42)).toEqual(true);
});

test('old35 should return true when given 3', () => {
  expect(logic1.old35(3)).toEqual(true);
});

test('old35 should return true when given 10', () => {
  expect(logic1.old35(10)).toEqual(true);
});

test('old35 should return false when given 15', () => {
  expect(logic1.old35(15)).toEqual(false);
});

test('old35 should return true when given 5', () => {
  expect(logic1.old35(5)).toEqual(true);
});

test('old35 should return true when given 9', () => {
  expect(logic1.old35(9)).toEqual(true);
});

test('old35 should return false when given 8', () => {
  expect(logic1.old35(8)).toEqual(false);
});

test('old35 should return false when given 7', () => {
  expect(logic1.old35(7)).toEqual(false);
});

test('old35 should return true when given 6', () => {
  expect(logic1.old35(6)).toEqual(true);
});

test('old35 should return false when given 17', () => {
  expect(logic1.old35(17)).toEqual(false);
});

test('old35 should return true when given 18', () => {
  expect(logic1.old35(18)).toEqual(true);
});

test('old35 should return false when given 29', () => {
  expect(logic1.old35(29)).toEqual(false);
});

test('old35 should return true when given 20', () => {
  expect(logic1.old35(20)).toEqual(true);
});

test('old35 should return true when given 21', () => {
  expect(logic1.old35(21)).toEqual(true);
});

test('old35 should return false when given 22', () => {
  expect(logic1.old35(22)).toEqual(false);
});

test('old35 should return false when given 45', () => {
  expect(logic1.old35(45)).toEqual(false);
});

test('old35 should return true when given 99', () => {
  expect(logic1.old35(99)).toEqual(true);
});

test('less20 should return true when given 18', () => {
  expect(logic1.less20(18)).toEqual(true);
});

test('less20 should return true when given 19', () => {
  expect(logic1.less20(19)).toEqual(true);
});

test('less20 should return false when given 20', () => {
  expect(logic1.less20(20)).toEqual(false);
});

test('less20 should return false when given 8', () => {
  expect(logic1.less20(8)).toEqual(false);
});

test('less20 should return false when given 17', () => {
  expect(logic1.less20(17)).toEqual(false);
});

test('less20 should return false when given 23', () => {
  expect(logic1.less20(23)).toEqual(false);
});

test('less20 should return false when given 25', () => {
  expect(logic1.less20(25)).toEqual(false);
});

test('less20 should return false when given 30', () => {
  expect(logic1.less20(30)).toEqual(false);
});

test('less20 should return false when given 31', () => {
  expect(logic1.less20(31)).toEqual(false);
});

test('less20 should return true when given 58', () => {
  expect(logic1.less20(58)).toEqual(true);
});

test('less20 should return true when given 59', () => {
  expect(logic1.less20(59)).toEqual(true);
});

test('less20 should return false when given 60', () => {
  expect(logic1.less20(60)).toEqual(false);
});

test('less20 should return false when given 61', () => {
  expect(logic1.less20(61)).toEqual(false);
});

test('less20 should return false when given 62', () => {
  expect(logic1.less20(62)).toEqual(false);
});

test('less20 should return false when given 1017', () => {
  expect(logic1.less20(1017)).toEqual(false);
});

test('less20 should return true when given 1018', () => {
  expect(logic1.less20(1018)).toEqual(true);
});

test('less20 should return true when given 1019', () => {
  expect(logic1.less20(1019)).toEqual(true);
});

test('less20 should return false when given 1020', () => {
  expect(logic1.less20(1020)).toEqual(false);
});

test('less20 should return false when given 1021', () => {
  expect(logic1.less20(1021)).toEqual(false);
});

test('less20 should return false when given 1022', () => {
  expect(logic1.less20(1022)).toEqual(false);
});

test('less20 should return false when given 1023', () => {
  expect(logic1.less20(1023)).toEqual(false);
});

test('less20 should return false when given 37', () => {
  expect(logic1.less20(37)).toEqual(false);
});

test('nearTen should return true when given 12', () => {
  expect(logic1.nearTen(12)).toEqual(true);
});

test('nearTen should return false when given 17', () => {
  expect(logic1.nearTen(17)).toEqual(false);
});

test('nearTen should return true when given 19', () => {
  expect(logic1.nearTen(19)).toEqual(true);
});

test('nearTen should return true when given 31', () => {
  expect(logic1.nearTen(31)).toEqual(true);
});

test('nearTen should return false when given 6', () => {
  expect(logic1.nearTen(6)).toEqual(false);
});

test('nearTen should return true when given 10', () => {
  expect(logic1.nearTen(10)).toEqual(true);
});

test('nearTen should return true when given 11', () => {
  expect(logic1.nearTen(11)).toEqual(true);
});

test('nearTen should return true when given 21', () => {
  expect(logic1.nearTen(21)).toEqual(true);
});

test('nearTen should return true when given 22', () => {
  expect(logic1.nearTen(22)).toEqual(true);
});

test('nearTen should return false when given 23', () => {
  expect(logic1.nearTen(23)).toEqual(false);
});

test('nearTen should return false when given 54', () => {
  expect(logic1.nearTen(54)).toEqual(false);
});

test('nearTen should return false when given 155', () => {
  expect(logic1.nearTen(155)).toEqual(false);
});

test('nearTen should return true when given 158', () => {
  expect(logic1.nearTen(158)).toEqual(true);
});

test('nearTen should return false when given 3', () => {
  expect(logic1.nearTen(3)).toEqual(false);
});

test('nearTen should return true when given 1', () => {
  expect(logic1.nearTen(1)).toEqual(true);
});

test('teenSum should return 7 when given (3, 4)', () => {
  expect(logic1.teenSum(3, 4)).toEqual(7);
});

test('teenSum should return 19 when given (10, 13)', () => {
  expect(logic1.teenSum(10, 13)).toEqual(19);
});

test('teenSum should return 19 when given (13, 2)', () => {
  expect(logic1.teenSum(13, 2)).toEqual(19);
});

test('teenSum should return 19 when given (3, 19)', () => {
  expect(logic1.teenSum(3, 19)).toEqual(19);
});

test('teenSum should return 19 when given (13, 13)', () => {
  expect(logic1.teenSum(13, 13)).toEqual(19);
});

test('teenSum should return 20 when given (10, 10)', () => {
  expect(logic1.teenSum(10, 10)).toEqual(20);
});

test('teenSum should return 19 when given (6, 14)', () => {
  expect(logic1.teenSum(6, 14)).toEqual(19);
});

test('teenSum should return 19 when given (15, 2)', () => {
  expect(logic1.teenSum(15, 2)).toEqual(19);
});

test('teenSum should return 19 when given (19, 19)', () => {
  expect(logic1.teenSum(19, 19)).toEqual(19);
});

test('teenSum should return 19 when given (19, 20)', () => {
  expect(logic1.teenSum(19, 20)).toEqual(19);
});

test('teenSum should return 19 when given (2, 18)', () => {
  expect(logic1.teenSum(2, 18)).toEqual(19);
});

test('teenSum should return 16 when given (12, 4)', () => {
  expect(logic1.teenSum(12, 4)).toEqual(16);
});

test('teenSum should return 22 when given (2, 20)', () => {
  expect(logic1.teenSum(2, 20)).toEqual(22);
});

test('teenSum should return 19 when given (2, 17)', () => {
  expect(logic1.teenSum(2, 17)).toEqual(19);
});

test('teenSum should return 19 when given (2, 16)', () => {
  expect(logic1.teenSum(2, 16)).toEqual(19);
});

test('teenSum should return 13 when given (6, 7)', () => {
  expect(logic1.teenSum(6, 7)).toEqual(13);
});

test('answerCell should return true when given (false, false, false)', () => {
  expect(logic1.answerCell(false, false, false)).toEqual(true);
});

test('answerCell should return false when given (false, false, true)', () => {
  expect(logic1.answerCell(false, false, true)).toEqual(false);
});

test('answerCell should return false when given (true, false, false)', () => {
  expect(logic1.answerCell(true, false, false)).toEqual(false);
});

test('answerCell should return true when given (true, true, false)', () => {
  expect(logic1.answerCell(true, true, false)).toEqual(true);
});

test('answerCell should return true when given (false, true, false)', () => {
  expect(logic1.answerCell(false, true, false)).toEqual(true);
});

test('answerCell should return false when given (true, true, true)', () => {
  expect(logic1.answerCell(true, true, true)).toEqual(false);
});

test('teaParty should return 1 when given (6, 8)', () => {
  expect(logic1.teaParty(6, 8)).toEqual(1);
});

test('teaParty should return 0 when given (3, 8)', () => {
  expect(logic1.teaParty(3, 8)).toEqual(0);
});

test('teaParty should return 2 when given (20, 6)', () => {
  expect(logic1.teaParty(20, 6)).toEqual(2);
});

test('teaParty should return 2 when given (12, 6)', () => {
  expect(logic1.teaParty(12, 6)).toEqual(2);
});

test('teaParty should return 1 when given (11, 6)', () => {
  expect(logic1.teaParty(11, 6)).toEqual(1);
});

test('teaParty should return 0 when given (11, 4)', () => {
  expect(logic1.teaParty(11, 4)).toEqual(0);
});

test('teaParty should return 0 when given (4, 5)', () => {
  expect(logic1.teaParty(4, 5)).toEqual(0);
});

test('teaParty should return 1 when given (5, 5)', () => {
  expect(logic1.teaParty(5, 5)).toEqual(1);
});

test('teaParty should return 1 when given (6, 6)', () => {
  expect(logic1.teaParty(6, 6)).toEqual(1);
});

test('teaParty should return 2 when given (5, 10)', () => {
  expect(logic1.teaParty(5, 10)).toEqual(2);
});

test('teaParty should return 1 when given (5, 9)', () => {
  expect(logic1.teaParty(5, 9)).toEqual(1);
});

test('teaParty should return 0 when given (10, 4)', () => {
  expect(logic1.teaParty(10, 4)).toEqual(0);
});

test('teaParty should return 2 when given (10, 20)', () => {
  expect(logic1.teaParty(10, 20)).toEqual(2);
});

test('fizzString should return "Fizz" when given "fig"', () => {
  expect(logic1.fizzString("fig")).toEqual("Fizz");
});

test('fizzString should return "Buzz" when given "dib"', () => {
  expect(logic1.fizzString("dib")).toEqual("Buzz");
});

test('fizzString should return "FizzBuzz" when given "fib"', () => {
  expect(logic1.fizzString("fib")).toEqual("FizzBuzz");
});

test('fizzString should return "abc" when given "abc"', () => {
  expect(logic1.fizzString("abc")).toEqual("abc");
});

test('fizzString should return "Fizz" when given "fooo"', () => {
  expect(logic1.fizzString("fooo")).toEqual("Fizz");
});

test('fizzString should return "booo" when given "booo"', () => {
  expect(logic1.fizzString("booo")).toEqual("booo");
});

test('fizzString should return "Buzz" when given "ooob"', () => {
  expect(logic1.fizzString("ooob")).toEqual("Buzz");
});

test('fizzString should return "FizzBuzz" when given "fooob"', () => {
  expect(logic1.fizzString("fooob")).toEqual("FizzBuzz");
});

test('fizzString should return "Fizz" when given "f"', () => {
  expect(logic1.fizzString("f")).toEqual("Fizz");
});

test('fizzString should return "Buzz" when given "b"', () => {
  expect(logic1.fizzString("b")).toEqual("Buzz");
});

test('fizzString should return "Buzz" when given "abcb"', () => {
  expect(logic1.fizzString("abcb")).toEqual("Buzz");
});

test('fizzString should return "Hello" when given "Hello"', () => {
  expect(logic1.fizzString("Hello")).toEqual("Hello");
});

test('fizzString should return "Buzz" when given "Hellob"', () => {
  expect(logic1.fizzString("Hellob")).toEqual("Buzz");
});

test('fizzString should return "af" when given "af"', () => {
  expect(logic1.fizzString("af")).toEqual("af");
});

test('fizzString should return "bf" when given "bf"', () => {
  expect(logic1.fizzString("bf")).toEqual("bf");
});

test('fizzString should return "FizzBuzz" when given "fb"', () => {
  expect(logic1.fizzString("fb")).toEqual("FizzBuzz");
});

test('fizzString2 should return "1!" when given 1', () => {
  expect(logic1.fizzString2(1)).toEqual("1!");
});

test('fizzString2 should return "2!" when given 2', () => {
  expect(logic1.fizzString2(2)).toEqual("2!");
});

test('fizzString2 should return "Fizz!" when given 3', () => {
  expect(logic1.fizzString2(3)).toEqual("Fizz!");
});

test('fizzString2 should return "4!" when given 4', () => {
  expect(logic1.fizzString2(4)).toEqual("4!");
});

test('fizzString2 should return "Buzz!" when given 5', () => {
  expect(logic1.fizzString2(5)).toEqual("Buzz!");
});

test('fizzString2 should return "Fizz!" when given 6', () => {
  expect(logic1.fizzString2(6)).toEqual("Fizz!");
});

test('fizzString2 should return "7!" when given 7', () => {
  expect(logic1.fizzString2(7)).toEqual("7!");
});

test('fizzString2 should return "8!" when given 8', () => {
  expect(logic1.fizzString2(8)).toEqual("8!");
});

test('fizzString2 should return "Fizz!" when given 9', () => {
  expect(logic1.fizzString2(9)).toEqual("Fizz!");
});

test('fizzString2 should return "FizzBuzz!" when given 15', () => {
  expect(logic1.fizzString2(15)).toEqual("FizzBuzz!");
});

test('fizzString2 should return "16!" when given 16', () => {
  expect(logic1.fizzString2(16)).toEqual("16!");
});

test('fizzString2 should return "Fizz!" when given 18', () => {
  expect(logic1.fizzString2(18)).toEqual("Fizz!");
});

test('fizzString2 should return "19!" when given 19', () => {
  expect(logic1.fizzString2(19)).toEqual("19!");
});

test('fizzString2 should return "Fizz!" when given 21', () => {
  expect(logic1.fizzString2(21)).toEqual("Fizz!");
});

test('fizzString2 should return "44!" when given 44', () => {
  expect(logic1.fizzString2(44)).toEqual("44!");
});

test('fizzString2 should return "FizzBuzz!" when given 45', () => {
  expect(logic1.fizzString2(45)).toEqual("FizzBuzz!");
});

test('fizzString2 should return "Buzz!" when given 100', () => {
  expect(logic1.fizzString2(100)).toEqual("Buzz!");
});

test('twoAsOne should return true when given (1, 2, 3)', () => {
  expect(logic1.twoAsOne(1, 2, 3)).toEqual(true);
});

test('twoAsOne should return true when given (3, 1, 2)', () => {
  expect(logic1.twoAsOne(3, 1, 2)).toEqual(true);
});

test('twoAsOne should return false when given (3, 2, 2)', () => {
  expect(logic1.twoAsOne(3, 2, 2)).toEqual(false);
});

test('twoAsOne should return true when given (2, 3, 1)', () => {
  expect(logic1.twoAsOne(2, 3, 1)).toEqual(true);
});

test('twoAsOne should return true when given (5, 3, -2)', () => {
  expect(logic1.twoAsOne(5, 3, -2)).toEqual(true);
});

test('twoAsOne should return false when given (5, 3, -3)', () => {
  expect(logic1.twoAsOne(5, 3, -3)).toEqual(false);
});

test('twoAsOne should return true when given (2, 5, 3)', () => {
  expect(logic1.twoAsOne(2, 5, 3)).toEqual(true);
});

test('twoAsOne should return false when given (9, 5, 5)', () => {
  expect(logic1.twoAsOne(9, 5, 5)).toEqual(false);
});

test('twoAsOne should return true when given (9, 4, 5)', () => {
  expect(logic1.twoAsOne(9, 4, 5)).toEqual(true);
});

test('twoAsOne should return true when given (5, 4, 9)', () => {
  expect(logic1.twoAsOne(5, 4, 9)).toEqual(true);
});

test('twoAsOne should return true when given (3, 3, 0)', () => {
  expect(logic1.twoAsOne(3, 3, 0)).toEqual(true);
});

test('twoAsOne should return false when given (3, 3, 2)', () => {
  expect(logic1.twoAsOne(3, 3, 2)).toEqual(false);
});

test('inOrder should return true when given (1, 2, 4, false)', () => {
  expect(logic1.inOrder(1, 2, 4, false)).toEqual(true);
});

test('inOrder should return false when given (1, 2, 1, false)', () => {
  expect(logic1.inOrder(1, 2, 1, false)).toEqual(false);
});

test('inOrder should return true when given (1, 1, 2, true)', () => {
  expect(logic1.inOrder(1, 1, 2, true)).toEqual(true);
});

test('inOrder should return false when given (3, 2, 4, false)', () => {
  expect(logic1.inOrder(3, 2, 4, false)).toEqual(false);
});

test('inOrder should return true when given (2, 3, 4, false)', () => {
  expect(logic1.inOrder(2, 3, 4, false)).toEqual(true);
});

test('inOrder should return true when given (3, 2, 4, true)', () => {
  expect(logic1.inOrder(3, 2, 4, true)).toEqual(true);
});

test('inOrder should return false when given (4, 2, 2, true)', () => {
  expect(logic1.inOrder(4, 2, 2, true)).toEqual(false);
});

test('inOrder should return false when given (4, 5, 2, true)', () => {
  expect(logic1.inOrder(4, 5, 2, true)).toEqual(false);
});

test('inOrder should return true when given (2, 4, 6, true)', () => {
  expect(logic1.inOrder(2, 4, 6, true)).toEqual(true);
});

test('inOrder should return true when given (7, 9, 10, false)', () => {
  expect(logic1.inOrder(7, 9, 10, false)).toEqual(true);
});

test('inOrder should return true when given (7, 5, 6, true)', () => {
  expect(logic1.inOrder(7, 5, 6, true)).toEqual(true);
});

test('inOrder should return false when given (7, 5, 4, true)', () => {
  expect(logic1.inOrder(7, 5, 4, true)).toEqual(false);
});

test('inOrderEqual should return true when given (2, 5, 11, false)', () => {
  expect(logic1.inOrderEqual(2, 5, 11, false)).toEqual(true);
});

test('inOrderEqual should return false when given (5, 7, 6, false)', () => {
  expect(logic1.inOrderEqual(5, 7, 6, false)).toEqual(false);
});

test('inOrderEqual should return true when given (5, 5, 7, true)', () => {
  expect(logic1.inOrderEqual(5, 5, 7, true)).toEqual(true);
});

test('inOrderEqual should return false when given (5, 5, 7, false)', () => {
  expect(logic1.inOrderEqual(5, 5, 7, false)).toEqual(false);
});

test('inOrderEqual should return false when given (2, 5, 4, false)', () => {
  expect(logic1.inOrderEqual(2, 5, 4, false)).toEqual(false);
});

test('inOrderEqual should return false when given (3, 4, 3, false)', () => {
  expect(logic1.inOrderEqual(3, 4, 3, false)).toEqual(false);
});

test('inOrderEqual should return false when given (3, 4, 4, false)', () => {
  expect(logic1.inOrderEqual(3, 4, 4, false)).toEqual(false);
});

test('inOrderEqual should return false when given (3, 4, 3, true)', () => {
  expect(logic1.inOrderEqual(3, 4, 3, true)).toEqual(false);
});

test('inOrderEqual should return true when given (3, 4, 4, true)', () => {
  expect(logic1.inOrderEqual(3, 4, 4, true)).toEqual(true);
});

test('inOrderEqual should return true when given (1, 5, 5, true)', () => {
  expect(logic1.inOrderEqual(1, 5, 5, true)).toEqual(true);
});

test('inOrderEqual should return true when given (5, 5, 5, true)', () => {
  expect(logic1.inOrderEqual(5, 5, 5, true)).toEqual(true);
});

test('inOrderEqual should return false when given (2, 2, 1, true)', () => {
  expect(logic1.inOrderEqual(2, 2, 1, true)).toEqual(false);
});

test('inOrderEqual should return false when given (9, 2, 2, true)', () => {
  expect(logic1.inOrderEqual(9, 2, 2, true)).toEqual(false);
});

test('inOrderEqual should return false when given (0, 1, 0, true)', () => {
  expect(logic1.inOrderEqual(0, 1, 0, true)).toEqual(false);
});

test('lastDigit should return false when given (23, 19, 13)', () => {
  expect(logic1.lastDigit(23, 19, 13)).toEqual(false);
});

test('lastDigit should return false when given (23, 19, 12)', () => {
  expect(logic1.lastDigit(23, 19, 12)).toEqual(false);
});

test('lastDigit should return true when given (23, 19, 3)', () => {
  expect(logic1.lastDigit(23, 19, 3)).toEqual(true);
});

test('lastDigit should return true when given (23, 19, 39)', () => {
  expect(logic1.lastDigit(23, 19, 39)).toEqual(true);
});

test('lastDigit should return false when given (1, 2, 3)', () => {
  expect(logic1.lastDigit(1, 2, 3)).toEqual(false);
});

test('lastDigit should return true when given (1, 1, 2)', () => {
  expect(logic1.lastDigit(1, 1, 2)).toEqual(true);
});

test('lastDigit should return true when given (1, 2, 2)', () => {
  expect(logic1.lastDigit(1, 2, 2)).toEqual(true);
});

test('lastDigit should return false when given (14, 25, 43)', () => {
  expect(logic1.lastDigit(14, 25, 43)).toEqual(false);
});

test('lastDigit should return true when given (14, 25, 45)', () => {
  expect(logic1.lastDigit(14, 25, 45)).toEqual(true);
});

test('lastDigit should return false when given (248, 106, 1002)', () => {
  expect(logic1.lastDigit(248, 106, 1002)).toEqual(false);
});

test('lastDigit should return false when given (248, 106, 1008)', () => {
  expect(logic1.lastDigit(248, 106, 1008)).toEqual(false);
});

test('lastDigit should return false when given (10, 11, 20)', () => {
  expect(logic1.lastDigit(10, 11, 20)).toEqual(false);
});

test('lastDigit should return true when given (0, 11, 0)', () => {
  expect(logic1.lastDigit(0, 11, 0)).toEqual(true);
});

test('lessBy10 should return true when given (1, 7, 11)', () => {
  expect(logic1.lessBy10(1, 7, 11)).toEqual(true);
});

test('lessBy10 should return false when given (1, 7, 10)', () => {
  expect(logic1.lessBy10(1, 7, 10)).toEqual(false);
});

test('lessBy10 should return true when given (11, 1, 7)', () => {
  expect(logic1.lessBy10(11, 1, 7)).toEqual(true);
});

test('lessBy10 should return false when given (10, 7, 1)', () => {
  expect(logic1.lessBy10(10, 7, 1)).toEqual(false);
});

test('lessBy10 should return true when given (-10, 2, 2)', () => {
  expect(logic1.lessBy10(-10, 2, 2)).toEqual(true);
});

test('lessBy10 should return false when given (2, 11, 11)', () => {
  expect(logic1.lessBy10(2, 11, 11)).toEqual(false);
});

test('lessBy10 should return true when given (3, 3, 30)', () => {
  expect(logic1.lessBy10(3, 3, 30)).toEqual(true);
});

test('lessBy10 should return false when given (3, 3, 3)', () => {
  expect(logic1.lessBy10(3, 3, 3)).toEqual(false);
});

test('lessBy10 should return true when given (10, 1, 11)', () => {
  expect(logic1.lessBy10(10, 1, 11)).toEqual(true);
});

test('lessBy10 should return true when given (10, 11, 1)', () => {
  expect(logic1.lessBy10(10, 11, 1)).toEqual(true);
});

test('lessBy10 should return false when given (10, 11, 2)', () => {
  expect(logic1.lessBy10(10, 11, 2)).toEqual(false);
});

test('lessBy10 should return true when given (3, 30, 3)', () => {
  expect(logic1.lessBy10(3, 30, 3)).toEqual(true);
});

test('lessBy10 should return true when given (2, 2, -8)', () => {
  expect(logic1.lessBy10(2, 2, -8)).toEqual(true);
});

test('lessBy10 should return true when given (2, 8, 12)', () => {
  expect(logic1.lessBy10(2, 8, 12)).toEqual(true);
});

test('withoutDoubles should return 5 when given (2, 3, true)', () => {
  expect(logic1.withoutDoubles(2, 3, true)).toEqual(5);
});

test('withoutDoubles should return 7 when given (3, 3, true)', () => {
  expect(logic1.withoutDoubles(3, 3, true)).toEqual(7);
});

test('withoutDoubles should return 6 when given (3, 3, false)', () => {
  expect(logic1.withoutDoubles(3, 3, false)).toEqual(6);
});

test('withoutDoubles should return 5 when given (2, 3, false)', () => {
  expect(logic1.withoutDoubles(2, 3, false)).toEqual(5);
});

test('withoutDoubles should return 9 when given (5, 4, true)', () => {
  expect(logic1.withoutDoubles(5, 4, true)).toEqual(9);
});

test('withoutDoubles should return 9 when given (5, 4, false)', () => {
  expect(logic1.withoutDoubles(5, 4, false)).toEqual(9);
});

test('withoutDoubles should return 11 when given (5, 5, true)', () => {
  expect(logic1.withoutDoubles(5, 5, true)).toEqual(11);
});

test('withoutDoubles should return 10 when given (5, 5, false)', () => {
  expect(logic1.withoutDoubles(5, 5, false)).toEqual(10);
});

test('withoutDoubles should return 7 when given (6, 6, true)', () => {
  expect(logic1.withoutDoubles(6, 6, true)).toEqual(7);
});

test('withoutDoubles should return 12 when given (6, 6, false)', () => {
  expect(logic1.withoutDoubles(6, 6, false)).toEqual(12);
});

test('withoutDoubles should return 7 when given (1, 6, true)', () => {
  expect(logic1.withoutDoubles(1, 6, true)).toEqual(7);
});

test('withoutDoubles should return 7 when given (6, 1, false)', () => {
  expect(logic1.withoutDoubles(6, 1, false)).toEqual(7);
});

test('maxMod5 should return 3 when given (2, 3)', () => {
  expect(logic1.maxMod5(2, 3)).toEqual(3);
});

test('maxMod5 should return 6 when given (6, 2)', () => {
  expect(logic1.maxMod5(6, 2)).toEqual(6);
});

test('maxMod5 should return 3 when given (3, 2)', () => {
  expect(logic1.maxMod5(3, 2)).toEqual(3);
});

test('maxMod5 should return 12 when given (8, 12)', () => {
  expect(logic1.maxMod5(8, 12)).toEqual(12);
});

test('maxMod5 should return 7 when given (7, 12)', () => {
  expect(logic1.maxMod5(7, 12)).toEqual(7);
});

test('maxMod5 should return 6 when given (11, 6)', () => {
  expect(logic1.maxMod5(11, 6)).toEqual(6);
});

test('maxMod5 should return 2 when given (2, 7)', () => {
  expect(logic1.maxMod5(2, 7)).toEqual(2);
});

test('maxMod5 should return 0 when given (7, 7)', () => {
  expect(logic1.maxMod5(7, 7)).toEqual(0);
});

test('maxMod5 should return 9 when given (9, 1)', () => {
  expect(logic1.maxMod5(9, 1)).toEqual(9);
});

test('maxMod5 should return 9 when given (9, 14)', () => {
  expect(logic1.maxMod5(9, 14)).toEqual(9);
});

test('maxMod5 should return 2 when given (1, 2)', () => {
  expect(logic1.maxMod5(1, 2)).toEqual(2);
});

test('redTicket should return 10 when given (2, 2, 2)', () => {
  expect(logic1.redTicket(2, 2, 2)).toEqual(10);
});

test('redTicket should return 0 when given (2, 2, 1)', () => {
  expect(logic1.redTicket(2, 2, 1)).toEqual(0);
});

test('redTicket should return 5 when given (0, 0, 0)', () => {
  expect(logic1.redTicket(0, 0, 0)).toEqual(5);
});

test('redTicket should return 1 when given (2, 0, 0)', () => {
  expect(logic1.redTicket(2, 0, 0)).toEqual(1);
});

test('redTicket should return 5 when given (1, 1, 1)', () => {
  expect(logic1.redTicket(1, 1, 1)).toEqual(5);
});

test('redTicket should return 0 when given (1, 2, 1)', () => {
  expect(logic1.redTicket(1, 2, 1)).toEqual(0);
});

test('redTicket should return 1 when given (1, 2, 0)', () => {
  expect(logic1.redTicket(1, 2, 0)).toEqual(1);
});

test('redTicket should return 1 when given (0, 2, 2)', () => {
  expect(logic1.redTicket(0, 2, 2)).toEqual(1);
});

test('redTicket should return 1 when given (1, 2, 2)', () => {
  expect(logic1.redTicket(1, 2, 2)).toEqual(1);
});

test('redTicket should return 0 when given (0, 2, 0)', () => {
  expect(logic1.redTicket(0, 2, 0)).toEqual(0);
});

test('redTicket should return 0 when given (1, 1, 2)', () => {
  expect(logic1.redTicket(1, 1, 2)).toEqual(0);
});

test('greenTicket should return 0 when given (1, 2, 3)', () => {
  expect(logic1.greenTicket(1, 2, 3)).toEqual(0);
});

test('greenTicket should return 20 when given (2, 2, 2)', () => {
  expect(logic1.greenTicket(2, 2, 2)).toEqual(20);
});

test('greenTicket should return 10 when given (1, 1, 2)', () => {
  expect(logic1.greenTicket(1, 1, 2)).toEqual(10);
});

test('greenTicket should return 10 when given (2, 1, 1)', () => {
  expect(logic1.greenTicket(2, 1, 1)).toEqual(10);
});

test('greenTicket should return 10 when given (1, 2, 1)', () => {
  expect(logic1.greenTicket(1, 2, 1)).toEqual(10);
});

test('greenTicket should return 0 when given (3, 2, 1)', () => {
  expect(logic1.greenTicket(3, 2, 1)).toEqual(0);
});

test('greenTicket should return 20 when given (0, 0, 0)', () => {
  expect(logic1.greenTicket(0, 0, 0)).toEqual(20);
});

test('greenTicket should return 10 when given (2, 0, 0)', () => {
  expect(logic1.greenTicket(2, 0, 0)).toEqual(10);
});

test('greenTicket should return 0 when given (0, 9, 10)', () => {
  expect(logic1.greenTicket(0, 9, 10)).toEqual(0);
});

test('greenTicket should return 10 when given (0, 10, 0)', () => {
  expect(logic1.greenTicket(0, 10, 0)).toEqual(10);
});

test('greenTicket should return 20 when given (9, 9, 9)', () => {
  expect(logic1.greenTicket(9, 9, 9)).toEqual(20);
});

test('greenTicket should return 10 when given (9, 0, 9)', () => {
  expect(logic1.greenTicket(9, 0, 9)).toEqual(10);
});

test('blueTicket should return 10 when given (9, 1, 0)', () => {
  expect(logic1.blueTicket(9, 1, 0)).toEqual(10);
});

test('blueTicket should return 0 when given (9, 2, 0)', () => {
  expect(logic1.blueTicket(9, 2, 0)).toEqual(0);
});

test('blueTicket should return 10 when given (6, 1, 4)', () => {
  expect(logic1.blueTicket(6, 1, 4)).toEqual(10);
});

test('blueTicket should return 0 when given (6, 1, 5)', () => {
  expect(logic1.blueTicket(6, 1, 5)).toEqual(0);
});

test('blueTicket should return 10 when given (10, 0, 0)', () => {
  expect(logic1.blueTicket(10, 0, 0)).toEqual(10);
});

test('blueTicket should return 5 when given (15, 0, 5)', () => {
  expect(logic1.blueTicket(15, 0, 5)).toEqual(5);
});

test('blueTicket should return 10 when given (5, 15, 5)', () => {
  expect(logic1.blueTicket(5, 15, 5)).toEqual(10);
});

test('blueTicket should return 5 when given (4, 11, 1)', () => {
  expect(logic1.blueTicket(4, 11, 1)).toEqual(5);
});

test('blueTicket should return 5 when given (13, 2, 3)', () => {
  expect(logic1.blueTicket(13, 2, 3)).toEqual(5);
});

test('blueTicket should return 0 when given (8, 4, 3)', () => {
  expect(logic1.blueTicket(8, 4, 3)).toEqual(0);
});

test('blueTicket should return 10 when given (8, 4, 2)', () => {
  expect(logic1.blueTicket(8, 4, 2)).toEqual(10);
});

test('blueTicket should return 0 when given (8, 4, 1)', () => {
  expect(logic1.blueTicket(8, 4, 1)).toEqual(0);
});

test('shareDigit should return true when given (12, 23)', () => {
  expect(logic1.shareDigit(12, 23)).toEqual(true);
});

test('shareDigit should return false when given (12, 43)', () => {
  expect(logic1.shareDigit(12, 43)).toEqual(false);
});

test('shareDigit should return false when given (12, 44)', () => {
  expect(logic1.shareDigit(12, 44)).toEqual(false);
});

test('shareDigit should return true when given (23, 12)', () => {
  expect(logic1.shareDigit(23, 12)).toEqual(true);
});

test('shareDigit should return true when given (23, 39)', () => {
  expect(logic1.shareDigit(23, 39)).toEqual(true);
});

test('shareDigit should return false when given (23, 19)', () => {
  expect(logic1.shareDigit(23, 19)).toEqual(false);
});

test('shareDigit should return true when given (30, 90)', () => {
  expect(logic1.shareDigit(30, 90)).toEqual(true);
});

test('shareDigit should return false when given (30, 91)', () => {
  expect(logic1.shareDigit(30, 91)).toEqual(false);
});

test('shareDigit should return true when given (55, 55)', () => {
  expect(logic1.shareDigit(55, 55)).toEqual(true);
});

test('shareDigit should return false when given (55, 44)', () => {
  expect(logic1.shareDigit(55, 44)).toEqual(false);
});

test('sumLimit should return 5 when given (2, 3)', () => {
  expect(logic1.sumLimit(2, 3)).toEqual(5);
});

test('sumLimit should return 8 when given (8, 3)', () => {
  expect(logic1.sumLimit(8, 3)).toEqual(8);
});

test('sumLimit should return 9 when given (8, 1)', () => {
  expect(logic1.sumLimit(8, 1)).toEqual(9);
});

test('sumLimit should return 50 when given (11, 39)', () => {
  expect(logic1.sumLimit(11, 39)).toEqual(50);
});

test('sumLimit should return 11 when given (11, 99)', () => {
  expect(logic1.sumLimit(11, 99)).toEqual(11);
});

test('sumLimit should return 0 when given (0, 0)', () => {
  expect(logic1.sumLimit(0, 0)).toEqual(0);
});

test('sumLimit should return 99 when given (99, 0)', () => {
  expect(logic1.sumLimit(99, 0)).toEqual(99);
});

test('sumLimit should return 99 when given (99, 1)', () => {
  expect(logic1.sumLimit(99, 1)).toEqual(99);
});

test('sumLimit should return 124 when given (123, 1)', () => {
  expect(logic1.sumLimit(123, 1)).toEqual(124);
});

test('sumLimit should return 1 when given (1, 123)', () => {
  expect(logic1.sumLimit(1, 123)).toEqual(1);
});

test('sumLimit should return 83 when given (23, 60)', () => {
  expect(logic1.sumLimit(23, 60)).toEqual(83);
});

test('sumLimit should return 23 when given (23, 80)', () => {
  expect(logic1.sumLimit(23, 80)).toEqual(23);
});

test('sumLimit should return 9001 when given (9000, 1)', () => {
  expect(logic1.sumLimit(9000, 1)).toEqual(9001);
});

test('sumLimit should return 90000001 when given (90000000, 1)', () => {
  expect(logic1.sumLimit(90000000, 1)).toEqual(90000001);
});

test('sumLimit should return 9000 when given (9000, 1000)', () => {
  expect(logic1.sumLimit(9000, 1000)).toEqual(9000);
});
