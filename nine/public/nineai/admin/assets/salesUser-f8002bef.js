
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as J}from"./index-9f0acf5e.js";import{A as S}from"./sales-8b6e84aa.js";import{d as K,r as d,Q as I,x as W,o as U,c as B,e as t,f as l,R as Y,S as Z,b as p,k as s,w as E,I as q,a as ee,t as m,U as te,E as le,P as ae,h as n,X as oe,q as M}from"./index-534a2c19.js";const ne=["src"],re=K({__name:"salesUser",setup(se){const C=d(),N=d(0),V=d(!1),c=d(!1),x=d(),z=d([]),i=I({performanceRatio:0,salesOutletName:"",userId:0}),r=I({userId:"",salesOutletName:"",performanceRatio:null,page:1,size:10}),D=I({performanceRatio:[{required:!0,message:"请填写佣金比例",trigger:"blur"}],salesOutletName:[{required:!0,message:"请填写自定义分销名称",trigger:"blur"}]}),O=d([]);async function f(){try{V.value=!0;const o=await S.querySalesUserList(r);V.value=!1;const{rows:a,count:y}=o.data;N.value=y,O.value=a}catch{V.value=!1}}function L(o){o==null||o.resetFields(),f()}async function $(o){o==null||o.validate(async a=>{a&&(await S.updateSalesUser(i),le.success("修改信息成功！"),c.value=!1,f())})}async function j(o){const{userId:a,performanceRatio:y,salesOutletName:k}=o;i.performanceRatio=y,i.salesOutletName=k,c.value=!0,i.userId=a}async function F(o){const a=await ae.queryAllUser({size:30,keyword:o});z.value=a.data.rows}return W(()=>{f()}),(o,a)=>{const y=n("el-option"),k=n("el-select"),_=n("el-form-item"),R=n("el-input"),b=n("el-button"),A=n("el-form"),h=J,P=n("el-alert"),u=n("el-table-column"),g=n("el-tag"),Q=n("el-table"),T=n("el-pagination"),X=n("el-row"),G=n("el-dialog"),H=oe("loading");return U(),B("div",null,[t(h,null,{default:l(()=>[t(A,{ref_key:"formRef",ref:C,inline:!0,model:r},{default:l(()=>[t(_,{label:"用户名称",prop:"userId"},{default:l(()=>[t(k,{modelValue:r.userId,"onUpdate:modelValue":a[0]||(a[0]=e=>r.userId=e),filterable:"",clearable:"",remote:"","reserve-keyword":"",placeholder:"昵称|手机号|邮箱[模糊搜索]","remote-show-suffix":"","remote-method":F},{default:l(()=>[(U(!0),B(Y,null,Z(p(z),e=>(U(),q(y,{key:e.id,label:e.username,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(_,{label:"分销人代号",prop:"salesOutletName"},{default:l(()=>[t(R,{modelValue:r.salesOutletName,"onUpdate:modelValue":a[1]||(a[1]=e=>r.salesOutletName=e),placeholder:"填写分销人代号搜索"},null,8,["modelValue"])]),_:1}),t(_,{label:"返佣比例",prop:"performanceRatio"},{default:l(()=>[t(R,{modelValue:r.performanceRatio,"onUpdate:modelValue":a[2]||(a[2]=e=>r.performanceRatio=e),placeholder:"填写分销人返佣比例"},null,8,["modelValue"])]),_:1}),t(_,null,{default:l(()=>[t(b,{type:"primary",onClick:f},{default:l(()=>[s(" 查询 ")]),_:1}),t(b,{onClick:a[3]||(a[3]=e=>L(p(C)))},{default:l(()=>[s(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(h,null,{default:l(()=>[t(P,{"show-icon":"",title:"佣金账户设置说明",description:"佣金设置实时生效、佣金比例用户用户邀请的成员下单后的结算比例、分销人代号会在分销页面展示！",type:"success"})]),_:1}),t(h,{style:{width:"100%"}},{default:l(()=>[E((U(),q(Q,{border:"",data:p(O),style:{width:"100%"},size:"large"},{default:l(()=>[t(u,{prop:"userInfo.avatar",label:"头像",width:"120"},{default:l(e=>{var w,v;return[ee("img",{src:(v=(w=e.row)==null?void 0:w.userInfo)==null?void 0:v.avatar,style:{height:"50px"}},null,8,ne)]}),_:1}),t(u,{prop:"userInfo.email",label:"邮箱",width:"200"},{default:l(e=>{var w,v;return[s(m(((v=(w=e.row)==null?void 0:w.userInfo)==null?void 0:v.email)||"游客访问"),1)]}),_:1}),t(u,{prop:"salesOutletName",label:"分销人代号",width:"120"}),t(u,{prop:"performanceRatio",label:"分销人佣金比例",align:"center"},{default:l(e=>[t(g,null,{default:l(()=>[s(m(e.row.performanceRatio)+"% ",1)]),_:2},1024)]),_:1}),t(u,{prop:"orderCount",label:"累计分销订单量",align:"center"},{default:l(e=>[t(g,{type:"success"},{default:l(()=>[s(m(e.row.orderCount),1)]),_:2},1024)]),_:1}),t(u,{prop:"totalAmount",label:"分销人账户总金额",align:"center",width:"150"},{default:l(e=>[t(g,{type:e.row.totalAmount>0?"success":"danger"},{default:l(()=>[s(" ￥"+m(e.row.totalAmount),1)]),_:2},1032,["type"])]),_:1}),t(u,{prop:"withdrawalAmount",label:"分销人已提现金额",align:"center",width:"150"},{default:l(e=>[t(g,{type:e.row.withdrawalAmount>0?"success":"danger"},{default:l(()=>[s(" ￥"+m(e.row.withdrawalAmount),1)]),_:2},1032,["type"])]),_:1}),t(u,{prop:"distributionBalance",label:"分销人可提现金额",align:"center",width:"150"},{default:l(e=>[t(g,{type:e.row.distributionBalance>0?"success":"danger"},{default:l(()=>[s(" ￥"+m(e.row.distributionBalance),1)]),_:2},1032,["type"])]),_:1}),t(u,{prop:"drawMoneyIn",label:"分销人正在提现金额",align:"center"},{default:l(e=>[t(g,{type:e.row.drawMoneyIn>0?"success":"danger"},{default:l(()=>[s(" ￥"+m(e.row.drawMoneyIn),1)]),_:2},1032,["type"])]),_:1}),t(u,{fixed:"right",label:"操作",width:"100",align:"center"},{default:l(e=>[t(b,{link:"",type:"primary",size:"small",onClick:w=>j(e.row)},{default:l(()=>[s(" 变更用户 ")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"])),[[H,p(V)]]),t(X,{class:"flex justify-end mt-5"},{default:l(()=>[t(T,{"current-page":r.page,"onUpdate:currentPage":a[4]||(a[4]=e=>r.page=e),"page-size":r.size,"onUpdate:pageSize":a[5]||(a[5]=e=>r.size=e),class:"mr-5","page-sizes":[10,20,30,50],layout:"total, sizes, prev, pager, next, jumper",total:p(N),onSizeChange:f,onCurrentChange:f},null,8,["current-page","page-size","total"])]),_:1})]),_:1}),t(G,{modelValue:p(c),"onUpdate:modelValue":a[10]||(a[10]=e=>te(c)?c.value=e:null),title:"修改用户权限",width:"450px"},{footer:l(()=>[t(b,{onClick:a[8]||(a[8]=e=>c.value=!1)},{default:l(()=>[s(" 我再想想 ")]),_:1}),t(b,{type:"primary",onClick:a[9]||(a[9]=e=>$(p(x)))},{default:l(()=>[s(" 确认修改 ")]),_:1})]),default:l(()=>[t(A,{ref_key:"cramiRef",ref:x,model:i,rules:D,"label-width":"105px"},{default:l(()=>[t(_,{label:"佣金比例",prop:"performanceRatio"},{default:l(()=>[t(R,{modelValue:i.performanceRatio,"onUpdate:modelValue":a[6]||(a[6]=e=>i.performanceRatio=e),modelModifiers:{number:!0},type:"number",placeholder:"设置佣金比例"},null,8,["modelValue"])]),_:1}),t(_,{label:"自定义名称",prop:"salesOutletName"},{default:l(()=>[t(R,{modelValue:i.salesOutletName,"onUpdate:modelValue":a[7]||(a[7]=e=>i.salesOutletName=e),placeholder:"设置自定义名称"},null,8,["modelValue"])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["modelValue"])])}}});typeof M=="function"&&M(re);export{re as default};
