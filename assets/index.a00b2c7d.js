import{b as s}from"./variants.afc1001b.js";import{s as o}from"./theme.5e82eccf.js";var r=(a=>(a.PRIMARY="primary",a.SECONDARY="secondary",a))(r||{});const t=o("button",{border:0,padding:0,"&:focus":{outline:0},"&:hover":{cursor:"pointer"}}),n=o(t,{display:"flex",justifyContent:"center",alignItems:"center",padding:"0 14px",borderRadius:"$1",typo:{weight:"$2"},whiteSpace:"nowrap",overflowWrap:"anywhere"}),e=o(n,{height:"$md",color:"$white",trans:["background-color"],variants:{type:{info:{backgroundColor:"$primary","&:hover":{backgroundColor:"$darkPrimary"}},warn:{backgroundColor:"$warn","&:hover":{backgroundColor:"$darkWarn"}},subtle:{color:"$black",backgroundColor:"inherit",trans:["color"],"&:hover":{color:"#000"}}}},defaultVariants:{type:"info"}}),i=o(n,{height:"$sm",border:"1px solid rgba(61,130,226,0.45)",color:"$primary",backgroundColor:"$white",boxShadow:"0 1px 2px $shadow2",trans:["border-color"],"&:hover":{borderColor:"$primary"}}),c={[r.PRIMARY]:e,[r.SECONDARY]:i},d=s(c,r.PRIMARY),b=Object.assign(d,{Variant:r,Reset:t,Container:n,Primary:e,Secondary:i});export{b as B};
//# sourceMappingURL=index.a00b2c7d.js.map
