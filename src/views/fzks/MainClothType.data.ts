import {BasicColumn} from '/@/components/Table';
import {FormSchema} from '/@/components/Table';
import { rules} from '/@/utils/helper/validator';
import { render } from '/@/utils/common/renderUtils';
//列表数据
export const columns: BasicColumn[] = [
   {
    title: '服装类型',
    align:"center",
    dataIndex: 'clothType'
   },
   {
    title: '形式',
    align:"center",
    dataIndex: 'clothForm'
   },
   {
    title: '编号',
    align:"center",
    dataIndex: 'clothId'
   },
   {
    title: '创建日期',
    align:"center",
    dataIndex: 'createTime'
   },
   {
    title: '企业名称',
    align:"center",
    dataIndex: 'companyName'
   },
];
//查询数据
export const searchFormSchema: FormSchema[] = [
	{
      label: "服装类型",
      field: 'clothType',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "形式",
      field: 'clothForm',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "编号",
      field: 'clothId',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "创建日期",
      field: 'createTime',
      component: 'DatePicker',
      componentProps: {
         showTime:true,
         valueFormat: 'YYYY-MM-DD HH:mm:ss'
       },
      colProps: {span: 6},
 	},
	{
      label: "企业名称",
      field: 'companyName',
      component: 'Input',
      colProps: {span: 6},
 	},
	{
      label: "规格",
      field: 'specs',
      component: 'Input',
      colProps: {span: 6},
 	},
];
//表单数据
export const formSchema: FormSchema[] = [
  {
    label: '服装类型',
    field: 'clothType',
    component: 'Input',
  },
  {
    label: '形式',
    field: 'clothForm',
    component: 'Input',
  },
  {
    label: '编号',
    field: 'clothId',
    component: 'Input',
  },
  {
    label: '创建日期',
    field: 'createTime',
    component: 'DatePicker',
    componentProps: {
       showTime: true,
       valueFormat: 'YYYY-MM-DD HH:mm:ss'
     },
  },
  {
    label: '企业名称',
    field: 'companyName',
    component: 'Input',
  },
  {
    label: '规格',
    field: 'specs',
    component: 'Input',
  },
  {
    label: '销售地区',
    field: 'salesArea',
    component: 'Input',
  },
  {
    label: '产品概述',
    field: 'prodIntro',
    component: 'Input',
  },
  {
    label: '结构',
    field: 'clothStructure',
    component: 'Input',
  },
  {
    label: '特征',
    field: 'clothFeature',
    component: 'Input',
  },
  {
    label: '测量方法',
    field: 'measureMethod',
    component: 'Input',
  },
  {
    label: '误差',
    field: 'wucha',
    component: 'Input',
  },
  {
    label: '定额用料',
    field: 'quotaMaterials',
    component: 'Input',
  },
  {
    label: '折叠搭配与包装',
    field: 'foldingAndPackaging',
    component: 'Input',
  },
	// TODO 主键隐藏字段，目前写死为ID
	{
	  label: '',
	  field: 'id',
	  component: 'Input',
	  show: false
	},
];



/**
* 流程表单调用这个方法获取formSchema
* @param param
*/
export function getBpmFormSchema(_formData): FormSchema[]{
  // 默认和原始表单保持一致 如果流程中配置了权限数据，这里需要单独处理formSchema
  return formSchema;
}