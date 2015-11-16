callback({
  "levelNumber": 20,
  "size": 196,
  "steps": 53,
  "successRatio": 0.02,
  "type": "specific",
  "author": "viamodulo",
  "hash": "01b86061c3d7552e03c2960dd8e8ccc8",
  "path": "20-Multiplication-Workshop-15.109/196.53.specific-viamodulo.asm",
  "source": "-- HUMAN RESOURCE MACHINE PROGRAM --\n-- 20-Multiplication-Workshop - SIZE 196/15 - SPEED 53/109 --\n\n-- This solution is level-specific (patterned and quality-limited input) and assumes 5 input\n-- pairs : ++ ++ +0 0+ ++ (where 0 < + <= 9).\n-- Based on 92.64.specific-mschordan.asm.\n\n    BUMPUP   9\n    BUMPUP   9\n    ADD      9\n    COPYTO   4\n\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      4\n    JUMPN    a123\n    JUMPZ    a4\n    SUB      9\n    JUMPN    a5\n    JUMPZ    a6\n    SUB      9\n    JUMPN    a7\n    JUMPZ    a8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outa\n\na1:\n    COPYFROM 0\n    JUMP     outa\na2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outa\na123:\n    ADD      9\n    JUMPN    a1\n    JUMPZ    a2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outa\na4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outa\na5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outa\na6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outa\na7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outa\na8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\nouta:\n    OUTBOX\nb:\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      4\n    JUMPN    b123\n    JUMPZ    b4\n    SUB      9\n    JUMPN    b5\n    JUMPZ    b6\n    SUB      9\n    JUMPN    b7\n    JUMPZ    b8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outb\n\nb1:\n    COPYFROM 0\n    JUMP     outb\nb2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outb\nb123:\n    ADD      9\n    JUMPN    b1\n    JUMPZ    b2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outb\nb4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outb\nb5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outb\nb6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outb\nb7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outb\nb8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\noutb:\n    OUTBOX\n    INBOX\n    INBOX\n    OUTBOX\n    INBOX\n    OUTBOX\n    INBOX\n\n    INBOX\n    COPYTO   0\n    INBOX\n    SUB      4\n    JUMPN    c123\n    JUMPZ    c4\n    SUB      9\n    JUMPN    c5\n    JUMPZ    c6\n    SUB      9\n    JUMPN    c7\n    JUMPZ    c8\n\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      3\n    JUMP     outb\n\nc1:\n    COPYFROM 0\n    JUMP     outb\nc2:\n    COPYFROM 0\n    ADD      0\n    JUMP     outb\nc123:\n    ADD      9\n    JUMPN    c1\n    JUMPZ    c2\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    JUMP     outb\nc4:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outb\nc5:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    ADD      0\n    JUMP     outb\nc6:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    JUMP     outb\nc7:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    ADD      0\n    JUMP     outb\nc8:\n    COPYFROM 0\n    ADD      0\n    ADD      0\n    ADD      0\n    COPYTO   3\n    ADD      3\n    OUTBOX\n"
});