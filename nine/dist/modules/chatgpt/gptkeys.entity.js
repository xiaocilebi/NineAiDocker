'use strict';function _0x1a6a(_0x10feba,_0x250788){var _0x16c160=_0x16c1();return _0x1a6a=function(_0x1a6a9b,_0x4ea74b){_0x1a6a9b=_0x1a6a9b-0x71;var _0x4927b8=_0x16c160[_0x1a6a9b];return _0x4927b8;},_0x1a6a(_0x10feba,_0x250788);}var _0x387ef7=_0x1a6a;(function(_0x5e90e0,_0x56727f){var _0x2ae762=_0x1a6a,_0x146f45=_0x5e90e0();while(!![]){try{var _0x3c621b=parseInt(_0x2ae762(0x81))/0x1*(parseInt(_0x2ae762(0x98))/0x2)+-parseInt(_0x2ae762(0x8a))/0x3+-parseInt(_0x2ae762(0x94))/0x4*(parseInt(_0x2ae762(0x72))/0x5)+-parseInt(_0x2ae762(0x73))/0x6+-parseInt(_0x2ae762(0x80))/0x7*(-parseInt(_0x2ae762(0x85))/0x8)+-parseInt(_0x2ae762(0x95))/0x9+parseInt(_0x2ae762(0x83))/0xa;if(_0x3c621b===_0x56727f)break;else _0x146f45['push'](_0x146f45['shift']());}catch(_0x42feb1){_0x146f45['push'](_0x146f45['shift']());}}}(_0x16c1,0x44b2f));var __decorate=this&&this[_0x387ef7(0x90)]||function(_0x150b7b,_0x33206e,_0x44fa89,_0x4ea2d3){var _0x34592d=_0x387ef7,_0x1dcd89=arguments['length'],_0x394ccf=_0x1dcd89<0x3?_0x33206e:_0x4ea2d3===null?_0x4ea2d3=Object[_0x34592d(0x96)](_0x33206e,_0x44fa89):_0x4ea2d3,_0x5a16eb;if(typeof Reflect===_0x34592d(0x7b)&&typeof Reflect[_0x34592d(0x76)]==='function')_0x394ccf=Reflect[_0x34592d(0x76)](_0x150b7b,_0x33206e,_0x44fa89,_0x4ea2d3);else{for(var _0x6cab0c=_0x150b7b[_0x34592d(0x89)]-0x1;_0x6cab0c>=0x0;_0x6cab0c--)if(_0x5a16eb=_0x150b7b[_0x6cab0c])_0x394ccf=(_0x1dcd89<0x3?_0x5a16eb(_0x394ccf):_0x1dcd89>0x3?_0x5a16eb(_0x33206e,_0x44fa89,_0x394ccf):_0x5a16eb(_0x33206e,_0x44fa89))||_0x394ccf;}return _0x1dcd89>0x3&&_0x394ccf&&Object[_0x34592d(0x7c)](_0x33206e,_0x44fa89,_0x394ccf),_0x394ccf;},__metadata=this&&this[_0x387ef7(0x8e)]||function(_0x3dac52,_0x1831d4){var _0x4c1820=_0x387ef7;if(typeof Reflect===_0x4c1820(0x7b)&&typeof Reflect['metadata']===_0x4c1820(0x8c))return Reflect[_0x4c1820(0x7f)](_0x3dac52,_0x1831d4);};Object[_0x387ef7(0x7c)](exports,_0x387ef7(0x88),{'value':!![]}),exports[_0x387ef7(0x99)]=void 0x0;const typeorm_1=require(_0x387ef7(0x87)),baseEntity_1=require(_0x387ef7(0x71));let GptKeysEntity=class GptKeysEntity extends baseEntity_1[_0x387ef7(0x7a)]{};__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'unique':!![],'comment':_0x387ef7(0x8d),'length':0xff}),__metadata(_0x387ef7(0x92),String)],GptKeysEntity[_0x387ef7(0x7d)],'key',void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x93),'default':0x0}),__metadata(_0x387ef7(0x92),Number)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x79),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'绑定的模型是？','default':'gpt-3.5-turbo'}),__metadata(_0x387ef7(0x92),String)],GptKeysEntity['prototype'],_0x387ef7(0x97),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':'key的余额','type':'decimal','precision':0xa,'scale':0x2,'default':0x0}),__metadata(_0x387ef7(0x92),String)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x77),void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':'key的余额类型','default':'','nullable':!![]}),__metadata(_0x387ef7(0x92),String)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x9a),void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':'key的状态:\x201:有效\x202:余额耗尽\x20-1:被封号','default':0x1}),__metadata(_0x387ef7(0x92),Number)],GptKeysEntity['prototype'],'keyStatus',void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x74),'nullable':!![]}),__metadata('design:type',Date)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x7e),void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x8f),'default':0x1}),__metadata(_0x387ef7(0x92),Number)],GptKeysEntity[_0x387ef7(0x7d)],'weight',void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x387ef7(0x75),'default':0x0}),__metadata('design:type',Number)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x78),void 0x0),__decorate([(0x0,typeorm_1['Column'])({'comment':_0x387ef7(0x9c),'nullable':!![]}),__metadata('design:type',Number)],GptKeysEntity[_0x387ef7(0x7d)],'maxModelTokens',void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x82),'nullable':!![]}),__metadata(_0x387ef7(0x92),Number)],GptKeysEntity[_0x387ef7(0x7d)],'maxResponseTokens',void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x86),'nullable':!![]}),__metadata(_0x387ef7(0x92),String)],GptKeysEntity[_0x387ef7(0x7d)],_0x387ef7(0x8b),void 0x0),__decorate([(0x0,typeorm_1[_0x387ef7(0x9d)])({'comment':_0x387ef7(0x84),'nullable':!![]}),__metadata('design:type',Number)],GptKeysEntity[_0x387ef7(0x7d)],'openaiTimeoutMs',void 0x0),GptKeysEntity=__decorate([(0x0,typeorm_1[_0x387ef7(0x91)])({'name':_0x387ef7(0x9b)})],GptKeysEntity),exports[_0x387ef7(0x99)]=GptKeysEntity;function _0x16c1(){var _0x515920=['status','BaseEntity','object','defineProperty','prototype','expireTime','metadata','155302fLOQSd','6485AxnBKg','模型设置的最大回复Token','9413670IrZVjm','当前模型的超时时间单位ms','88aSPkmm','当前模型的代理地址','typeorm','__esModule','length','529839QrwhdH','openaiProxyUrl','function','gpt\x20key','__metadata','key权重','__decorate','Entity','design:type','使用的状态:\x200:禁用\x201：启用','8qQahxC','3645648qZagZy','getOwnPropertyDescriptor','model','98xrJoqu','GptKeysEntity','type','gpt_keys','模型支持的最大Token','Column','../../common/entity/baseEntity','409685otyBwj','2857368VJEEAV','key的到期时间','key的使用次数','decorate','balance','useCount'];_0x16c1=function(){return _0x515920;};return _0x16c1();}