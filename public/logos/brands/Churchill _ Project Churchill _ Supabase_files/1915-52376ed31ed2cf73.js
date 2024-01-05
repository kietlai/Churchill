"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1915],{93224:function(e,n,t){t.d(n,{G:function(){return useFormContext},o:function(){return FormContextProvider}});var a=t(52322),i=t(2784);let l=(0,i.createContext)({formContextOnChange:null,values:null,errors:null,handleBlur:null,touched:null,fieldLevelValidation:null}),FormContextProvider=e=>{let{formContextOnChange:n,values:t,errors:i,handleBlur:s,touched:o,fieldLevelValidation:r}=e;return(0,a.jsx)(l.Provider,{value:{formContextOnChange:n,values:t,errors:i,handleBlur:s,touched:o,fieldLevelValidation:r},children:e.children})},useFormContext=()=>{let e=(0,i.useContext)(l);if(void 0===e)throw Error("useFormContextOnChange must be used within a FormContextProvider.");return e}},39195:function(e,n,t){var a=t(52322);t(2784);var i=t(3552),l=t(97265);n.Z=function(e){return(0,a.jsx)(l.Z,{icon:i.Z,...e})}},38149:function(e,n,t){var a=t(52322);t(2784);var i=t(35807),l=t(97265);n.Z=function(e){return(0,a.jsx)(l.Z,{icon:i.Z,...e})}},31915:function(e,n,t){t.d(n,{Z:function(){return p}});var a=t(52322),i=t(2784),l=t(94580),s=t(38149),o=t(41375),r=t(59208),u=t(4120),c=t(4220),d=t(53009),h=t(93224);function Input(e){let{autoComplete:n,autoFocus:t,className:p,inputClassName:f,iconContainerClassName:x,copy:v,defaultValue:m,descriptionText:_,disabled:b,error:j,icon:C,id:y="",name:z="",inputRef:N,label:g,afterLabel:Z,beforeLabel:F,labelOptional:I,layout:w,onChange:L,onBlur:T,onCopy:k,placeholder:E,type:O="text",value:B,style:P,reveal:S=!1,actions:G,size:V="medium",borderless:A=!1,validation:R,...W}=e,[q,D]=(0,i.useState)("Copy"),[H,J]=(0,i.useState)(!0),K=(0,d.Z)("input"),{formContextOnChange:M,values:Q,errors:U,handleBlur:X,touched:Y,fieldLevelValidation:$}=(0,h.G)();Q&&!B&&(B=Q[y||z]),j||(U&&!j&&(j=U[y||z]),j=Y&&Y[y]?j:void 0),(0,i.useEffect)(()=>{R&&$(y,R(B))},[]);let ee=["peer/input",K.base];return j&&ee.push(K.variants.error),j||ee.push(K.variants.standard),V&&ee.push(K.size[V]),C&&ee.push(K.with_icon),b&&ee.push(K.disabled),f&&ee.push(f),(0,a.jsx)(o.l,{label:g,afterLabel:Z,beforeLabel:F,labelOptional:I,layout:w,id:y,error:j,descriptionText:_,style:P,size:V,className:p,children:(0,a.jsxs)("div",{className:K.container,children:[(0,a.jsx)("input",{autoComplete:n,autoFocus:t,defaultValue:m,disabled:b,id:y,name:z,onChange:function(e){L&&L(e),M&&M(e),R&&$(y,R(e.target.value))},onBlur:function(e){X&&setTimeout(()=>{X(e)},100),T&&T(e)},onCopy:k,placeholder:E,ref:N,type:O,value:S&&H?"**** **** **** ****":B,className:(0,c.cn)(ee),...W}),C&&(0,a.jsx)(u.Z,{icon:C,className:x}),v||j||G?(0,a.jsxs)("div",{className:K.actions_container,children:[j&&(0,a.jsx)(r.Z,{size:V}),v&&!(S&&H)?(0,a.jsx)(l.z,{size:"tiny",type:"default",icon:(0,a.jsx)(s.Z,{}),onClick:()=>{var e,n;return e=B,void(null===(n=navigator.clipboard.writeText(e))||void 0===n||n.then(function(){D("Copied"),setTimeout(function(){D("Copy")},3e3),null==k||k()},function(){D("Failed to copy")}))},children:q}):null,S&&H?(0,a.jsx)(l.z,{size:"tiny",type:"default",onClick:function(){J(!1)},children:"Reveal"}):null,G&&G]}):null]})})}Input.TextArea=function(e){let{className:n,textAreaClassName:t,descriptionText:u,disabled:c,error:p,icon:f,id:x="",name:v="",label:m,afterLabel:_,beforeLabel:b,labelOptional:j,layout:C,onChange:y,onBlur:z,placeholder:N,value:g,style:Z,rows:F=4,limit:I,size:w,borderless:L=!1,validation:T,copy:k=!1,onCopy:E,actions:O,...B}=e,[P,S]=(0,i.useState)(0),[G,V]=(0,i.useState)("Copy"),{formContextOnChange:A,values:R,errors:W,handleBlur:q,touched:D,fieldLevelValidation:H}=(0,h.G)();R&&!g&&(g=R[x||v]),p||(W&&!p&&(p=W[x||v]),p=D&&D[x||v]?p:void 0),(0,i.useEffect)(()=>{T&&H(x,T(g))},[]);let J=(0,d.Z)("input"),K=[J.base];return p&&K.push(J.variants.error),p||K.push(J.variants.standard),f&&K.push(J.with_icon),w&&K.push(J.size[w]),c&&K.push(J.disabled),t&&K.push(t),(0,a.jsx)(o.l,{className:n,label:m,afterLabel:_,beforeLabel:b,labelOptional:j,layout:C,id:x,error:p,descriptionText:u,style:Z,size:w,children:(0,a.jsxs)("div",{className:J.container,children:[(0,a.jsx)("textarea",{disabled:c,id:x,name:v,rows:F,cols:100,placeholder:N,onChange:function(e){S(e.target.value.length),y&&y(e),A&&A(e),T&&H(x,T(e.target.value))},onBlur:function(e){q&&setTimeout(()=>{q(e)},100),z&&z(e)},onCopy:E,value:g,className:K.join(" "),maxLength:I,...B}),k||p||O?(0,a.jsx)("div",{className:J.textarea_actions_container,children:(0,a.jsxs)("div",{className:J.textarea_actions_container_items,children:[p&&(0,a.jsx)(r.Z,{size:w}),k&&(0,a.jsx)(l.z,{size:"tiny",type:"default",onClick:()=>(function(e){navigator.clipboard.writeText(e).then(function(){V("Copied"),setTimeout(function(){V("Copy")},3e3),null==E||E()},function(){V("Failed to copy")})})(g),icon:(0,a.jsx)(s.Z,{}),children:G}),O&&O]})}):null]})})};var p=Input},41375:function(e,n,t){t.d(n,{l:function(){return FormLayout}});var a=t(52322);t(2784);var i=t(76035);function FormLayout(e){let{align:n="left",children:t,className:l,descriptionText:s,error:o,id:r,label:u,labelOptional:c,layout:d="vertical",style:h,labelLayout:p,responsive:f=!0,size:x="medium",beforeLabel:v,afterLabel:m,nonBoxInput:_=!u}=e,b=i.Z.form_layout,j="flex"===d,C=[];C.push(b.size[x]);let y=[],z=[];"horizontal"===d||p||j?"horizontal"===p?y.push(b.labels_horizontal_layout):y.push(b.labels_vertical_layout):y.push(b.labels_horizontal_layout),"horizontal"!==d?z.push(b.data_input_horizontal_layout):(z.push(b.data_input_vertical_layout),"right"===n&&z.push(b.data_input_vertical_layout__align_right)),j?(C.push(b.flex[n].base),"left"===n&&(y.push(b.flex.left.labels),z.push(b.flex.left.data_input)),"right"===n&&(y.push(b.flex.right.labels),z.push(b.flex.right.data_input))):C.push(b.container,f?b.responsive:b.non_responsive),l&&C.push(l);let N=!!(u||v||m),g=(0,a.jsx)("p",{"data-state":o?"show":"hide",className:[b.error.base,b.error.size[x]].join(" "),children:o}),Z=s&&(0,a.jsx)("div",{className:[b.description.base,b.description.size[x]].join(" "),id:r+"-description",children:s});return(0,a.jsxs)("div",{className:C.join(" "),children:[j&&(0,a.jsx)("div",{className:b.flex[n].content,children:t}),N||c||"horizontal"===d?(0,a.jsxs)("div",{className:y.join(" "),children:[N&&(0,a.jsxs)("label",{className:[b.label.base,b.label.size[x]].join(" "),htmlFor:r,children:[v&&(0,a.jsx)("span",{className:[b.label_before.base,b.label_before.size[x]].join(" "),id:r+"-before",children:v}),u,m&&(0,a.jsx)("span",{className:[b.label_after.base,b.label_after.size[x]].join(" "),id:r+"-after",children:m})]}),c&&(0,a.jsx)("span",{className:[b.label_optional.base,b.label_optional.size[x]].join(" "),id:r+"-optional",children:c}),j&&(0,a.jsxs)(a.Fragment,{children:[Z,g]})]}):null,!j&&(0,a.jsx)("div",{className:z.join(" "),style:h,children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:_&&u&&"vertical"===d?b.non_box_data_input_spacing_vertical:_&&u&&"horizontal"===d?b.non_box_data_input_spacing_horizontal:"",children:t}),g,Z]})})]})}},59208:function(e,n,t){t.d(n,{Z:function(){return InputErrorIcon}});var a=t(52322);t(2784);var i=t(53009),l=t(39195);function InputErrorIcon(e){let{style:n,size:t}=e,s=(0,i.Z)("inputErrorIcon");return(0,a.jsx)("div",{className:s.base,style:n,children:(0,a.jsx)(l.Z,{size:t,strokeWidth:2,className:""})})}},4120:function(e,n,t){t.d(n,{Z:function(){return InputIconContainer}});var a=t(52322);t(2784);var i=t(53009),l=t(4220);function InputIconContainer(e){let{icon:n,className:t}=e,s=(0,i.Z)("inputIconContainer");return(0,a.jsx)("div",{className:(0,l.cn)(s.base,t),children:n})}}}]);