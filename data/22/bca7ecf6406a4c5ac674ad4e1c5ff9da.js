callback({
  "levelNumber": 22,
  "size": 149,
  "steps": 51,
  "successRatio": 0.85,
  "type": "specific",
  "author": "Mygod",
  "hash": "bca7ecf6406a4c5ac674ad4e1c5ff9da",
  "path": "22-Fibonacci-Visitor-19.156/149.51.specific-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 22-Fibonacci-Visitor - SIZE 149/19 - SPEED 51/156 --\r\n\r\n-- This solution is level-specific (patterned and quantity-limited input).\r\n-- This solution assumes that there are 2 inputs and\r\n--   both of them are between [5, 35).\r\n-- This solution = Patrick-Jakubowski's solution + binary search (-1 speed) +\r\n--   better JUMP labels + optimizations in size\r\n\r\n    BUMPUP   9\r\n    COPYTO   8\r\n    BUMPUP   8\r\n    ADD      9\r\n    COPYTO   7\r\n    ADD      8\r\n    COPYTO   6\r\n    ADD      7\r\n    COPYTO   5\r\n    ADD      6\r\n    COPYTO   4\r\n    ADD      5\r\n    COPYTO   3\r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13a\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21a\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl13a:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8a\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\n    \r\nl8a:\r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl21a:\r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 6\r\n    OUTBOX  \r\n    INBOX   \r\n    SUB      4\r\n    JUMPN    l13b\r\n    \r\n    ADD      4\r\n    SUB      3\r\n    JUMPN    l21b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 3\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl13b:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    INBOX   \r\n    \r\nl21b:\r\n    ADD      4\r\n    SUB      5\r\n    JUMPN    l8b\r\n    \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n\r\nl8b:\r\n\r\n"
});