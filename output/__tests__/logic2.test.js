const logic2 = require('../logic2');

test('makeBricks should return true when given (3, 1, 8)', () => {
  expect(logic2.makeBricks(3, 1, 8)).toEqual(true);
});

test('makeBricks should return false when given (3, 1, 9)', () => {
  expect(logic2.makeBricks(3, 1, 9)).toEqual(false);
});

test('makeBricks should return true when given (3, 2, 10)', () => {
  expect(logic2.makeBricks(3, 2, 10)).toEqual(true);
});

test('makeBricks should return true when given (3, 2, 8)', () => {
  expect(logic2.makeBricks(3, 2, 8)).toEqual(true);
});

test('makeBricks should return false when given (3, 2, 9)', () => {
  expect(logic2.makeBricks(3, 2, 9)).toEqual(false);
});

test('makeBricks should return true when given (6, 1, 11)', () => {
  expect(logic2.makeBricks(6, 1, 11)).toEqual(true);
});

test('makeBricks should return false when given (6, 0, 11)', () => {
  expect(logic2.makeBricks(6, 0, 11)).toEqual(false);
});

test('makeBricks should return true when given (1, 4, 11)', () => {
  expect(logic2.makeBricks(1, 4, 11)).toEqual(true);
});

test('makeBricks should return true when given (0, 3, 10)', () => {
  expect(logic2.makeBricks(0, 3, 10)).toEqual(true);
});

test('makeBricks should return false when given (1, 4, 12)', () => {
  expect(logic2.makeBricks(1, 4, 12)).toEqual(false);
});

test('makeBricks should return true when given (3, 1, 7)', () => {
  expect(logic2.makeBricks(3, 1, 7)).toEqual(true);
});

test('makeBricks should return false when given (1, 1, 7)', () => {
  expect(logic2.makeBricks(1, 1, 7)).toEqual(false);
});

test('makeBricks should return true when given (2, 1, 7)', () => {
  expect(logic2.makeBricks(2, 1, 7)).toEqual(true);
});

test('makeBricks should return true when given (7, 1, 11)', () => {
  expect(logic2.makeBricks(7, 1, 11)).toEqual(true);
});

test('makeBricks should return true when given (7, 1, 8)', () => {
  expect(logic2.makeBricks(7, 1, 8)).toEqual(true);
});

test('makeBricks should return false when given (7, 1, 13)', () => {
  expect(logic2.makeBricks(7, 1, 13)).toEqual(false);
});

test('makeBricks should return true when given (43, 1, 46)', () => {
  expect(logic2.makeBricks(43, 1, 46)).toEqual(true);
});

test('makeBricks should return false when given (40, 1, 46)', () => {
  expect(logic2.makeBricks(40, 1, 46)).toEqual(false);
});

test('makeBricks should return true when given (40, 2, 47)', () => {
  expect(logic2.makeBricks(40, 2, 47)).toEqual(true);
});

test('makeBricks should return true when given (40, 2, 50)', () => {
  expect(logic2.makeBricks(40, 2, 50)).toEqual(true);
});

test('makeBricks should return false when given (40, 2, 52)', () => {
  expect(logic2.makeBricks(40, 2, 52)).toEqual(false);
});

test('makeBricks should return false when given (22, 2, 33)', () => {
  expect(logic2.makeBricks(22, 2, 33)).toEqual(false);
});

test('makeBricks should return true when given (0, 2, 10)', () => {
  expect(logic2.makeBricks(0, 2, 10)).toEqual(true);
});

test('makeBricks should return true when given (1000000, 1000, 1000100)', () => {
  expect(logic2.makeBricks(1000000, 1000, 1000100)).toEqual(true);
});

test('makeBricks should return false when given (2, 1000000, 100003)', () => {
  expect(logic2.makeBricks(2, 1000000, 100003)).toEqual(false);
});

test('makeBricks should return true when given (20, 0, 19)', () => {
  expect(logic2.makeBricks(20, 0, 19)).toEqual(true);
});

test('makeBricks should return false when given (20, 0, 21)', () => {
  expect(logic2.makeBricks(20, 0, 21)).toEqual(false);
});

test('makeBricks should return false when given (20, 4, 51)', () => {
  expect(logic2.makeBricks(20, 4, 51)).toEqual(false);
});

test('makeBricks should return true when given (20, 4, 39)', () => {
  expect(logic2.makeBricks(20, 4, 39)).toEqual(true);
});

test('loneSum should return 6 when given (1, 2, 3)', () => {
  expect(logic2.loneSum(1, 2, 3)).toEqual(6);
});

