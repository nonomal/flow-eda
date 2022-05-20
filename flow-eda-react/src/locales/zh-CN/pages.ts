export default {
  // 流程列表
  'pages.flowList.flows.title': '流程列表',
  'pages.flowList.flows.name': '名称',
  'pages.flowList.flows.desc': '描述',
  'pages.flowList.flows.createDate': '创建时间',
  'pages.flowList.flows.updateDate': '更新时间',
  'pages.flowList.flows.edit': '编辑',
  'pages.flowList.flows.logs': '日志',
  'pages.flowList.flows.add': '新增',
  'pages.flowList.flows.addFlow': '新增流程',
  'pages.flowList.flows.editFlow': '修改流程',
  'pages.flowList.flows.addFlow.nameRule': '请输入流程名称',

  // 日志列表
  'pages.logList.logs.title': '日志列表',
  'pages.logList.logs.type': '日志类型',
  'pages.logList.logs.type.running': '运行日志',
  'pages.logList.logs.type.operation': '操作日志',
  'pages.logList.logs.flowName': '流程名称',
  'pages.logList.logs.date': '日志日期',
  'pages.logList.logs.fileSize': '文件大小（单位：kb）',

  // 流编辑器
  'pages.flowList.editor.delLine': '确认删除该连线？',
  'pages.flowList.editor.delNode': '确认删除当前节点？',
  'pages.flowList.editor.checkFlow': '请先绘制流程图',
  'pages.flowList.editor.parameters': '自定义参数',
  'pages.flowList.editor.params.tooltip':
    '参数为json格式，可传递至下一节点，使用${xx}接收，例如${a,httpResult.$0.name}',
  'pages.flowList.editor.checkJson': '请输入正确的json格式',
  'pages.flowList.editor.remark': '备注',

  // 流编辑器-工具栏
  'pages.flowList.editor.showLog': '查看日志',
  'pages.flowList.editor.closeLog': '关闭日志',
  'pages.flowList.editor.run': '运行',
  'pages.flowList.editor.stop': '停止',
  'pages.flowList.editor.runConfirm': '确认运行本流程？这将会保存本流程并覆盖之前的数据',
  'pages.flowList.editor.stopConfirm': '确认停止运行？这将会立即停止本流程的运行',
  'pages.flowList.editor.copy': '复制',
  'pages.flowList.editor.paste': '粘贴',
  'pages.flowList.editor.del': '删除',
  'pages.flowList.editor.zoomIn': '放大',
  'pages.flowList.editor.zoomOut': '缩小',
  'pages.flowList.editor.zoomFull': '全屏',
  'pages.flowList.editor.zoomReset': '重置',

  'pages.layouts.userLayout.title': 'Ant Design 是西湖区最具影响力的 Web 设计规范',
  'pages.login.accountLogin.tab': '账户密码登录',
  'pages.login.accountLogin.errorMessage': '错误的用户名和密码(admin/ant.design)',
  'pages.login.failure': '登录失败，请重试！',
  'pages.login.success': '登录成功！',
  'pages.login.username.placeholder': '用户名: admin or user',
  'pages.login.username.required': '用户名是必填项！',
  'pages.login.password.placeholder': '密码: ant.design',
  'pages.login.password.required': '密码是必填项！',
  'pages.login.phoneLogin.tab': '手机号登录',
  'pages.login.phoneLogin.errorMessage': '验证码错误',
  'pages.login.phoneNumber.placeholder': '请输入手机号！',
  'pages.login.phoneNumber.required': '手机号是必填项！',
  'pages.login.phoneNumber.invalid': '不合法的手机号！',
  'pages.login.captcha.placeholder': '请输入验证码！',
  'pages.login.captcha.required': '验证码是必填项！',
  'pages.login.phoneLogin.getVerificationCode': '获取验证码',
  'pages.getCaptchaSecondText': '秒后重新获取',
  'pages.login.rememberMe': '自动登录',
  'pages.login.forgotPassword': '忘记密码 ?',
  'pages.login.submit': '登录',
  'pages.login.loginWith': '其他登录方式 :',
  'pages.login.registerAccount': '注册账户',
  'pages.welcome.advancedComponent': '高级表格',
  'pages.welcome.link': '欢迎使用',
  'pages.welcome.advancedLayout': '高级布局',
  'pages.welcome.alertMessage': '更快更强的重型组件，已经发布。',
  'pages.admin.subPage.title': ' 这个页面只有 admin 权限才能查看',
  'pages.admin.subPage.alertMessage': 'umi ui 现已发布，欢迎使用 npm run ui 启动体验。',
  'pages.searchTable.createForm.newRule': '新建规则',
  'pages.searchTable.updateForm.ruleConfig': '规则配置',
  'pages.searchTable.updateForm.basicConfig': '基本信息',
  'pages.searchTable.updateForm.ruleName.nameLabel': '规则名称',
  'pages.searchTable.updateForm.ruleName.nameRules': '请输入规则名称！',
  'pages.searchTable.updateForm.ruleDesc.descLabel': '规则描述',
  'pages.searchTable.updateForm.ruleDesc.descPlaceholder': '请输入至少五个字符',
  'pages.searchTable.updateForm.ruleDesc.descRules': '请输入至少五个字符的规则描述！',
  'pages.searchTable.updateForm.ruleProps.title': '配置规则属性',
  'pages.searchTable.updateForm.object': '监控对象',
  'pages.searchTable.updateForm.ruleProps.templateLabel': '规则模板',
  'pages.searchTable.updateForm.ruleProps.typeLabel': '规则类型',
  'pages.searchTable.updateForm.schedulingPeriod.title': '设定调度周期',
  'pages.searchTable.updateForm.schedulingPeriod.timeLabel': '开始时间',
  'pages.searchTable.updateForm.schedulingPeriod.timeRules': '请选择开始时间！',
  'pages.searchTable.titleDesc': '描述',
  'pages.searchTable.ruleName': '规则名称为必填项',
  'pages.searchTable.titleCallNo': '服务调用次数',
  'pages.searchTable.titleStatus': '状态',
  'pages.searchTable.nameStatus.default': '关闭',
  'pages.searchTable.nameStatus.running': '运行中',
  'pages.searchTable.nameStatus.online': '已上线',
  'pages.searchTable.nameStatus.abnormal': '异常',
  'pages.searchTable.titleUpdatedAt': '上次调度时间',
  'pages.searchTable.exception': '请输入异常原因！',
  'pages.searchTable.titleOption': '操作',
  'pages.searchTable.config': '配置',
  'pages.searchTable.subscribeAlert': '订阅警报',
  'pages.searchTable.title': '查询表格',
  'pages.searchTable.new': '新建',
  'pages.searchTable.chosen': '已选择',
  'pages.searchTable.item': '项',
  'pages.searchTable.totalServiceCalls': '服务调用次数总计',
  'pages.searchTable.tenThousand': '万',
  'pages.searchTable.batchDeletion': '批量删除',
  'pages.searchTable.batchApproval': '批量审批',
};
