
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as Ce}from"./index-ebfdc92e.js";import{A as b}from"./chatgpt-8dc0601b.js";import{_ as xe}from"./index.vue_vue_type_script_setup_true_lang-5ea5bda8.js";import{d as Be,r as p,Q as I,B as U,x as we,o as V,c as Z,e,f as t,k as c,t as k,b as s,U as S,w as E,I as R,a as $,R as Ve,S as ke,E as D,W as ee,h as n,X as Te,q as te}from"./index-4432f6f4.js";const Pe=$("div",{style:{width:"250px"}}," 关闭当前分类、用户端将不再展示！ ",-1),qe={class:"flex justify-end mr-5"},Ie=$("div",{style:{width:"250px"}}," 关闭当前子项、用户端将不再展示！ ",-1),Ue={class:"flex justify-end mr-5"},De=Be({__name:"chatPre",setup($e){const T=p(!1),P=p(!1),C=p(),le=p(),_=p(0),v=p(0),r=I({status:!0,name:"",order:100,icon:""}),m=I({typeId:"",status:!0,title:"",order:100,prompt:""}),ae=I({status:[{required:!0,message:"请选择开启状态",trigger:"change"}],name:[{required:!0,message:"请填写分类名称",trigger:"blur"}],icon:[{required:!0,message:"请填写分类图标",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}]}),oe=I({typeId:[{required:!0,message:"请选择分类",trigger:"change"}],status:[{required:!0,message:"请选择开启状态",trigger:"change"}],title:[{required:!0,message:"请填写标题名称",trigger:"blur"}],order:[{required:!0,message:"请填写排序id 越大越靠前",trigger:"blur"}],prompt:[{required:!1,message:"请填写快捷描述语",trigger:"blur"}]});function ne(o){_.value=0,o==null||o.resetFields()}function se(o){v.value=0,o==null||o.resetFields()}const g=p(!1),y=p(!1),x=p("chatBoxType"),re=U(()=>_.value?"更新分类":"新增分类"),de=U(()=>v.value?"更新子项":"新增子项"),A=U(()=>_.value?"确认更新":"确认新增"),z=p([]),F=p([]);async function q(){try{T.value=!0;const o=await b.queryChatPreTypes();T.value=!1,z.value=o.data}catch{T.value=!1}}async function N(){try{P.value=!0;const o=await b.queryChatPres();P.value=!1,F.value=o.data}catch{P.value=!1}}async function ie(o){const{id:l}=o;await b.delChatPreType({id:l}),D({type:"success",message:"操作完成！"}),q()}async function ue(o){const{id:l}=o;await b.delChatPre({id:l}),D({type:"success",message:"操作完成！"}),N()}function pe(o){_.value=o.id;const{status:l,name:d,icon:B,order:h}=o;ee(()=>{Object.assign(r,{status:l,name:d,icon:B,order:h})}),g.value=!0}function ce(o){v.value=o.id;const{title:l,order:d,status:B,typeId:h,prompt:i}=o;ee(()=>{Object.assign(m,{title:l,order:d,status:B,typeId:h,prompt:i})}),y.value=!0}function me(o){o==="chatBoxType"?q():N()}async function fe(o){o==null||o.validate(async l=>{if(l){const d=JSON.parse(JSON.stringify(r));delete d.id,_.value&&(d.id=_.value),await b.setChatPreType(d),D({type:"success",message:"操作成功！"}),_.value=0,g.value=!1,q()}})}async function _e(o){o==null||o.validate(async l=>{if(l){const d=JSON.parse(JSON.stringify(m));delete d.id,v.value&&(d.id=v.value),await b.setChatPre(d),D({type:"success",message:"操作成功！"}),v.value=0,y.value=!1,N()}})}const ge=U(()=>x.value==="chatBoxType"?"添加快问分类":"添加预设问题");function ye(){x.value==="chatBoxType"?g.value=!0:y.value=!0}return we(()=>{q()}),(o,l)=>{const d=n("el-alert"),B=n("Plus"),h=n("el-icon"),i=n("el-button"),j=Ce,J=n("el-tag"),u=n("el-table-column"),Q=n("el-popconfirm"),M=n("el-table"),L=n("el-tab-pane"),he=n("el-tabs"),W=n("el-switch"),X=n("QuestionFilled"),G=n("el-tooltip"),f=n("el-form-item"),w=n("el-input"),H=n("el-form"),K=n("el-dialog"),ve=n("el-option"),be=n("el-select"),Y=Te("loading");return V(),Z("div",null,[e(j,{class:"header"},{default:t(()=>[e(d,{"show-icon":"",title:"快问说明",description:"此处设置用于对话窗口的左下角、点击可以快速打开我们创建的分类、每个分类下我们可以预设一些提问、只需要在提问的地方 补充其他内容即可完成快速提问！",type:"success"}),e(i,{type:"success",class:"ml-3",size:"large",onClick:ye},{default:t(()=>[c(k(s(ge))+" ",1),e(h,{class:"ml-3"},{default:t(()=>[e(B)]),_:1})]),_:1})]),_:1}),e(j,{style:{width:"100%"}},{default:t(()=>[e(he,{type:"border-card",modelValue:s(x),"onUpdate:modelValue":l[0]||(l[0]=a=>S(x)?x.value=a:null),onTabChange:me},{default:t(()=>[e(L,{name:"chatBoxType",label:"分类管理"},{default:t(()=>[E((V(),R(M,{border:"",data:s(z),style:{width:"100%"},size:"large"},{default:t(()=>[e(u,{prop:"status",align:"center",label:"分类状态"},{default:t(a=>[e(J,{type:a.row.status?"success":"danger"},{default:t(()=>[c(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"name",label:"分类名称"}),e(u,{prop:"order",label:"排序ID"}),e(u,{prop:"icon",label:"分类图标"},{default:t(a=>[e(xe,{style:{"font-size":"24px"},icon:a.row.icon},null,8,["icon"])]),_:1}),e(u,{fixed:"right",label:"操作",align:"center",width:"180"},{default:t(a=>[e(i,{link:"",type:"primary",size:"small",onClick:O=>pe(a.row)},{default:t(()=>[c(" 变更 ")]),_:2},1032,["onClick"]),e(Q,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:O=>ie(a.row)},{reference:t(()=>[e(i,{link:"",type:"danger",size:"small"},{default:t(()=>[c(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,s(T)]])]),_:1}),e(L,{name:"chatBox",label:"子类管理"},{default:t(()=>[E((V(),R(M,{border:"",data:s(F),style:{width:"100%"},size:"large"},{default:t(()=>[e(u,{prop:"typeInfo.name",label:"所属分类",width:"120",align:"center"}),e(u,{prop:"status",label:"开启状态",width:"120",align:"center"},{default:t(a=>[e(J,{type:a.row.status?"success":"danger"},{default:t(()=>[c(k(a.row.status?"开启中":"已关闭"),1)]),_:2},1032,["type"])]),_:1}),e(u,{prop:"title",label:"标题名称",width:"180",align:"center"}),e(u,{prop:"order",label:"排序ID",width:"90",align:"center"}),e(u,{prop:"prompt",label:"快捷预问题"}),e(u,{fixed:"right",label:"操作",align:"center",width:"180"},{default:t(a=>[e(i,{link:"",type:"primary",size:"small",onClick:O=>ce(a.row)},{default:t(()=>[c(" 变更 ")]),_:2},1032,["onClick"]),e(Q,{title:"确认删除此提示词么?",width:"180","icon-color":"red",onConfirm:O=>ue(a.row)},{reference:t(()=>[e(i,{link:"",type:"danger",size:"small"},{default:t(()=>[c(" 删除分类 ")]),_:1})]),_:2},1032,["onConfirm"])]),_:1})]),_:1},8,["data"])),[[Y,s(P)]])]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(K,{modelValue:s(g),"onUpdate:modelValue":l[6]||(l[6]=a=>S(g)?g.value=a:null),"close-on-click-modal":!1,title:s(re),width:"770",onClose:l[7]||(l[7]=a=>ne(s(C)))},{footer:t(()=>[$("span",qe,[e(i,{onClick:l[4]||(l[4]=a=>g.value=!1)},{default:t(()=>[c("取消")]),_:1}),e(i,{type:"primary",onClick:l[5]||(l[5]=a=>fe(s(C)))},{default:t(()=>[c(k(s(A)),1)]),_:1})])]),default:t(()=>[e(H,{ref_key:"formPackageChatBoxTypeRef",ref:C,"label-position":"right","label-width":"120px",model:r,rules:ae},{default:t(()=>[e(f,{label:"分类启用状态",prop:"status"},{default:t(()=>[e(W,{modelValue:r.status,"onUpdate:modelValue":l[1]||(l[1]=a=>r.status=a)},null,8,["modelValue"]),e(G,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Pe]),default:t(()=>[e(h,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(X)]),_:1})]),_:1})]),_:1}),e(f,{label:"排序Order",prop:"order"},{default:t(()=>[e(w,{modelValue:r.order,"onUpdate:modelValue":l[2]||(l[2]=a=>r.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(f,{label:"分类名称",prop:"name"},{default:t(()=>[e(w,{modelValue:r.name,"onUpdate:modelValue":l[3]||(l[3]=a=>r.name=a),placeholder:"请填写提示词名称（用户看到的名称）"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"]),e(K,{modelValue:s(y),"onUpdate:modelValue":l[15]||(l[15]=a=>S(y)?y.value=a:null),"close-on-click-modal":!1,title:s(de),width:"770",onClose:l[16]||(l[16]=a=>se(s(le)))},{footer:t(()=>[$("span",Ue,[e(i,{onClick:l[13]||(l[13]=a=>y.value=!1)},{default:t(()=>[c("取消")]),_:1}),e(i,{type:"primary",onClick:l[14]||(l[14]=a=>_e(s(C)))},{default:t(()=>[c(k(s(A)),1)]),_:1})])]),default:t(()=>[e(H,{ref_key:"formPackageChatBoxTypeRef",ref:C,"label-position":"right","label-width":"120px",model:m,rules:oe},{default:t(()=>[e(f,{label:"启用状态",prop:"status"},{default:t(()=>[e(W,{modelValue:r.status,"onUpdate:modelValue":l[8]||(l[8]=a=>r.status=a)},null,8,["modelValue"]),e(G,{class:"box-item",effect:"dark",placement:"right"},{content:t(()=>[Ie]),default:t(()=>[e(h,{class:"ml-3 cursor-pointer"},{default:t(()=>[e(X)]),_:1})]),_:1})]),_:1}),e(f,{label:"选择分类",prop:"typeId"},{default:t(()=>[e(be,{modelValue:m.typeId,"onUpdate:modelValue":l[9]||(l[9]=a=>m.typeId=a),placeholder:"请选择分类状态",clearable:"",style:{width:"100%"}},{default:t(()=>[(V(!0),Z(Ve,null,ke(s(z),a=>(V(),R(ve,{key:a.id,label:a.name,value:a.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),e(f,{label:"标题名称",prop:"title"},{default:t(()=>[e(w,{modelValue:m.title,"onUpdate:modelValue":l[10]||(l[10]=a=>m.title=a),placeholder:"请填写子项标题名称"},null,8,["modelValue"])]),_:1}),e(f,{label:"排序Order",prop:"order"},{default:t(()=>[e(w,{modelValue:r.order,"onUpdate:modelValue":l[11]||(l[11]=a=>r.order=a),placeholder:"排序id越大越靠前"},null,8,["modelValue"])]),_:1}),e(f,{label:"预设问题",prop:"prompt"},{default:t(()=>[e(w,{type:"textarea",rows:5,modelValue:m.prompt,"onUpdate:modelValue":l[12]||(l[12]=a=>m.prompt=a),placeholder:"请填写预设问题、如果设置了应用、那么点击优先跳转应用、如果未设置、点击则会直接在对话中发当前填写预设内容"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue","title"])])}}});typeof te=="function"&&te(De);export{De as default};
