webpackJsonp([18],{1874:function(l,n,u){"use strict";function a(l){return r._42(0,[(l()(),r._16(0,0,null,null,1,"core-courses-course-list-item",[],null,null,null,$.b,$.a)),r._15(1,114688,null,0,K.a,[[2,w.a],L.a,_.a,O.a],{course:[0,"course"]},null)],function(l,n){l(n,1,0,n.context.$implicit)},null)}function e(l){return r._42(0,[(l()(),r._16(0,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),r._40(-1,null,["\n            "])),(l()(),r._11(16777216,null,null,1,null,a)),r._15(3,802816,null,0,R.j,[r.W,r.T,r.v],{ngForOf:[0,"ngForOf"]},null),(l()(),r._40(-1,null,["\n        "]))],function(l,n){l(n,3,0,n.component.courses)},null)}function o(l){return r._42(0,[(l()(),r._16(0,0,null,null,2,"core-empty-box",[["icon","ionic"]],null,null,null,U.b,U.a)),r._15(1,49152,null,0,D.a,[],{message:[0,"message"],icon:[1,"icon"]},null),r._32(131072,j.a,[L.a,r.i])],function(l,n){l(n,1,0,r._41(n,1,0,r._29(n,2).transform("core.courses.nocourses")),"ionic")},null)}function t(l){return r._42(0,[(l()(),r._16(0,0,null,null,12,"ion-header",[],null,null,null,null,null)),r._15(1,16384,null,0,B.a,[M.a,r.p,r.K,[2,E.a]],null,null),(l()(),r._40(-1,null,["\n    "])),(l()(),r._16(3,0,null,null,8,"ion-navbar",[["class","toolbar"],["core-back-button",""]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,S.b,S.a)),r._15(4,49152,null,0,A.a,[H.a,[2,E.a],[2,w.a],M.a,r.p,r.K],null,null),r._15(5,212992,null,0,J.a,[A.a,N.a,L.a,V.a],null,null),(l()(),r._40(-1,3,["\n        "])),(l()(),r._16(7,0,null,3,3,"ion-title",[],null,null,null,q.b,q.a)),r._15(8,49152,null,0,z.a,[M.a,r.p,r.K,[2,G.a],[2,A.a]],null,null),(l()(),r._40(9,0,["",""])),r._32(131072,j.a,[L.a,r.i]),(l()(),r._40(-1,3,["\n    "])),(l()(),r._40(-1,null,["\n"])),(l()(),r._40(-1,null,["\n"])),(l()(),r._16(14,0,null,null,20,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,Q.b,Q.a)),r._15(15,4374528,null,0,X.a,[M.a,N.a,Y.a,r.p,r.K,H.a,Z.a,r.D,[2,E.a],[2,w.a]],null,null),(l()(),r._40(-1,1,["\n    "])),(l()(),r._16(17,0,null,2,6,"ion-refresher",[],[[2,"refresher-active",null],[4,"top",null]],[[null,"ionRefresh"]],function(l,n,u){var a=!0;if("ionRefresh"===n){a=!1!==l.component.refreshCourses(u)&&a}return a},null,null)),r._15(18,212992,null,0,ll.a,[N.a,X.a,r.D,nl.l],{enabled:[0,"enabled"]},{ionRefresh:"ionRefresh"}),(l()(),r._40(-1,null,["\n        "])),(l()(),r._16(20,0,null,null,2,"ion-refresher-content",[],[[1,"state",0]],null,null,ul.b,ul.a)),r._15(21,114688,null,0,al.a,[ll.a,M.a],{pullingText:[0,"pullingText"]},null),r._32(131072,j.a,[L.a,r.i]),(l()(),r._40(-1,null,["\n    "])),(l()(),r._40(-1,1,["\n    "])),(l()(),r._16(25,0,null,1,8,"core-loading",[],null,null,null,el.b,el.a)),r._15(26,638976,null,0,ol.a,[L.a,r.p,V.a,tl.a],{hideUntil:[0,"hideUntil"]},null),(l()(),r._40(-1,0,["\n        "])),(l()(),r._11(16777216,null,0,1,null,e)),r._15(29,16384,null,0,R.k,[r.W,r.T],{ngIf:[0,"ngIf"]},null),(l()(),r._40(-1,0,["\n        "])),(l()(),r._11(16777216,null,0,1,null,o)),r._15(32,16384,null,0,R.k,[r.W,r.T],{ngIf:[0,"ngIf"]},null),(l()(),r._40(-1,0,["\n    "])),(l()(),r._40(-1,1,["\n"])),(l()(),r._40(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,5,0);l(n,18,0,u.coursesLoaded);l(n,21,0,r._19(1,"",r._41(n,21,0,r._29(n,22).transform("core.pulltorefresh")),""));l(n,26,0,u.coursesLoaded);l(n,29,0,u.courses.length>0);l(n,32,0,!u.courses.length)},function(l,n){l(n,3,0,r._29(n,4)._hidden,r._29(n,4)._sbPadding);l(n,9,0,r._41(n,9,0,r._29(n,10).transform("core.courses.availablecourses")));l(n,14,0,r._29(n,15).statusbarPadding,r._29(n,15)._hasRefresher);l(n,17,0,"inactive"!==r._29(n,18).state,r._29(n,18)._top);l(n,20,0,r._29(n,21).r.state)})}Object.defineProperty(n,"__esModule",{value:!0});var r=u(1),i=(u(0),u(10),u(5)),s=u(2),c=u(4),_=u(73),f=function(){function l(l,n,u){this.coursesProvider=l,this.domUtils=n,this.sitesProvider=u,this.courses=[]}return l.prototype.ionViewDidLoad=function(){var l=this;this.loadCourses().finally(function(){l.coursesLoaded=!0})},l.prototype.loadCourses=function(){var l=this,n=this.sitesProvider.getCurrentSite().getSiteHomeId();return this.coursesProvider.getCoursesByField().then(function(u){l.courses=u.filter(function(l){return l.id!=n})}).catch(function(n){l.domUtils.showErrorModalDefault(n,"core.courses.errorloadcourses",!0)})},l.prototype.refreshCourses=function(l){var n=this,u=[];u.push(this.coursesProvider.invalidateUserCourses()),u.push(this.coursesProvider.invalidateCoursesByField()),Promise.all(u).finally(function(){n.loadCourses().finally(function(){l.complete()})})},l}(),d=u(33),p=u(29),b=u(1300),m=function(){return function(){}}(),h=u(1284),g=u(1285),v=u(1286),x=u(1287),y=u(1288),C=u(1289),I=u(1290),P=u(1291),k=u(1292),T=u(1295),W=u(1296),F=u(1297),$=u(1923),K=u(1305),w=u(22),L=u(18),O=u(147),R=u(9),U=u(165),D=u(134),j=u(30),B=u(422),M=u(7),E=u(36),S=u(1293),A=u(193),H=u(27),J=u(637),N=u(15),V=u(13),q=u(1294),z=u(329),G=u(238),Q=u(179),X=u(24),Y=u(26),Z=u(100),ll=u(133),nl=u(37),ul=u(194),al=u(145),el=u(57),ol=u(51),tl=u(3),rl=r._14({encapsulation:2,styles:[],data:{}}),il=r._12("page-core-courses-available-courses",f,function(l){return r._42(0,[(l()(),r._16(0,0,null,null,1,"page-core-courses-available-courses",[],null,null,null,t,rl)),r._15(1,49152,null,0,f,[_.a,c.a,s.a],null,null)],null,null)},{},{},[]),sl=u(19),cl=u(325),_l=u(326),fl=u(328),dl=u(327),pl=u(421),bl=u(636),ml=u(110),hl=u(239);u.d(n,"CoreCoursesAvailableCoursesPageModuleNgFactory",function(){return gl});var gl=r._13(m,[],function(l){return r._25([r._26(512,r.n,r._6,[[8,[h.a,g.a,v.a,x.a,y.a,C.a,I.a,P.a,k.a,T.a,W.a,F.a,il]],[3,r.n],r.B]),r._26(4608,R.m,R.l,[r.x,[2,R.v]]),r._26(4608,sl.x,sl.x,[]),r._26(4608,sl.d,sl.d,[]),r._26(4608,cl.b,cl.a,[]),r._26(4608,_l.a,_l.b,[]),r._26(4608,fl.b,fl.a,[]),r._26(4608,dl.b,dl.a,[]),r._26(4608,L.a,L.a,[pl.a,cl.b,_l.a,fl.b,dl.b,L.b,L.c]),r._26(512,R.b,R.b,[]),r._26(512,sl.v,sl.v,[]),r._26(512,sl.i,sl.i,[]),r._26(512,sl.s,sl.s,[]),r._26(512,bl.a,bl.a,[]),r._26(512,i.a,i.a,[]),r._26(512,p.a,p.a,[]),r._26(512,ml.a,ml.a,[]),r._26(512,d.a,d.a,[]),r._26(512,b.a,b.a,[]),r._26(512,bl.b,bl.b,[]),r._26(512,m,m,[]),r._26(256,L.c,void 0,[]),r._26(256,L.b,void 0,[]),r._26(256,hl.a,f,[])])})},1923:function(l,n,u){"use strict";function a(l){return i._42(0,[(l()(),i._16(0,0,null,null,1,"core-icon",[],null,null,null,s.b,s.a)),i._15(1,114688,null,0,c.a,[i.p],{name:[0,"name"]},null)],function(l,n){l(n,1,0,n.parent.context.$implicit.icon)},null)}function e(l){return i._42(0,[(l()(),i._16(0,0,null,null,0,"img",[["class","core-course-enrollment-img"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){l(n,0,0,n.parent.context.$implicit.img)})}function o(l){return i._42(0,[(l()(),i._16(0,0,null,null,9,"span",[["clear",""],["color","gray"],["icon-only",""],["ion-button",""]],[[1,"aria-label",0]],null,null,_.b,_.a)),i._15(1,1097728,[[2,4]],0,f.a,[[8,""],d.a,i.p,i.K],{color:[0,"color"],clear:[1,"clear"]},null),i._32(131072,p.a,[b.a,i.i]),(l()(),i._40(-1,0,["\n                "])),(l()(),i._11(16777216,null,0,1,null,a)),i._15(5,16384,null,0,m.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,0,["\n                "])),(l()(),i._11(16777216,null,0,1,null,e)),i._15(8,16384,null,0,m.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,0,["\n            "]))],function(l,n){l(n,1,0,"gray","");l(n,5,0,n.context.$implicit.icon);l(n,8,0,n.context.$implicit.img&&!n.context.$implicit.icon)},function(l,n){l(n,0,0,i._41(n,0,0,i._29(n,2).transform(n.context.$implicit.name)))})}function t(l){return i._42(0,[(l()(),i._16(0,0,null,null,4,"span",[],null,null,null,null,null)),(l()(),i._40(-1,null,["\n            "])),(l()(),i._11(16777216,null,null,1,null,o)),i._15(3,802816,null,0,m.j,[i.W,i.T,i.v],{ngForOf:[0,"ngForOf"]},null),(l()(),i._40(-1,null,["\n        "]))],function(l,n){l(n,3,0,n.component.course.enrollment)},null)}function r(l){return i._42(0,[(l()(),i._16(0,0,null,null,19,"a",[["class","item item-block"],["ion-item",""],["text-wrap",""]],[[1,"disabled",0],[1,"detail-none",0],[8,"title",0]],[[null,"click"]],function(l,n,u){var a=!0,e=l.component;if("click"===n){a=!1!==e.openCourse(e.course)&&a}return a},h.b,h.a)),i._15(1,1097728,null,3,g.a,[v.a,d.a,i.p,i.K,[2,x.a]],null,null),i._37(335544320,1,{contentLabel:0}),i._37(603979776,2,{_buttons:1}),i._37(603979776,3,{_icons:1}),i._15(5,16384,null,0,y.a,[],null,null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(7,0,null,0,1,"core-icon",[["fixed-width",""],["item-start",""],["name","fa-graduation-cap"]],null,null,null,s.b,s.a)),i._15(8,114688,null,0,c.a,[i.p],{name:[0,"name"],fixedWidth:[1,"fixedWidth"]},null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(10,0,null,2,2,"h2",[],null,null,null,null,null)),(l()(),i._16(11,0,null,null,1,"core-format-text",[],null,null,null,null,null)),i._15(12,540672,null,0,C.a,[i.p,I.a,P.a,k.a,b.a,T.a,W.a,F.a,$.a,K.a,w.a,L.a,[2,O.a],[2,R.a],[2,U.a],D.a,j.a],{text:[0,"text"]},null),(l()(),i._40(-1,2,["\n    "])),(l()(),i._16(14,0,null,4,4,"div",[["item-end",""]],null,null,null,null,null)),(l()(),i._40(-1,null,["\n        "])),(l()(),i._11(16777216,null,null,1,null,t)),i._15(17,16384,null,0,m.k,[i.W,i.T],{ngIf:[0,"ngIf"]},null),(l()(),i._40(-1,null,["\n    "])),(l()(),i._40(-1,2,["\n"])),(l()(),i._40(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,8,0,"fa-graduation-cap","");l(n,12,0,u.course.displayname||u.course.fullname);l(n,17,0,!u.course.isEnrolled)},function(l,n){var u=n.component;l(n,0,0,0==u.course.visible||null,0==u.course.visible||null,u.course.displayname||u.course.fullname)})}u.d(n,"a",function(){return B}),n.b=r;var i=u(1),s=u(196),c=u(166),_=u(46),f=u(41),d=u(7),p=u(30),b=u(18),m=u(9),h=u(34),g=u(21),v=u(20),x=u(28),y=u(31),C=u(40),I=u(2),P=u(4),k=u(12),T=u(15),W=u(3),F=u(25),$=u(6),K=u(17),w=u(11),L=u(23),O=u(22),R=u(24),U=u(35),D=u(38),j=u(13),B=(u(73),u(147),i._14({encapsulation:2,styles:[],data:{}}))}});