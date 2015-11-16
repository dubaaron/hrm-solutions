callback({
  "levelNumber": 30,
  "size": 169,
  "steps": 85,
  "successRatio": 1,
  "type": "exploit",
  "author": "Mygod",
  "hash": "6b0de92d984edf458ad28800a60e8d00",
  "path": "30-String-Storage-Floor-7.203/169.85.exploit-Mygod.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\r\n-- 30-String-Storage-Floor - Size 169/7 - Speed 85/203 --\r\n\r\n-- This solution is an exploit discovered by Otto42;\r\n-- the message is known in advance.\r\n-- There are random numbers of X's in the places in the message they occur, so\r\n-- it fast forwards the message to them and uses three jumps to output the\r\n-- correct number of X's.\r\n\r\n    COPYFROM 12\r\n    SUB      8\r\n    COPYTO   24\r\n    BUMPDN   24\r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 7\r\n    OUTBOX  \r\n    COPYFROM 8\r\n    OUTBOX  \r\n    COPYFROM 9\r\n    OUTBOX  \r\n    COPYFROM 0\r\n    OUTBOX  \r\n    COPYFROM 1\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    a3\r\n    JUMPZ    a2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    COPYFROM 11\r\n    OUTBOX  \r\n    COPYFROM 12\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    b3\r\n    JUMPZ    b2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\na3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\na2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    COPYFROM 11\r\n    OUTBOX  \r\n    COPYFROM 12\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    SUB      24\r\n    JUMPN    b3\r\n    JUMPZ    b2\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\nb3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nb2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 22\r\n    OUTBOX  \r\n    COPYFROM 2\r\n    OUTBOX  \r\n    COPYFROM 13\r\n    OUTBOX  \r\n    COPYFROM 14\r\n    OUTBOX  \r\n    COPYFROM 15\r\n    OUTBOX  \r\n    COPYFROM 4\r\n    OUTBOX  \r\n    COPYFROM 5\r\n    OUTBOX  \r\n    COPYFROM 17\r\n    OUTBOX  \r\n    COPYFROM 18\r\n    OUTBOX  \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX   \r\n    INBOX  \r\n    SUB      24\r\n    JUMPN    c3\r\n    JUMPZ    c2\r\n    JUMP     c1\r\nc3:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc2:\r\n    COPYFROM 22\r\n    OUTBOX  \r\nc1:\r\n    COPYFROM 22\r\n    OUTBOX  \r\n\r\n\r\n"
});