test('loneSum should return 2 when given (3, 2, 3)', () => {
  expect(logic2.loneSum(3, 2, 3)).toEqual(2);
});

test('loneSum should return 0 when given (3, 3, 3)', () => {
  expect(logic2.loneSum(3, 3, 3)).toEqual(0);
});

test('loneSum should return 9 when given (9, 2, 2)', () => {
  expect(logic2.loneSum(9, 2, 2)).toEqual(9);
});

test('loneSum should return 9 when given (2, 2, 9)', () => {
  expect(logic2.loneSum(2, 2, 9)).toEqual(9);
});

test('loneSum should return 9 when given (2, 9, 2)', () => {
  expect(logic2.loneSum(2, 9, 2)).toEqual(9);
});

test('loneSum should return 14 when given (2, 9, 3)', () => {
  expect(logic2.loneSum(2, 9, 3)).toEqual(14);
});

test('loneSum should return 9 when given (4, 2, 3)', () => {
  expect(logic2.loneSum(4, 2, 3)).toEqual(9);
});

test('loneSum should return 3 when given (1, 3, 1)', () => {
  expect(logic2.loneSum(1, 3, 1)).toEqual(3);
});

test('luckySum should return 6 when given (1, 2, 3)', () => {
  expect(logic2.luckySum(1, 2, 3)).toEqual(6);
});

test('luckySum should return 3 when given (1, 2, 13)', () => {
  expect(logic2.luckySum(1, 2, 13)).toEqual(3);
});

test('luckySum should return 1 when given (1, 13, 3)', () => {
  expect(logic2.luckySum(1, 13, 3)).toEqual(1);
});

test('luckySum should return 1 when given (1, 13, 13)', () => {
  expect(logic2.luckySum(1, 13, 13)).toEqual(1);
});

test('luckySum should return 13 when given (6, 5, 2)', () => {
  expect(logic2.luckySum(6, 5, 2)).toEqual(13);
});

test('luckySum should return 0 when given (13, 2, 3)', () => {
  expect(logic2.luckySum(13, 2, 3)).toEqual(0);
});

test('luckySum should return 0 when given (13, 2, 13)', () => {
  expect(logic2.luckySum(13, 2, 13)).toEqual(0);
});

test('luckySum should return 0 when given (13, 13, 2)', () => {
  expect(logic2.luckySum(13, 13, 2)).toEqual(0);
});

test('luckySum should return 13 when given (9, 4, 13)', () => {
  expect(logic2.luckySum(9, 4, 13)).toEqual(13);
});

test('luckySum should return 8 when given (8, 13, 2)', () => {
  expect(logic2.luckySum(8, 13, 2)).toEqual(8);
});

test('luckySum should return 10 when given (7, 2, 1)', () => {
  expect(logic2.luckySum(7, 2, 1)).toEqual(10);
});

test('luckySum should return 6 when given (3, 3, 13)', () => {
  expect(logic2.luckySum(3, 3, 13)).toEqual(6);
});

test('noTeenSum should return 6 when given (1, 2, 3)', () => {
  expect(logic2.noTeenSum(1, 2, 3)).toEqual(6);
});

test('noTeenSum should return 3 when given (2, 13, 1)', () => {
  expect(logic2.noTeenSum(2, 13, 1)).toEqual(3);
});

test('noTeenSum should return 3 when given (2, 1, 14)', () => {
  expect(logic2.noTeenSum(2, 1, 14)).toEqual(3);
});

test('noTeenSum should return 18 when given (2, 1, 15)', () => {
  expect(logic2.noTeenSum(2, 1, 15)).toEqual(18);
});

test('noTeenSum should return 19 when given (2, 1, 16)', () => {
  expect(logic2.noTeenSum(2, 1, 16)).toEqual(19);
});

test('noTeenSum should return 3 when given (2, 1, 17)', () => {
  expect(logic2.noTeenSum(2, 1, 17)).toEqual(3);
});

test('noTeenSum should return 3 when given (17, 1, 2)', () => {
  expect(logic2.noTeenSum(17, 1, 2)).toEqual(3);
});

test('noTeenSum should return 19 when given (2, 15, 2)', () => {
  expect(logic2.noTeenSum(2, 15, 2)).toEqual(19);
});

test('noTeenSum should return 16 when given (16, 17, 18)', () => {
  expect(logic2.noTeenSum(16, 17, 18)).toEqual(16);
});

test('noTeenSum should return 0 when given (17, 18, 19)', () => {
  expect(logic2.noTeenSum(17, 18, 19)).toEqual(0);
});

