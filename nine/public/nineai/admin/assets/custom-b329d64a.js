
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{_ as O}from"./index-9f0acf5e.js";import{d as $,y as j,r,Q as P,B as Q,x as X,o as s,c as g,e as l,f as t,b as n,ap as S,j as I,R as W,S as x,k as m,w as G,I as p,U as H,W as J,E as R,h as i,X as Y,l as Z,t as ee,q as K}from"./index-534a2c19.js";import{A as k}from"./badWords-c867facf.js";import{E as te}from"./index-867b894d.js";const le=$({__name:"custom",setup(oe){const N=j(),V=r(),T=r(0),f=r(!1),u=P({word:"",status:"",page:1,size:500}),U=Q(()=>N.settings.app.colorScheme),h=r([]);async function d(){try{f.value=!0;const a=await k.queryBadWords(u),{rows:o,count:v}=a.data;f.value=!1,T.value=v,h.value=o}catch{f.value=!1}}function A(a){a==null||a.resetFields(),d()}X(()=>{d()});const c=r(""),_=r(!1),B=r();async function D(a){await k.delBadWords({id:a}),R.success("删除敏感词成功"),await d()}function L(){_.value=!0,J(()=>{B.value.input.focus()})}async function C(){c.value&&(await k.addBadWords({word:c.value}),R.success("添加敏感词成功"),u.status="",await d()),_.value=!1,c.value=""}return(a,o)=>{const v=i("el-alert"),y=O,w=i("el-form-item"),q=i("el-option"),z=i("el-select"),b=i("el-button"),E=i("el-form"),M=i("el-tag"),F=Y("loading");return s(),g("div",null,[l(y,null,{default:t(()=>[l(v,{closable:!1,"show-icon":"",title:"敏感词说明",description:"当前为自定义敏感词、触发敏感词将自动拦截、如配置过三方平台、自定义检测将在三方平台通过后最后进行检测！",type:"success"})]),_:1}),l(y,null,{default:t(()=>[l(E,{ref_key:"formRef",ref:V,inline:!0,model:u},{default:t(()=>[l(w,{label:"敏感词",prop:"word"},{default:t(()=>[l(n(S),{modelValue:u.word,"onUpdate:modelValue":o[0]||(o[0]=e=>u.word=e),placeholder:"敏感词[模糊搜索]",onKeydown:I(Z(d,["prevent"]),["enter"])},null,8,["modelValue","onKeydown"])]),_:1}),l(w,{label:"敏感词状态",prop:"status"},{default:t(()=>[l(z,{modelValue:u.status,"onUpdate:modelValue":o[1]||(o[1]=e=>u.status=e),placeholder:"请选择敏感词状态",clearable:""},{default:t(()=>[(s(!0),g(W,null,x(n(te),e=>(s(),p(q,{key:e.value,label:e.label,value:e.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),l(w,null,{default:t(()=>[l(b,{type:"primary",onClick:d},{default:t(()=>[m(" 查询 ")]),_:1}),l(b,{onClick:o[2]||(o[2]=e=>A(n(V)))},{default:t(()=>[m(" 重置 ")]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),G((s(),p(y,{style:{width:"100%"}},{default:t(()=>[(s(!0),g(W,null,x(n(h),e=>(s(),p(M,{key:e.id,type:"warning",class:"mr-3 mb-3",closable:"",hit:"",effect:n(U),"disable-transitions":!0,onClose:ae=>D(e.id)},{default:t(()=>[m(ee(e.word),1)]),_:2},1032,["effect","onClose"]))),128)),n(_)?(s(),p(n(S),{key:0,ref_key:"InputRef",ref:B,modelValue:n(c),"onUpdate:modelValue":o[3]||(o[3]=e=>H(c)?c.value=e:null),class:"ml-1",style:{width:"80px"},size:"small",onKeyup:I(C,["enter"]),onBlur:C},null,8,["modelValue","onKeyup"])):(s(),p(b,{key:1,class:"ml-1",size:"small",onClick:L},{default:t(()=>[m(" + New Word ")]),_:1}))]),_:1})),[[F,n(f)]])])}}});typeof K=="function"&&K(le);export{le as default};
