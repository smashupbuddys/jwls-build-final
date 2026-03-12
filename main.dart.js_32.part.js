((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
fwg(d,e,f,g,h,i,j,k,l,m){var x,w,v=null,u="{WHOLESALE_PRICE}",t=A.bl(),s=B.r.q(t.gbo()),r=B.p.bG(B.r.q(t.gbn()),2,"0"),q=B.p.bG(B.r.q(t.gbV()),2,"0"),p=B.p.bG(B.r.q(B.r.a9(t.gbV()-1,7)+1),2,"0"),o=A.bq(g,"{CATEGORY}",d)
o=A.bq(o,"{SUB}",k)
o=A.bq(o,"{YEAR}",s)
o=A.bq(o,"{MONTH}",r)
o=A.bq(o,"{DAY}",q)
o=A.bq(o,"{WEEK}",p)
o=A.bq(o,"{MANUFACTURER}",e)
x=j==null?"":j
o=A.bq(o,"{SIZE}",x)
x=f==null?"":f
o=A.Wl(A.bq(o,"{METAL}",x),A.bM("\\{SEQ:(\\d+)\\}",!0,!1),new C.c4I(i),v)
x=B.r.P(h)
w=B.r.q(x)
o=A.bq(o,"{PRICE}",w)
x=B.r.q(x)
o=A.bq(o,"{RETAIL_PRICE}",x)
if(m!=null){x=B.r.q(B.r.P(m))
o=A.bq(o,u,x)}else o=A.bq(o,u,"")
x=B.r.q(B.q.P(l))
o=A.bq(o,"{WEIGHT}",x)
o=A.bq(o,"{STORE_CODE}","")
o=A.bq(o,"{PURITY}","")
return C.fUY(A.Wl(A.Wl(A.Wl(A.Wl(A.Wl(A.bq(o,"{STONE_TYPE}",""),A.bM("\\{CUSTOM:([A-Za-z0-9_]+)\\}",!0,!1),new C.c4J(),v),A.bM("\\{ALPHA:(\\d+)\\}",!0,!1),new C.c4K(),v),A.bM("\\{ALPHANUM:(\\d+)\\}",!0,!1),new C.c4L(),v),A.bM("\\{HASH:(\\d+)\\}",!0,!1),new C.c4M(),v),A.bM("\\{IF:([A-Z]+)=([^:]+):([^:]+):([^}]+)\\}",!0,!1),new C.c4N(f,v),v))},
fUY(d){var x=A.bM("[-/_]{2,}",!0,!1),w=B.p.u(d,"/")?"/":"-",v=A.Wl(A.bq(d,x,w),A.bM("([-/_])([-/_])+",!0,!1),new C.c4w(),null)
x=A.bM("^[-/_]+",!0,!1)
v=A.bq(v,x,"")
x=A.bM("[-/_]+$",!0,!1)
return A.bq(v,x,"")},
fwh(b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="^[-/_]+$",a5=y.h,a6=A.a([],a5),a7=A.bl(),a8=B.r.q(a7.gbo()),a9=B.p.bG(B.r.q(a7.gbn()),2,"0"),b0=B.p.bG(B.r.q(a7.gbV()),2,"0"),b1=B.p.bG(B.r.q(B.r.a9(a7.gbV()-1,7)+1),2,"0"),b2=B.r.P(b9),b3=B.r.q(b2)
b2=B.r.q(b2)
x=B.r.q(B.r.P(c4))
w=B.r.q(B.q.P(c3))
v=y.g
u=A.e(["CATEGORY",b4,"SUB",c2,"YEAR",a8,"MONTH",a9,"DAY",b0,"WEEK",b1,"MANUFACTURER",b5,"SIZE",c1,"METAL",b6,"PRICE",b3,"RETAIL_PRICE",b2,"WHOLESALE_PRICE",x,"WEIGHT",w,"STORE_CODE","","PURITY","","STONE_TYPE",""],v,v)
for(b2=y.b,t=b7;b3=t.length!==0,b3;){s=A.bM("\\{([A-Z_:0-9]+)\\}",!0,!1).nH(t)
if(s==null){if(b3)a6.push(new A.V5(t,a3,!1,!1,!1,a3))
break}b3=s.b
x=b3.index
if(x>0)a6.push(new A.V5(B.p.an(t,0,x),a3,!1,!1,!1,a3))
b3[0].toString
w=b3[1]
w.toString
if(B.p.bL(w,"SEQ:")){r=A.db(B.p.bq(w,4),a3)
if(r==null)r=4
q=B.p.bG(B.r.q(c0),r,"0")
p="SEQ"}else if(B.p.bL(w,"ALPHA:")){o=A.db(B.p.bq(w,6),a3)
q=C.fwc(o==null?3:o)
p="ALPHA"}else if(B.p.bL(w,"ALPHANUM:")){o=A.db(B.p.bq(w,9),a3)
q=C.fwd(o==null?4:o)
p="ALPHANUM"}else if(B.p.bL(w,"HASH:")){o=A.db(B.p.bq(w,5),a3)
q=C.fwe(o==null?6:o)
p="HASH"}else if(B.p.bL(w,"CUSTOM:")){q=B.p.bq(w,7).toUpperCase()
p="CUSTOM"}else{q=u.h(0,w)
if(q==null)q=w
p=w}n=b8.h(0,p)
m=n==null?b8.h(0,w):n
if(m==null)m=A.X(v,b2)
w=J.O(m)
n=A.cx(w.h(m,"isBold"))
l=A.cx(w.h(m,"isItalic"))
k=A.cx(w.h(m,"isUppercase"))
w=w.h(m,"color")!=null?A.ch(A.bC(w.h(m,"color"))):a3
a6.push(new A.V5(q,p,n===!0,l===!0,k===!0,w))
t=B.p.bq(t,x+b3[0].length)}j=A.a([],a5)
for(i=0;i<a6.length;++i){h=a6[i]
if(h.b!=null&&h.a.length===0)continue
j.push(h)}g=A.a([],a5)
for(i=0;i<j.length;++i){h=j[i]
if(h.b==null){a5=A.bM(a4,!0,!1)
f=a5.b.test(h.a)}else f=!1
if(f){if(i===0||i===j.length-1)continue
e=i>0?j[i-1]:a3
d=!1
if(e!=null)if(e.b==null){a5=A.bM(a4,!0,!1)
b2=e.a
a5=a5.b.test(b2)
d=a5}if(d)continue
if(g.length!==0){a0=B.l.gaP(g)
if(a0.b==null){a5=A.bM(a4,!0,!1)
a1=a5.b.test(a0.a)}else a1=!1
if(a1)continue}}g.push(h)}if(g.length!==0){a2=B.l.gaP(g)
if(a2.b==null){a5=A.bM(a4,!0,!1)
a5=a5.b.test(a2.a)}else a5=!1
if(a5)g.pop()}return g},
fwf(d,e,f,g,h){var x=null,w=A.ai(h).k("Y<1,MC>")
w=A.a7(new A.Y(h,new C.c4D(g,e,d,f),w),w.k("aG.E"))
return A.cLo(x,x,x,B.aa,x,x,!0,x,A.Nj(w,x,x,x,x,x,x,x,x,x,x),B.a_,x,x,B.dN,B.dl)},
fwc(d){var x,w=A.bl().gfb(),v=J.eG(d,y.g)
for(x=0;x<d;++x)v[x]="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[B.r.a7(w+x,26)]
return B.l.kd(v)},
fwd(d){var x,w=A.bl().gfb(),v=J.eG(d,y.g)
for(x=0;x<d;++x)v[x]="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[B.r.a7(w+x*7,36)]
return B.l.kd(v)},
fwe(d){var x,w,v=A.bl().gfb(),u=J.eG(d,y.g)
for(x=0;x<d;x=w){w=x+1
u[x]="0123456789ABCDEF"[B.r.a7(v*w,16)]}return B.l.kd(u)},
c4I:function c4I(d){this.a=d},
c4J:function c4J(){},
c4K:function c4K(){},
c4L:function c4L(){},
c4M:function c4M(){},
c4N:function c4N(d,e){this.a=d
this.b=e},
c4w:function c4w(){},
c4D:function c4D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[26],C)
D=c[49]
var z=a.updateTypes([])
C.c4I.prototype={
$1(d){var x=d.f5(1),w=A.db(x==null?"4":x,null)
if(w==null)w=4
return B.p.bG(B.r.q(this.a),w,"0")},
$S:75}
C.c4J.prototype={
$1(d){var x=d.f5(1)
if(x==null)x="FIELD"
return x.toUpperCase()},
$S:75}
C.c4K.prototype={
$1(d){var x=d.f5(1),w=A.db(x==null?"3":x,null)
return C.fwc(w==null?3:w)},
$S:75}
C.c4L.prototype={
$1(d){var x=d.f5(1),w=A.db(x==null?"4":x,null)
return C.fwd(w==null?4:w)},
$S:75}
C.c4M.prototype={
$1(d){var x=d.f5(1),w=A.db(x==null?"6":x,null)
return C.fwe(w==null?6:w)},
$S:75}
C.c4N.prototype={
$1(d){var x,w=d.f5(1),v=d.f5(2),u=d.f5(3),t=d.f5(4)
if(w==="METAL"&&this.a!=null&&v!=null){if(this.a.toUpperCase()===v.toUpperCase()){u.toString
x=u}else{t.toString
x=t}return x}return u==null?"XX":u},
$S:75}
C.c4w.prototype={
$1(d){var x=d.f5(1)
x.toString
return x},
$S:75}
C.c4D.prototype={
$1(d){var x,w,v=this,u=null,t=v.b,s=v.c,r=d.a
if(d.e)r=r.toUpperCase()
if(d.c)t=B.x
x=d.d?B.d1:B.jY
w=d.f
s=w==null?s:w
return A.Nj(u,u,u,u,u,u,u,u,u,A.u(u,u,s,u,u,u,u,u,v.d,u,u,v.a,x,u,t,u,u,!0,u,u,u,u,u,u,u,u),r)},
$S:2182};(function inheritance(){var x=a.inheritMany
x(A.Qw,[C.c4I,C.c4J,C.c4K,C.c4L,C.c4M,C.c4N,C.c4w,C.c4D])})()
var y={h:A.b2("ab<V5>"),g:A.b2("E"),b:A.b2("@")};(function constants(){D.az4=new A.Q("Bold",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.LB=new A.No(B.aT,null,null,B.pH,null)
D.ayG=new A.aJ(!0,B.aJ,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azA=new A.Q("B",null,B.ayO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dCq=new A.aJ(!0,null,null,null,null,null,16,null,B.d1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azF=new A.Q("I",null,D.dCq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azL=new A.Q("AA",null,B.xL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["pN833MI5lJSjPJvumbEQyqbjzMs="]=a.current})($__dart_deferred_initializers__);