test('noTeenSum should return 32 when given (15, 16, 1)', () => {
  expect(logic2.noTeenSum(15, 16, 1)).toEqual(32);
});

test('noTeenSum should return 30 when given (15, 15, 19)', () => {
  expect(logic2.noTeenSum(15, 15, 19)).toEqual(30);
});

test('noTeenSum should return 31 when given (15, 19, 16)', () => {
  expect(logic2.noTeenSum(15, 19, 16)).toEqual(31);
});

test('noTeenSum should return 5 when given (5, 17, 18)', () => {
  expect(logic2.noTeenSum(5, 17, 18)).toEqual(5);
});

test('noTeenSum should return 16 when given (17, 18, 16)', () => {
  expect(logic2.noTeenSum(17, 18, 16)).toEqual(16);
});

test('noTeenSum should return 0 when given (17, 19, 18)', () => {
  expect(logic2.noTeenSum(17, 19, 18)).toEqual(0);
});

test('roundSum should return 60 when given (16, 17, 18)', () => {
  expect(logic2.roundSum(16, 17, 18)).toEqual(60);
});

test('roundSum should return 30 when given (12, 13, 14)', () => {
  expect(logic2.roundSum(12, 13, 14)).toEqual(30);
});

test('roundSum should return 10 when given (6, 4, 4)', () => {
  expect(logic2.roundSum(6, 4, 4)).toEqual(10);
});

test('roundSum should return 20 when given (4, 6, 5)', () => {
  expect(logic2.roundSum(4, 6, 5)).toEqual(20);
});

test('roundSum should return 10 when given (4, 4, 6)', () => {
  expect(logic2.roundSum(4, 4, 6)).toEqual(10);
});

test('roundSum should return 10 when given (9, 4, 4)', () => {
  expect(logic2.roundSum(9, 4, 4)).toEqual(10);
});

test('roundSum should return 0 when given (0, 0, 1)', () => {
  expect(logic2.roundSum(0, 0, 1)).toEqual(0);
});

test('roundSum should return 10 when given (0, 9, 0)', () => {
  expect(logic2.roundSum(0, 9, 0)).toEqual(10);
});

test('roundSum should return 40 when given (10, 10, 19)', () => {
  expect(logic2.roundSum(10, 10, 19)).toEqual(40);
});

test('roundSum should return 90 when given (20, 30, 40)', () => {
  expect(logic2.roundSum(20, 30, 40)).toEqual(90);
});

test('roundSum should return 100 when given (45, 21, 30)', () => {
  expect(logic2.roundSum(45, 21, 30)).toEqual(100);
});

test('roundSum should return 60 when given (23, 11, 26)', () => {
  expect(logic2.roundSum(23, 11, 26)).toEqual(60);
});

test('roundSum should return 70 when given (23, 24, 25)', () => {
  expect(logic2.roundSum(23, 24, 25)).toEqual(70);
});

test('roundSum should return 80 when given (25, 24, 25)', () => {
  expect(logic2.roundSum(25, 24, 25)).toEqual(80);
});

test('roundSum should return 70 when given (23, 24, 29)', () => {
  expect(logic2.roundSum(23, 24, 29)).toEqual(70);
});

test('roundSum should return 70 when given (11, 24, 36)', () => {
  expect(logic2.roundSum(11, 24, 36)).toEqual(70);
});

test('roundSum should return 90 when given (24, 36, 32)', () => {
  expect(logic2.roundSum(24, 36, 32)).toEqual(90);
});

test('roundSum should return 50 when given (14, 12, 26)', () => {
  expect(logic2.roundSum(14, 12, 26)).toEqual(50);
});

test('roundSum should return 40 when given (12, 10, 24)', () => {
  expect(logic2.roundSum(12, 10, 24)).toEqual(40);
});

test('closeFar should return true when given (1, 2, 10)', () => {
  expect(logic2.closeFar(1, 2, 10)).toEqual(true);
});

test('closeFar should return false when given (1, 2, 3)', () => {
  expect(logic2.closeFar(1, 2, 3)).toEqual(false);
});

test('closeFar should return true when given (4, 1, 3)', () => {
  expect(logic2.closeFar(4, 1, 3)).toEqual(true);
});

test('closeFar should return false when given (4, 5, 3)', () => {
  expect(logic2.closeFar(4, 5, 3)).toEqual(false);
});

test('closeFar should return false when given (4, 3, 5)', () => {
  expect(logic2.closeFar(4, 3, 5)).toEqual(false);
});

