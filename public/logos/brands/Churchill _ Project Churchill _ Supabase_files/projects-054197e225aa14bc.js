(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3327],{79606:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects",function(){return n(14167)}])},14167:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return _}});var t=n(52322),a=n(5632),r=n(2784),c=n(68737),i=n(51373),l=n(89465),o=n(47095),d=n(97036),u=n(94580),h=n(39097),j=n.n(h),p=n(60674),x=n(22634),Dropdown_OrganizationDropdown=e=>{let{organizations:s=o.Z6}=e,n=(0,a.useRouter)(),r=(0,l.N3)("organizations:create"),{isSuccess:c}=(0,x.tl)();return(0,t.jsxs)("div",{className:"flex gap-4",children:[(0,t.jsxs)(d.h_,{children:[(0,t.jsx)(d.$F,{asChild:!0,children:(0,t.jsx)(u.z,{type:"primary",children:(0,t.jsx)("span",{children:"New project"})})}),(0,t.jsx)(d.AW,{side:"bottom",align:"center",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(d.Ju,{children:"Choose organization"}),s.sort((e,s)=>e.name.localeCompare(s.name)).map(e=>(0,t.jsx)(d.Xi,{onClick:()=>n.push("/new/".concat(e.slug)),children:e.name},e.slug))]})})]}),p.Qy&&r&&c&&0!==s.length&&(0,t.jsx)(u.z,{type:"default",asChild:!0,children:(0,t.jsx)(j(),{href:"/new",className:"flex items-center gap-2 w-full",children:"New organization"})})]})},g=n(7503),m=n(67950),f=n(29659),N=n(46732);let ProjectsPage=()=>{let e=(0,a.useRouter)(),{data:s,isError:n,isSuccess:i}=(0,x.tl)();(0,f.sc)();let o=(0,l.N3)("projects:create"),d=(0,l.P5)("navigationLayoutV2");return(0,r.useEffect)(()=>{if(d&&i){let n=localStorage.getItem(N.dA.RECENTLY_VISITED_ORGANIZATION),t=s.some(e=>e.slug===n);0===s.length?e.push("/new"):n&&t?e.push("/org/".concat(n)):e.push("/org/".concat(s[0].slug))}},[d,i,!0]),(0,t.jsxs)(t.Fragment,{children:[n&&(0,t.jsx)("div",{className:"py-4 px-5 ".concat(d?"h-full flex items-center justify-center":""),children:(0,t.jsx)(g.Z,{subject:"Failed to retrieve organizations"})}),d&&(0,t.jsx)("div",{className:"flex items-center justify-center h-full",children:(0,t.jsx)(m.Z,{})}),!d&&(0,t.jsxs)("div",{className:"py-4 px-5",children:[N.Qy&&o&&i&&0!==s.length&&(0,t.jsx)("div",{className:"my-2",children:(0,t.jsx)("div",{className:"flex",children:(0,t.jsx)("div",{className:"",children:(0,t.jsx)(Dropdown_OrganizationDropdown,{organizations:s})})})}),(0,t.jsx)("div",{className:"my-8 space-y-8",children:(0,t.jsx)(c.Z,{})})]})]})};ProjectsPage.getLayout=e=>(0,t.jsx)(i.p0,{title:"Dashboard",breadcrumbs:[{key:"supabase-projects",label:"Projects"}],children:e});var _=ProjectsPage}},function(e){e.O(0,[1715,1187,6653,3844,8421,9362,4796,806,2591,1915,4079,4964,8211,452,8108,8737,9774,2888,179],function(){return e(e.s=79606)}),_N_E=e.O()}]);