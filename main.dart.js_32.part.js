((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,C={
fpF(d,e,f,g,h,i,j,k,l,m){var x,w,v=null,u="{WHOLESALE_PRICE}",t=A.bi(),s=B.q.q(t.gbm()),r=B.o.bH(B.q.q(t.gbo()),2,"0"),q=B.o.bH(B.q.q(t.gbT()),2,"0"),p=B.o.bH(B.q.q(B.q.ae(t.gbT()-1,7)+1),2,"0"),o=A.br(g,"{CATEGORY}",d)
o=A.br(o,"{SUB}",k)
o=A.br(o,"{YEAR}",s)
o=A.br(o,"{MONTH}",r)
o=A.br(o,"{DAY}",q)
o=A.br(o,"{WEEK}",p)
o=A.br(o,"{MANUFACTURER}",e)
x=j==null?"":j
o=A.br(o,"{SIZE}",x)
x=f==null?"":f
o=A.Wa(A.br(o,"{METAL}",x),A.bK("\\{SEQ:(\\d+)\\}",!0,!1),new C.c3_(i),v)
x=B.q.P(h)
w=B.q.q(x)
o=A.br(o,"{PRICE}",w)
x=B.q.q(x)
o=A.br(o,"{RETAIL_PRICE}",x)
if(m!=null){x=B.q.q(B.q.P(m))
o=A.br(o,u,x)}else o=A.br(o,u,"")
x=B.q.q(B.p.P(l))
o=A.br(o,"{WEIGHT}",x)
o=A.br(o,"{STORE_CODE}","")
o=A.br(o,"{PURITY}","")
return C.fOd(A.Wa(A.Wa(A.Wa(A.Wa(A.Wa(A.br(o,"{STONE_TYPE}",""),A.bK("\\{CUSTOM:([A-Za-z0-9_]+)\\}",!0,!1),new C.c30(),v),A.bK("\\{ALPHA:(\\d+)\\}",!0,!1),new C.c31(),v),A.bK("\\{ALPHANUM:(\\d+)\\}",!0,!1),new C.c32(),v),A.bK("\\{HASH:(\\d+)\\}",!0,!1),new C.c33(),v),A.bK("\\{IF:([A-Z]+)=([^:]+):([^:]+):([^}]+)\\}",!0,!1),new C.c34(f,v),v))},
fOd(d){var x=A.bK("[-/_]{2,}",!0,!1),w=B.o.u(d,"/")?"/":"-",v=A.Wa(A.br(d,x,w),A.bK("([-/_])([-/_])+",!0,!1),new C.c2O(),null)
x=A.bK("^[-/_]+",!0,!1)
v=A.br(v,x,"")
x=A.bK("[-/_]+$",!0,!1)
return A.br(v,x,"")},
fpG(b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="^[-/_]+$",a5=y.h,a6=A.a([],a5),a7=A.bi(),a8=B.q.q(a7.gbm()),a9=B.o.bH(B.q.q(a7.gbo()),2,"0"),b0=B.o.bH(B.q.q(a7.gbT()),2,"0"),b1=B.o.bH(B.q.q(B.q.ae(a7.gbT()-1,7)+1),2,"0"),b2=B.q.P(b9),b3=B.q.q(b2)
b2=B.q.q(b2)
x=B.q.q(B.q.P(c4))
w=B.q.q(B.p.P(c3))
v=y.g
u=A.e(["CATEGORY",b4,"SUB",c2,"YEAR",a8,"MONTH",a9,"DAY",b0,"WEEK",b1,"MANUFACTURER",b5,"SIZE",c1,"METAL",b6,"PRICE",b3,"RETAIL_PRICE",b2,"WHOLESALE_PRICE",x,"WEIGHT",w,"STORE_CODE","","PURITY","","STONE_TYPE",""],v,v)
for(b2=y.b,t=b7;b3=t.length!==0,b3;){s=A.bK("\\{([A-Z_:0-9]+)\\}",!0,!1).nD(t)
if(s==null){if(b3)a6.push(new A.UU(t,a3,!1,!1,!1,a3))
break}b3=s.b
x=b3.index
if(x>0)a6.push(new A.UU(B.o.an(t,0,x),a3,!1,!1,!1,a3))
b3[0].toString
w=b3[1]
w.toString
if(B.o.bL(w,"SEQ:")){r=A.d7(B.o.bw(w,4),a3)
if(r==null)r=4
q=B.o.bH(B.q.q(c0),r,"0")
p="SEQ"}else if(B.o.bL(w,"ALPHA:")){o=A.d7(B.o.bw(w,6),a3)
q=C.fpB(o==null?3:o)
p="ALPHA"}else if(B.o.bL(w,"ALPHANUM:")){o=A.d7(B.o.bw(w,9),a3)
q=C.fpC(o==null?4:o)
p="ALPHANUM"}else if(B.o.bL(w,"HASH:")){o=A.d7(B.o.bw(w,5),a3)
q=C.fpD(o==null?6:o)
p="HASH"}else if(B.o.bL(w,"CUSTOM:")){q=B.o.bw(w,7).toUpperCase()
p="CUSTOM"}else{q=u.h(0,w)
if(q==null)q=w
p=w}n=b8.h(0,p)
m=n==null?b8.h(0,w):n
if(m==null)m=A.a_(v,b2)
w=J.R(m)
n=A.cw(w.h(m,"isBold"))
l=A.cw(w.h(m,"isItalic"))
k=A.cw(w.h(m,"isUppercase"))
w=w.h(m,"color")!=null?A.cc(A.bO(w.h(m,"color"))):a3
a6.push(new A.UU(q,p,n===!0,l===!0,k===!0,w))
t=B.o.bw(t,x+b3[0].length)}j=A.a([],a5)
for(i=0;i<a6.length;++i){h=a6[i]
if(h.b!=null&&h.a.length===0)continue
j.push(h)}g=A.a([],a5)
for(i=0;i<j.length;++i){h=j[i]
if(h.b==null){a5=A.bK(a4,!0,!1)
f=a5.b.test(h.a)}else f=!1
if(f){if(i===0||i===j.length-1)continue
e=i>0?j[i-1]:a3
d=!1
if(e!=null)if(e.b==null){a5=A.bK(a4,!0,!1)
b2=e.a
a5=a5.b.test(b2)
d=a5}if(d)continue
if(g.length!==0){a0=B.m.gaO(g)
if(a0.b==null){a5=A.bK(a4,!0,!1)
a1=a5.b.test(a0.a)}else a1=!1
if(a1)continue}}g.push(h)}if(g.length!==0){a2=B.m.gaO(g)
if(a2.b==null){a5=A.bK(a4,!0,!1)
a5=a5.b.test(a2.a)}else a5=!1
if(a5)g.pop()}return g},
fpE(d,e,f,g,h){var x=null,w=A.aj(h).k("Y<1,My>")
w=A.a8(new A.Y(h,new C.c2V(g,e,d,f),w),w.k("aH.E"))
return A.cJC(x,x,x,B.ah,x,x,!0,x,A.Nx(w,x,x,x,x,x,x,x,x,x,x),B.a_,x,x,B.dI,B.df)},
fpB(d){var x,w=A.bi().gfg(),v=J.eH(d,y.g)
for(x=0;x<d;++x)v[x]="ABCDEFGHIJKLMNOPQRSTUVWXYZ"[B.q.a8(w+x,26)]
return B.m.k6(v)},
fpC(d){var x,w=A.bi().gfg(),v=J.eH(d,y.g)
for(x=0;x<d;++x)v[x]="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[B.q.a8(w+x*7,36)]
return B.m.k6(v)},
fpD(d){var x,w,v=A.bi().gfg(),u=J.eH(d,y.g)
for(x=0;x<d;x=w){w=x+1
u[x]="0123456789ABCDEF"[B.q.a8(v*w,16)]}return B.m.k6(u)},
c3_:function c3_(d){this.a=d},
c30:function c30(){},
c31:function c31(){},
c32:function c32(){},
c33:function c33(){},
c34:function c34(d,e){this.a=d
this.b=e},
c2O:function c2O(){},
c2V:function c2V(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g}},D
J=c[1]
A=c[0]
B=c[2]
C=a.updateHolder(c[24],C)
D=c[46]
var z=a.updateTypes([])
C.c3_.prototype={
$1(d){var x=d.f4(1),w=A.d7(x==null?"4":x,null)
if(w==null)w=4
return B.o.bH(B.q.q(this.a),w,"0")},
$S:80}
C.c30.prototype={
$1(d){var x=d.f4(1)
if(x==null)x="FIELD"
return x.toUpperCase()},
$S:80}
C.c31.prototype={
$1(d){var x=d.f4(1),w=A.d7(x==null?"3":x,null)
return C.fpB(w==null?3:w)},
$S:80}
C.c32.prototype={
$1(d){var x=d.f4(1),w=A.d7(x==null?"4":x,null)
return C.fpC(w==null?4:w)},
$S:80}
C.c33.prototype={
$1(d){var x=d.f4(1),w=A.d7(x==null?"6":x,null)
return C.fpD(w==null?6:w)},
$S:80}
C.c34.prototype={
$1(d){var x,w=d.f4(1),v=d.f4(2),u=d.f4(3),t=d.f4(4)
if(w==="METAL"&&this.a!=null&&v!=null){if(this.a.toUpperCase()===v.toUpperCase()){u.toString
x=u}else{t.toString
x=t}return x}return u==null?"XX":u},
$S:80}
C.c2O.prototype={
$1(d){var x=d.f4(1)
x.toString
return x},
$S:80}
C.c2V.prototype={
$1(d){var x,w,v=this,u=null,t=v.b,s=v.c,r=d.a
if(d.e)r=r.toUpperCase()
if(d.c)t=B.x
x=d.d?B.cS:B.jM
w=d.f
s=w==null?s:w
return A.Nx(u,u,u,u,u,u,u,u,u,A.t(u,u,s,u,u,u,u,u,v.d,u,u,v.a,x,u,t,u,u,!0,u,u,u,u,u,u,u,u),r)},
$S:2148};(function inheritance(){var x=a.inheritMany
x(A.QS,[C.c3_,C.c30,C.c31,C.c32,C.c33,C.c34,C.c2O,C.c2V])})()
var y={h:A.b0("a9<UU>"),g:A.b0("G"),b:A.b0("@")};(function constants(){D.ayR=new A.O("Bold",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Lj=new A.Nk(B.b7,null,null,B.po,null)
D.ays=new A.aJ(!0,B.aK,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azs=new A.O("B",null,B.UI,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.dCy=new A.aJ(!0,null,null,null,null,null,16,null,B.cS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azx=new A.O("I",null,D.dCy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.azC=new A.O("AA",null,B.xA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)})()};
(a=>{a["HGgIjtVeN0ZAC+L/FFA1VhA1YkY="]=a.current})($__dart_deferred_initializers__);