test('closeFar should return true when given (-1, 10, 0)', () => {
  expect(logic2.closeFar(-1, 10, 0)).toEqual(true);
});

test('closeFar should return true when given (0, -1, 10)', () => {
  expect(logic2.closeFar(0, -1, 10)).toEqual(true);
});

test('closeFar should return true when given (10, 10, 8)', () => {
  expect(logic2.closeFar(10, 10, 8)).toEqual(true);
});

test('closeFar should return false when given (10, 8, 9)', () => {
  expect(logic2.closeFar(10, 8, 9)).toEqual(false);
});

test('closeFar should return false when given (8, 9, 10)', () => {
  expect(logic2.closeFar(8, 9, 10)).toEqual(false);
});

test('closeFar should return false when given (8, 9, 7)', () => {
  expect(logic2.closeFar(8, 9, 7)).toEqual(false);
});

test('closeFar should return true when given (8, 6, 9)', () => {
  expect(logic2.closeFar(8, 6, 9)).toEqual(true);
});

test('blackjack should return 21 when given (19, 21)', () => {
  expect(logic2.blackjack(19, 21)).toEqual(21);
});

test('blackjack should return 21 when given (21, 19)', () => {
  expect(logic2.blackjack(21, 19)).toEqual(21);
});

test('blackjack should return 19 when given (19, 22)', () => {
  expect(logic2.blackjack(19, 22)).toEqual(19);
});

test('blackjack should return 19 when given (22, 19)', () => {
  expect(logic2.blackjack(22, 19)).toEqual(19);
});

test('blackjack should return 0 when given (22, 50)', () => {
  expect(logic2.blackjack(22, 50)).toEqual(0);
});

test('blackjack should return 0 when given (22, 22)', () => {
  expect(logic2.blackjack(22, 22)).toEqual(0);
});

test('blackjack should return 1 when given (33, 1)', () => {
  expect(logic2.blackjack(33, 1)).toEqual(1);
});

test('blackjack should return 2 when given (1, 2)', () => {
  expect(logic2.blackjack(1, 2)).toEqual(2);
});

test('blackjack should return 0 when given (34, 33)', () => {
  expect(logic2.blackjack(34, 33)).toEqual(0);
});

test('blackjack should return 19 when given (17, 19)', () => {
  expect(logic2.blackjack(17, 19)).toEqual(19);
});

test('blackjack should return 18 when given (18, 17)', () => {
  expect(logic2.blackjack(18, 17)).toEqual(18);
});

test('blackjack should return 16 when given (16, 23)', () => {
  expect(logic2.blackjack(16, 23)).toEqual(16);
});

test('blackjack should return 4 when given (3, 4)', () => {
  expect(logic2.blackjack(3, 4)).toEqual(4);
});

test('blackjack should return 3 when given (3, 2)', () => {
  expect(logic2.blackjack(3, 2)).toEqual(3);
});

test('blackjack should return 21 when given (21, 20)', () => {
  expect(logic2.blackjack(21, 20)).toEqual(21);
});

test('evenlySpaced should return true when given (2, 4, 6)', () => {
  expect(logic2.evenlySpaced(2, 4, 6)).toEqual(true);
});

test('evenlySpaced should return true when given (4, 6, 2)', () => {
  expect(logic2.evenlySpaced(4, 6, 2)).toEqual(true);
});

test('evenlySpaced should return false when given (4, 6, 3)', () => {
  expect(logic2.evenlySpaced(4, 6, 3)).toEqual(false);
});

test('evenlySpaced should return true when given (6, 2, 4)', () => {
  expect(logic2.evenlySpaced(6, 2, 4)).toEqual(true);
});

test('evenlySpaced should return false when given (6, 2, 8)', () => {
  expect(logic2.evenlySpaced(6, 2, 8)).toEqual(false);
});

test('evenlySpaced should return true when given (2, 2, 2)', () => {
  expect(logic2.evenlySpaced(2, 2, 2)).toEqual(true);
});

test('evenlySpaced should return false when given (2, 2, 3)', () => {
  expect(logic2.evenlySpaced(2, 2, 3)).toEqual(false);
});

test('evenlySpaced should return true when given (9, 10, 11)', () => {
  expect(logic2.evenlySpaced(9, 10, 11)).toEqual(true);
});

test('evenlySpaced should return true when given (10, 9, 11)', () => {
  expect(logic2.evenlySpaced(10, 9, 11)).toEqual(true);
});

test('evenlySpaced should return false when given (10, 9, 9)', () => {
  expect(logic2.evenlySpaced(10, 9, 9)).toEqual(false);
});

