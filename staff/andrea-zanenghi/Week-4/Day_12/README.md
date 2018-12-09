##### *2018/12/01*
# Skylab
## Day 12
### Regex

http://tryregex.com/

```
bio.match(/Andrea/);
["Andrea"]

/Andrea/.exec(bio)
["Andrea"]

/Andrea/.test(bio)
true

bio.replace(/Andrea/, 'Johnny')
"A developer called Johnny is learning regex"

num
"123456"

num.match(/3.5/)
["345"]

num.match(/3\.5/)
null

num.match(/5/)
["5"]

answer(/front?/)
"Answer received"

shortStory
"A regular expression (also regex or regexp) is a string."

shortStory.match(/\(.+\)/)
["(also regex or regexp)"]

bracketNumbers.match(/\(.{5,8}\)/)
["(123456)"]

This:
answer(/a{0,1}b{1,}c{0,}/)
"Answer received"

Is Equal to:
answer(/a?b+c*/)
"Answer received"

/CAT/i.exec('Category')
["Cat"]

shortStory.replace(/a/g,'e')
"A reguler expression (elso regex or regexp) is e string."

username.match(/^[A-Z0-9_-]{5,12}/i)
["BobbyTables"]

/[a-z\-]{5,12}/i.test(username)
true

/[^ ]{5,12}/i.test(username)
true

charTypeTest.match(/\w+\s\d+/)
["Approximately 1920"]

Valid URL

/https?:\/\/\S*/g.test(possibleUrl)
true

/https?:\/\/\S+/g.test(possibleUrl)
true

/\(.{5,8}\)/.exec(shorterStory)
["(123456)"]

/\((.{5,8})\)/.exec(shorterStory)
["(123456)", "123456"]

```

