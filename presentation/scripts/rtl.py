import re,sys
HEB=re.compile('[֐-׿]')
def fix(html):
    def rep(m):
        open_,body,close=m.group(1),m.group(2),m.group(3)
        if not HEB.search(body) or body.startswith('‫'): return m.group(0)
        return open_+'‫'+body+'‬'+close
    return re.sub(r'(<(p|h1|h2|h3)\b[^>]*>)(.*?)(</\2>)', lambda m: rep(type('M',(),{'group':lambda s,i=0:[m.group(0),m.group(1),m.group(3),m.group(4)][i]})()), html, flags=re.S)
for f in sys.argv[1:]:
    s=open(f,encoding='utf-8').read(); t=fix(s)
    open(f,'w',encoding='utf-8').write(t)
    print(f, t.count('‫'))