test('evenlySpaced should return false when given (2, 4, 4)', () => {
  expect(logic2.evenlySpaced(2, 4, 4)).toEqual(false);
});

test('evenlySpaced should return false when given (2, 2, 4)', () => {
  expect(logic2.evenlySpaced(2, 2, 4)).toEqual(false);
});

test('evenlySpaced should return false when given (3, 6, 12)', () => {
  expect(logic2.evenlySpaced(3, 6, 12)).toEqual(false);
});

test('evenlySpaced should return false when given (12, 3, 6)', () => {
  expect(logic2.evenlySpaced(12, 3, 6)).toEqual(false);
});

test('makeChocolate should return 4 when given (4, 1, 9)', () => {
  expect(logic2.makeChocolate(4, 1, 9)).toEqual(4);
});

test('makeChocolate should return -1 when given (4, 1, 10)', () => {
  expect(logic2.makeChocolate(4, 1, 10)).toEqual(-1);
});

test('makeChocolate should return 2 when given (4, 1, 7)', () => {
  expect(logic2.makeChocolate(4, 1, 7)).toEqual(2);
});

test('makeChocolate should return 2 when given (6, 2, 7)', () => {
  expect(logic2.makeChocolate(6, 2, 7)).toEqual(2);
});

test('makeChocolate should return 0 when given (4, 1, 5)', () => {
  expect(logic2.makeChocolate(4, 1, 5)).toEqual(0);
});

test('makeChocolate should return 4 when given (4, 1, 4)', () => {
  expect(logic2.makeChocolate(4, 1, 4)).toEqual(4);
});

test('makeChocolate should return 4 when given (5, 4, 9)', () => {
  expect(logic2.makeChocolate(5, 4, 9)).toEqual(4);
});

test('makeChocolate should return 3 when given (9, 3, 18)', () => {
  expect(logic2.makeChocolate(9, 3, 18)).toEqual(3);
});

test('makeChocolate should return -1 when given (3, 1, 9)', () => {
  expect(logic2.makeChocolate(3, 1, 9)).toEqual(-1);
});

test('makeChocolate should return 2 when given (1, 2, 7)', () => {
  expect(logic2.makeChocolate(1, 2, 7)).toEqual(2);
});

test('makeChocolate should return 1 when given (1, 2, 6)', () => {
  expect(logic2.makeChocolate(1, 2, 6)).toEqual(1);
});

test('makeChocolate should return 0 when given (1, 2, 5)', () => {
  expect(logic2.makeChocolate(1, 2, 5)).toEqual(0);
});

test('makeChocolate should return 5 when given (6, 1, 10)', () => {
  expect(logic2.makeChocolate(6, 1, 10)).toEqual(5);
});

test('makeChocolate should return 6 when given (6, 1, 11)', () => {
  expect(logic2.makeChocolate(6, 1, 11)).toEqual(6);
});

test('makeChocolate should return -1 when given (6, 1, 12)', () => {
  expect(logic2.makeChocolate(6, 1, 12)).toEqual(-1);
});

test('makeChocolate should return -1 when given (6, 1, 13)', () => {
  expect(logic2.makeChocolate(6, 1, 13)).toEqual(-1);
});

test('makeChocolate should return 0 when given (6, 2, 10)', () => {
  expect(logic2.makeChocolate(6, 2, 10)).toEqual(0);
});

test('makeChocolate should return 1 when given (6, 2, 11)', () => {
  expect(logic2.makeChocolate(6, 2, 11)).toEqual(1);
});

test('makeChocolate should return 2 when given (6, 2, 12)', () => {
  expect(logic2.makeChocolate(6, 2, 12)).toEqual(2);
});

test('makeChocolate should return 50 when given (60, 100, 550)', () => {
  expect(logic2.makeChocolate(60, 100, 550)).toEqual(50);
});

test('makeChocolate should return 6 when given (1000, 1000000, 5000006)', () => {
  expect(logic2.makeChocolate(1000, 1000000, 5000006)).toEqual(6);
});

test('makeChocolate should return 7 when given (7, 1, 12)', () => {
  expect(logic2.makeChocolate(7, 1, 12)).toEqual(7);
});

test('makeChocolate should return -1 when given (7, 1, 13)', () => {
  expect(logic2.makeChocolate(7, 1, 13)).toEqual(-1);
});

test('makeChocolate should return 3 when given (7, 2, 13)', () => {
  expect(logic2.makeChocolate(7, 2, 13)).toEqual(3);
});
