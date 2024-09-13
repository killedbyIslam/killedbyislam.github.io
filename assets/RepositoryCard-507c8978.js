import{b as n,c as E,m as h,r as R,u as N,R as d,B as w,o as or,H as ar,_ as er,f as nr,j as l,I as ir,v as f,J as sr,T as _}from"./index-a2d53f71.js";import{S as tr}from"./star-0e44c421.js";function lr(r){return Object.keys(r)}var cr=Object.defineProperty,dr=Object.defineProperties,pr=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,gr=Object.prototype.propertyIsEnumerable,B=(r,o,a)=>o in r?cr(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,j=(r,o)=>{for(var a in o||(o={}))fr.call(o,a)&&B(r,a,o[a]);if(T)for(var a of T(o))gr.call(o,a)&&B(r,a,o[a]);return r},ur=(r,o)=>dr(r,pr(o));const yr=["light","filled","outline","dot","gradient"],z={xs:{fontSize:n(9),height:n(16)},sm:{fontSize:n(10),height:n(18)},md:{fontSize:n(11),height:n(20)},lg:{fontSize:n(13),height:n(26)},xl:{fontSize:n(16),height:n(32)}},vr={xs:n(4),sm:n(4),md:n(6),lg:n(8),xl:n(10)};function _r({theme:r,variant:o,color:a,size:e,gradient:i}){if(!yr.includes(o))return null;if(o==="dot"){const c=h({size:e,sizes:vr});return{backgroundColor:"transparent",color:r.colorScheme==="dark"?r.colors.dark[0]:r.colors.gray[7],border:`${n(1)} solid ${r.colorScheme==="dark"?r.colors.dark[3]:r.colors.gray[3]}`,paddingLeft:`calc(${h({size:e,sizes:r.spacing})} / 1.5 - ${c} / 2)`,"&::before":{content:'""',display:"block",width:c,height:c,borderRadius:c,backgroundColor:r.fn.themeColor(a,r.colorScheme==="dark"?4:r.fn.primaryShade("light"),!0),marginRight:c}}}const t=r.fn.variant({color:a,variant:o,gradient:i});return{background:t.background,color:t.color,border:`${n(o==="gradient"?0:1)} solid ${t.border}`}}var Sr=E((r,{color:o,radius:a,gradient:e,fullWidth:i},{variant:t,size:c})=>{const{fontSize:p,height:s}=c in z?z[c]:z.md;return{leftSection:{marginRight:`calc(${r.spacing.xs} / 2)`},rightSection:{marginLeft:`calc(${r.spacing.xs} / 2)`},inner:{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"},root:j(ur(j(j({},r.fn.focusStyles()),r.fn.fontStyles()),{fontSize:p,height:s,WebkitTapHighlightColor:"transparent",lineHeight:`calc(${s} - ${n(2)})`,textDecoration:"none",padding:`0 calc(${h({size:c,sizes:r.spacing})} / 1.5)`,boxSizing:"border-box",display:i?"flex":"inline-flex",alignItems:"center",justifyContent:"center",width:i?"100%":"auto",textTransform:"uppercase",borderRadius:r.fn.radius(a),fontWeight:700,letterSpacing:n(.25),cursor:"inherit",textOverflow:"ellipsis",overflow:"hidden"}),_r({theme:r,variant:t,color:o,size:c,gradient:e}))}});const br=Sr;var $r=Object.defineProperty,$=Object.getOwnPropertySymbols,G=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,C=(r,o,a)=>o in r?$r(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,mr=(r,o)=>{for(var a in o||(o={}))G.call(o,a)&&C(r,a,o[a]);if($)for(var a of $(o))M.call(o,a)&&C(r,a,o[a]);return r},xr=(r,o)=>{var a={};for(var e in r)G.call(r,e)&&o.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&$)for(var e of $(r))o.indexOf(e)<0&&M.call(r,e)&&(a[e]=r[e]);return a};const wr={variant:"light",size:"md",radius:"xl"},q=R.forwardRef((r,o)=>{const a=N("Badge",wr,r),{className:e,color:i,variant:t,fullWidth:c,children:p,size:s,leftSection:g,rightSection:u,radius:O,gradient:k,classNames:y,styles:P,unstyled:U}=a,Y=xr(a,["className","color","variant","fullWidth","children","size","leftSection","rightSection","radius","gradient","classNames","styles","unstyled"]),{classes:v,cx:rr}=br({fullWidth:c,color:i,radius:O,gradient:k},{classNames:y,styles:P,name:"Badge",unstyled:U,variant:t,size:s});return d.createElement(w,mr({className:rr(v.root,e),ref:o},Y),g&&d.createElement("span",{className:v.leftSection},g),d.createElement("span",{className:v.inner},p),u&&d.createElement("span",{className:v.rightSection},u))});q.displayName="@mantine/core/Badge";const Or=or(q);var kr=Object.defineProperty,Pr=Object.defineProperties,jr=Object.getOwnPropertyDescriptors,H=Object.getOwnPropertySymbols,zr=Object.prototype.hasOwnProperty,hr=Object.prototype.propertyIsEnumerable,I=(r,o,a)=>o in r?kr(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,D=(r,o)=>{for(var a in o||(o={}))zr.call(o,a)&&I(r,a,o[a]);if(H)for(var a of H(o))hr.call(o,a)&&I(r,a,o[a]);return r},W=(r,o)=>Pr(r,jr(o));const Er=ar({"from, to":{opacity:.4},"50%":{opacity:1}});var Rr=E((r,{height:o,width:a,radius:e,circle:i,animate:t})=>({root:{height:n(o),width:i?n(o):n(a),borderRadius:i?n(o):r.fn.radius(e),position:"relative",WebkitTransform:"translateZ(0)"},visible:{overflow:"hidden","&::before":W(D({},r.fn.cover(0)),{content:'""',background:r.colorScheme==="dark"?r.colors.dark[7]:r.white,zIndex:10}),"&::after":W(D({},r.fn.cover(0)),{content:'""',background:r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3],animation:t?`${Er} 1500ms linear infinite`:"none",zIndex:11})}}));const Nr=Rr;var Tr=Object.defineProperty,m=Object.getOwnPropertySymbols,J=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable,L=(r,o,a)=>o in r?Tr(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,Br=(r,o)=>{for(var a in o||(o={}))J.call(o,a)&&L(r,a,o[a]);if(m)for(var a of m(o))X.call(o,a)&&L(r,a,o[a]);return r},Cr=(r,o)=>{var a={};for(var e in r)J.call(r,e)&&o.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&m)for(var e of m(r))o.indexOf(e)<0&&X.call(r,e)&&(a[e]=r[e]);return a};const Hr={height:"auto",width:"100%",visible:!0,animate:!0},Ir=R.forwardRef((r,o)=>{const a=N("Skeleton",Hr,r),{height:e,width:i,visible:t,animate:c,className:p,circle:s,radius:g,unstyled:u,variant:O}=a,k=Cr(a,["height","width","visible","animate","className","circle","radius","unstyled","variant"]),{classes:y,cx:P}=Nr({height:e,width:i,circle:s,radius:g,animate:c},{name:"Skeleton",unstyled:u,variant:O});return d.createElement(w,Br({className:P(y.root,{[y.visible]:t},p),ref:o},k))});Ir.displayName="@mantine/core/Skeleton";var Dr=Object.defineProperty,Wr=Object.defineProperties,Lr=Object.getOwnPropertyDescriptors,V=Object.getOwnPropertySymbols,Vr=Object.prototype.hasOwnProperty,Fr=Object.prototype.propertyIsEnumerable,F=(r,o,a)=>o in r?Dr(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,S=(r,o)=>{for(var a in o||(o={}))Vr.call(o,a)&&F(r,a,o[a]);if(V)for(var a of V(o))Fr.call(o,a)&&F(r,a,o[a]);return r},b=(r,o)=>Wr(r,Lr(o)),Ar=E(r=>{const o=lr(r.headings.sizes).reduce((a,e)=>{const i=r.headings.sizes[e];return a[`& ${e}`]=b(S({fontFamily:r.headings.fontFamily,fontWeight:i.fontWeight||r.headings.fontWeight,marginTop:typeof i.lineHeight=="number"?`calc(${r.spacing.xl} * ${i.lineHeight})`:r.spacing.xl,marginBottom:r.spacing.sm},i),{[r.fn.smallerThan("sm")]:{fontSize:`calc(${n(i.fontSize)} / 1.3)`}}),a},{});return{root:b(S(b(S({},r.fn.fontStyles()),{color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,lineHeight:r.lineHeight,fontSize:r.fontSizes.md,[r.fn.smallerThan("sm")]:{fontSize:r.fontSizes.sm}}),o),{"& img":{maxWidth:"100%",marginBottom:r.spacing.xs},"& p":{marginTop:0,marginBottom:r.spacing.lg},"& mark":{backgroundColor:r.fn.themeColor("yellow",r.colorScheme==="dark"?5:2),color:r.colorScheme==="dark"?r.colors.dark[9]:"inherit"},"& hr":{marginTop:r.spacing.md,marginBottom:r.spacing.sm,borderBottom:0,borderLeft:0,borderRight:0,borderTop:`${n(1)} dashed ${r.colors.gray[r.colorScheme==="dark"?4:6]}`},"& a":b(S({},r.fn.focusStyles()),{color:r.colors[r.primaryColor][r.colorScheme==="dark"?4:6],textDecoration:"none","&:hover":{textDecoration:"underline"}}),"& pre":{padding:r.spacing.xs,lineHeight:r.lineHeight,margin:0,marginTop:r.spacing.md,marginBottom:r.spacing.md,overflowX:"auto",fontFamily:r.fontFamilyMonospace,fontSize:r.fontSizes.sm,borderRadius:r.radius.sm,backgroundColor:r.colorScheme==="dark"?r.colors.dark[8]:r.colors.gray[0],"& code":{backgroundColor:"transparent",padding:0,borderRadius:0,color:"inherit",border:0}},"& code":{lineHeight:r.lineHeight,padding:`${n(1)} ${n(5)}`,borderRadius:r.radius.sm,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,backgroundColor:r.colorScheme==="dark"?r.colors.dark[9]:r.colors.gray[0],fontFamily:r.fontFamilyMonospace,fontSize:r.fontSizes.xs,border:`${n(1)} solid ${r.colorScheme==="dark"?r.colors.dark[9]:r.colors.gray[3]}`},"& ul, & ol":{marginBottom:r.spacing.md,paddingLeft:38,"& li":{marginTop:r.spacing.xs}},"& table":{width:"100%",borderCollapse:"collapse",captionSide:"bottom",marginBottom:r.spacing.md,"& caption":{marginTop:r.spacing.xs,fontSize:r.fontSizes.sm,color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[6]},"& th":{textAlign:"left",fontWeight:"bold",color:r.colorScheme==="dark"?r.colors.dark[0]:r.colors.gray[7],fontSize:14,padding:`${n(7)} ${n(10)}`},"& thead th":{borderBottom:`${n(1)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`},"& tfoot th":{borderTop:`${n(1)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`},"& td":{padding:`${n(7)} ${n(10)}`,borderBottom:`${n(1)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`,fontSize:14},"& tr:last-of-type td":{borderBottom:"none"}},"& blockquote":{fontSize:r.fontSizes.lg,lineHeight:r.lineHeight,margin:`${r.spacing.md} 0`,borderTopRightRadius:r.radius.sm,borderBottomRightRadius:r.radius.sm,padding:`${r.spacing.md} ${r.spacing.lg}`,color:r.colorScheme==="dark"?r.colors.dark[0]:r.black,borderLeft:`${n(6)} solid ${r.colorScheme==="dark"?r.colors.dark[4]:r.colors.gray[3]}`,"& cite":{display:"block",fontSize:r.fontSizes.sm,marginTop:r.spacing.xs,color:r.colorScheme==="dark"?r.colors.dark[2]:r.colors.gray[6],overflow:"hidden",textOverflow:"ellipsis"}}})}});const Gr=Ar;var Mr=Object.defineProperty,x=Object.getOwnPropertySymbols,Z=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable,A=(r,o,a)=>o in r?Mr(r,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[o]=a,qr=(r,o)=>{for(var a in o||(o={}))Z.call(o,a)&&A(r,a,o[a]);if(x)for(var a of x(o))K.call(o,a)&&A(r,a,o[a]);return r},Jr=(r,o)=>{var a={};for(var e in r)Z.call(r,e)&&o.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&x)for(var e of x(r))o.indexOf(e)<0&&K.call(r,e)&&(a[e]=r[e]);return a};const Q=R.forwardRef((r,o)=>{const a=N("TypographyStylesProvider",{},r),{className:e,unstyled:i,variant:t}=a,c=Jr(a,["className","unstyled","variant"]),{classes:p,cx:s}=Gr(null,{name:"TypographyStylesProvider",unstyled:i,variant:t});return d.createElement(w,qr({className:s(p.root,e),ref:o},c))});Q.displayName="@mantine/core/TypographyStylesProvider";var Xr=["size","color"];function Zr(r){var o=r.size,a=o===void 0?24:o,e=r.color,i=e===void 0?"currentColor":e,t=er(r,Xr);return d.createElement("svg",nr({xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-git-fork",width:a,height:a,viewBox:"0 0 24 24",stroke:i,strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},t),d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("circle",{cx:"12",cy:"18",r:"2"}),d.createElement("circle",{cx:"7",cy:"6",r:"2"}),d.createElement("circle",{cx:"17",cy:"6",r:"2"}),d.createElement("path",{d:"M7 8v2a2 2 0 0 0 2 2h6a2 2 0 0 0 2 -2v-2"}),d.createElement("line",{x1:"12",y1:"12",x2:"12",y2:"16"}))}const Kr=r=>{if(r=r.toLowerCase(),r==="rails"||r==="ruby")return"red";if(r==="react")return"cyan";if(r==="javascript")return"yellow";if(r==="typescript")return"blue";if(r==="css")return"grape";if(r==="python")return"#4584b6";if(r==="php")return"grape"};function Yr({title:r,description:o,url:a,stargazers_count:e,forks_count:i,language:t,created_at:c}){const p=(s,g)=>{window.open(g),s.stopPropagation()};return l.jsx(ir.div,{whileHover:{y:-5},children:l.jsx(w,{sx:s=>({padding:s.spacing.md,maxHeight:175,minHeight:150,borderRadius:25,border:`1px solid ${s.colorScheme==="dark"?s.colors.dark[4]:s.colors.gray[3]}`,boxShadow:`${s.shadows.md} !important`,backgroundColor:s.colorScheme==="dark"?s.colors.dark[7]:s.colors.white[0]}),onClick:s=>p(s,a),children:l.jsxs(f,{children:[l.jsxs(f,{children:[l.jsxs(f,{children:[l.jsx(sr,{}),l.jsx(_,{size:"md",children:r})]}),l.jsxs(f,{position:"apart",children:[l.jsxs(f,{children:[i&&l.jsxs(f,{children:[l.jsx(Zr,{size:18,color:"red"}),i]}),l.jsxs(f,{children:[l.jsx(tr,{size:18,color:"orange"}),e]})]}),t&&l.jsx(Or,{color:Kr(t),size:"md",children:l.jsx(_,{size:"xs",children:t})})]})]}),l.jsx(_,{lineClamp:2,children:l.jsx(Q,{children:l.jsx(_,{size:"xs",children:o})})})]})})})}export{Yr as R,Ir as S};